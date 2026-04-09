import Link from "next/link";
import { BookIcon, SparklesIcon, FootprintsIcon, HomeIcon } from "@/components/Icons";

const navCards = [
  {
    href: "/about",
    title: "About the Space",
    description: "What to expect when you visit",
    icon: HomeIcon,
    color: "text-brand-primary",
    bg: "bg-brand-primary/5",
    border: "border-brand-primary/10",
  },
  {
    href: "/wall-prayers",
    title: "The Prayer Wall",
    description: "Write a prayer and tuck it in the wall",
    icon: SparklesIcon,
    color: "text-brand-gold",
    bg: "bg-brand-gold/5",
    border: "border-brand-gold/10",
  },
  {
    href: "/guided-prayer",
    title: "Guided Prayer",
    description: "Step-by-step ways to spend time with God",
    icon: BookIcon,
    color: "text-brand-sage",
    bg: "bg-brand-sage/5",
    border: "border-brand-sage/10",
  },
  {
    href: "/prayer-walk",
    title: "Prayer Walk",
    description: "A guided walk around the lawn",
    icon: FootprintsIcon,
    color: "text-brand-primary",
    bg: "bg-brand-mist/30",
    border: "border-brand-mist/60",
  },
];

export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10 pt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold-muted font-medium mb-2">
          Redemption Gilbert
        </p>
        <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-2">
          The Prayer Space
        </h1>
        <div className="w-12 h-px bg-brand-gold-muted mx-auto mb-4" />
        <p className="text-brand-sage text-sm leading-relaxed max-w-xs mx-auto">
          A place set apart for encountering God through prayer, reflection, and stillness.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="space-y-3">
        {navCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`block ${card.bg} border ${card.border} rounded-xl p-4 transition-all active:scale-[0.98]`}
          >
            <div className="flex items-center gap-4">
              <div className={`${card.color} shrink-0`}>
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-medium text-brand-primary">{card.title}</h2>
                <p className="text-sm text-brand-sage">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Get Connected */}
      <div className="mt-10">
        <a
          href="https://redemptiongilbert.church/visit"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-brand-primary text-white rounded-xl p-4 text-center transition-all active:scale-[0.98] hover:bg-brand-primary-light"
        >
          <p className="font-medium text-sm">Get Connected</p>
          <p className="text-xs text-white/70 mt-0.5">Join our local Christian community</p>
        </a>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 mb-4">
        <div className="w-8 h-px bg-brand-mist mx-auto mb-3" />
        <p className="text-xs text-brand-sage/70">
          The Commons at Redemption
        </p>
        <a
          href="https://redemptiongilbert.church"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-brand-sage/50 hover:text-brand-primary transition-colors mt-1 inline-block"
        >
          redemptiongilbert.church
        </a>
      </div>
    </div>
  );
}
