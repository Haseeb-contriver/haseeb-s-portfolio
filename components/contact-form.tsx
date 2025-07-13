"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendEmail } from "@/app/actions"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError("")

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setIsSuccess(true)
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      } else {
        setError(result.error || "Failed to send email. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'm just a message away.
          </p>
        </div>

        {isSuccess ? (
          <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-sm border border-border">
            <div className="flex flex-col items-center justify-center py-4 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Message Sent!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
                Send Another Message
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+92 3259181505</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">haseebtahir787@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">Faisal Town, Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary"
                required
              />

              {error && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

