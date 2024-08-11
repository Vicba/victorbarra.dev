import Osoc from "../assets/images/osoc.png"
import IKWV from "../assets/images/ikwv.jpeg"
import ML6 from "../assets/images/ml6.png"
import Experience from "../components/experience"

const experiences = [
    {
      title: "Student Developer",
      img: Osoc, 
      time: "July 2024"
    },
    {
      title: "Machine Learning Intern",
      img: ML6,
      time: "Feb-May 2024"
    },
    {
      title: "Beach Lifeguard",
      img: IKWV, 
      time: "Summers 2019-2022"
    }
];

export default function Experiences() {
    return (
      <section id="about" className="w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-8 md:mt-16 md:mb-6">
            <h2 className="text-4xl mx-4 my-4 md:text-5xl font-extrabold font-cal">
              Experience
            </h2>
          </div>
  
          <div className="flex flex-col items-center justify-center gap-5 w-4/5 md:w-3/5 my-2 text-base md:mx-3 md:text-lg text-gray-800/70">
            {experiences.map((experience, idx) => {
                return <Experience key={idx} experience={experience} />;
            })}
          </div>
        </div>
      </section>
    );
  }
  