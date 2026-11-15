"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { apps } from "../apps";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:soldeplatadeveloper@gmail.com",
		label: "Email",
		handle: "soldeplatadeveloper@gmail.com",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/soldeplata/",
		label: "LinkedIn",
		handle: "soldeplata",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/soldesilver",
		label: "X",
		handle: "@soldesilver",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/silverium",
		label: "GitHub",
		handle: "silverium",
	},
];

export default function ContactPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<main className="max-w-6xl px-4 pt-32 pb-24 mx-auto sm:px-6 md:pt-40">
				<h1 className="text-4xl text-zinc-50 font-display sm:text-5xl">
					Get in touch
				</h1>
				<p className="max-w-2xl mt-4 text-lg leading-8 text-zinc-400">
					Questions, feedback, or a project you'd like to discuss? Email is the
					fastest way to reach me.
				</p>
				<div className="grid w-full grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target="_blank"
								className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-16 md:p-10"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="font-medium text-center break-all duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
				<p className="mt-12 text-sm text-zinc-500">
					App support:{" "}
					{apps.map((app, i) => (
						<span key={app.slug}>
							{i > 0 && " · "}
							{app.name}{" "}
							<a
								href={`mailto:${app.supportEmail}`}
								className="underline duration-200 text-zinc-300 underline-offset-4 hover:text-white"
							>
								{app.supportEmail}
							</a>
						</span>
					))}
				</p>
			</main>
			<Footer />
		</div>
	);
}
