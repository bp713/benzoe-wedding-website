import { useState, useEffect } from "react";
import Marquee from "../components/Marquee";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2027-07-29T13:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <Marquee />

      <div className="mb-4 flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-8">
        <div className="min-w-[60px] text-center">
          <div className="text-2xl font-bold sm:text-3xl">{timeLeft.days}</div>
          <div className="text-xs sm:text-sm">Days</div>
        </div>
        <div className="min-w-[60px] text-center">
          <div className="text-2xl font-bold sm:text-3xl">{timeLeft.hours}</div>
          <div className="text-xs sm:text-sm">Hours</div>
        </div>
        <div className="min-w-[60px] text-center">
          <div className="text-2xl font-bold sm:text-3xl">
            {timeLeft.minutes}
          </div>
          <div className="text-xs sm:text-sm">Minutes</div>
        </div>
        <div className="min-w-[60px] text-center">
          <div className="text-2xl font-bold sm:text-3xl">
            {timeLeft.seconds}
          </div>
          <div className="text-xs sm:text-sm">Seconds</div>
        </div>
      </div>
      <p className="text-base sm:text-lg">Thursday 29th July 2027</p>
      <p className="text-base sm:text-lg">Rise Hall, Beverley</p>
    </div>
  );
}
