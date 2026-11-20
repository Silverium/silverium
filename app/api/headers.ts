/**
 * Public, credential-free JSON: any origin may read it, so the other apps can
 * fetch it from the browser as well as at build time.
 */
export const publicJsonHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
	"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export function preflight() {
	return new Response(null, { status: 204, headers: publicJsonHeaders });
}
