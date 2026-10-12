"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import RSVPDetailsForm from "../components/RSVPDetailsForm";
import RSVPGuestSearch from "../components/RSVPGuestSearch";
import type { GuestGroup, GuestResponse } from "../types/rsvp";

const normalise = (value: string) => value.trim().toLowerCase();

export default function RSVP() {
  const [guestGroups, setGuestGroups] = useState<GuestGroup[]>([]);
  const [loadingGuests, setLoadingGuests] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<GuestGroup | null>(null);
  const [responses, setResponses] = useState<Record<string, GuestResponse>>({});
  const [questions, setQuestions] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/rsvp", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load the guest list.");
        return (await response.json()) as GuestGroup[];
      })
      .then((groups) => {
        if (!cancelled) setGuestGroups(groups);
      })
      .catch(() => {
        if (!cancelled)
          setLoadError("Could not load the local guest workbook.");
      })
      .finally(() => {
        if (!cancelled) setLoadingGuests(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const matches = useMemo(() => {
    const search = normalise(query);
    if (!search) return [];

    return guestGroups.filter((group) =>
      group.names.some((name) => normalise(name).includes(search)),
    );
  }, [guestGroups, query]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedGroup) return;

    setSaving(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groupId: selectedGroup.id,
          responses: Object.fromEntries(
            selectedGroup.names.map((name) => [name, responses[name]]),
          ),
          questions,
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(result.error ?? "Could not save RSVP.");
      setSubmitted(true);
      setGuestGroups((current) =>
        current.map((guest) =>
          guest.id === selectedGroup.id
            ? {
                ...guest,
                responses: Object.fromEntries(
                  selectedGroup.names.map((name) => [name, responses[name]]),
                ),
                questions,
              }
            : guest,
        ),
      );
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Could not save RSVP.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleResponseChange = (
    name: string,
    field: keyof GuestResponse,
    value: string,
  ) => {
    setResponses((current) => ({
      ...current,
      [name]: { ...current[name], [field]: value },
    }));
    setSubmitted(false);
    setSubmitError("");
  };

  const handleSelect = (group: GuestGroup) => {
    setSelectedGroup(group);
    setResponses((current) => {
      const restored = { ...current };
      for (const name of group.names) {
        const savedResponse = group.responses?.[name];
        if (!restored[name] && savedResponse) {
          restored[name] = savedResponse;
        }
      }
      return restored;
    });
    setQuestions(group.questions ?? "");
    setSubmitted(false);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8">
        <p className="font-heading mb-2 text-sm tracking-widest text-[#85BDCC]/80">
          Wedding RSVP
        </p>
        <p className="mb-4 text-base sm:text-lg">
          We’re so excited to celebrate our wedding with you!
        </p>
        <p className="mb-4 text-base sm:text-lg">
          We just need a few details from you to help us get everything
          organised and make sure the day runs as smoothly as possible.
        </p>
        <p className="mb-4 text-base sm:text-lg">
          Please complete this form by <b>1st April 2027</b>.
        </p>
        <p className="mb-4 text-base sm:text-lg">
          Please search any of the named guests on your invitation to complete
          your RSVP.
        </p>
        <section className="space-y-3 border-t border-[#85BDCC]/30 pt-5">
          <h2 className="text-xl font-semibold">A couple of important bits</h2>
          <p>
            Please note that we are only able to accommodate the people named on
            your invitation.
          </p>
          <p>
            We have chosen to have an adults-only wedding - we hope you
            understand and are still able to join us!
          </p>
        </section>
      </div>

      {!selectedGroup ? (
        <RSVPGuestSearch
          query={query}
          matches={matches}
          loading={loadingGuests}
          error={loadError}
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
            responses={responses}
            questions={questions}
            submitted={submitted}
            saving={saving}
            submitError={submitError}
            onResponseChange={handleResponseChange}
            onQuestionsChange={setQuestions}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
}
