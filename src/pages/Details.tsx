import interlockingHearts from "../assets/interlocking-hearts.svg";

export default function Details() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <h2 className="mb-6 text-3xl font-semibold">The Details</h2>
      <img
        src={interlockingHearts}
        alt="Interlocking Hearts"
        className="mb-4 h-16 w-16"
      />
      <ul className="space-y-4 text-base sm:text-lg">
        <li>
          <strong>Date:</strong> Thursday, 29th July 2027
        </li>
        <li>
          <strong>Venue:</strong> Rise Hall, East Yorkshire
        </li>
        <li>
          <strong>Dress Code:</strong> Formal
        </li>
      </ul>
    </div>
  );
}
