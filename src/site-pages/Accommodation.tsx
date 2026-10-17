export default function Accommodation() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="space-y-3 text-base sm:text-lg">
        <p>
          Our venue, Rise Hall, is exclusively ours from the afternoon on
          Wednesday 28th July to the morning of Friday 30th July, and we’re
          lucky enough to have accommodation on site for our guests.
        </p>
        <p>
          You can choose to stay at the venue for one or two nights.
          Alternatively, you are more than welcome to arrange your own
          accommodation offsite. You can find a list of nearby hotels below.
        </p>
        <p>
          Please let us know on your RSVP whether you’d like to stay at Rise
          Hall, and whether you’d like to stay for one or two nights.
        </p>
        <p>
          Accommodation at Rise Hall will be payable to us in advance (we will
          send further details as soon as possible). Please note, accommodation
          isn’t guaranteed until payment has been received and we have contacted
          you to confirm which room you are in.
        </p>

        <section className="space-y-3 pt-3">
          <h2 className="font-heading text-xl font-medium sm:text-2xl">
            A note about the night before
          </h2>
          <div className="space-y-3">
            <p>
              We’re hosting a relaxed get-together at Rise Hall on Wednesday
              28th July (the night before the wedding) for those staying at the
              venue that night. Timings are TBC but we expect it to be from
              around 5pm.
            </p>
            <p>
              There’ll be some food and drinks provided, and it’ll be a chance
              to get into the wedding spirit before the big day. Don’t worry, it
              won’t be a late one - we’ll all need our beauty sleep!
            </p>
            <p>
              It’s completely optional, but if you’d like to join us, you will
              need to stay at Rise Hall on Wednesday night. This is a
              requirement of our venue.
            </p>
          </div>
        </section>

        <details className="group rounded-lg bg-[#85BDCC]/10 transition-colors open:bg-[#85BDCC]/15">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-base font-medium font-heading marker:hidden sm:text-lg">
            How much are the rooms?
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-open:rotate-90"
            >
              ▶
            </span>
          </summary>
          <div className="space-y-4 px-4 pb-4 text-base sm:text-lg">
            <p>
              Most rooms are £258 per night. This includes a continental
              breakfast.
            </p>
          </div>
        </details>

        <details className="group rounded-lg bg-[#85BDCC]/10 transition-colors open:bg-[#85BDCC]/15">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-base font-medium font-heading marker:hidden sm:text-lg">
            I only want to stay at Rise Hall on the night of the wedding - is
            that okay?
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-open:rotate-90"
            >
              ▶
            </span>
          </summary>
          <div className="space-y-4 px-4 pb-4 text-base sm:text-lg">
            <p>
              Absolutely! Just let us know on your RSVP that you’d like to stay
              for Thursday night only.
            </p>
            <p>
              We’ll do our best to accommodate everyone who would like to stay
              at Rise Hall but, in the interest of fairness, we will prioritise
              rooms for guests who are staying two nights.
            </p>
          </div>
        </details>

        <details className="group rounded-lg bg-[#85BDCC]/10 transition-colors open:bg-[#85BDCC]/15">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-base font-medium font-heading marker:hidden sm:text-lg">
            Nearby hotels
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-open:rotate-90"
            >
              ▶
            </span>
          </summary>
          <div className="space-y-4 px-4 pb-4 text-base sm:text-lg">
            <p>
              You’re very welcome to arrange your own accommodation, or sleep in
              your own bed if you’re local.
            </p>
            <p>
              Rise Hall is approximately 15–20 minutes from Beverley and 20–25
              minutes from Hull, with a number of hotels nearby. Some options
              include:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[24rem] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-current/30">
                    <th className="py-2 pr-4 font-semibold">Hotel</th>
                    <th className="py-2 pr-4 font-semibold">
                      Approx. drive from Rise Hall
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-current/15">
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.google.com/search?q=Beverley+Guest+House+Keldgate+booking"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Beverley Guest House
                      </a>
                    </td>
                    <td className="py-2 pr-4">20–25 min</td>
                  </tr>
                  <tr className="border-b border-current/15">
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.premierinn.com/gb/en/hotels/england/east-riding-of-yorkshire/beverley/beverley-town-centre.html"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Premier Inn Beverley Town Centre
                      </a>
                    </td>
                    <td className="py-2 pr-4">20–25 min</td>
                  </tr>
                  <tr className="border-b border-current/15">
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.google.com/search?q=Lairgate+Hotel+Beverley+booking"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Lairgate Hotel
                      </a>
                    </td>
                    <td className="py-2 pr-4">20–25 min</td>
                  </tr>
                  <tr className="border-b border-current/15">
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.google.com/search?q=Kings+Head+Beverley+rooms+booking"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        King&apos;s Head, Beverley
                      </a>
                    </td>
                    <td className="py-2 pr-4">20–25 min</td>
                  </tr>
                  <tr className="border-b border-current/15">
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.lazaat.com/"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Lazaat Hotel, Cottingham
                      </a>
                    </td>
                    <td className="py-2 pr-4">25–30 min</td>
                  </tr>
                  <tr className="border-b border-current/15">
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.ticktongrange.co.uk/"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Tickton Grange Hotel
                      </a>
                    </td>
                    <td className="py-2 pr-4">10–15 min</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      <a
                        href="https://www.beverleyarms.co.uk/"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        The Beverley Arms
                      </a>
                    </td>
                    <td className="py-2 pr-4">20–25 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If you’re staying offsite, you’ll need to arrange your own
              accommodation and transport to and from Rise Hall.
            </p>
            <p>
              Taxis from the venue will need to be pre-booked, as there is
              limited mobile signal at Rise Hall.
            </p>
            <p>
              If you’re unsure about the best option, just give us a shout and
              we’ll be happy to help!
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
