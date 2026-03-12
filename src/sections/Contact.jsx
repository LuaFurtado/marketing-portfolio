import { useRef } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!")
          form.current.reset()
        },
        (error) => {
          console.log(error)
          alert("Something went wrong. Please try again.")
        }
      )
  }

  return (
    <section className="section" id="contact">
      <div className="container">

        <h2>Contact</h2>

        <p className="section-intro">
          I’d love to hear from you. Feel free to send a message about
          opportunities, collaborations, or just to say hi.
        </p>

        <div className="contact-card">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="primary">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact