"use client";

import { useEffect } from "react";

const ACID_THEME_CLASS = "acid-theme";

/**
 * AcidSoft: вмикає тему apps/web/styles/acidsoft-theme.css лише на публічних сторінках бронювання.
 * Обгортка дає тему одразу в SSR (без спалаху), клас на <body> — для порталів (діалоги, поповери),
 * які рендеряться поза обгорткою. При виході зі сторінок бронювання клас знімається.
 */
export function AcidThemeScope({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add(ACID_THEME_CLASS);
    return () => document.body.classList.remove(ACID_THEME_CLASS);
  }, []);

  return <div className={`${ACID_THEME_CLASS} min-h-screen`}>{children}</div>;
}
