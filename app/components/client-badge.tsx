import { Briefcase } from "lucide-react";

export const ClientBadge: React.FC = () => (
	<span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium border rounded-full shrink-0 border-amber-500/40 text-amber-300">
		<Briefcase className="w-3 h-3" aria-hidden="true" />
		Client work
	</span>
);
