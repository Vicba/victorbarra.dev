import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";
import { faFile, faEnvelope, faBook } from "@fortawesome/fontawesome-free-solid";

import Footer_link from "../components/footer_link";

import CV from "../assets/CV.pdf";

export default function Footer() {
  return (
    <section
      id="footer"
      className="md:h-[40vh] w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 border-none md:pt-30"
    >
      <h1 className="my-5 font-bold text-lg">Let's talk!</h1>

      <div className="w-3/4 mb-8 flex flex-wrap gap-12 justify-center">
        <Footer_link
          title="Github"
          link="https://github.com/Vicba"
          icon={faGithub}
        />
        <Footer_link title="Resume" link={CV} icon={faFile} />
        <Footer_link
          title="LinkedIn"
          link="https://www.linkedin.com/in/victor-barra"
          icon={faLinkedin}
        />
        <Footer_link
          title="Email"
          link="mailto:victor.barra@live.be"
          icon={faEnvelope}
        />
        <Footer_link
          title="Blog"
          link="https://blog-victor-barra.netlify.app/"
          icon={faBook}
        />
      </div>

      <p className="text-gray-400 flex items-center">
        Victor Barra • {new Date().getFullYear()}
      </p>
    </section>
  );
}
