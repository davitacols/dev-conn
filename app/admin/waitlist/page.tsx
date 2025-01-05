// src/app/admin/waitlist/page.tsx
import { Suspense } from 'react'
import prisma from '@/lib/prisma'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { Card } from '@/components/ui/card'

async function getWaitlistEntries() {
  'use server'
  
  try {
    return await prisma.waitlistEntry.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        status: true,
        createdAt: true,
      },
    })
  } catch (error) {
    console.error('Error fetching waitlist entries:', error)
    throw new Error('Failed to fetch entries')
  }
}

function WaitlistTable({ entries }: { entries: Awaited<ReturnType<typeof getWaitlistEntries>> }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry) => (
          <TableRow key={entry.id}>
            <TableCell>{entry.email}</TableCell>
            <TableCell>{entry.status}</TableCell>
            <TableCell>
              {new Date(entry.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

async function WaitlistContent() {
  const entries = await getWaitlistEntries()
  
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Waitlist Entries</h2>
        <p className="text-muted-foreground">
          Total entries: {entries.length}
        </p>
      </div>
      <WaitlistTable entries={entries} />
    </Card>
  )
}

export default function WaitlistPage() {
  return (
    <div className="container py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <WaitlistContent />
      </Suspense>
    </div>
  )
}
