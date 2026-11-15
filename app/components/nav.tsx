"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const links = [
	{ name: "Apps", href: "/#apps", className: "" },
	{ name: "About", href: "/about", className: "" },
	{ name: "Code samples", href: "/projects", className: "hidden sm:inline" },
	{ name: "Contact", href: "/contact", className: "" },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/80 border-zinc-800"
				}`}
			>
				<nav className="flex items-center justify-between max-w-6xl px-4 py-5 mx-auto sm:px-6">
					<Link
						href="/"
						className="text-lg duration-200 font-display text-zinc-100 hover:text-white"
					>
						Soldeplata
					</Link>
					<div className="flex items-center gap-5 text-sm sm:gap-8">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`duration-200 text-zinc-400 hover:text-zinc-100 ${link.className}`}
							>
								{link.name}
							</Link>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
};
