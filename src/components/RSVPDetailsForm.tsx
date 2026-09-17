import type { FormEvent } from "react";
import RSVPAttendance, { type Attendance } from "./RSVPAttendance";

type RSVPDetailsFormProps = {
  names: string[];
  attendance: Attendance;
  attendingNames: string[];
  accommodation: string;
  dietary: string;
  submitted: boolean;
  onAttendanceChange: (attendance: Attendance) => void;
  onAttendingNamesChange: (names: string[]) => void;
  onAccommodationChange: (accommodation: string) => void;
  onDietaryChange: (dietary: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function RSVPDetailsForm({
  names,
  attendance,
  attendingNames,
  accommodation,
  dietary,
  submitted,
  onAttendanceChange,
  onAttendingNamesChange,
  onAccommodationChange,
  onDietaryChange,
  onSubmit,
}: RSVPDetailsFormProps) {
  const canSubmit =
    attendance !== "" && (attendance !== "some" || attendingNames.length > 0);

  return (
    <section aria-labelledby="rsvp-form-heading">
      <h2 id="rsvp-form-heading" className="mb-2 text-2xl font-semibold">
        RSVP for {names.join(" & ")}
      </h2>
      <p className="mb-6 text-base text-[#85BDCC]/80">
        Please complete one response for everyone on this invitation.
      </p>

      <form onSubmit={onSubmit} className="space-y-5">
        <RSVPAttendance
          names={names}
          attendance={attendance}
          attendingNames={attendingNames}
          onAttendanceChange={onAttendanceChange}
          onAttendingNamesChange={onAttendingNamesChange}
        />

        <label className="block text-lg font-semibold" htmlFor="accommodation">
          Accommodation
          <select
            id="accommodation"
            value={accommodation}
            onChange={(event) => onAccommodationChange(event.target.value)}
            className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal focus:border-[#85BDCC] focus:outline-none focus:ring-2 focus:ring-[#85BDCC]/20"
          >
            <option value="">Please choose</option>
            <option value="two-nights">Stay both nights</option>
            <option value="wedding-night">Stay the night of the wedding</option>
            <option value="own-accommodation">
              Arrange our own accommodation
            </option>
          </select>
        </label>

        <label className="block text-lg font-semibold" htmlFor="dietary">
          Dietary requirements
          <textarea
            id="dietary"
            value={dietary}
            onChange={(event) => onDietaryChange(event.target.value)}
            placeholder="Tell us about any dietary requirements"
            rows={3}
            className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal placeholder-[#85BDCC]/60 focus:border-[#85BDCC] focus:outline-none focus:ring-2 focus:ring-[#85BDCC]/20"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className="rounded bg-[#85BDCC] px-5 py-3 text-lg text-white transition-colors hover:bg-[#85BDCC]/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send RSVP
        </button>
        {submitted && (
          <p
            className="border border-green-200 bg-green-100 px-4 py-3 text-green-800"
            role="status"
          >
            Thank you. Your RSVP has been recorded for now.
          </p>
        )}
      </form>
    </section>
  );
}
