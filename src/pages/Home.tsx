"use client";

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
      <div className="px-4">
        <p className="text-base sm:text-lg">Thursday 29th July 2027</p>
        <p className="text-base sm:text-lg">Rise Hall, Beverley</p>
      </div>
      <div>
        <div className="px-4 py-6 sm:px-8">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/playlist/7nmTrtXJw6xFgwlRnQ3kdz?utm_source=generator&theme=0&si=d4d1dd68f0194f93"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
