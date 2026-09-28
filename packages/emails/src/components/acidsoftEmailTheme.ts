/**
 * AcidSoft: бренд листів про бронювання — ЛИШЕ тут (кольори з :root acidsoft.io, 2026-09-28).
 * Картка з текстом лишається білою (надійний контраст у поштових клієнтах), тло листа — бренд-темне.
 * Шрифт: Inter з нашого домену (без Google Fonts), запасні — Arial / Helvetica.
 */
export const EMAIL_BRAND = {
  pageBackground: "#05050d",
  cardBorder: "#b61a6d40",
  accent: "#b61a6d",
  accentText: "#FFFFFF",
  fontStack: "Inter, Arial, Helvetica, sans-serif",
  /** Шлях від WEBAPP_URL; @2x-растр знака з acidsoft.io/favicon.svg + вордмарк ACID/SOFT (Orbitron) */
  logo: { path: "/acidsoft/icons/email-logo@2x.png", width: 187, height: 40, alt: "AcidSoft" },
  /** Self-hosted Inter (шляхи від WEBAPP_URL) */
  fonts: ["/acidsoft/fonts/inter-latin.woff2", "/acidsoft/fonts/inter-cyrillic.woff2"],
} as const;
