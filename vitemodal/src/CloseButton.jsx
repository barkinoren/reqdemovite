"use client";
import React, { useState } from "react";

export default function CloseButton({ onClick, style }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={onClick}
      aria-label="Close"
      style={{
        backgroundColor: isActive ? "orange" : "white",
        color: isActive ? "white" : "orange",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        position: "relative",
        ...style
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      <span
        style={{
          color: isActive ? "white" : "orange",
          fontSize: "2rem",
          fontWeight: "bold",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none"
        }}
      >
        ×
      </span>
    </button>
  );
}
