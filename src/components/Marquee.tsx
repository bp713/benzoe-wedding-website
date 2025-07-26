// Marquee.tsx
import photo1 from "../assets/zoe-showing-ring.jpg";
import photo2 from "../assets/zoe-showing-ring-portrait.jpg";
import photo3 from "../assets/venice.jpg";

const images = [photo1, photo2, photo3];

const Marquee = () => {
  return (
    <div className="overflow-hidden py-6 bg-[#FAFAF7] relative">
      <div className="flex animate-marquee" style={{ width: "200%" }}>
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`marquee-${idx}`}
            className="h-120 flex-shrink-0"
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
          className="absolute text-white text-3xl text-center"
          style={{
            fontFamily: "Cormorant Infant, serif",
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
