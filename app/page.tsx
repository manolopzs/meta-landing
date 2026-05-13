import Image from "next/image";
import { StickyCta } from "./StickyCta";

const SUBSCRIBE_URL = "https://www.whitepaper.mx/";
const OFFER_URL = "https://www.whitepaper.mx/lpwhite";

const features = [
  "Resumen diario (Whitepaper, hoy)",
  "Análisis de empresas (Artículos principales)",
  "Podcast (Whitepaper Hoy, Dark Side of the Road y Arquitectura de Negocios)",
  "Whitepaper Access (Contenido en audio)",
  "Acceso al archivo completo",
];

const articles = [
  {
    category: "Retail",
    title: "¿Por qué hay tanto interés en Tiendas 3B?",
    excerpt:
      "Una radiografía de su modelo de negocios para tratar de entender por qué un retailer mexicano tan «tradicional» está resultando muy atractivo para los inversionistas.",
    image: "/assets/article-tiendas-3b.webp",
    href: "https://www.whitepaper.mx/p/por-que-hay-tanto-interes-en-tiendas",
  },
  {
    category: "Industrial",
    title: "La venta",
    excerpt:
      "Un múltiplo de 20x por el 50% de Prolec GE: ¿qué justifica el precio que GE Vernova le pagó a Xignux? Anatomía de una de las mayores operaciones de M&A en México.",
    image: "/assets/article-prolec.webp",
    href: "https://www.whitepaper.mx/p/la-venta-e83",
  },
  {
    category: "Consumo",
    title: "Jumex: sacándole jugo a su categoría",
    excerpt:
      "La empresa mexicana lleva décadas liderando en jugos. Ahora el mercado está evolucionando y se enfrenta al reto de crecer con otros productos.",
    image: "/assets/article-jumex.webp",
    href: "https://www.whitepaper.mx/p/jumex-sacandole-jugo-a-su-categoria",
  },
  {
    category: "Aviación",
    title: "Viva y Volaris: análisis del plan de fusión",
    excerpt:
      "Las dos empresas que transformaron el mercado de los viajes en avión quieren ahora fusionarse dentro de una misma organización. ¿Cuáles son las implicaciones?",
    image: "/assets/article-viva-volaris.webp",
    href: "https://www.whitepaper.mx/p/viva-y-volaris-analisis-del-plan-26e",
  },
];

const testimonials = [
  {
    name: "Fernando Núñez",
    quote:
      "Hoy es necesario pagar por contenido de calidad, y no hay mucho. Gana más el lector pagando que perdiendo el tiempo con los clickbaits y el contenido hueco en los medios gratuitos.",
  },
  {
    name: "Gilberto Hernández",
    quote:
      "Va directo al punto sin perder profundidad. Es difícil encontrar contenido de negocios que sea inteligente, bien curado y fácil de digerir al mismo tiempo. Se ha vuelto parte de mi rutina diaria.",
  },
  {
    name: "Adán Méndez",
    quote:
      "En un entorno saturado de información pero carente de análisis real, Whitepaper ofrece la profundidad que afina la toma de decisiones estratégicas.",
  },
  {
    name: "Bernardo González",
    quote:
      "No he encontrado contenido como el que producen en ningún otro lugar. Para mí, es contenido que aporta muchísimo valor.",
  },
];

function NewspaperIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" />
      <path d="M19 8h2v10a2 2 0 0 1-2 2" />
      <line x1="7" y1="8" x2="15" y2="8" />
      <line x1="7" y1="12" x2="15" y2="12" />
      <line x1="7" y1="16" x2="11" y2="16" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CtaButton({
  children = "Suscríbete",
  href = SUBSCRIBE_URL,
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-cta)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_-12px_rgba(238,77,58,0.6)] transition-all hover:bg-[var(--color-cta-hover)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta)] focus-visible:ring-offset-2"
    >
      <NewspaperIcon className="h-5 w-5" />
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cta)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg leading-relaxed text-neutral-500">{lead}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full pb-20 md:pb-0">
      <StickyCta href={OFFER_URL} />
      {/* HERO */}
      <section className="px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Image
            src="/assets/logo.png"
            alt="Whitepaper"
            width={280}
            height={40}
            sizes="280px"
            priority
            className="h-6 w-auto sm:h-7"
          />

          <h1 className="font-display mt-10 text-[52px] leading-[1] tracking-tight text-neutral-900 sm:mt-14 sm:text-7xl md:text-[96px] md:leading-[0.98]">
            Lo más importante,
            <br />
            cada mañana.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
            Enviamos a tu correo las{" "}
            <span className="font-semibold text-neutral-800">
              noticias de negocios
            </span>{" "}
            más importantes del día, en un formato{" "}
            <span className="font-semibold text-neutral-800">
              fácil de leer
            </span>
            .
          </p>

          <div className="mt-8">
            <CtaButton>Suscríbete</CtaButton>
          </div>

          <p className="mt-5 text-sm text-neutral-500">
            Toma{" "}
            <span className="font-semibold text-neutral-800">5 minutos</span>{" "}
            leerlo.
          </p>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl">
          <Image
            src="/assets/mockup.jpg"
            alt="Vista previa del newsletter Whitepaper"
            width={1449}
            height={1600}
            sizes="(max-width: 768px) 100vw, 672px"
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* PRICING */}
      <section
        id="suscribete"
        className="border-t border-neutral-200 px-6 py-20 sm:py-28"
      >
        <SectionHeader
          eyebrow="Suscripción"
          title="Suscríbete a Whitepaper"
          lead="Acceso completo al medio que leen los empresarios mexicanos."
        />

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
          {/* Plan anual */}
          <div className="relative pt-3">
            <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Ahorra 30%
            </span>
            <div className="flex h-full flex-col rounded-2xl bg-neutral-900 px-8 py-10 text-center text-white">
              <h3 className="font-display text-5xl leading-none">Plan anual</h3>
              <div className="mt-8 flex-1">
                <p className="text-4xl font-bold tracking-tight">
                  $1,590
                  <span className="text-2xl font-medium text-neutral-300">
                    {" "}
                    MXN
                  </span>
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Equivale a $132.50 al mes
                </p>
              </div>
              <a
                href={SUBSCRIBE_URL}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-neutral-900 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Suscríbete
              </a>
            </div>
          </div>

          {/* Plan mensual */}
          <div className="pt-3">
            <div className="flex h-full flex-col rounded-2xl bg-neutral-50 px-8 py-10 text-center ring-1 ring-neutral-200">
              <h3 className="font-display text-5xl leading-none text-neutral-900">
                Plan mensual
              </h3>
              <div className="mt-8 flex-1">
                <p className="text-4xl font-bold tracking-tight text-neutral-900">
                  $189
                  <span className="text-2xl font-medium text-neutral-500">
                    {" "}
                    MXN
                  </span>
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  Renovación mes a mes
                </p>
              </div>
              <a
                href={SUBSCRIBE_URL}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Suscríbete
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-neutral-200 px-6 py-20 sm:py-28">
        <SectionHeader
          eyebrow="Qué incluye"
          title="Todo lo que recibes"
        />

        <div className="mx-auto mt-14 max-w-md sm:mt-16">
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-4">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <span className="text-lg text-neutral-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-center text-center sm:mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Únete a +14,500 suscriptores
          </p>
          <div className="mt-5">
            <CtaButton>Suscríbete</CtaButton>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-t border-neutral-200 px-6 py-20 sm:py-28">
        <SectionHeader
          eyebrow="Artículos principales"
          title={
            <>
              Cómo funcionan las{" "}
              <em>empresas y industrias más exitosas</em> del país
            </>
          }
          lead="Más de 350 artículos de análisis a profundidad sobre empresas, sectores y movimientos estratégicos."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 sm:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className={`flex flex-col ${
                i === 1
                  ? "border-t border-neutral-200 pt-12 md:border-t-0 md:pt-0"
                  : i >= 2
                    ? "border-t border-neutral-200 pt-12 md:pt-16"
                    : ""
              }`}
            >
              <a
                href={article.href}
                className="group block overflow-hidden rounded-lg bg-neutral-50"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1280}
                  height={850}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[1280/850] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-cta)]">
                {article.category}
              </p>
              <h3 className="font-display mt-2 text-2xl leading-[1.2] text-neutral-900 sm:text-[26px]">
                <a href={article.href} className="hover:opacity-80">
                  {article.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {article.excerpt}
              </p>
              <a
                href={article.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-cta)]"
              >
                Leer artículo
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <CtaButton>Suscríbete</CtaButton>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-neutral-200 px-6 py-20 sm:py-28">
        <SectionHeader
          eyebrow="Lectores"
          title="Por qué leen Whitepaper"
        />

        <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
          <ul className="divide-y divide-neutral-200">
            {testimonials.map((t) => (
              <li key={t.name} className="py-10 first:pt-0 last:pb-0">
                <p className="font-display text-2xl leading-snug text-neutral-900 sm:text-[26px]">
                  {t.quote}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  — {t.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLOSER */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
            Lo más importante,
            <br />
            cada mañana.
          </h2>
          <p className="mt-6 text-lg text-neutral-500">
            Únete a +14,500 suscriptores que ya leen Whitepaper.
          </p>
          <div className="mt-8">
            <CtaButton>Suscríbete</CtaButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Image
            src="/assets/logo.png"
            alt="Whitepaper"
            width={160}
            height={22}
            sizes="160px"
            className="h-5 w-auto opacity-70"
          />
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Whitepaper. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
