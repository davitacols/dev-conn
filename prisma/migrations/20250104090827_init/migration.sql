/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `WaitlistEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WaitlistEntry_email_key" ON "WaitlistEntry"("email");
