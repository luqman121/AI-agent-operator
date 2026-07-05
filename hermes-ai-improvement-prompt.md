# Claude Code Prompt — Hermes AI Landing Page Improvements
# الموقع: https://luqmanalhinai.com/ | Repo: https://github.com/luqman121/AI-agent-website
---

## Context & Stack

You are working on **HermesAI** — an Arabic-language, RTL landing page targeting Gulf-region SMB owners (UAE, KSA, Oman, Qatar). The page sells an AI-powered WhatsApp agent service.

- **Framework:** Next.js (static export)
- **Language:** Arabic, RTL layout (`dir="rtl"`)
- **Font:** Tajawal (Google Fonts)
- **Design system:** Dark theme, Arabic-Indic numerals where natural, celebratory/energetic visual style
- **Primary CTA:** Calendly booking link — `https://calendly.com/luqmanalhinai700/15-min-meeting`
- **WhatsApp number to add:** [+968 77079778, e.g. +96891234567]
- **Repo branch:** main

---

## Objective

Make **4 targeted improvements** to the existing landing page — no redesign, no structural changes. Enhance what's there. All copy stays in Arabic.

---

## Change 1 — Add WhatsApp CTA Button (HIGH PRIORITY)

**Where:** Two locations:
1. Hero section — alongside the existing "احصل على موظفك الذكي الآن" Calendly button
2. Final CTA section — alongside the existing bottom Calendly button

**What to add:**

```jsx
// Secondary WhatsApp button — add next to every primary Calendly CTA
<a
  href="https://wa.me/[+96877079778]?text=أهلاً،%20أريد%20معرفة%20المزيد%20عن%20HermesAI"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp"
>
  {/* WhatsApp SVG icon */}
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.11 1.522 5.836L.057 23.882l6.197-1.624A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.68.965.982-3.588-.234-.369A9.818 9.818 0 1112 21.818z"/>
  </svg>
  تواصل عبر واتساب
</a>
```

**Styling requirements:**
- Background: `#25D366` (WhatsApp green)
- Color: white
- Same height and padding as the primary button
- On mobile: stack buttons vertically, full width
- Add subtle pulse animation on this button only (draws eye without being annoying)

```css
@keyframes whatsapp-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
}
.btn-whatsapp {
  animation: whatsapp-pulse 2.5s ease-in-out infinite;
}
```

---

## Change 2 — Fix Social Proof Number in Hero (HIGH PRIORITY)

**Where:** Hero section — the line currently reads:
> "موثوق به من مشاريع في منطقة الخليج · رد في أقل من ٣ ثوانٍ"

**Change to:**
> "[USER: insert number, e.g. +١٢] مشروع نشط في الخليج · رد في أقل من ٣ ثوانٍ"

Replace the vague "مشاريع" with a specific number. If the number is not yet significant (< 5), use a geographical claim instead:
> "يخدم مشاريع في الإمارات وعُمان والسعودية · رد في أقل من ٣ ثوانٍ"

**Formatting:** Keep existing trust-badge styling. Make the number bold/accented.

---

## Change 3 — Testimonials: Add Credibility Indicators (HIGH PRIORITY)

**Where:** The testimonials section (`#testimonials`) — currently has 3 testimonials (خالد العنزي، د. سارة المرزوقي، رنا الحبسي) with no photos or logos.

**Option A — If you have real client photos:**
Add `<Image>` component with circular crop (48×48px) above each name.

**Option B — If no real photos yet (use this as default):**
Add initials avatar + star rating to each testimonial card:

```jsx
// Testimonial card enhancement
<div className="testimonial-card">
  {/* Add this avatar at top */}
  <div className="testimonial-avatar">
    <span className="avatar-initials">خع</span> {/* First letters of name */}
  </div>

  {/* Add star rating */}
  <div className="star-rating" aria-label="تقييم ٥ من ٥">
    {"★★★★★"}
  </div>

  {/* Existing quote text */}
  <blockquote>...</blockquote>

  {/* Existing name/title */}
  <cite>...</cite>

  {/* Add platform badge */}
  <div className="platform-badge">
    {/* WhatsApp icon */} تم التحقق عبر واتساب بزنس
  </div>
</div>
```

