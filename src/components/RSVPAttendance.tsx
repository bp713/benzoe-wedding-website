export type Attendance = "all" | "some" | "none" | "";

type RSVPAttendanceProps = {
  names: string[];
  attendance: Attendance;
  attendingNames: string[];
  onAttendanceChange: (attendance: Attendance) => void;
  onAttendingNamesChange: (names: string[]) => void;
};

export default function RSVPAttendance({
  names,
  attendance,
  attendingNames,
  onAttendanceChange,
  onAttendingNamesChange,
}: RSVPAttendanceProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-lg font-semibold">
        Will you be joining us?
      </legend>
      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="attendance"
            value="all"
            checked={attendance === "all"}
            onChange={() => onAttendanceChange("all")}
            required
          />
          Everyone can make it
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="attendance"
            value="some"
            checked={attendance === "some"}
            onChange={() => onAttendanceChange("some")}
          />
          Only some of us can make it
        </label>
        {attendance === "some" && (
          <div className="ml-6 space-y-2 border-l-2 border-[#85BDCC]/30 pl-4">
            <p className="text-base text-[#85BDCC]/80">Who can make it?</p>
            {names.map((name) => (
              <label key={name} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={name}
                  checked={attendingNames.includes(name)}
                  onChange={(event) =>
                    onAttendingNamesChange(
                      event.target.checked
                        ? [...attendingNames, name]
                        : attendingNames.filter(
                            (selectedName) => selectedName !== name,
                          ),
                    )
                  }
                />
                {name}
              </label>
            ))}
          </div>
        )}
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="attendance"
            value="none"
            checked={attendance === "none"}
            onChange={() => onAttendanceChange("none")}
          />
          No one can make it
        </label>
      </div>
    </fieldset>
  );
}
