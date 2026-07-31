"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you! Your message has been sent to the NorAI team.");
    e.currentTarget.reset();
  }

  return (
    <>
      <Header />

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
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Location</strong>
                  <br />
                  Umarganj Ghazipur, Uttar Pradesh, India
                </div>
              </li>
              <li className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <strong>Email Direct</strong>
                  <br />
                  contact@norai.tech
                </div>
              </li>
              <li className="info-item">
                <i className="fa-solid fa-shield-halved"></i>
                <div>
                  <strong>Enterprise Support</strong>
                  <br />
                  AI micro-utilities for Business
                </div>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
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
                className="form-control"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tool">Interested Tool / Inquiry</label>
              <select id="tool" className="form-control" style={{ color: "var(--text-main)" }}>
                <option>AI Resume Shortlister</option>
                <option>Personalized Course Note-Taker</option>
                <option>Community Chat Summarizer</option>
                <option>Smart Danik News</option>
                <option>AR/VR Experience Studio</option>
                <option>General Partner Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Tell us about your use case..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Submit Inquiry <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}