**Avatar styling:**
```css
.avatar-initials {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Tajawal', sans-serif;
}
.star-rating {
  color: #F59E0B;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 8px 0;
}
.platform-badge {
  font-size: 11px;
  color: #6B7280;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}
```

---

## Change 4 — FAQ: Reveal the Pricing Answer (MEDIUM PRIORITY)

**Where:** The FAQ section — the question "كم يكلّف؟" currently has a collapsed/hidden answer.

**What to do:** Make sure this accordion item's answer is substantive. The answer should reveal a pricing range, not deflect. Replace the current answer content with:

```
الاستثمار يبدأ من [USER: insert starting price, e.g. ٢٩٩ دولار] شهرياً حسب حجم مشروعك وعدد المحادثات. 
أغلب مشاريعنا تعوّض التكلفة خلال أول شهرين من توفير الصفقات الضائعة.
احجز عرضاً مجانياً ونحضّر لك عرض سعر مخصص خلال ٢٤ ساعة.
```

If the user hasn't confirmed a price yet, use this holding text:
```
نحدد السعر بناءً على حجم مشروعك وعدد المحادثات الشهرية. 
احجز عرضاً مجانياً ونحضّر لك عرض سعر مخصص خلال ٢٤ ساعة — بدون أي التزام.
```

---

## Technical Notes

1. **RTL:** All new elements must support `dir="rtl"`. Flex direction, margins, paddings must be RTL-aware. Use `margin-inline-start` / `margin-inline-end` instead of `margin-left` / `margin-right`.

2. **Mobile-first:** All new buttons and cards must be tested at 375px width. Hero CTA buttons should stack vertically on mobile.

3. **No breaking changes:** Do not modify the page's routing, metadata, or `_app` / `layout` files unless necessary.

4. **Font:** Any new text must use `font-family: 'Tajawal', sans-serif` to match the existing Arabic typography.

5. **Arabic numerals:** Use Arabic-Indic numerals (١٢٣) not Western (123) for any numbers displayed to users, consistent with the existing page style.

6. **Dark theme:** All new components must be styled against the dark background. Don't assume a white/light background.

7. **Accessibility:** New icon buttons need `aria-label` in Arabic. New links need descriptive text (no bare "اضغط هنا").

---

## Files Likely to Edit

```
/
├── app/ or pages/
│   └── page.tsx (or index.tsx)      ← main landing page
├── components/
│   ├── HeroSection.tsx              ← Change 1 & 2
│   ├── TestimonialsSection.tsx      ← Change 3
│   └── FAQSection.tsx               ← Change 4
├── styles/
│   └── globals.css (or *.module.css) ← new CSS classes
```

If the project uses Tailwind, add new utility classes there instead of separate CSS files.

---

## Definition of Done

- [ ] WhatsApp button appears in Hero and Final CTA sections
- [ ] WhatsApp button has pulse animation and opens correct wa.me link
- [ ] Hero trust badge shows a specific number or geographical claim (not vague)
- [ ] Each testimonial has avatar initials + star rating + platform badge
- [ ] FAQ "كم يكلّف؟" answer shows pricing context (not empty/deflecting)
- [ ] All new elements are RTL-correct on both desktop and mobile (375px+)
- [ ] No console errors, no TypeScript errors
- [ ] `npm run build` passes without warnings

---

## What NOT to Change

- Do NOT touch the existing Calendly links or href values
- Do NOT change page structure, section order, or section IDs
- Do NOT modify existing copywriting — only add new elements
- Do NOT change the color scheme, fonts, or animation style of existing elements
- Do NOT add new sections or remove existing ones
