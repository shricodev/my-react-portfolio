import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  // this holds the cred of the user
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

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
        "service_8tofpvo",
        "template_5zek0ht",
        e.currentTarget,
        "YRUXnI-p5lRFR79NT"
      )
      .then((result) => {
        // TODO: add a better way to clear the form after submission
        setFormData({ fullName: "", email: "", message: "" });
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error.text);
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
            <h5>shrijal007</h5>
            <a
              href="https://www.linkedin.com/in/shrijal007/"
              target="_blank"
              className="inline-block p-[0.5rem] text-[0.9rem]"
              rel="noopener"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option flex flex-col items-center">
            <RiMessengerLine className="contact__option-icon mb-[0.5rem] text-[1.5rem]" />
            <h4>Messenger</h4>
            <h5>shrijal007</h5>
            <a
              href="https://m.me/shrijal007"
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
