import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is DevConn?",
    answer: "DevConn is an upcoming platform designed for developers to connect, share knowledge, and grow their careers. It offers features like knowledge sharing, community collaboration, and career advancement opportunities."
  },
  {
    question: "When will DevConn be launched?",
    answer: "We're working hard to bring DevConn to you as soon as possible. By joining our waiting list, you'll be among the first to know when we launch and may get early access to the platform."
  },
  {
    question: "Is DevConn free to use?",
    answer: "We plan to offer both free and premium tiers. The free tier will give you access to core features, while the premium tier will offer additional benefits. Exact details will be announced closer to launch."
  },
  {
    question: "How can I contribute to DevConn?",
    answer: "Once launched, you'll be able to contribute by sharing your knowledge through articles, participating in discussions, and helping fellow developers. We'll also have opportunities for community moderators and content creators."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

