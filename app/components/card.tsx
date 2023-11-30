"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

import { MouseEventHandler, PropsWithChildren, useEffect, useState } from "react";
const colors = [
	"amber",
	"blue",
	"fuchsia",
	"lime",
	"pink",
	"red",
	"rose",
	"stone",
	"teal",
	"yellow",
] as const;
const rand = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const randomColor = () => colors[rand(0, colors.length - 1)];

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 800, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 800, damping: 100 });
	// define an initial color so it's shared in server and client, and change it dynamically on client
	const [color, setColor] = useState("zinc");
	useEffect(() => {
		setColor(randomColor());
	}, []);


	function onMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: Parameters<MouseEventHandler<HTMLDivElement>>[0]) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	const maskImage = useMotionTemplate`radial-gradient(10em 10em at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			onMouseMove={onMouseMove}
			className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-${color}-800/10 group md:gap-8 hover:border-${color}-400/50 border-zinc-600 `}
		>
			<div className={` ${color} hidden `}>
				<span className="hover:bg-amber-800/10 hover:border-amber-400/50 via-amber-300/30" />
				<span className="hover:bg-blue-800/10 hover:border-blue-400/50 via-blue-300/30" />
				<span className="hover:bg-fuchsia-800/10 hover:border-fuchsia-400/50 via-fuchsia-300/30" />
				<span className="hover:bg-lime-800/10 hover:border-lime-400/50 via-lime-300/30" />
				<span className="hover:bg-pink-800/10 hover:border-pink-400/50 via-pink-300/30" />
				<span className="hover:bg-red-800/10 hover:border-red-400/50 via-red-300/30" />
				<span className="hover:bg-rose-800/10 hover:border-rose-400/50 via-rose-300/30" />
				<span className="hover:bg-stone-800/10 hover:border-stone-400/50 via-stone-300/30" />
				<span className="hover:bg-teal-800/10 hover:border-teal-400/50 via-teal-300/30" />
				<span className="hover:bg-yellow-800/10 hover:border-yellow-400/50 via-yellow-300/30" />
				<span className="hover:bg-zinc-800/10 hover:border-zinc-400/50 via-zinc-300/30" />
				This element is hidden, but forces tailwind to include all the colors that will be needed to render the card. This is needed because tailwind can't compute the dynamic class names
				to be included in the final css file.
			</div>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-500 [mask-image:linear-gradient(lime,transparent)]" />
				<motion.div
					className={`absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-${color}-300/30  transition duration-500 group-hover:opacity-100`}
					style={style}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100"
					style={style}
				/>
			</div>

			{children}
		</div>
	);
};
