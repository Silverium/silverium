import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "../global.css";
import { Analytics } from "./components/analytics";

const description =
	"Mis Tallas and Play: small, focused web apps built and run by Soldeplata Saketos.";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.soldeplata.dev"),
	title: {
		default: "Soldeplata · Independent web apps",
		template: "%s | soldeplata.dev",
	},
	authors: [
		{
			name: "Soldeplata Saketos",
			url: "http://www.github.com/Silverium",
		},
	],
	alternates: {
		canonical: "https://www.soldeplata.dev",
	},
	description,
	keywords: [
		"soldeplata",
		"Mis Tallas",
		"clothing sizes app",
		"shoe size tracker",
		"Play",
		"browser games",
		"tap games",
		"memory games",
		"web apps",
		"indie developer",
		"React",
		"Next.js",
		"Calafell",
		"Spain",
	],
	openGraph: {
		title: "Soldeplata · Independent web apps",
		description,
		url: "https://www.soldeplata.dev",
		siteName: "soldeplata.dev",
		images: [
			{
				url: "https://www.soldeplata.dev/og.png",
				width: 512,
				height: 512,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Soldeplata · Independent web apps",
		description,
		card: "summary_large_image",
		creator: "@soldesilver",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
