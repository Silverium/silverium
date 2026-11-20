/**
 * Public data contract served at /api/apps and /api/about.
 *
 * Other apps (play, mistallas, cuerpo…) fetch these endpoints; this site
 * renders from the same builders so both always show the same data.
 * Bump API_VERSION on breaking changes to the response shape.
 */
import * as about from "./about";
import { App, getApps } from "./apps";
import { Locale, defaultLocale, locales } from "./i18n";

export const API_VERSION = 1;
export const SITE_URL = "https://www.soldeplata.dev";

export type PublicLink = {
	label: string;
	url: string;
	kind: about.Link["kind"];
};

export type PublicApp = App;

type Envelope = {
	version: typeof API_VERSION;
	/** Language of the text fields in this response */
	lang: Locale;
	/** Values accepted by the `lang` query param */
	availableLanguages: readonly Locale[];
};

export type AppsResponse = Envelope & {
	author: { name: string; url: string };
	apps: PublicApp[];
};

export type AboutResponse = Envelope & {
	name: string;
	shortName: string;
	role: string;
	location: string;
	url: string;
	photo: { url: string; width: number; height: number; alt: string };
	bio: string[];
	apps: PublicApp[];
	stack: string[];
	principles: { quote: string; author?: string }[];
	/** `lang` is the language the article is written in */
	writing: { intro: string; title: string; url: string; lang: Locale }[];
	contact: { title: string; links: PublicLink[] };
	social: PublicLink[];
};

type Options = {
	lang?: Locale;
	/**
	 * Prefix for this site's own paths. Defaults to SITE_URL so external
	 * consumers get absolute URLs; pass "" to keep them root-relative when
	 * rendering on soldeplata.dev itself.
	 */
	origin?: string;
};

const resolve = (href: string, origin: string) =>
	href.startsWith("/") ? `${origin}${href}` : href;

const toLink = (link: about.Link, origin: string): PublicLink => ({
	label: link.label,
	url: resolve(link.href, origin),
	kind: link.kind,
});

const envelope = (lang: Locale): Envelope => ({
	version: API_VERSION,
	lang,
	availableLanguages: locales,
});

export function getAppsPayload({
	exclude = [],
	lang = defaultLocale,
	origin = SITE_URL,
}: Options & { exclude?: string[] } = {}): AppsResponse {
	return {
		...envelope(lang),
		author: { name: about.person.name, url: origin || "/" },
		apps: getApps(lang)
			.filter((app) => !exclude.includes(app.slug))
			.map((app) => ({
				...app,
				image: app.image ? resolve(app.image, origin) : undefined,
			})),
	};
}

export function getAboutPayload({
	lang = defaultLocale,
	origin = SITE_URL,
}: Options = {}): AboutResponse {
	const { photo, ...person } = about.person;
	const copy = about.aboutCopy[lang];
	return {
		...envelope(lang),
		...person,
		role: copy.role,
		location: copy.location,
		url: `${origin}/about`,
		photo: {
			url: resolve(photo.src, origin),
			width: photo.width,
			height: photo.height,
			alt: copy.photoAlt,
		},
		bio: copy.bio,
		apps: getAppsPayload({ lang, origin }).apps,
		stack: about.stack,
		principles: copy.principles,
		writing: copy.writing.map(({ href, ...w }) => ({ ...w, url: href })),
		contact: {
			title: copy.contact.title,
			links: copy.contact.links.map((l) => toLink(l, origin)),
		},
		social: about.social.map((l) => toLink(l, origin)),
	};
}

/** "Mis Tallas, Play, and Cuerpo" */
export const appNames = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
}).format(getApps().map((app) => app.name));
