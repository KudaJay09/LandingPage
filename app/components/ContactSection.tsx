"use client";

import { useState, FormEvent } from "react";
import { H2, H3, P, PSmall, PXSmall } from "@/components/ui/typography";

interface Testimonial {
  quote: string;
  author: string;
}

interface ContactProps {
  testimonials: {
    title: string;
    description: string;
    items: Testimonial[];
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    note: string;
  };
}

export function ContactSection({ testimonials, contact }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="border-b border-slate-800/70 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Testimonials */}
          <div>
            <H2>{testimonials.title}</H2>
            <P className="mt-2">{testimonials.description}</P>

            <div className="mt-6 space-y-4">
              {testimonials.items.map((testimonial, idx) => (
                <figure
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <PSmall className="text-slate-200">
                    {testimonial.quote}
                  </PSmall>
                  <figcaption className="mt-2 text-xs text-slate-400">
                    {testimonial.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              {contact.badge}
            </p>
            <H3 className="mt-2">{contact.title}</H3>
            <PXSmall className="mt-2">{contact.description}</PXSmall>

            {submitStatus === "success" && (
              <div className="mt-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-sm text-emerald-300">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-300">
                Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300">
                  What are you looking to build?
                </label>
                <textarea
                  name="message"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  rows={4}
                  placeholder="Share a short description of your idea, timeline, and any links."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-full bg-blue-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>

            <PXSmall className="mt-4 text-[0.7rem] text-slate-500">
              {contact.note}
            </PXSmall>
          </div>
        </div>
      </div>
    </section>
  );
}
