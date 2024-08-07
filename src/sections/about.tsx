

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 md:mt-16 md:mb-10">
          <h2 className="text-4xl mx-4 my-4 md:text-5xl font-extrabold font-cal">
            About Me
          </h2>
        </div>

        <div className="flex flex-col gap-5 w-4/5 md:w-3/5 my-2 text-base md:mx-3 md:text-lg text-gray-800/70">
     
          <p className="flex flex-row gap-2">
            <span>📍</span> 
            Currently located in Gistel, Belgium.
          </p>
          <p className="flex flex-row gap-2">
            <span >👨‍💻</span> 
            <span>
              I enjoy working on projects that address real-world issues or upgrade our daily lives. <br/>
            </span>
          </p>
          <p className="flex flex-row gap-2">
            <span >🎓</span>
            Graduated in applied computer science with a major in AI.
            My journey involves continuous learning, making mistakes, and keep going.
          </p>

          <p className="flex flex-row gap-2" >
            <span>⚡</span>
            <span>
            Outside of coding, you’ll find me reading, enjoying house music, playing golf, running or hanging out with friends. 
            Feel free to check out my <a
                className="font-bold text-egyptian-blue hover:underline"
                href="https://blog-victor-barra.netlify.app/"
                target="_blank"
              >
                blog
              </a> where I share some of my thoughts and experiences.
            </span>
          </p>

          <p className="text-center mt-5">
            Do you want to learn more about me or just have a fun chat?{" "}
            <a className="underline" href="#footer">
              Hit me up!
            </a>
          </p>     
        </div>
      </div>
    </section>
  );
}
