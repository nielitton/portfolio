import { useEffect, useState } from "react";
import { gsap } from "gsap";

export function useCustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = document.getElementById("custom-cursor") as HTMLDivElement | null;
        if (!cursor) return;

        const onMouseMove = (event: MouseEvent) => {
            gsap.to(cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        const onMouseDown = () => {
            gsap.to(cursor, { scale: 0.8, duration: 0.1 });
        };

        const onMouseUp = () => {
            gsap.to(cursor, { scale: 1, duration: 0.1 });
        };

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);

        const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            interactiveElements.forEach(el => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return { isHovering };
}