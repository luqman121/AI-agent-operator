"use client";

import React from "react";

interface ConnectorLineProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  length?: string;
}

export default function ConnectorLine({
  className = "",
  direction = "horizontal",
  length = "80px",
}: ConnectorLineProps) {
  return (
    <div
      className={`bg-slate-300 rounded-full ${className}`}
      style={{
        width: direction === "horizontal" ? length : "2px",
        height: direction === "vertical" ? length : "2px",
      }}
    />
  );
}
