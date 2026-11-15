import { ArrowRight, ArrowUpRight, Check, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { apps } from "./apps";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Navigation } from "./components/nav";

const SITE_URL = "https://www.soldeplata.dev";

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": `${SITE_URL}/#organization`,
			name: "Soldeplata",
			url: SITE_URL,
			logo: `${SITE_URL}/og.png`,
			founder: { "@type": "Person", name: "Soldeplata Saketos Candela" },
			sameAs: [
				"https://www.linkedin.com/in/soldeplata/",
				"https://github.com/silverium",
				"https://x.com/soldesilver",
			],
		},
		...apps.map((app) => ({
			"@type": "SoftwareApplication",
			name: app.name,
			url: app.url,
			description: app.description,
			applicationCategory: app.category,
			operatingSystem: "Web",
			publisher: { "@id": `${SITE_URL}/#organization` },
		})),
	],
};

export default function Home() {
	return (
		<div className="min-h-screen bg-black">
			<Navigation />
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from local data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* Hero */}
			<section className="relative overflow-hidden">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-[36rem] bg-gradient-radial from-zinc-700/30 via-zinc-900/10 to-transparent"
				/>
				<div className="relative max-w-6xl px-4 pt-36 pb-20 mx-auto sm:px-6 md:pt-44 md:pb-28">
					<p className="text-sm font-medium tracking-wide text-zinc-400">
						Independent apps by Soldeplata
					</p>
					<h1 className="max-w-3xl mt-4 text-4xl leading-tight text-zinc-50 font-display sm:text-5xl md:text-6xl">
						Small apps that do one thing well.
					</h1>
					<p className="max-w-2xl mt-6 text-lg leading-8 text-zinc-400">
						Focused web apps that run in any browser. Each one solves a single
						everyday problem, with no clutter and nothing in your way.
					</p>
					<div className="flex flex-wrap gap-4 mt-10">
						<Link
							href="#apps"
							className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold duration-200 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white"
						>
							Explore the apps <ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href="/about"
							className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold duration-200 border rounded-lg border-zinc-700 text-zinc-200 hover:border-zinc-400 hover:text-white"
						>
							About me
						</Link>
					</div>
				</div>
			</section>

			{/* Apps */}
			<section id="apps" className="scroll-mt-24">
				<div className="max-w-6xl px-4 pb-24 mx-auto sm:px-6">
					<h2 className="text-sm font-semibold tracking-wider uppercase text-zinc-500">
						The apps
					</h2>
					<div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
						{apps.map((app) => (
							<Card key={app.slug}>
								<article className="relative z-20 flex flex-col h-full p-6 md:p-10">
									<div className="flex items-center justify-between gap-4">
										<h3 className="text-3xl text-zinc-50 font-display md:text-4xl">
											{app.name}
										</h3>
										<span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs border rounded-full shrink-0 border-zinc-700 text-zinc-400">
											<Globe className="w-3 h-3" aria-hidden="true" />
											<span className="sr-only">Languages: </span>
											{app.languages}
										</span>
									</div>
									<p className="mt-3 text-lg text-zinc-200">{app.tagline}</p>
									<p className="mt-4 leading-7 text-zinc-400">
										{app.description}
									</p>
									<ul className="mt-6 space-y-3">
										{app.highlights.map((h) => (
											<li
												key={h}
												className="flex items-start gap-3 text-sm text-zinc-300"
											>
												<Check
													className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400"
													aria-hidden="true"
												/>
												{h}
											</li>
										))}
									</ul>
									<div className="pt-8 mt-auto">
										<a
											href={app.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold duration-200 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white"
										>
											{app.cta} <ArrowUpRight className="w-4 h-4" />
										</a>
									</div>
								</article>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Built by */}
			<section className="border-t border-zinc-900">
				<div className="flex flex-col items-start max-w-6xl gap-6 px-4 py-16 mx-auto sm:flex-row sm:items-center sm:px-6">
					<Image
						src="/solde-hero.jpg"
						alt="Portrait of Soldeplata Saketos"
						width={80}
						height={80}
						className="object-cover object-top w-20 h-20 rounded-full shrink-0"
					/>
					<div className="flex-1">
						<h2 className="text-xl text-zinc-100 font-display">
							Designed, built and run by one developer
						</h2>
						{/* TODO: review bio */}
						<p className="max-w-2xl mt-2 leading-7 text-zinc-400">
							I'm Soldeplata, a web developer based in Calafell, Spain. I take
							every app from idea to production and keep it running, so the
							person who answers your email is the person who wrote the code.
						</p>
					</div>
					<Link
						href="/about"
						className="inline-flex items-center gap-1 text-sm font-semibold duration-200 shrink-0 text-zinc-200 hover:text-white"
					>
						More about me <ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</section>

			{/* Code samples */}
			<section className="border-t border-zinc-900">
				<div className="max-w-6xl px-4 py-10 mx-auto sm:px-6">
					<Link
						href="/projects"
						className="flex flex-wrap items-center gap-2 text-sm duration-200 group text-zinc-400 hover:text-zinc-200"
					>
						Looking for code samples? Browse hand-written exercises and past
						work from the
						<span className="px-2 py-0.5 text-xs font-medium border rounded-full border-zinc-600 text-zinc-200">
							pre-AI era
						</span>
						<ArrowRight className="w-4 h-4 duration-200 group-hover:translate-x-0.5" />
					</Link>
				</div>
			</section>

			<Footer />
		</div>
	);
}
