import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "../global.css";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Soldeplata Dev",
		template: "%s | soldeplata.dev",
	},
	authors: [
		{
			name: "Soldeplata Saketos",
			url: "http://www.github.com/Silverium",
		},
	],
	description: "Your favorite developer's favorite developer",
	keywords: ["soldeplata", "developer", "frontend", "portfolio", "projects", "frontend developer", "web development", "React", "NextJs", "HTML", "CSS", "JavaScript", "Calafell", "Spain"],
	openGraph: {
		title: "Soldeplata Dev",
		description: "Soldeplata.dev is the portfolio website of frontend developer Soldeplata. Explore their expertise in HTML, CSS, JavaScript, and more. Contact Soldeplata for freelance projects or collaborations.",
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
		title: "Soldeplata Dev",
		card: "summary_large_image",
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
