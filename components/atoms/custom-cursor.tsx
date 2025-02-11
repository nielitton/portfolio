'use client'

import { useCustomCursor } from "@/hooks/use-custom-cursor"
import { JSX } from "react"

export default function CustomCursor(): JSX.Element {
    const { isHovering } = useCustomCursor()

    return (
        <div
            id="custom-cursor"
            className="custom-cursor"
            style={{
                position: "fixed",
                width: isHovering ? "40px" : "20px",
                height: isHovering ? "40px" : "20px",
                backgroundColor: "white",
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                transition: "width 0.2s ease, height 0.2s ease",
            }}
        />
    )
}
