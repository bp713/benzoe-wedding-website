import type { FormEvent } from "react";
import type { GuestResponse } from "../types/rsvp";

const emptyResponse: GuestResponse = {
  attending: "",
  wednesdayNight: "",
  accommodation: "",
  diet: "",
  hasDietaryRequirements: "",
  dietaryDetails: "",
};

type RSVPDetailsFormProps = {
  names: string[];
  responses: Record<string, GuestResponse>;
  questions: string;
  submitted: boolean;
  saving: boolean;
  submitError: string;
  onResponseChange: (
    name: string,
    field: keyof GuestResponse,
    value: string,
  ) => void;
  onQuestionsChange: (questions: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function RSVPDetailsForm({
  names,
  responses,
  questions,
  submitted,
  saving,
  submitError,
  onResponseChange,
  onQuestionsChange,
  onSubmit,
}: RSVPDetailsFormProps) {
  return (
    <section aria-labelledby="rsvp-form-heading">
      <h2 id="rsvp-form-heading" className="mb-2 text-2xl font-semibold">
        Your details
      </h2>
      <p className="mb-6 text-base text-[#85BDCC]/80">
        Please complete one response per invited guest, using the name on your
        invitation.
      </p>

      <form onSubmit={onSubmit} className="space-y-5">
        {names.map((name) => {
          const response = responses[name] ?? emptyResponse;

          return (
            <div key={name} className="space-y-6">
              <label
                className="block text-lg font-semibold"
                htmlFor={`guest-name-${name}`}
              >
                Name
                <input
                  id={`guest-name-${name}`}
                  value={name}
                  readOnly
                  className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal"
                />
              </label>

              <fieldset className="space-y-3 border-t border-[#85BDCC]/30 pt-5">
                <legend className="text-xl font-semibold">
                  The wedding — Thursday 29 July 2027
                </legend>
                <p className="text-base">Are you able to attend our wedding?</p>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`attending-${name}`}
                    value="yes"
                    checked={response.attending === "yes"}
                    onChange={() => onResponseChange(name, "attending", "yes")}
                    required
                  />
                  Yes, I’ll be there
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`attending-${name}`}
                    value="no"
                    checked={response.attending === "no"}
                    onChange={() => onResponseChange(name, "attending", "no")}
                    required
                  />
                  No, I’m sorry I can’t make it
                </label>
              </fieldset>

              {response.attending === "yes" && (
                <>
                  <fieldset className="space-y-3 border-t border-[#85BDCC]/30 pt-5">
                    <legend className="text-xl font-semibold">
                      The night before — Wednesday 28 July 2027
                    </legend>
                    <p>
                      We’re having a relaxed get-together at Rise Hall on
                      Wednesday evening for those staying at the venue that
                      night (food and drinks provided).
                    </p>
                    <p>
                      It’s completely optional, but if you’d like to join us,
                      you will need to stay at Rise Hall on Wednesday night.
                      This is a requirement of our venue.
                    </p>
                    <p>
                      Rooms are for two people. The cost is approximately £258
                      per room, per night, and this includes a continental
                      breakfast.
                    </p>
                    <p>
                      We will be organising the accommodation and collecting
                      payment, so we will confirm final details closer to the
                      time. Please note, accommodation isn’t guaranteed until we
                      come back to you with confirmation.
                    </p>
                    <p className="font-semibold">
                      Will you be joining us and staying at Rise Hall on
                      Wednesday evening for our pre-wedding get-together?
                    </p>
                    {(["yes", "no"] as const).map((value) => (
                      <label key={value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`wednesday-${name}`}
                          value={value}
                          checked={response.wednesdayNight === value}
                          onChange={() =>
                            onResponseChange(name, "wednesdayNight", value)
                          }
                          required
                        />
                        {value === "yes" ? "Yes" : "No"}
                      </label>
                    ))}
                  </fieldset>

                  <fieldset className="space-y-3 border-t border-[#85BDCC]/30 pt-5">
                    <legend className="text-xl font-semibold">
                      Wedding night accommodation — Thursday 29 July 2027
                    </legend>
                    <p>
                      We are lucky enough that Rise Hall and its 31 rooms are
                      reserved for us and our guests the night before and the
                      night of the wedding. If you would prefer not to stay at
                      the venue, that’s absolutely fine, please just let us know
                      below.
                    </p>
                    <p>
                      Rooms are for two people. The cost is approximately £258
                      per room, per night, and this includes a continental
                      breakfast.
                    </p>
                    <p>
                      We will be organising the accommodation and collecting
                      payment, so we will confirm final details closer to the
                      time. Please note, accommodation isn’t guaranteed until we
                      come back to you with confirmation.
                    </p>
                    <p className="font-semibold">
                      Would you like accommodation at Rise Hall on Thursday
                      night (the night of the wedding)?
                    </p>
                    {(["yes", "no"] as const).map((value) => (
                      <label key={value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`accommodation-${name}`}
                          value={value}
                          checked={response.accommodation === value}
                          onChange={() =>
                            onResponseChange(name, "accommodation", value)
                          }
                          required
                        />
                        {value === "yes" ? "Yes" : "No"}
                      </label>
                    ))}
                  </fieldset>

                  <fieldset className="space-y-3 border-t border-[#85BDCC]/30 pt-5">
                    <legend className="text-xl font-semibold">
                      Dietary requirements
                    </legend>
                    <label
                      className="block text-base font-semibold"
                      htmlFor={`diet-${name}`}
                    >
                      Are you vegetarian or vegan?
                      <select
                        id={`diet-${name}`}
                        value={response.diet}
                        onChange={(event) =>
                          onResponseChange(name, "diet", event.target.value)
                        }
                        className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal"
                        required
                      >
                        <option value="">Please choose</option>
                        <option value="none">Neither</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    {response.diet === "other" && (
                      <label
                        className="block text-base font-semibold"
                        htmlFor={`diet-other-${name}`}
                      >
                        Please state your other dietary requirement
                        <textarea
                          id={`diet-other-${name}`}
                          value={response.dietaryDetails}
                          onChange={(event) =>
                            onResponseChange(
                              name,
                              "dietaryDetails",
                              event.target.value,
                            )
                          }
                          rows={2}
                          required
                          className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal"
                        />
                      </label>
                    )}
                    <p className="font-semibold">
                      Do you have any other dietary requirements or allergies we
                      should be aware of?
                    </p>
                    {(["no", "yes"] as const).map((value) => (
                      <label key={value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`dietary-${name}`}
                          value={value}
                          checked={response.hasDietaryRequirements === value}
                          onChange={() =>
                            onResponseChange(
                              name,
                              "hasDietaryRequirements",
                              value,
                            )
                          }
                          required
                        />
                        {value === "yes" ? "Yes" : "No"}
                      </label>
                    ))}
                    {response.hasDietaryRequirements === "yes" && (
                      <label
                        className="block text-base font-semibold"
                        htmlFor={`dietary-details-${name}`}
                      >
                        Please provide details
                        <textarea
                          id={`dietary-details-${name}`}
                          value={response.dietaryDetails}
                          onChange={(event) =>
                            onResponseChange(
                              name,
                              "dietaryDetails",
                              event.target.value,
                            )
                          }
                          rows={3}
                          required
                          className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal"
                        />
                      </label>
                    )}
                  </fieldset>
                </>
              )}
            </div>
          );
        })}

        <label
          className="block border-t border-[#85BDCC]/30 pt-5 text-lg font-semibold"
          htmlFor="questions"
        >
          Questions
          <span className="mt-2 block text-base font-normal">
            Is there anything you’d like to ask us about the wedding,
            accommodation or anything else?
          </span>
          <textarea
            id="questions"
            value={questions}
            onChange={(event) => onQuestionsChange(event.target.value)}
            rows={3}
            className="mt-2 block w-full rounded border border-[#85BDCC]/40 bg-white/60 px-3 py-3 text-base font-normal placeholder-[#85BDCC]/60 focus:border-[#85BDCC] focus:outline-none focus:ring-2 focus:ring-[#85BDCC]/20"
          />
        </label>

        <button
          type="submit"
          disabled={saving}
          className="rounded bg-[#85BDCC] px-5 py-3 text-lg text-white transition-colors hover:bg-[#85BDCC]/80 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "Saving RSVP..." : "Submit RSVP"}
        </button>
        {submitted && (
          <p
            className="border border-green-200 bg-green-100 px-4 py-3 text-green-800"
            role="status"
          >
            Your RSVP has been saved. Thank you!
          </p>
        )}
        {submitError && (
          <p
            className="border border-red-200 bg-red-100 px-4 py-3 text-red-800"
            role="alert"
          >
            {submitError}
          </p>
        )}
      </form>
    </section>
  );
}
