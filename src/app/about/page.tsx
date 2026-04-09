import BackLink from "@/components/BackLink";
import aboutData from "../../../content/about.json";

export default function AboutPage() {
  return (
    <div>
      <BackLink href="/" label="Home" />

      <div className="mb-8">
        <h1 className="font-serif text-2xl font-semibold text-brand-primary mb-1">
          {aboutData.title}
        </h1>
        <p className="text-brand-gold-muted text-sm">{aboutData.subtitle}</p>
      </div>

      <p className="text-brand-primary/70 leading-relaxed mb-8">{aboutData.description}</p>

      <div className="space-y-8">
        {aboutData.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-medium text-brand-primary mb-2">{section.heading}</h2>
            <p className="text-brand-primary/70 text-sm leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
