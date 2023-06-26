

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 md:mt-16 md:mb-10">
          <h2 className="text-4xl mx-4 my-4 md:text-5xl font-extrabold">
            About Me
          </h2>
        </div>

        <div className="w-4/5 md:w-3/5 my-2 text-base md:mx-3 md:text-lg  text-gray-500">
          <p>I'm an applied Computer Science student from Bruges, Belgium.</p>
          <br />
          <p>
            I find joy in developing new projects that have the potential to
            solve real-world problems or make our lives much easier, whether
            it's writing code or exploring the latest advancements in
            technology. I'm always eager to dive into new challenges!
          </p>
          <br />
          <p>
            Currently majoring in AI and learning full-stack development on the
            side. My journey involves continuous learning, making mistakes, and
            not giving up.
          </p>
          <br />

          <p>
            When I'm not coding, you'll find me reading, listening to music,
            playing golf, going for a run, or just hanging out with friends.
            Check out my{" "}
            <a
              className="font-bold text-egyptian-blue hover:underline"
              href="https://blog-victor-barra.netlify.app/"
            >
              blog
            </a>
            , where I share my thoughts and experiences.
          </p>
          <br />

          <p>
            Do you want to learn more about me or just have a fun chat?{" "}
            <a className="underline" href="#footer">
              Hit me up!
            </a>{" "}
          </p>
          <br />
        </div>
      </div>
    </section>
  );
}
