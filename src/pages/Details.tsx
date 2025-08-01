import interlockingHearts from "../assets/interlocking-hearts.svg";

export default function Details() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">The Details</h2>
      <img
        src={interlockingHearts}
        alt="Interlocking Hearts"
        className="w-16 h-16 mb-4"
      />
      <ul className="space-y-4">
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
