export default function ScriptureBlock({
  scripture,
  reference,
}: {
  scripture: string;
  reference: string;
}) {
  return (
    <blockquote className="border-l-2 border-brand-gold-muted pl-4 py-2 my-4">
      <p className="text-brand-primary/70 italic leading-relaxed">{scripture}</p>
      <cite className="text-sm text-brand-sage not-italic mt-1 block">{reference}</cite>
    </blockquote>
  );
}
