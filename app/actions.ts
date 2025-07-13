"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend('re_eNG7uxor_ENFoT2xA18wqoqBcHprCSbYk');

export async function sendEmail(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        error: "Please fill out all fields.",
      }
    }

    const fullName = `${firstName} ${lastName}`
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain
      to: "dev.saqib.attiq@gmail.com", // Using the email from the design
      // reply_to: email,
      subject: `Portfolio Contact from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        
        Message:
        ${message}
      `,
      // You can also use HTML for a nicer email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'dev.saqib.attiq@gmail.com',
    //   subject: 'Hello World',
    //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    // });

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        error: "Failed to send email. Please try again.",
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

