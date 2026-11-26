import { Locale, defaultLocale } from "./i18n";

/** Text that changes with the language */
type AppCopy = {
	tagline: string;
	description: string;
	highlights: string[];
	/** Languages the app itself is available in */
	languages: string;
	cta: string;
	/** Label of the demo link, for apps with a `demoUrl` */
	demoCta?: string;
};

type AppEntry = {
	slug: string;
	name: string;
	url: string;
	supportEmail: string;
	/** Built for a client rather than run by me */
	client?: boolean;
	/** schema.org applicationCategory */
	category: string;
	/** Absolute URL of the app icon, hosted by the app itself */
	icon?: string;
	/** Optional screenshot under /public/apps/, 1200x750 (16:10) */
	image?: string;
	/** A page to try the app without an account, linked next to the main CTA */
	demoUrl?: string;
	copy: Record<Locale, AppCopy>;
};

export type App = Omit<AppEntry, "copy"> & AppCopy;

const entries: AppEntry[] = [
	{
		slug: "mistallas",
		name: "Mis Tallas",
		url: "https://mistallas.soldeplata.dev",
		supportEmail: "mistallas@soldeplata.dev",
		category: "LifestyleApplication",
		icon: "https://mistallas.soldeplata.dev/favicon/web-app-manifest-192x192.png",
		image: "/apps/mistallas.jpg",
		demoUrl: "https://mistallas.soldeplata.dev/demo",
		copy: {
			en: {
				tagline: "Your size in every brand, for the whole family.",
				description:
					"Sizes change from brand to brand and kids outgrow theirs every season. Mis Tallas keeps clothing, shoe and accessory sizes for everyone at home in one place, so buying online stops being a guess.",
				highlights: [
					"Works offline and installs like a native app",
					"No ads, no tracking",
					"Try the demo without creating an account",
				],
				languages: "Spanish",
				cta: "Open Mis Tallas",
				demoCta: "Try the demo",
			},
			es: {
				tagline: "Tu talla en cada marca, para toda la familia.",
				description:
					"Las tallas cambian de una marca a otra y a los peques la ropa se les queda pequeña cada temporada. Mis Tallas guarda las tallas de ropa, calzado y complementos de toda la familia en un solo sitio, para que comprar online deje de ser una lotería.",
				highlights: [
					"Funciona sin conexión y se instala como una app nativa",
					"Sin anuncios ni rastreo",
					"Prueba la demo sin crear una cuenta",
				],
				languages: "Español",
				cta: "Abrir Mis Tallas",
				demoCta: "Probar la demo",
			},
			"pt-BR": {
				tagline: "Seu tamanho em cada marca, para toda a família.",
				description:
					"Os tamanhos mudam de uma marca para outra e as crianças perdem as roupas a cada estação. O Mis Tallas guarda os tamanhos de roupas, calçados e acessórios de todo mundo da casa em um só lugar, para que comprar online deixe de ser um chute.",
				highlights: [
					"Funciona offline e se instala como um app nativo",
					"Sem anúncios, sem rastreamento",
					"Experimente a demo sem criar uma conta",
				],
				languages: "Espanhol",
				cta: "Abrir o Mis Tallas",
				demoCta: "Testar a demo",
			},
		},
	},
	{
		slug: "play",
		name: "Play",
		url: "https://play.soldeplata.dev",
		supportEmail: "play@soldeplata.dev",
		category: "GameApplication",
		icon: "https://play.soldeplata.dev/icons/icon-192.png",
		image: "/apps/play.jpg",
		copy: {
			en: {
				tagline: "Tiny tap & swipe games you can share.",
				description:
					"Quick reflex and memory games that run in any browser, from Flappy and Snake to Speed Numbers and Speed Shapes. Every run is saved as a replay you can send to a friend.",
				highlights: [
					"Free to play, no install needed",
					"Share every run as a replay",
					"Global leaderboard",
				],
				languages: "EN · ES · PT",
				cta: "Play now",
			},
			es: {
				tagline: "Minijuegos de tocar y deslizar para compartir.",
				description:
					"Juegos rápidos de reflejos y memoria que funcionan en cualquier navegador, de Flappy y Snake a Speed Numbers y Speed Shapes. Cada partida se guarda como una repetición que puedes enviar a un amigo.",
				highlights: [
					"Gratis y sin instalar nada",
					"Comparte cada partida como repetición",
					"Ranking global",
				],
				languages: "EN · ES · PT",
				cta: "Jugar ahora",
			},
			"pt-BR": {
				tagline: "Minijogos de tocar e deslizar para compartilhar.",
				description:
					"Jogos rápidos de reflexo e memória que rodam em qualquer navegador, de Flappy e Snake a Speed Numbers e Speed Shapes. Cada partida vira um replay que você pode mandar para um amigo.",
				highlights: [
					"Grátis, sem precisar instalar",
					"Compartilhe cada partida como replay",
					"Ranking global",
				],
				languages: "EN · ES · PT",
				cta: "Jogar agora",
			},
		},
	},
	{
		slug: "cuerpo",
		name: "Cuerpo",
		url: "https://cuerpo.soldeplata.dev",
		supportEmail: "cuerpo@soldeplata.dev",
		category: "HealthApplication",
		icon: "https://cuerpo.soldeplata.dev/favicon.svg",
		image: "/apps/cuerpo.jpg",
		copy: {
			en: {
				tagline: "Body measurement calculators, in plain numbers.",
				description:
					"Work out your BMI, healthy weight range and waist-to-height ratio, or how much water your body holds and where it goes. Add a blood test and Cuerpo also calculates osmolality, anion gap and free water deficit.",
				highlights: [
					"Share a link that reproduces your exact numbers",
					"Saved on your device, no account needed",
					"Optional blood test inputs for clinical indices",
				],
				languages: "Spanish",
				cta: "Open Cuerpo",
			},
			es: {
				tagline: "Calculadoras de medidas corporales, con números claros.",
				description:
					"Calcula tu IMC, tu rango de peso saludable y tu índice cintura-altura, o cuánta agua tiene tu cuerpo y dónde está. Si añades una analítica, Cuerpo también calcula la osmolalidad, el anion gap y el déficit de agua libre.",
				highlights: [
					"Comparte un enlace que reproduce tus números exactos",
					"Se guarda en tu dispositivo, sin crear cuenta",
					"Datos opcionales de analítica para índices clínicos",
				],
				languages: "Español",
				cta: "Abrir Cuerpo",
			},
			"pt-BR": {
				tagline: "Calculadoras de medidas corporais, com números claros.",
				description:
					"Calcule seu IMC, sua faixa de peso saudável e sua relação cintura-altura, ou quanta água seu corpo tem e onde ela está. Se você adicionar um exame de sangue, o Cuerpo também calcula a osmolalidade, o ânion gap e o déficit de água livre.",
				highlights: [
					"Compartilhe um link que reproduz seus números exatos",
					"Fica salvo no seu aparelho, sem criar conta",
					"Dados opcionais de exame de sangue para índices clínicos",
				],
				languages: "Espanhol",
				cta: "Abrir o Cuerpo",
			},
		},
	},
	{
		slug: "hermanicura",
		name: "hermanicura",
		url: "https://hermanicura.com",
		supportEmail: "hermanicura@soldeplata.dev",
		client: true,
		category: "LifestyleApplication",
		icon: "https://hermanicura.com/favicon.svg",
		image: "/apps/hermanicura.jpg",
		copy: {
			en: {
				tagline: "Mobile-first website for a manicure and pedicure studio.",
				description:
					"Website for hermanicura, a nail studio in Calafell (Tarragona). Clients browse services, photos and promotions and book over WhatsApp; the owner runs everything from an admin panel on her phone.",
				highlights: [
					"Admin panel built for the phone",
					"Referral programme with points",
					"Instagram reels and photo gallery",
				],
				languages: "Spanish",
				cta: "Visit hermanicura",
			},
			es: {
				tagline:
					"Web pensada para el móvil para un estudio de manicura y pedicura.",
				description:
					"Web de hermanicura, un estudio de uñas en Calafell (Tarragona). Las clientas ven servicios, fotos y promociones y piden cita por WhatsApp; la dueña lo gestiona todo desde un panel de administración en el móvil.",
				highlights: [
					"Panel de administración pensado para el móvil",
					"Programa de referidos con puntos",
					"Reels de Instagram y galería de fotos",
				],
				languages: "Español",
				cta: "Visitar hermanicura",
			},
			"pt-BR": {
				tagline:
					"Site pensado para o celular para um estúdio de manicure e pedicure.",
				description:
					"Site da hermanicura, um estúdio de unhas em Calafell (Tarragona). As clientes veem serviços, fotos e promoções e marcam horário pelo WhatsApp; a dona gerencia tudo por um painel de administração no celular.",
				highlights: [
					"Painel de administração pensado para o celular",
					"Programa de indicações com pontos",
					"Reels do Instagram e galeria de fotos",
				],
				languages: "Espanhol",
				cta: "Visitar a hermanicura",
			},
		},
	},
];

export const getApps = (locale: Locale = defaultLocale): App[] =>
	entries.map(({ copy, ...app }) => ({ ...app, ...copy[locale] }));
