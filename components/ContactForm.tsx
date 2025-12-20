"use client";

import { useState } from "react";
import { validateContact, type ContactFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = validateContact(values);
    setErrors(result.errors);

    if (!result.isValid) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    try {
      setStatus("submitting");
      setStatusMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setStatusMessage("Thanks! Your message has been sent.");
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-ink-700 dark:text-ink-200">
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange("name")}
            className={cn(
              "rounded-xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-900 focus:border-ink-900 focus:outline-none dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-50",
              errors.name && "border-accent-600",
            )}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-accent-600">
              {errors.name}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink-700 dark:text-ink-200">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange("email")}
            className={cn(
              "rounded-xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-900 focus:border-ink-900 focus:outline-none dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-50",
              errors.email && "border-accent-600",
            )}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-accent-600">
              {errors.email}
            </span>
          )}
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-ink-700 dark:text-ink-200">
        Subject
        <input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange("subject")}
          className={cn(
            "rounded-xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-900 focus:border-ink-900 focus:outline-none dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-50",
            errors.subject && "border-accent-600",
          )}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          required
        />
        {errors.subject && (
          <span id="subject-error" className="text-xs text-accent-600">
            {errors.subject}
          </span>
        )}
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-ink-700 dark:text-ink-200">
        Message
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          rows={6}
          className={cn(
            "rounded-xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-900 focus:border-ink-900 focus:outline-none dark:border-ink-700 dark:bg-ink-900/60 dark:text-ink-50",
            errors.message && "border-accent-600",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <span id="message-error" className="text-xs text-accent-600">
            {errors.message}
          </span>
        )}
      </label>

      <label className="sr-only" aria-hidden="true">
        Company
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={handleChange("company")}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-ink-50 dark:text-ink-900"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {statusMessage && (
          <p
            className={cn(
              "text-sm",
              status === "success" ? "text-moss-600 dark:text-moss-300" : "text-accent-600",
            )}
            role={status === "error" ? "alert" : "status"}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
