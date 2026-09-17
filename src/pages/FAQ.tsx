const faqs = [
  {
    question: "What should I wear?",
    answer: (
      <>
        <p>
          The dress code is formal, but not black tie. This means midi or maxi
          dresses and suits and ties. Hats and fascinators are optional!
        </p>
        <p className="mt-4">
          Please avoid white, cream or ivory, as well as trainers, jeans, or
          sportswear. Our bridesmaids will be wearing powder blue.
        </p>
      </>
    ),
  },
  {
    question: "What time should I arrive?",
    answer: (
      <p>
        Our ceremony will begin at 1pm, so please arrive at Rise Hall by 12.30pm
        at the latest. This will give you plenty of time to find your seat and
        settle in before the ceremony.
      </p>
    ),
  },
  {
    question: "Where is the ceremony?",
    answer: (
      <p>
        The ceremony will be held indoors, so there&apos;s no need to worry
        about the British weather!
      </p>
    ),
  },
  {
    question: "Is there parking at the venue?",
    answer: <p>Yes, there is some parking available at Rise Hall.</p>,
  },
  {
    question: "Can I take photos during the ceremony?",
    answer: (
      <>
        <p>
          We&apos;d love for everyone to be fully present with us during the
          ceremony, so we kindly ask that you don&apos;t take photos or videos
          during the ceremony.
        </p>
        <p className="mt-4">
          Once the ceremony is over, please feel free to take as many photos as
          you like! We&apos;ll be creating a Google Photos album where everyone
          can share their pictures with us.
        </p>
      </>
    ),
  },
  {
    question: "Can I bring a plus-one?",
    answer: (
      <p>
        We&apos;re only able to accommodate the guests named on your invitation.
        We hope you understand!
      </p>
    ),
  },
  {
    question: "Are children invited?",
    answer: <p>We&apos;ve chosen to have an adults-only wedding.</p>,
  },
  {
    question: "What time does the wedding finish?",
    answer: (
      <p>
        The music will finish at 11.45pm, with the wedding officially finishing
        at midnight.
      </p>
    ),
  },
  {
    question: "Do I need transport?",
    answer: (
      <>
        <p>
          If you&apos;re staying at Rise Hall, you won&apos;t need to worry
          about getting home after the wedding!
        </p>
        <p className="mt-4">
          If you&apos;re staying elsewhere, taxis from the venue will need to be
          pre-booked, as there is limited mobile signal at Rise Hall. We
          recommend arranging your taxi in advance rather than relying on
          finding one on the night.
        </p>
      </>
    ),
  },
  {
    question: "Is the bar cashless?",
    answer: <p>Yes! The bar will accept card and contactless payments only.</p>,
  },
  {
    question: "Do you have a gift list?",
    answer: (
      <>
        <p>Your presence at our wedding is the only gift we need!</p>
        <p className="mt-4">
          If you would like to give us something, we&apos;ll be accepting
          contributions towards our honeymoon in Singapore and Bali. You can
          find more details on our Registry tab.
        </p>
      </>
    ),
  },
  {
    question: "Is Rise Hall accessible?",
    answer: (
      <>
        <p>
          Rise Hall is a historic building and unfortunately the accommodation
          is not fully accessible. There are stairs and no lift, so please bear
          this in mind if you&apos;re considering staying overnight.
        </p>
        <p className="mt-4">
          The wedding itself, including the toilets, is all on one level.
        </p>
        <p className="mt-4">
          If you have any specific accessibility requirements or concerns,
          please get in touch with us and we&apos;ll do our best to help.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="space-y-3">
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-lg bg-[#85BDCC]/10 transition-colors open:bg-[#85BDCC]/15"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-base font-medium font-heading marker:hidden sm:text-lg">
              {question}
              <span
                aria-hidden="true"
                className="text-lg transition-transform group-open:rotate-90"
              >
                ▶
              </span>
            </summary>
            <div className="px-4 pb-4 text-base sm:text-lg">{answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
