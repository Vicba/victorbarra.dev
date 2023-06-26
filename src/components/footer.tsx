import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";
import { faFile, faEnvelope, faBook } from "@fortawesome/fontawesome-free-solid";

import Footer_link from "../components/footer_link";

import CV from "../assets/CV.pdf";
import { Blog, GitHubIcon, LinkedinLogo, MailIcon, Resume, SpotifyLogo, TwitterIcon } from "../Icons";
import Status from "./status";

export default function Footer() {
  return (
    <section
      id="footer"
      className="md:h-[40vh] w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 border-none md:pt-30"
    >
      <h1 className="my-5 font-bold text-lg">Let's talk!</h1>
      <Status/>

      <div className="w-3/4 mb-8 flex flex-wrap gap-12 justify-center">
        <Footer_link
          title="Github"
          link="https://github.com/Vicba"
          icon={<GitHubIcon/>}
        />

        <Footer_link title="Resume" link={CV} icon={<Resume/>} />

        <Footer_link
          title="LinkedIn"
          link="https://www.linkedin.com/in/victor-barra"
          icon={<LinkedinLogo/>}
        />
        
        <Footer_link
          title="Email"
          link="mailto:victor.barra@live.be"
          icon={<MailIcon/>}
        />

        <Footer_link
          title="Blog"
          link="https://blog-victor-barra.netlify.app/"
          icon={<Blog/>}
        />

        <Footer_link
          title="Twitter"
          link="https://twitter.com/VictorBarraa"
          icon={<TwitterIcon/>}
        />

        <Footer_link
          title="Spotify"
          link="https://open.spotify.com/user/1114228739"
          icon={<SpotifyLogo/>}
        />
      </div>

      <p className="text-gray-400 flex items-center">
        Victor Barra • {new Date().getFullYear()}
      </p>
    </section>
  );
}
