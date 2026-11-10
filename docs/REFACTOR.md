# Refactor notes

## Product integrity

- Removed unsupported average ratings, user-count metrics, fabricated testimonial quotes, named facilitator profiles, and generic social-profile links.
- Replaced social proof with clearly authored product principles and a transparent explanation of the intended guidance model.
- Marked plans and pricing as illustrative concept data; no checkout or payment flow is implied.
- Updated FAQs so they describe the proposed product experience instead of promising live services that do not exist.
- Added explicit preview messaging to the application section and footer.

## Application flow

- Kept Zod validation and field-level feedback.
- Separated live endpoint delivery from local demo confirmation.
- Demo mode no longer claims that a real application was received or that a facilitator will reply.
- Added HTTPS endpoint validation; HTTP is accepted only for localhost in development.
- Improved error feedback for insecure or malformed endpoint configuration.
- Added tests for demo mode, endpoint delivery, invalid URLs, and honeypot handling.

## Interaction and accessibility

- Reworked active-section tracking around a stable reading line to avoid observer callback ordering issues.
- Added scroll, resize, hash, and section-resize updates with animation-frame scheduling and cleanup.
- Improved mobile navigation with outside-click closing, Escape handling, and focus placement.
- Forwarded refs through the shared Button primitive for reliable focus management.
- Fixed system-theme changes and cross-tab storage updates so the icon and page theme stay synchronized.
- Preserved Motion-based reveal animations and reduced-motion handling.

## Performance and maintainability

- Removed obsolete testimonial/facilitator image assets from the runtime bundle.
- Consolidated site configuration and removed placeholder social URLs.
- Converted retained photography to WebP and removed unused profile imagery and stale screenshots.
- Updated page metadata and documentation to reflect the actual static-demo capabilities.
