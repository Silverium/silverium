import { Locale } from "./i18n";

export type Link = {
	label: string;
	/** Root-relative paths ("/contact") point to soldeplata.dev */
	href: string;
	kind:
		| "contact"
		| "projects"
		| "email"
		| "linkedin"
		| "github"
		| "x"
		| "website";
};

export const person = {
	name: "Soldeplata Saketos Candela",
	shortName: "Soldeplata",
	photo: {
		src: "/solde-hero.jpg",
		width: 605,
		height: 806,
	},
};

export const stack = [
	"TypeScript",
	"JavaScript",
	"Node.js",
	"React",
	"Next.js",
	"Vue",
	"Redux",
	"HTML",
	"SCSS",
	"Jest",
];

export const social: Link[] = [
	{ label: "X", href: "https://x.com/soldesilver", kind: "x" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/soldeplata/",
		kind: "linkedin",
	},
	{ label: "GitHub", href: "https://github.com/silverium", kind: "github" },
];

const article = {
	title: "Unlocking Developer Teamwork: Proven Strategies for Success",
	href: "https://dev.to/silverium/a-team-player-approach-416a",
	/** Language the article is written in */
	lang: "en" as Locale,
};

type AboutCopy = {
	role: string;
	location: string;
	photoAlt: string;
	bio: string[];
	principles: { quote: string; author?: string }[];
	writing: (typeof article & { intro: string })[];
	contact: { title: string; links: Link[] };
};

const contactLinks = (contact: string, projects: string): Link[] => [
	{ label: contact, href: "/contact", kind: "contact" },
	{ label: projects, href: "/projects", kind: "projects" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/soldeplata/",
		kind: "linkedin",
	},
];

// TODO: review bio
export const aboutCopy: Record<Locale, AboutCopy> = {
	en: {
		role: "Web developer",
		location: "Calafell, Spain",
		photoAlt: "Portrait of Soldeplata Saketos",
		bio: [
			"I've been building for the web since 2016, from client websites to data-heavy dashboards and developer tooling. These days I put that experience into my own products: small, focused apps that I design, build and run end to end.",
			"I care about software that's simple to use and simple to maintain. I'd rather ship one feature that works offline and loads fast than ten that nobody needs.",
		],
		principles: [
			{ quote: "Laziness leads to unhappiness." },
			{
				quote: "All things are difficult before they are easy.",
				author: "Thomas Fuller",
			},
			{ quote: "Complexity is the inability to simplify.", author: "Me" },
			{
				quote: "If you don't want anybody to know it, don't do it.",
				author: "Chinese proverb",
			},
		],
		writing: [
			{
				...article,
				intro:
					"I strongly believe teamwork is essential to succeed as a developer.",
			},
		],
		contact: {
			title: "Want to work together or have feedback on an app?",
			links: contactLinks("Get in touch", "Code samples"),
		},
	},
	es: {
		role: "Desarrollo web",
		location: "Calafell, España",
		photoAlt: "Retrato de Soldeplata Saketos",
		bio: [
			"Construyo para la web desde 2016: webs para clientes, dashboards con muchos datos y herramientas para desarrolladores. Hoy pongo esa experiencia en mis propios productos: apps pequeñas y enfocadas que diseño, construyo y mantengo de principio a fin.",
			"Me importa el software sencillo de usar y sencillo de mantener. Prefiero lanzar una función que funcione sin conexión y cargue rápido antes que diez que nadie necesita.",
		],
		principles: [
			{ quote: "La pereza lleva a la infelicidad." },
			{
				quote: "Todas las cosas son difíciles antes de ser fáciles.",
				author: "Thomas Fuller",
			},
			{
				quote: "La complejidad es la incapacidad de simplificar.",
				author: "Yo",
			},
			{
				quote: "Si no quieres que nadie lo sepa, no lo hagas.",
				author: "Proverbio chino",
			},
		],
		writing: [
			{
				...article,
				intro:
					"Creo firmemente que el trabajo en equipo es esencial para triunfar en el desarrollo de software.",
			},
		],
		contact: {
			title: "¿Quieres colaborar o tienes comentarios sobre alguna app?",
			links: contactLinks("Contacta conmigo", "Ejemplos de código"),
		},
	},
	"pt-BR": {
		role: "Desenvolvimento web",
		location: "Calafell, Espanha",
		photoAlt: "Retrato de Soldeplata Saketos",
		bio: [
			"Construo para a web desde 2016, de sites para clientes a dashboards cheios de dados e ferramentas para desenvolvedores. Hoje coloco essa experiência nos meus próprios produtos: apps pequenos e focados que eu desenho, construo e mantenho de ponta a ponta.",
			"Me importo com software simples de usar e simples de manter. Prefiro lançar uma funcionalidade que funcione offline e carregue rápido do que dez que ninguém precisa.",
		],
		principles: [
			{ quote: "A preguiça leva à infelicidade." },
			{
				quote: "Todas as coisas são difíceis antes de se tornarem fáceis.",
				author: "Thomas Fuller",
			},
			{
				quote: "A complexidade é a incapacidade de simplificar.",
				author: "Eu",
			},
			{
				quote: "Se você não quer que ninguém saiba, não faça.",
				author: "Provérbio chinês",
			},
		],
		writing: [
			{
				...article,
				intro:
					"Acredito muito que o trabalho em equipe é essencial para ter sucesso no desenvolvimento de software.",
			},
		],
		contact: {
			title: "Quer trabalhar comigo ou tem algum feedback sobre um app?",
			links: contactLinks("Fale comigo", "Exemplos de código"),
		},
	},
};
