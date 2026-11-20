import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "../../data/i18n";
import { getAboutPayload } from "../../data/public-api";
import { preflight, publicJsonHeaders } from "../headers";

/**
 * GET /api/about?lang=es
 *
 * Everything needed to render an "About the author" page.
 * `lang` is "en" (default), "es" or "pt-BR".
 */
export function GET(request: NextRequest) {
	const lang = resolveLocale(request.nextUrl.searchParams.get("lang"));

	return NextResponse.json(getAboutPayload({ lang }), {
		headers: { ...publicJsonHeaders, "Content-Language": lang },
	});
}

export const OPTIONS = preflight;
