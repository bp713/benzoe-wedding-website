import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import RSVPDetailsForm from "../components/RSVPDetailsForm";
import RSVPGuestSearch, {
  type GuestGroup,
} from "../components/RSVPGuestSearch";
import type { Attendance } from "../components/RSVPAttendance";

const guestGroups: GuestGroup[] = [
  { id: "ben-parents", names: ["Sarah Pepers", "Martin Pepers"] },
  { id: "zoe-parents", names: ["Steve McPhie", "Lindsay McPhie"] },
];

const normalise = (value: string) => value.trim().toLowerCase();

export default function RSVP() {
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<GuestGroup | null>(null);
  const [attendance, setAttendance] = useState<Attendance>("");
  const [attendingNames, setAttendingNames] = useState<string[]>([]);
  const [accommodation, setAccommodation] = useState("");
  const [dietary, setDietary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const matches = useMemo(() => {
    const search = normalise(query);
    if (!search) return [];

    return guestGroups.filter((group) =>
      group.names.some((name) => normalise(name).includes(search)),
    );
  }, [query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleSelect = (group: GuestGroup) => {
    setSelectedGroup(group);
    setSubmitted(false);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8">
        <p className="mb-2 text-sm uppercase tracking-widest text-[#85BDCC]/80">
          We hope you can join us
        </p>
        <h1 className="mb-3 text-3xl font-semibold sm:text-4xl">RSVP</h1>
        <p className="text-base sm:text-lg">
          Search for your name to find your invitation.
        </p>
      </div>

      {!selectedGroup ? (
        <RSVPGuestSearch
          query={query}
          matches={matches}
          onQueryChange={setQuery}
          onSelect={handleSelect}
        />
      ) : (
        <>
          <button
            type="button"
            onClick={() => setSelectedGroup(null)}
            className="mb-6 text-sm underline hover:no-underline"
          >
            Search for a different name
          </button>
          <RSVPDetailsForm
            names={selectedGroup.names}
            attendance={attendance}
            attendingNames={attendingNames}
            accommodation={accommodation}
            dietary={dietary}
            submitted={submitted}
            onAttendanceChange={setAttendance}
            onAttendingNamesChange={setAttendingNames}
            onAccommodationChange={setAccommodation}
            onDietaryChange={setDietary}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
}
