import { useState } from "react";

export default function Accommodation() {
  const [showOneNightStay, setShowOneNightStay] = useState(false);
  const [showOffsiteStay, setShowOffsiteStay] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <p className="mb-4 text-base sm:text-lg">
        The venue is reserved exclusively for us and our guests. There are
        enough rooms for everybody to stay at the venue the night before the
        wedding and the night of the wedding, if you would like to.
      </p>
      <p className="mb-4 text-base sm:text-lg">
        To give you an idea of prices, the 2025 room rates are as follows (per
        room, per night):
      </p>
      <ul className="mb-4 list-inside list-disc text-base sm:text-lg">
        <li>6 rooms at £135 + VAT</li>
        <li>20 rooms at £215 + VAT</li>
        <li>4 junior suites at £240+ VAT</li>
      </ul>
      <p className="mb-4 text-base sm:text-lg">
        Please note, certain rooms will be reserved for the bridal party and
        immediate family. To make things as fair as possible, those who are
        staying at the venue for two nights will have first choice when it comes
        to room allocation.
      </p>{" "}
      <p className="mb-4 text-base sm:text-lg">
        Please let us know on your RSVP whether you would like to stay at the
        venue, and we will get back to you with more information.
      </p>
      <div className="mb-6">
        <button
          onClick={() => setShowOneNightStay(!showOneNightStay)}
          className="w-full rounded-lg bg-[#85BDCC]/10 p-4 text-left transition-colors hover:bg-[#85BDCC]/20"
          aria-expanded={showOneNightStay}
        >
          <span className="text-base font-medium sm:text-lg">
            I only want to stay at the venue the night of the wedding, is that
            okay? {showOneNightStay ? "▼" : "▶"}
          </span>
        </button>
        {showOneNightStay && (
          <div className="mt-4">
            <p className="mb-4 text-base sm:text-lg">
              Of course! There will be an option on the RSVP to let us know
              whether you'd like to stay for one or two nights, or whether you'd
              prefer to sort your own accommodation.
            </p>
          </div>
        )}
      </div>
      <div className="mb-6">
        <button
          onClick={() => setShowOffsiteStay(!showOffsiteStay)}
          className="w-full rounded-lg bg-[#85BDCC]/10 p-4 text-left transition-colors hover:bg-[#85BDCC]/20"
          aria-expanded={showOffsiteStay}
        >
          <span className="text-base font-medium sm:text-lg">
            What if I don't want to stay at the venue?{" "}
            {showOffsiteStay ? "▼" : "▶"}
          </span>
        </button>
        {showOffsiteStay && (
          <div className="mt-4">
            <p className="mb-4 text-base sm:text-lg">
              Rise Hall is about 15-20 minutes drive from Beverley and about 20
              minutes from Hull if you would prefer to stay offsite (or, of
              course, you may just want to sleep in your own beds!) Nearby
              hotels include:
            </p>
            <ul className="mb-4 list-inside list-disc text-base sm:text-lg">
              <li>
                Premier Inn - Beverley Town Centre Hotel (18 minute drive)
              </li>
              <li>Premier Inn - Hull City Centre (24 minute drive)</li>
            </ul>
            <p className="mb-6 text-base sm:text-lg">
              The only thing to bear in mind is that there is limited signal at
              the venue, so taxis will need to be booked in advance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
