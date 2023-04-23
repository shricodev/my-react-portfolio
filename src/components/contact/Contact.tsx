import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
    // this holds the cred of the user
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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
                setMessage("");
                setFullName("");
                setEmail("");
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
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-[1.2rem]"
                >
                    <input
                        className="w-[100%] rounded-full p-[1.5rem]  autofill:bg-transparent"
                        type="text"
                        name="name"
                        value={fullName}
                        placeholder="Your Full Name"
                        onChange={(event) => setFullName(event.target.value)}
                        required
                    />
                    <input
                        className="w-[100%] rounded-full p-[1.5rem]  autofill:bg-transparent"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <textarea
                        className="w-[100%] rounded-2xl bg-transparent p-[1.5rem] autofill:bg-transparent"
                        name="message"
                        value={message}
                        rows={8}
                        placeholder="Your Message"
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn btn-primary mt-2 rounded-2xl"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
