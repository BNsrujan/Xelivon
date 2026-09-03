import React from "react";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/pareshtalekar790899/30min";

export default function Booking() {
  return (
    <section
      id="booking"
      className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Book a call
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Thirty minutes, no pitch deck
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Bring the problem you are stuck on. You will leave with a point of
            view on it either way — whether or not we end up working together.
          </p>
        </div>

        <iframe
          title="Book a consultation with Axearc"
          src={CALENDLY_URL}
          className="mt-10 h-[760px] w-full rounded-2xl border border-gray-200"
          loading="lazy"
        />
      </div>
    </section>
  );
}
