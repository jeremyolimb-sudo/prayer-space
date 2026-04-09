import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import ScriptureBlock from "@/components/ScriptureBlock";
import { ArrowLeftIcon, ArrowRightIcon, MapPinIcon } from "@/components/Icons";
import walkData from "../../../../content/prayer-walk/stations.json";

export function generateStaticParams() {
  return walkData.stations.map((station) => ({
    station: String(station.number),
  }));
}

export default async function StationPage({
  params,
}: {
  params: Promise<{ station: string }>;
}) {
  const { station: stationParam } = await params;
  const stationNumber = parseInt(stationParam, 10);
  const station = walkData.stations.find((s) => s.number === stationNumber);

  if (!station) {
    notFound();
  }

  const totalStations = walkData.stations.length;
  const prevStation = stationNumber > 1 ? stationNumber - 1 : null;
  const nextStation = stationNumber < totalStations ? stationNumber + 1 : null;
  const isLastStation = stationNumber === totalStations;

  return (
    <div>
      <BackLink href="/prayer-walk" label="Prayer Walk" />

      {/* Progress */}
      <div className="flex gap-1.5 mb-6">
        {walkData.stations.map((s) => (
          <div
            key={s.number}
            className={`h-1 flex-1 rounded-full transition-colors ${
              s.number <= stationNumber ? "bg-brand-primary" : "bg-brand-mist"
            }`}
          />
        ))}
      </div>

      {/* Station Header */}
      <div className="mb-2">
        <span className="text-xs uppercase tracking-widest text-brand-primary font-medium">
          Station {station.number} of {totalStations}
        </span>
      </div>

      <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
        {station.title}
      </h1>
      <p className="text-brand-gold-muted text-sm mb-2">{station.subtitle}</p>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-brand-sage/70 text-xs mb-6">
        <MapPinIcon className="w-3.5 h-3.5" />
        {station.location}
      </div>

      {/* Instruction */}
      <p className="text-brand-primary/70 leading-relaxed mb-6">{station.instruction}</p>

      {/* Scripture */}
      <ScriptureBlock scripture={station.scripture} reference={station.scriptureRef} />

      {/* Prayer Prompt */}
      <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-xl p-4 my-6">
        <p className="text-brand-primary text-sm font-medium italic">{station.prompt}</p>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        {prevStation ? (
          <Link
            href={`/prayer-walk/${prevStation}`}
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-brand-mist text-brand-primary/70 text-sm hover:bg-brand-cream transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Previous
          </Link>
        ) : (
          <Link
            href="/prayer-walk"
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-brand-mist text-brand-primary/70 text-sm hover:bg-brand-cream transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Overview
          </Link>
        )}

        {nextStation ? (
          <Link
            href={`/prayer-walk/${nextStation}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-brand-primary text-white rounded-xl py-3 font-medium transition-colors hover:bg-brand-primary-light active:scale-[0.98]"
          >
            Next Station
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        ) : isLastStation ? (
          <Link
            href="/wall-prayers"
            className="flex-1 flex items-center justify-center gap-1.5 bg-brand-primary text-white rounded-xl py-3 font-medium transition-colors hover:bg-brand-primary-light active:scale-[0.98]"
          >
            Enter the Prayer Space
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
