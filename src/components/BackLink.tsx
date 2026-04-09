import Link from "next/link";
import { ArrowLeftIcon } from "./Icons";

export default function BackLink({ href, label = "Back" }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-brand-sage hover:text-brand-primary transition-colors mb-6"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      {label}
    </Link>
  );
}
