// Marquee.tsx
import photo1 from "../assets/zoe-showing-ring.jpg";
import photo2 from "../assets/zoe-showing-ring-portrait.jpg";
import photo3 from "../assets/venice.jpg";

const images = [photo1, photo2, photo3];

const Marquee = () => {
  return (
    <div className="overflow-hidden py-6 bg-[#FAFAF7]">
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
    </div>
  );
};

export default Marquee;
