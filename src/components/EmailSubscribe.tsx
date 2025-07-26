import { useState } from "react";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("Subscribing...");

    try {
      // TODO move key into env variable
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw0sDPUmtRzdqIhiFQFz-c-fAp0Xo9XWaPH_VJdsIAlVvoQDOA2qV1YJL1K6IBZBfBo/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: email,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      console.log(response);

      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
      } else {
        setStatus("Error occurred");
      }
    } catch (error) {
      setStatus("Error occurred");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg mb-2 text-[#85BDCC]">Stay Up to Date</h3>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-2 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 border border-[#85BDCC]/30 rounded bg-white/50 text-[#85BDCC] placeholder-[#85BDCC]/60 focus:outline-none focus:border-[#85BDCC]"
          required
        />
        <button
          type="submit"
          disabled={!email || status === "Subscribing..."}
          className="px-4 py-2 bg-[#85BDCC] text-white rounded hover:bg-[#85BDCC]/80 transition-colors disabled:opacity-50"
        >
          {status === "Subscribing..." ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status && status !== "Subscribing..." && (
        <div className={`mt-2 px-4 py-2 rounded-lg text-sm text-center ${
          status === "Subscribed!" 
            ? "bg-green-100 text-green-800 border border-green-200" 
            : "bg-red-100 text-red-800 border border-red-200"
        }`}>
          {status === "Subscribed!" ? "✓ " : "⚠ "}{status}
        </div>
      )}
    </div>
  );
}
