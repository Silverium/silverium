import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { apps } from "../apps";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";
import { Article } from "./article";

export const metadata: Metadata = {
	alternates: { canonical: "/projects" },
	title: "Code samples",
	description:
		"Hand-written code samples, take-home exercises and client work by Soldeplata, from the pre-AI era (2018–2023).",
};

export default function ProjectsPage() {
	const projectsBySlug = allProjects.reduce(
		(acc, p) => {
			acc[p.slug] = p;
			return acc;
		},
		{} as Record<string, (typeof allProjects)[number]>,
	);

	const featured = projectsBySlug["nyc-taxis-demo"];
	const top2 = projectsBySlug["nextjs-products-drag-n-drop"];
	const top3 = projectsBySlug["container-vessel-schedules"];

	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured?.slug &&
				project.slug !== top2?.slug &&
				project.slug !== top3?.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<div className="flex flex-wrap items-center gap-3">
						<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Code samples &amp; exercises
						</h1>
						<span className="px-2.5 py-1 text-xs font-medium border rounded-full border-zinc-600 text-zinc-300">
							Pre-AI era · 2018–2023
						</span>
					</div>
					<p className="mt-4 leading-7 text-zinc-400">
						Hand-written take-home exercises from job applications and earlier
						client work, built before AI coding assistants. For the products I
						run today, see{" "}
						{apps.map((app, i) => (
							<React.Fragment key={app.slug}>
								{i > 0 && " and "}
								<a
									href={app.url}
									target="_blank"
									rel="noopener noreferrer"
									className="underline duration-200 text-zinc-200 underline-offset-4 hover:text-white"
								>
									{app.name}
								</a>
							</React.Fragment>
						))}
						.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						{featured && (
							<Link href={`/projects/${featured.slug}`}>
								<article className="relative w-full h-full p-4 md:p-8">
									<div className="flex items-center justify-between gap-2">
										<div className="text-xs text-zinc-100">
											{featured.date ? (
												<time dateTime={new Date(featured.date).toISOString()}>
													{Intl.DateTimeFormat(undefined, {
														dateStyle: "medium",
													}).format(new Date(featured.date))}
												</time>
											) : (
												<span>SOON</span>
											)}
										</div>
									</div>

									<h2
										id="featured-post"
										className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
									>
										{featured.title}
									</h2>
									<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
										{featured.description}
									</p>
									<div className="absolute bottom-4 md:bottom-8">
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Read more <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								</article>
							</Link>
						)}
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{top2 &&
							top3 &&
							[top2, top3].map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
			</div>
			<div className="mt-16">
				<Footer />
			</div>
		</div>
	);
}
