# Bug Report — HermesAI Landing Page
**Date:** 2026-06-30  
**Build Status:** ✅ Passing | **Lint Status:** ✅ Passing *(see Bug #4)*

---

## 🔴 High Severity

### Bug #1 — Dark Mode Flash of Unstyled Content (FOUC)
**File:** `src/components/ThemeProvider.tsx` — lines 29–39

The `localStorage` value is only read inside `useEffect`, after client-side hydration. The server always renders with `isDark = false` (light mode default). Users who previously selected dark mode will see a flash of the light theme on every page load before the `dark` class is applied.

```tsx
const [isDark, setIsDark] = useState(false); // always starts light
useEffect(() => {
  const saved = localStorage.getItem("luqman-theme"); // read only after hydration
  if (saved === "dark") { setIsDark(true); }
}, []);
```

**Fix direction:** Add an inline `<script>` in `<head>` (before hydration) that reads `localStorage` and sets the `dark` class immediately.

---

### Bug #2 — Chat Bubbles Appear on the Wrong Side in RTL
**File:** `src/components/demo/ChatSimulator.tsx` — lines 252–263

The entire page inherits `dir="rtl"` from `<html>` in `layout.tsx`. In an RTL context, `justify-start` aligns to the **right** and `justify-end` aligns to the **left**. The current code:

```tsx
className={`flex w-full animate-message-in ${
  msg.role === "user" ? "justify-end" : "justify-start"
}`}
```

Results in user messages appearing on the **left** and AI messages on the **right** — the opposite of the intended layout. This also conflicts with the `rounded-tr-none` (user) and `rounded-tl-none` (AI) bubble tail styling.

**Fix direction:** Wrap the inner iPhone screen in a `dir="ltr"` container to isolate it from the global RTL context.

---

### Bug #3 — Race Condition When Switching Business Type
**File:** `src/components/demo/ChatSimulator.tsx` — lines 154–179

The `setTimeout` inside `handleSend` is neither stored in a ref nor cancelled. If the user sends a message and then switches `businessType` before the 1200ms delay expires:

1. `useEffect([businessType])` resets `messages` for the new business
2. The old `setTimeout` fires and appends the old AI reply to the new business's conversation

For example, a "real estate" reply can appear inside a "restaurant" chat.

```tsx
// no cleanup — this setTimeout can fire after businessType changes
setTimeout(() => {
  setMessages((prev) => [...prev, { role: "ai", content: replyText }]);
  setIsTyping(false);
}, 1200);
```

**Fix direction:** Store the timer ID in a `useRef` and call `clearTimeout` at the start of `handleSend` and in the `useEffect` cleanup.

---

## 🟡 Medium Severity

### Bug #4 — ESLint Disabled During Builds
**File:** `next.config.ts` — line 5

```ts
eslint: {
  ignoreDuringBuilds: true,
}
```

The build output explicitly says `Skipping linting`. ESLint errors will never block a build or CI run — the first quality gate is permanently disabled.

---

### Bug #5 — 7 Icon Buttons Missing `aria-label`
**File:** `src/components/demo/ChatSimulator.tsx`

| Button | Line | Issue |
|--------|------|-------|
| Back (ArrowRight) | 208 | No `aria-label` |
| Video | 225 | No `aria-label` |
| Phone | 228 | No `aria-label` |
| More (MoreVertical) | 231 | No `aria-label` |
| Emoji (Smile) | 300 | No `aria-label` |
| Attachment (Paperclip) | 303 | No `aria-label` |
| Send / Camera | 318 | No `aria-label` |

Screen readers will announce only "button" with no description for all seven.

---

### Bug #6 — Content Invisible Before JavaScript Loads
**File:** `src/app/globals.css` — lines 36–39 & `src/components/ScrollReveal.tsx`

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
}
```

The `.revealed` class is added only via `IntersectionObserver` (JavaScript). With JS disabled or before hydration completes, every section wrapped in `ScrollReveal` (Hero, Problem, Solution, Benefits, Features, etc.) remains invisible. There is no `<noscript>` fallback and no CSS-only reveal path.

---

### Bug #7 — External Link Missing `target="_blank"`
**File:** `src/components/WhatsAppButton.tsx` — line 10

```tsx
return <a href={phoneNumber} className={...}>
```

The default `href` points to an external Calendly URL. Clicking it navigates the user **away** from the page in the same tab, ending their session on the site. Should include `target="_blank" rel="noopener noreferrer"`.

---

### Bug #8 — Prop Named `phoneNumber` Holds a URL
**File:** `src/components/WhatsAppButton.tsx` — lines 5–7

```tsx
interface Props {
  phoneNumber?: string; // name implies a WhatsApp phone number
}
// default value is a Calendly link, not a phone number
phoneNumber = "https://calendly.com/luqmanalhinai700/15-min-meeting"
```

The prop name is misleading — any developer passing `phoneNumber="wa.me/+1234567890"` would expect different behavior. Should be renamed to `href` or `url`.

---

### Bug #9 — FAQ Accordion Missing `aria-controls`
**File:** `src/components/FAQSection.tsx` — line 19

```tsx
<button aria-expanded={open === index}>
```

The ARIA accordion pattern requires `aria-controls="panel-{id}"` on the button and a matching `id="panel-{id}"` on the panel element. Without it, screen readers know the open/closed state but cannot identify which content is being controlled.

---

### Bug #10 — Floating Icons Have No Dark Mode Background Variants
**File:** `src/components/HeroSection.tsx` — lines 12–17

```tsx
const floatingIcons = [
  { bgColor: "bg-emerald-50", ... },
  { bgColor: "bg-sky-50", ... },
  { bgColor: "bg-rose-50", ... },
];
```

`FloatingIcon.tsx` applies `bgColor` as-is with no `dark:` variant. The icons keep very light backgrounds (e.g. `bg-emerald-50`) in dark mode, creating a harsh visual contrast against the dark card background (`dark:bg-slate-800`).

---

## 🔵 Low Severity

### Bug #11 — Left Arrow `←` Used as List Marker in RTL
**File:** `src/components/IndustriesSection.tsx` — line 16

```tsx
<li key={point}>← {point}</li>
```

In an RTL context, a left-pointing arrow (`←`) suggests moving backward or toward the end, which is the opposite of the intended "bullet point" feel. Common Arabic alternatives: `→`, `✓`, or `•`.

---

### Bug #12 — Left Arrow `←` in CTA Button Text
**File:** `src/components/BookingSection.tsx` — line 15

```tsx
<WhatsAppButton text="اختر وقتك الآن ←" size="lg" />
```

A left-pointing arrow is hardcoded into the primary CTA button label. In RTL it reads as pointing backward. Should use `→` or an icon component.

---

### Bug #13 — `duration-400` Is Not a Valid Tailwind Utility
**File:** `src/components/ScrollToTopButton.tsx` — line 31

```tsx
className={`... transition-all duration-400 ease-out ...`}
style={{ transitionDuration: "400ms" }}
```

`duration-400` does not exist in Tailwind's default scale (75, 100, 150, 200, 300, 500, 700, 1000). It generates no CSS and is dead code. The transition actually works only because of the inline `style` prop.

---

### Bug #14 — Decorative Buttons Missing `type="button"`
**File:** `src/components/demo/ChatSimulator.tsx` — lines 208, 225–233, 300–304

Buttons for emoji, attachment, video, phone, back, and more options do not have an explicit `type="button"`. While harmless outside a `<form>`, it is a best practice violation and can cause unexpected submit behavior if the component is ever nested inside a form.

---

### Bug #15 — `setTimeout` in ScrollReveal Has No Unmount Cleanup
**File:** `src/components/ScrollReveal.tsx` — lines 26–29

```tsx
observer.unobserve(el);
setTimeout(() => {
  el.classList.add("revealed"); // no cleanup ref stored
}, delay * 1000);
```

If the component unmounts between the `IntersectionObserver` callback and the `setTimeout` firing, the callback runs on a detached DOM node. With `delay = 0` this is rare; with any positive delay it is a minor memory leak.

---

## Priority Summary Table

| # | File | Description | Severity |
|---|------|-------------|----------|
| 1 | `ThemeProvider.tsx` | Dark mode FOUC on page load | **High** |
| 2 | `ChatSimulator.tsx` | Chat bubbles appear on wrong side in RTL | **High** |
| 3 | `ChatSimulator.tsx` | Race condition: old business reply appears in new chat | **High** |
| 4 | `next.config.ts` | `eslint.ignoreDuringBuilds: true` disables quality gate | **Medium** |
| 5 | `ChatSimulator.tsx` | 7 icon buttons without `aria-label` | **Medium** |
| 6 | `globals.css` + `ScrollReveal.tsx` | All sections invisible before JS loads | **Medium** |
| 7 | `WhatsAppButton.tsx` | External link missing `target="_blank"` | **Medium** |
| 8 | `WhatsAppButton.tsx` | Prop `phoneNumber` holds a URL — misleading name | **Medium** |
| 9 | `FAQSection.tsx` | Accordion missing `aria-controls` | **Medium** |
| 10 | `HeroSection.tsx` | Floating icon `bgColor` has no dark mode variant | **Medium** |
| 11 | `IndustriesSection.tsx` | `←` used as list marker in RTL context | **Low** |
| 12 | `BookingSection.tsx` | `←` hardcoded in CTA button text | **Low** |
| 13 | `ScrollToTopButton.tsx` | `duration-400` is not a valid Tailwind utility | **Low** |
| 14 | `ChatSimulator.tsx` | Decorative buttons missing `type="button"` | **Low** |
| 15 | `ScrollReveal.tsx` | `setTimeout` has no unmount cleanup | **Low** |

---

## Recommended Fix Order

1. **Bug #3** — Race condition (few lines, high user-visible impact)
2. **Bug #2** — RTL bubble sides (add `dir="ltr"` on the inner screen div)
3. **Bug #7** — `target="_blank"` on WhatsApp button (one line)
4. **Bug #1** — Dark mode FOUC (inline script in `layout.tsx`)
5. **Bugs #5 & #9** — Accessibility: `aria-label` + `aria-controls`
