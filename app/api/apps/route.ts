import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "../../data/i18n";
import { getAppsPayload } from "../../data/public-api";
import { preflight, publicJsonHeaders } from "../headers";

/**
 * GET /api/apps?exclude=play,cuerpo&lang=es
 *
 * Apps by the same author, for "more apps" sections and self-promotion.
 * `exclude` takes comma-separated slugs, so an app can leave itself out.
 * `lang` is "en" (default), "es" or "pt-BR".
 */
export function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams;
	const exclude = (params.get("exclude") ?? "")
		.split(",")
		.map((slug) => slug.trim())
		.filter(Boolean);
	const lang = resolveLocale(params.get("lang"));

	return NextResponse.json(getAppsPayload({ exclude, lang }), {
		headers: { ...publicJsonHeaders, "Content-Language": lang },
	});
}

export const OPTIONS = preflight;
