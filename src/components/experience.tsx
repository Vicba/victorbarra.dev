
export default function Experience({ experience }: { experience: { title: string; img: string; time: string} }) {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <div className="flex items-center gap-3">
        <img
          src={experience.img}
          alt={experience.title}
          className="w-10 h-10 rounded object-contain border"
        />
        <div className="flex flex-col text-left">
          <h3 className="text-base font-medium text-black">{experience.title}</h3>
        </div>
      </div>

      <div className="flex-grow mx-4 border-t border-dashed border-gray-300"></div>

      <div className="text-sm text-gray-500">
        {experience.time}
      </div>
    </div>
  );
}
