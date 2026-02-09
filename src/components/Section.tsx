export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          {/* Title */}
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-slate-300">
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}
