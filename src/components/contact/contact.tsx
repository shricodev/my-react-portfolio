import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaDiscord } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  // this holds the cred of the user
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const notify = (message: string) => toast(message);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // by using [] around the name, we are able to interpret it as a key of an object which has the same name as the formData key names(states).
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID!,
        import.meta.env.VITE_EMAILJS_TEMPLATEID!,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLICKEY!
      )
      .then((result) => {
        setFormData({ fullName: "", email: "", message: "" });
        notify("The message was sent successfully!");
      })
      .catch((error) => {
        notify("Your message could not be sent.");
      });
  }
  return (
    <section id="contact">
      <h5>Get to know</h5>
      <h2>Contact Me</h2>

      <div className="contact__container container grid w-[58%] gap-[11%]">
        <div className="contact__options flex flex-col gap-[1.2rem]">
          <article className="contact__option flex flex-col items-center">
            <SiGmail className="contact__option-icon mb-[0.5rem] text-[1.5rem]" />
            <h4>Email</h4>
            <h5>shrijal.acharya@gmail.com</h5>
            <a
              href="mailto:shrijal.acharya@gmail.com"
              target="_blank"
              className="inline-block p-[0.5rem] text-[0.9rem]"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option flex flex-col items-center">
            <ImLinkedin2 className="contact__option-icon mb-[0.5rem] text-[1.5rem]" />
            <h4>LinkedIn</h4>
            <h5>iamshrijal</h5>
            <a
              href="https://www.linkedin.com/in/iamshrijal/"
              target="_blank"
              className="inline-block p-[0.5rem] text-[0.9rem]"
              rel="noopener"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option flex flex-col items-center">
            <FaDiscord className="contact__option-icon mb-[0.5rem] text-[1.5rem]" />
            <h4>Discord</h4>
            <h5>shricodev</h5>
            <a
              href="https://discord.com/users/1082700727220183151"
              target="_blank"
              className="inline-block p-[0.5rem] text-[0.9rem]"
              rel="noopener"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.2rem]">
          <input
            className="w-[100%] rounded-full p-[1.5rem] autofill:bg-transparent"
            type="text"
            value={formData.fullName}
            name="fullName"
            placeholder="Your Full Name"
            onChange={handleChange}
            required
          />
          <input
            className="w-[100%] rounded-full p-[1.5rem]  autofill:bg-transparent"
            type="email"
            value={formData.email}
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <textarea
            className="w-[100%] rounded-2xl bg-transparent p-[1.5rem] autofill:bg-transparent"
            name="message"
            value={formData.message}
            rows={8}
            placeholder="Your Message"
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary mt-2 rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
