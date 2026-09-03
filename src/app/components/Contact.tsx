"use client";

import React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEnquiry } from "@/components/enquiry-context";
import { contactSchema, fieldErrors } from "@/lib/validation";
import type { ServiceSummary } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export function Contact({ services }: { services: ServiceSummary[] }) {
  const { selectedService, setSelectedService } = useEnquiry();
  const [values, setValues] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [formError, setFormError] = React.useState("");

  const update =
    (field: keyof typeof EMPTY) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      // Clear the field's error as soon as the visitor starts correcting it.
      setErrors((current) => {
        if (!(field in current)) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const payload = { ...values, serviceSlug: selectedService };
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setErrors(body.fields ?? {});
        setFormError(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setValues(EMPTY);
      setSelectedService("");
      setErrors({});
      setStatus("success");
    } catch {
      setFormError(
        "We could not reach the server. Check your connection and retry."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full max-w-md flex-col items-start rounded-2xl border border-gray-200 bg-white p-8">
        <CheckCircle2 className="text-green-600" size={32} />
        <h3 className="mt-4 text-xl font-bold text-neutral-800">
          Thanks — we have got it
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Your message is in our inbox and a real person replies within one
          business day. If it is urgent, book a slot directly on the calendar
          above.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <h3 className="text-xl font-bold text-neutral-800">Tell us about it</h3>
      <p className="mt-2 text-sm text-neutral-600">
        A few lines is plenty. We reply within one business day.
      </p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-4 md:flex-row">
          <Field label="First name" htmlFor="firstName" error={errors.firstName}>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Ada"
              value={values.firstName}
              onChange={update("firstName")}
              aria-invalid={Boolean(errors.firstName)}
            />
          </Field>
          <Field label="Last name" htmlFor="lastName" error={errors.lastName}>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Lovelace"
              value={values.lastName}
              onChange={update("lastName")}
              aria-invalid={Boolean(errors.lastName)}
            />
          </Field>
        </div>

        <Field label="Work email" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ada@company.com"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field label="Company (optional)" htmlFor="company" error={errors.company}>
          <Input
            id="company"
            name="company"
            placeholder="Company Ltd"
            value={values.company}
            onChange={update("company")}
          />
        </Field>

        <Field label="What can we help with?" htmlFor="serviceSlug">
          <select
            id="serviceSlug"
            name="serviceSlug"
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value)}
            className="h-10 w-full rounded-md border-none bg-gray-50 px-3 text-sm text-black shadow-input focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400"
          >
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="We are losing two days a week to manual order triage..."
            value={values.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            className="w-full resize-y rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400"
          />
        </Field>

        {formError && (
          <p role="alert" className="text-sm text-red-600">
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white",
            "shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
            "disabled:cursor-not-allowed disabled:opacity-60"
          )}
        >
          <span className="flex items-center justify-center gap-2">
            {status === "submitting" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {status === "submitting" ? "Sending..." : "Send message"}
          </span>
          <BottomGradient />
        </button>

        <p className="text-center text-xs text-neutral-500">
          We use your details to reply to this enquiry. Nothing else.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);
