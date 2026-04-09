import Link from "next/link";
import BackLink from "@/components/BackLink";
import PrayerWalkMap from "@/components/PrayerWalkMap";
import { MapPinIcon } from "@/components/Icons";
import walkData from "../../../content/prayer-walk/stations.json";

export default function PrayerWalkPage() {
  return (
    <div>
      <BackLink href="/" label="Home" />

      <div className="mb-8">
        <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
          {walkData.title}
        </h1>
        <p className="text-brand-gold-muted text-sm">{walkData.subtitle}</p>
      </div>

      <p className="text-brand-primary/70 leading-relaxed mb-4">{walkData.introduction}</p>

      <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-xl p-4 mb-8">
        <p className="text-brand-primary text-sm leading-relaxed">{walkData.instructions}</p>
      </div>

      {/* Route Map */}
      <PrayerWalkMap />

      {/* Station List */}
      <div className="space-y-3 mb-8">
        {walkData.stations.map((station) => (
          <Link
            key={station.number}
            href={`/prayer-walk/${station.number}`}
            className="flex items-center gap-4 bg-brand-cream/60 border border-brand-mist/60 rounded-xl p-4 transition-all active:scale-[0.98]"
          >
            <span className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm flex items-center justify-center font-semibold shrink-0">
              {station.number}
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="font-medium text-brand-primary text-sm">{station.title}</h2>
              <p className="text-xs text-brand-sage">{station.subtitle}</p>
            </div>
            <MapPinIcon className="w-4 h-4 text-brand-mist shrink-0" />
          </Link>
        ))}
      </div>

      <Link
        href="/prayer-walk/1"
        className="block w-full bg-brand-primary text-white text-center rounded-xl py-3.5 font-medium transition-colors hover:bg-brand-primary-light active:scale-[0.98]"
      >
        Begin the Walk
      </Link>
    </div>
  );
}
