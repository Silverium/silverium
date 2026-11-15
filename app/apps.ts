export type App = {
	slug: string;
	name: string;
	tagline: string;
	description: string;
	url: string;
	highlights: string[];
	languages: string;
	cta: string;
	supportEmail: string;
	category: string;
	/** Optional screenshot under /public/apps/ */
	image?: string;
};

export const apps: App[] = [
	{
		slug: "mistallas",
		name: "Mis Tallas",
		tagline: "Your size in every brand, for the whole family.",
		description:
			"Sizes change from brand to brand and kids outgrow theirs every season. Mis Tallas keeps clothing, shoe and accessory sizes for everyone at home in one place, so buying online stops being a guess.",
		url: "https://mistallas.soldeplata.dev",
		highlights: [
			"Works offline and installs like a native app",
			"No ads, no tracking",
			"Try the demo without creating an account",
		],
		languages: "Spanish",
		cta: "Open Mis Tallas",
		supportEmail: "mistallas@soldeplata.dev",
		category: "LifestyleApplication",
	},
	{
		slug: "play",
		name: "Play",
		tagline: "Tiny tap & swipe games you can share.",
		description:
			"Quick reflex and memory games that run in any browser, from Flappy and Snake to Speed Numbers and Speed Shapes. Every run is saved as a replay you can send to a friend.",
		url: "https://play.soldeplata.dev",
		highlights: [
			"Free to play, no install needed",
			"Share every run as a replay",
			"Global leaderboard",
		],
		languages: "EN · ES · PT",
		cta: "Play now",
		supportEmail: "play@soldeplata.dev",
		category: "GameApplication",
	},
];
