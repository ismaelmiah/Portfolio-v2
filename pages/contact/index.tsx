import React from "react";

const Contact = () => {
    return (
        <div
            id="contact"
            className="py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center"
        ><div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Contact
                </h2>
            </div>
            <h2 className="text-5xl text-teal-300 font-semibold">Get In Touch</h2>
            <div className="max-w-xl mx-auto text-center text-darkText">
                <p className="font-bold mb-2 text-white">I&apos;m always on the lookout for exciting projects and collaborations!</p>
                <p>Whether you have a question, an opportunity, or just want to say hello, feel free to reach out. I&apos;ll do my best to respond promptly. Let&apos;s create something amazing together!</p>
            </div>
            <a href="mailto:ismaelmiah@devismael.com">
                <p className="click-button w-40 h-14 border rounded uppercase border border-teal-300 font-semibold mt-6 text-teal-300 tracking-wider rounded-md flex items-center justify-center">
                    Say Hello
                </p>
            </a>
        </div>
    );
};

export default Contact;
