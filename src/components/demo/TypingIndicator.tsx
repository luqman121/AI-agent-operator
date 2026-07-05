"use client";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      <span
        className="h-2 w-2 rounded-full bg-[#9AA0A6] animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="h-2 w-2 rounded-full bg-[#9AA0A6] animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <span
        className="h-2 w-2 rounded-full bg-[#9AA0A6] animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}
