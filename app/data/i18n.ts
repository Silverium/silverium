export const locales = ["en", "es", "pt-BR"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/**
 * Lenient match for the `lang` query param: "es", "es-ES", "ES" → "es";
 * "pt", "pt-br", "pt_BR", "pt-PT" → "pt-BR". Anything else → "en".
 */
export function resolveLocale(input?: string | null): Locale {
	const tag = (input ?? "").trim().toLowerCase();
	if (tag.startsWith("es")) return "es";
	if (tag.startsWith("pt")) return "pt-BR";
	return defaultLocale;
}
