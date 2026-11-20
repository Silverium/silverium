import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";
import { appNames, getAboutPayload } from "../data/public-api";

export const metadata: Metadata = {
	alternates: { canonical: "/about" },
	title: "About",
	description: `Soldeplata Saketos Candela, a web developer based in Calafell, Spain, who builds and runs ${appNames}.`,
};

// Same payload as GET /api/about, with this site's links kept root-relative.
const about = getAboutPayload({ origin: "" });

const sectionTitle =
	"text-sm font-semibold tracking-wider uppercase text-zinc-500";
const primaryButton =
	"inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold duration-200 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white";
const secondaryButton =
	"inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold duration-200 border rounded-lg border-zinc-700 text-zinc-200 hover:border-zinc-400 hover:text-white";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-black">
			<Navigation />
			<main className="max-w-4xl px-4 pt-32 pb-24 mx-auto sm:px-6 md:pt-40">
				<div className="flex flex-col gap-10 sm:flex-row sm:items-center">
					<Image
						src={about.photo.url}
						alt={about.photo.alt}
						width={about.photo.width}
						height={about.photo.height}
						priority
						className="object-cover object-top w-40 h-40 rounded-2xl shrink-0 sm:w-48 sm:h-48"
					/>
					<div>
						<p className="text-sm font-medium text-zinc-400">About</p>
						<h1 className="mt-2 text-4xl text-zinc-50 font-display sm:text-5xl">
							{about.name}
						</h1>
						<p className="mt-3 text-lg text-zinc-300">
							{about.role} · {about.location}
						</p>
					</div>
				</div>

				<div className="mt-12 space-y-5 text-lg leading-8 text-zinc-400">
					{about.bio.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>

				<section className="mt-16">
					<h2 className={sectionTitle}>What I build</h2>
					<ul className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
						{about.apps.map((app) => (
							<li key={app.slug}>
								<a
									href={app.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block h-full p-6 duration-200 border rounded-xl border-zinc-800 hover:border-zinc-600 group"
								>
									<span className="flex items-center justify-between text-xl text-zinc-100 font-display">
										{app.name}
										<ArrowUpRight className="w-5 h-5 duration-200 text-zinc-500 group-hover:text-zinc-200" />
									</span>
									<span className="block mt-2 text-sm text-zinc-400">
										{app.tagline}
									</span>
								</a>
							</li>
						))}
					</ul>
				</section>

				<section className="mt-16">
					<h2 className={sectionTitle}>Stack</h2>
					<ul className="flex flex-wrap gap-2 mt-6">
						{about.stack.map((tech) => (
							<li
								key={tech}
								className="px-3 py-1 text-sm border rounded-full border-zinc-800 text-zinc-300"
							>
								{tech}
							</li>
						))}
					</ul>
				</section>

				<section className="mt-16">
					<h2 className={sectionTitle}>Principles</h2>
					<div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
						{about.principles.map((p) => (
							<figure
								key={p.quote}
								className="p-6 border-l-2 rounded-r-xl border-zinc-600 bg-zinc-900/50"
							>
								<blockquote className="text-zinc-200">“{p.quote}”</blockquote>
								{p.author && (
									<figcaption className="mt-3 text-sm text-zinc-500">
										— {p.author}
									</figcaption>
								)}
							</figure>
						))}
					</div>
				</section>

				<section className="mt-16">
					<h2 className={sectionTitle}>Writing</h2>
					{about.writing.map((w) => (
						<p key={w.url} className="mt-6 text-zinc-400">
							{w.intro}{" "}
							<a
								href={w.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underline duration-200 text-zinc-200 underline-offset-4 hover:text-white"
							>
								{w.title}
							</a>
						</p>
					))}
				</section>

				<section className="p-8 mt-16 border rounded-2xl border-zinc-800 bg-zinc-900/40">
					<h2 className="text-2xl text-zinc-100 font-display">
						{about.contact.title}
					</h2>
					<div className="flex flex-wrap gap-4 mt-6">
						{about.contact.links.map((link, i) => {
							const className = i === 0 ? primaryButton : secondaryButton;
							return link.url.startsWith("/") ? (
								<Link key={link.url} href={link.url} className={className}>
									{link.label}
									{i === 0 && <ArrowRight className="w-4 h-4" />}
								</Link>
							) : (
								<a
									key={link.url}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className={className}
								>
									{link.label} <ArrowUpRight className="w-4 h-4" />
								</a>
							);
						})}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
