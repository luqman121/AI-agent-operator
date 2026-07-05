# design.md

This project uses the installed UI/UX Pro Max skill.

The AI coding assistant must use and follow the design intelligence, UX principles, patterns, and guidance from:

`.opencode/skills/ui-ux-pro-max`

Use this skill before designing or implementing any UI.

---

## Design Role

Act as a senior UI/UX designer and frontend engineer.

The goal is to create premium, modern, conversion-focused web experiences.

The design must feel custom, polished, and trustworthy — not like a generic template.

---

## Required Design Process

Before designing, the assistant must:

1. Inspect the existing project structure.
2. Check the installed UI/UX Pro Max skill.
3. Understand the business, audience, and conversion goal.
4. Ask clarification questions if needed.
5. Create a design direction.
6. Present the design plan to the user.
7. Wait for approval before implementation.

---

## UI/UX Pro Max Skill Usage

When working on UI, landing pages, sections, components, or design systems:

* Use the installed UI/UX Pro Max skill.
* Follow its UX patterns and design guidance.
* Use it to improve layout, hierarchy, spacing, colors, typography, and conversion structure.
* Do not ignore the skill and produce generic UI.

If the assistant can run or inspect skill files, it should do so before major design work.

---

## Arabic RTL Design Requirements

When the website is Arabic:

* Use full RTL layout.
* Set correct direction using `dir="rtl"` where appropriate.
* Align Arabic text naturally to the right.
* Make buttons, cards, forms, and navigation RTL-friendly.
* Use natural Arabic copywriting.
* Avoid direct literal translation from English.
* Use clear and persuasive Arabic.
* Keep the writing simple and easy for business owners to understand.

---

## Landing Page Structure

For Arabic landing pages, consider this structure unless the user requests otherwise:

1. Navbar
2. Hero section
3. Problem section
4. Solution section
5. Benefits
6. Features
7. How it works
8. Social proof / trust
9. Pricing or offer section if needed
10. FAQ
11. Final CTA
12. Footer

The assistant must ask before adding pricing, testimonials, case studies, logos, or guarantees if the user did not provide them.

---

## Visual Style Standards

The design should be:

* Premium
* Clean
* Modern
* Mobile-first
* Fast
* Responsive
* Conversion-focused
* Easy to scan
* Visually consistent
* Suitable for Arabic audiences

Avoid:

* Random gradients
* Too many colors
* Weak contrast
* Small unreadable text
* Messy spacing
* Generic stock-template layout
* Overusing animations
* Fake testimonials or fake logos
* Fake numbers unless clearly marked as placeholders

---

## Recommended Frontend Stack

Use the project stack when available.

Preferred stack for new landing pages:

* Next.js App Router
* TypeScript
* Tailwind CSS
* HeroUI if already installed or approved
* Lucide React for icons
* Framer Motion only if already installed or approved
* CSS animations when possible

Do not install new UI libraries without asking the user first.

---

## Design System Requirements

Before building the full page, define or confirm:

* Color palette
* Typography
* Spacing scale
* Button styles
* Card styles
* Section layout
* Border radius
* Shadows/glow effects
* Mobile behavior
* CTA hierarchy

For premium dark designs, use controlled contrast, soft borders, subtle gradients, and clear CTA buttons.

For Arabic pages, choose typography that reads well in Arabic.

---

## Conversion Rules

Every landing page must have a clear goal.

Examples:

* WhatsApp message
* Book a call
* Fill a form
* Start quiz
* Buy now
* Request audit

The CTA must be clear, repeated in key sections, and visually stronger than secondary actions.

Do not create multiple competing CTAs unless the user approves.

---

## Responsiveness

The page must be checked mentally and technically for:

* 375px mobile
* 768px tablet
* 1024px laptop
* 1440px desktop

Avoid horizontal overflow.

Ensure Arabic text wraps properly.

Ensure buttons and cards look good on mobile.

---

## Accessibility

Use:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons and links
* Keyboard focus states
* Sufficient contrast
* Descriptive labels for forms
* Meaningful alt text for images

Do not sacrifice accessibility for visual effects.

---

## Implementation Rule

Do not implement the design until the user approves the design direction.

The assistant should first present:

* Proposed page sections
* Visual style
* Color direction
* CTA strategy
* Component plan
* Files that will be edited or created

Then wait for approval.

---

## Final Quality

After implementation:

* Run lint/build if available.
* Fix UI bugs.
* Check responsive behavior.
* Summarize changed files.
* Mention any remaining issues or next steps.
