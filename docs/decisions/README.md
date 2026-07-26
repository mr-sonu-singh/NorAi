# Architecture Decision Records (ADRs)

This directory contains records of significant architectural, technical, and UX design decisions made during the lifecycle of the NorAI frontend.

## Why ADRs Exist
Memory fades, team members change, and AI context windows clear. We use ADRs to capture the *context* and *reasoning* behind major decisions, answering the question: "Why was it built this way?"

## How Future Decisions are Documented
Before finalizing a major change that affects multiple components, introduces a new dependency, or alters a core UX pattern:
1. Copy the [ADR_TEMPLATE.md](./ADR_TEMPLATE.md).
2. Name it sequentially (e.g., `0001-use-tailwind-for-styling.md`).
3. Fill out the context, decision, and tradeoffs.
4. Submit via Pull Request for review.

## Version Tracking
ADRs are immutable once accepted. If a decision is later reversed or superseded, a new ADR is created, and the old one's status is updated to "Superseded by ADR-XXXX".
