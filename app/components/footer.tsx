import Link from "next/link";
import { social } from "../data/about";
import { getAppsPayload } from "../data/public-api";

const company = [
	{ name: "About", href: "/about" },
	{ name: "Code samples", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Privacy policy", href: "/policy" },
];

// Same payload as GET /api/apps
const { apps } = getAppsPayload({ origin: "" });

const linkClass = "text-sm duration-200 text-zinc-400 hover:text-zinc-100";

export const Footer: React.FC = () => {
	return (
		<footer className="border-t border-zinc-800">
			<div className="max-w-6xl px-4 py-12 mx-auto sm:px-6">
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
					<div className="col-span-2 sm:col-span-1">
						<Link href="/" className="text-lg font-display text-zinc-100">
							Soldeplata
						</Link>
						<p className="mt-2 text-sm text-zinc-500">
							Small apps that do one thing well.
						</p>
					</div>
					<div>
						<h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
							Apps
						</h3>
						<ul className="mt-4 space-y-2">
							{apps.map((app) => (
								<li key={app.slug}>
									<a
										href={app.url}
										target="_blank"
										rel="noopener noreferrer"
										className={linkClass}
									>
										{app.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
							Company
						</h3>
						<ul className="mt-4 space-y-2">
							{company.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className={linkClass}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
							Social
						</h3>
						<ul className="mt-4 space-y-2">
							{social.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className={linkClass}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<p className="pt-8 mt-12 text-xs border-t border-zinc-900 text-zinc-600">
					© {new Date().getFullYear()} Soldeplata Saketos Candela
				</p>
			</div>
		</footer>
	);
};
