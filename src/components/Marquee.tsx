// Marquee.tsx
import Image from "next/image";
import photo1 from "../assets/zoe-showing-ring.jpg";
import photo2 from "../assets/zoe-showing-ring-portrait.jpg";
import photo3 from "../assets/venice.jpg";

const images = [photo1, photo2, photo3];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-white py-6">
      <div className="flex animate-marquee" style={{ width: "200%" }}>
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`marquee-${idx}`}
            width={240}
            height={480}
            className="h-[30rem] w-auto flex-shrink-0 object-contain"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="200" height="120">
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="64"
            fontFamily="Luxurious Script, cursive"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="300"
            strokeDashoffset="300"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.5))"
            className="animate-pen-write-stroke"
          >
            Z & B
          </text>
        </svg>
        <div
          className="absolute text-white text-3xl text-center font-serif"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <span className="animate-drop-in-1 inline-block">29</span>
          <span className="animate-fade inline-block mx-3"> | </span>
          <span className="animate-drop-in-2 inline-block">July</span>
          <span className="animate-fade inline-block mx-3"> | </span>
          <span className="animate-drop-in-3 inline-block">2027</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
