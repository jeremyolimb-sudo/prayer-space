"use client";

import { useState } from "react";
import BackLink from "@/components/BackLink";
import ScriptureBlock from "@/components/ScriptureBlock";
import { ArrowRightIcon, ArrowLeftIcon } from "@/components/Icons";
import lectioData from "../../../../content/guided-prayers/lectio-divina.json";

export default function SlowReadingPage() {
  const [currentStep, setCurrentStep] = useState(-1);
  const steps = lectioData.steps;

  // Rotate scripture daily — one passage per day of the month
  const today = new Date().getDate(); // 1-31
  const scriptureIndex = (today - 1) % lectioData.scriptures.length;
  const todayScripture = lectioData.scriptures[scriptureIndex];
  const step = currentStep >= 0 ? steps[currentStep] : null;
  const isIntro = currentStep === -1;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div>
      <BackLink href="/guided-prayer" label="Guided Prayer" />

      {isIntro ? (
        <div>
          <div className="mb-8">
            <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
              {lectioData.title}
            </h1>
            <p className="text-brand-gold-muted text-sm">
              {lectioData.subtitle} &middot; {lectioData.duration}
            </p>
          </div>

          <p className="text-brand-primary/70 leading-relaxed mb-8">{lectioData.description}</p>

          <div className="bg-brand-cream/60 border border-brand-mist/60 rounded-xl p-5 mb-8">
            <h2 className="font-medium text-brand-primary/80 mb-3">Four Simple Steps</h2>
            <div className="space-y-2">
              {steps.map((s) => (
                <div key={s.number} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage text-xs flex items-center justify-center font-medium">
                    {s.number}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-brand-primary/80">{s.title}</span>
                    <span className="text-sm text-brand-sage"> &mdash; {s.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(0)}
            className="w-full bg-brand-primary text-white rounded-xl py-3.5 font-medium transition-colors hover:bg-brand-primary/90 active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>
      ) : step ? (
        <div>
          {/* Progress */}
          <div className="flex gap-1.5 mb-6">
            {steps.map((s) => (
              <div
                key={s.number}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s.number <= step.number ? "bg-brand-primary" : "bg-brand-mist"
                }`}
              />
            ))}
          </div>

          <div className="mb-2">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-medium">
              Step {step.number} of {steps.length}
            </span>
          </div>

          <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
            {step.title}
          </h1>
          <p className="text-brand-gold-muted text-sm mb-6">{step.subtitle}</p>

          <p className="text-brand-primary/70 leading-relaxed mb-6">{step.instruction}</p>

          {step.number === 1 && (
            <ScriptureBlock scripture={todayScripture.text} reference={todayScripture.reference} />
          )}

          <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-xl p-4 my-6">
            <p className="text-brand-primary text-sm font-medium italic">{step.prompt}</p>
          </div>

          <p className="text-xs text-brand-sage/70 text-center mb-6">
            Take about {Math.round(step.suggestedTime / 60)} minutes here. There is no rush.
          </p>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-brand-mist text-brand-primary/70 text-sm hover:bg-brand-cream transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={() =>
                isLastStep ? setCurrentStep(-1) : setCurrentStep(currentStep + 1)
              }
              className="flex-1 flex items-center justify-center gap-1.5 bg-brand-primary text-white rounded-xl py-3 font-medium transition-colors hover:bg-brand-primary/90 active:scale-[0.98]"
            >
              {isLastStep ? "Finish" : "Next Step"}
              {!isLastStep && <ArrowRightIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
