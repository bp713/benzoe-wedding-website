const faqs = [
  {
    question: "What should I wear?",
    answer: (
      <>
        <p>
          The dress code is formal - midi or maxi dresses and suits and ties.
          Hats and fascinators are optional!
        </p>
        <p className="mt-4">
          Please avoid wearing white, cream or ivory and please no trainers,
          jeans or sportswear. Our bridesmaids will be wearing powder blue.
        </p>
      </>
    ),
  },
  {
    question: "What time should I arrive?",
    answer: (
      <p>
        Please arrive at Rise Hall by 12.30pm at the latest. The venue is
        surrounded by country roads, so please allow plenty of time in case of
        slow-moving traffic.
      </p>
    ),
  },
  {
    question: "Where is the ceremony?",
    answer: (
      <p>
        The ceremony will be held indoors at Rise Hall, so there&apos;s no need
        to worry about the British weather!
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
          you like and please do share them with us after the wedding!
        </p>
      </>
    ),
  },
  {
    question: "Can I bring a plus-one?",
    answer: (
      <p>
        We&apos;re only able to accommodate the guests named on your invitation.
        We hope you understand.
      </p>
    ),
  },
  {
    question: "Are children invited?",
    answer: (
      <p>
        {" "}
        We have chosen to have an adults-only wedding, so there will be no under
        16s with us on the day. Parents - use this as a night off!
      </p>
    ),
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
          pre-booked. As there is limited mobile signal at Rise Hall, we
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
        <p>
          Your presence at our wedding is genuinely the only gift we need.
          Weddings are expensive to attend and we appreciate everyone making the
          time and effort to join us on the day.
        </p>
      </>
    ),
  },
  {
    question: "Is Rise Hall accessible?",
    answer: (
      <>
        <p>
          Rise Hall is an historic building and unfortunately the accommodation
          is not fully accessible. Please bear this in mind if you&apos;re
          considering staying overnight.
        </p>
        <p className="mt-4">
          The wedding itself, including the toilets, is all on one level.
        </p>
        <p className="mt-4">
          If you have any specific accessibility requirements or concerns,
          please let us know and we&apos;ll do our best to help.
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
