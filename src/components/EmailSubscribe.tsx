"use client";

import { useState } from "react";

export default function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("Subscribing...");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
      } else {
        setStatus("Error occurred");
      }
    } catch {
      setStatus("Error occurred");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="mb-4">
      <h3 className="mb-2 text-lg text-[#85BDCC]">Stay Up to Date</h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row sm:justify-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full flex-1 rounded border border-[#85BDCC]/30 bg-white/50 px-3 py-2 text-[#85BDCC] placeholder-[#85BDCC]/60 focus:border-[#85BDCC] focus:outline-none sm:w-auto"
          required
        />
        <button
          type="submit"
          disabled={!email || status === "Subscribing..."}
          className="rounded bg-[#85BDCC] px-4 py-2 text-white transition-colors hover:bg-[#85BDCC]/80 disabled:opacity-50 sm:w-auto"
        >
          {status === "Subscribing..." ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status && status !== "Subscribing..." && (
        <div
          className={`mt-2 rounded-lg px-4 py-2 text-center text-sm ${
            status === "Subscribed!"
              ? "border border-green-200 bg-green-100 text-green-800"
              : "border border-red-200 bg-red-100 text-red-800"
          }`}
        >
          {status === "Subscribed!" ? "✓ " : "⚠ "}
          {status}
        </div>
      )}
    </div>
  );
}
