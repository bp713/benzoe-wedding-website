export type GuestGroup = {
  id: string;
  names: string[];
};

type RSVPGuestSearchProps = {
  query: string;
  matches: GuestGroup[];
  onQueryChange: (query: string) => void;
  onSelect: (group: GuestGroup) => void;
};

export default function RSVPGuestSearch({
  query,
  matches,
  onQueryChange,
  onSelect,
}: RSVPGuestSearchProps) {
  return (
    <section aria-labelledby="guest-search-heading">
      <h2 id="guest-search-heading" className="mb-3 text-xl font-semibold">
        Find your invitation
      </h2>
      <label htmlFor="guest-search" className="sr-only">
        Search by name
      </label>
      <input
        id="guest-search"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Enter your name"
        autoComplete="name"
        className="w-full rounded border border-[#85BDCC]/40 bg-white/60 px-4 py-3 text-lg text-[#85BDCC] placeholder-[#85BDCC]/60 focus:border-[#85BDCC] focus:outline-none focus:ring-2 focus:ring-[#85BDCC]/20"
      />
      {query && (
        <div className="mt-4" aria-live="polite">
          {matches.length ? (
            <div className="space-y-2">
              <p className="text-sm text-[#85BDCC]/70">
                Select your invitation to continue:
              </p>
              {matches.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => onSelect(group)}
                  className="block w-full rounded border border-[#85BDCC]/30 bg-white/50 px-4 py-3 text-left text-lg transition-colors hover:bg-[#85BDCC]/10 focus:outline-none focus:ring-2 focus:ring-[#85BDCC]"
                >
                  {group.names.join(" & ")}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-base text-[#85BDCC]/80">
              We could not find that name. Please check the spelling and try
              again.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
