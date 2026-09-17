import interlockingHearts from "../assets/interlocking-hearts.svg";

export default function Schedule() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <h2 className="font-heading mb-6 text-3xl font-semibold">Schedule</h2>
      <img
        src={interlockingHearts}
        alt="Interlocking Hearts"
        className="mb-4 h-16 w-16"
      />
      <p className="mb-8 text-base sm:text-lg">
        Please check back closer to the time for the final schedule. We
        anticipate it to be something like this:
      </p>

      <div className="space-y-8 text-base sm:text-lg">
        <section>
          <h3 className="font-heading mb-4 text-2xl font-semibold">
            Wednesday 28th July 2027
          </h3>
          <ul className="space-y-3">
            <li>
              <strong>3pm onwards</strong> - Guests who are staying at Rise Hall
              on Wednesday night begin to arrive and check in to their rooms.
            </li>
            <li>
              <strong>5pm - 8.30pm</strong> - Pre-wedding get together, with
              (light) food and drinks provided.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading mb-4 text-2xl font-semibold">
            Thursday 29th July 2027
          </h3>
          <ul className="space-y-3">
            <li>
              <strong>12.15pm</strong> - Guests arrive at Rise Hall
            </li>
            <li>
              <strong>1pm</strong> - Ceremony
            </li>
            <li>
              <strong>1.30pm</strong> - Drinks and canapés
            </li>
            <li>
              <strong>3pm</strong> - Guests invited to take their seats for the
              wedding breakfast
            </li>
            <li>
              <strong>3.30pm</strong> - Wedding breakfast is served
            </li>
            <li>
              <strong>5.30pm</strong> - Tea, coffee and chocolates
            </li>
            <li>
              <strong>5.45pm</strong> - Speeches
            </li>
            <li>
              <strong>7.30pm</strong> - Evening reception commences
            </li>
            <li>
              <strong>8pm</strong> - Cake cutting
            </li>
            <li>
              <strong>8.15pm</strong> - First dance
            </li>
            <li>
              <strong>9pm</strong> - Evening food served
            </li>
            <li>
              <strong>11.30pm</strong> - Bar closes
            </li>
            <li>
              <strong>11.45pm</strong> - Entertainment finishes
            </li>
            <li>
              <strong>Midnight</strong> - Guests depart
            </li>
          </ul>
          <p className="mt-4">With a few surprises along the way!</p>
        </section>

        <section>
          <h3 className="font-heading mb-4 text-2xl font-semibold">
            Friday 30th July 2027
          </h3>
          <ul className="space-y-3">
            <li>
              <strong>9am - 10am</strong> - Overnight guests welcomed for a
              continental breakfast
            </li>
            <li>
              <strong>11am</strong> - Check-out
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
