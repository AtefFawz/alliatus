import { useEffect, useState } from "react";

/**
 * Scroll-spy based on a stable reading line below the sticky header.
 * This avoids observer callback-order races when several sections intersect at once.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = Math.min(220, Math.max(112, window.innerHeight * 0.32));
      let current = sections[0]?.id ?? null;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id;
        else break;
      }

      const atPageEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atPageEnd) current = sections[sections.length - 1]?.id ?? current;
      setActive(current);
    };

    const scheduleUpdate = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    sections.forEach((section) => resizeObserver.observe(section));

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, [ids]);

  return active;
}
