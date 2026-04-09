import Link from "next/link";
import BackLink from "@/components/BackLink";
import { Icon } from "@/components/Icons";
import lectioData from "../../../content/guided-prayers/lectio-divina.json";
import examenData from "../../../content/guided-prayers/daily-examen.json";

const activities = [
  {
    data: lectioData,
    href: "/guided-prayer/lectio-divina",
    color: "text-brand-sage",
    bg: "bg-brand-sage/5",
    border: "border-brand-sage/10",
  },
  {
    data: examenData,
    href: "/guided-prayer/daily-examen",
    color: "text-brand-gold",
    bg: "bg-brand-gold/5",
    border: "border-brand-gold/10",
  },
];

export default function GuidedPrayerPage() {
  return (
    <div>
      <BackLink href="/" label="Home" />

      <div className="mb-8">
        <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
          Guided Prayer
        </h1>
        <p className="text-brand-gold-muted text-sm">Simple ways to spend time with God</p>
      </div>

      <p className="text-brand-primary/70 text-sm leading-relaxed mb-8">
        Not sure how to pray? These guided experiences walk you through it step by step.
        Pick one that fits where you are today. No experience needed&mdash;just a willingness
        to show up.
      </p>

      <div className="space-y-4">
        {activities.map(({ data, href, color, bg, border }) => (
          <Link
            key={href}
            href={href}
            className={`block ${bg} border ${border} rounded-xl p-5 transition-all active:scale-[0.98]`}
          >
            <div className="flex items-start gap-4">
              <div className={`${color} mt-0.5 shrink-0`}>
                <Icon name={data.icon} className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-medium text-brand-primary">{data.title}</h2>
                <p className="text-xs text-brand-sage mb-2">{data.subtitle} &middot; {data.duration}</p>
                <p className="text-sm text-brand-primary/70 leading-relaxed">{data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
