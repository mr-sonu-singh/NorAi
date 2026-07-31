"use client";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions about integrating our Micro-SaaS tools or setting up
          custom API integrations for your team?
        </p>
      </section>
      <section id="contact" className="section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div>
              <h3>Get in Touch</h3>
              <p>
                Have questions about integrating our Micro-SaaS tools or
                setting up custom API integrations for your team?
              </p>
            </div>
            <ul className="info-list">
              <li className="info-item">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <div>
                  <strong>Location</strong>
                  <br />
                  Umarganj Ghazipur, Uttar Pradesh, India
                </div>
              </li>
              <li className="info-item">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <div>
                  <strong>Email Direct</strong>
                  <br />
                  <a href="mailto:contact@norai.tech">contact@norai.tech</a>
                </div>
              </li>
              <li className="info-item">
                <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                <div>
                  <strong>Enterprise Support</strong>
                  <br />
                  AI micro-utilities for Business
                </div>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="e.g. Rahul Sharma"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tool">Interested Tool / Inquiry</label>
              <select id="tool" name="tool" className="form-control" style={{ color: "var(--text-main)" }}>
                <option>AI Resume Shortlister</option>
                <option>Personalized Course Note-Taker</option>
                <option>Community Chat Summarizer</option>
                <option>Smart Dainik News</option>
                <option>AR/VR Experience Studio</option>
                <option>General Partner Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Tell us about your use case..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit Inquiry"}
              {status !== "sending" && <i className="fa-solid fa-paper-plane"></i>}
            </button>

            <div role="status" aria-live="polite">
              {status === "sent" && <p className="form-success">Thanks — we'll get back to you shortly.</p>}
              {status === "error" && <p className="form-error">Something went wrong. Please email us directly at contact@norai.tech.</p>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}