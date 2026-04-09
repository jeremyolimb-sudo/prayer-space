"use client";

import { useState } from "react";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import { Icon } from "@/components/Icons";
import ScriptureBlock from "@/components/ScriptureBlock";
import wallData from "../../../content/wall-prayers.json";

export default function WallPrayersPage() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  return (
    <div>
      <BackLink href="/" label="Home" />

      <div className="mb-8">
        <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
          {wallData.title}
        </h1>
        <p className="text-brand-gold-muted text-sm">{wallData.subtitle}</p>
      </div>

      <p className="text-brand-primary/70 leading-relaxed mb-6">{wallData.introduction}</p>

      {/* How it works */}
      <div className="bg-brand-cream/60 border border-brand-mist/60 rounded-xl p-5 mb-10">
        <h2 className="font-medium text-brand-primary/80 mb-2">How It Works</h2>
        <p className="text-brand-primary/70 text-sm leading-relaxed">{wallData.wallInstruction}</p>
      </div>

      {/* Prayer Guides */}
      <div className="mb-6">
        <h2 className="font-serif text-lg font-semibold text-brand-primary mb-1">
          {wallData.guidesTitle}
        </h2>
        <p className="text-brand-sage text-sm mb-6">{wallData.guidesIntro}</p>
      </div>

      <div className="space-y-3">
        {wallData.guides.map((guide) => {
          const isExpanded = expandedGuide === guide.id;
          return (
            <div
              key={guide.id}
              className="bg-brand-cream/60 border border-brand-mist/60 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedGuide(isExpanded ? null : guide.id)}
                className="w-full text-left p-4 flex items-start gap-3"
              >
                <div className="text-brand-gold-muted mt-0.5 shrink-0">
                  <Icon name={guide.icon} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-brand-primary text-sm">{guide.title}</h3>
                  <p className="text-brand-sage text-xs mt-0.5">{guide.description}</p>
                </div>
                <span className="text-brand-sage/70 text-lg shrink-0 leading-none mt-0.5">
                  {isExpanded ? "\u2212" : "+"}
                </span>
              </button>

              {isExpanded && (
                <div className="px-4 pb-5 pt-0">
                  <div className="border-t border-brand-mist/60 pt-4">
                    <ol className="space-y-3 mb-5">
                      {guide.steps.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="w-5 h-5 rounded-full bg-brand-gold/10 text-brand-gold text-xs flex items-center justify-center font-medium shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-brand-primary/70 text-sm leading-relaxed">{step}</p>
                        </li>
                      ))}
                    </ol>
                    <ScriptureBlock scripture={guide.scripture} reference={guide.scriptureRef} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/guided-prayer"
          className="inline-block text-sm text-brand-primary hover:text-brand-primary-light transition-colors"
        >
          Try a Guided Prayer &rarr;
        </Link>
      </div>
    </div>
  );
}
