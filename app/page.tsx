import { IconChevronDown } from "@tabler/icons-react"
import type { Metadata, Viewport } from "next"
import Image from "next/image"
import { RsvpForm } from "@/components/rsvp-form"

export const metadata: Metadata = {
  title: "The Wedding of Mack & Rolaine",
  description:
    "Mack and Rolaine are getting married. Event details and RSVP are coming soon.",
}

export const viewport: Viewport = {
  themeColor: "#f8f6f0",
}

// Placeholder details — replace with the real ones.
const wedding = {
  date: "Saturday, 12 December 2026",
  time: "4:00 PM",
  venue: "The Garden Pavilion",
  address: "Tagaytay City, Cavite",
}

// Placeholder names — replace with the real entourage.
const entourage = [
  {
    title: "Bridesmaids",
    names: [
      "Bea Santos",
      "Camille Reyes",
      "Dana Villanueva",
      "Erika Cruz",
      "Faith Mendoza",
      "Gia Bautista",
      "Hannah Lim",
      "Isabel Navarro",
      "Jasmine Torres",
      "Kaye Domingo",
    ],
  },
  {
    title: "Groomsmen",
    names: [
      "Marco Dela Cruz",
      "Nathan Garcia",
      "Paolo Ramos",
      "Quincy Aquino",
      "Rafael Flores",
      "Sam Castillo",
      "Tomas Herrera",
      "Victor Tan",
      "Wesley Ong",
      "Zach Mercado",
    ],
  },
]

const details = [
  { label: "Date", value: wedding.date },
  { label: "Time", value: wedding.time },
  { label: "Venue", value: `${wedding.venue}, ${wedding.address}` },
]

export default function Page() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${wedding.venue}, ${wedding.address}`
  )}&output=embed`

  return (
    <main className="overflow-x-clip bg-[#f8f6f0]">
      <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-safe py-20 text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/coverpage.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center md:translate-x-[8%]">
          <p className="animate-in text-[0.7rem] font-medium tracking-[0.45em] text-[#0d6157]/80 uppercase duration-700 fade-in slide-in-from-bottom-2 motion-reduce:animate-none">
            The Wedding of
          </p>

          <h1 className="mt-6 font-serif text-5xl font-normal tracking-tight text-balance text-[#12332c] sm:text-6xl md:text-7xl">
            <span className="hero-word" style={{ animationDelay: "150ms" }}>
              Mack
            </span>{" "}
            <span className="hero-word" style={{ animationDelay: "300ms" }}>
              &amp;
            </span>{" "}
            <span className="hero-word" style={{ animationDelay: "450ms" }}>
              Rolaine
            </span>
          </h1>
        </div>

        <div className="absolute inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] flex justify-center md:translate-x-[8%]">
          <a
            href="#story"
            aria-label="Scroll to our story"
            className="rounded-full p-3 text-[#0d6157]/70 transition-colors hover:text-[#12332c] focus-visible:ring-2 focus-visible:ring-[#0d6157]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8f6f0]"
          >
            <IconChevronDown
              aria-hidden="true"
              className="size-7 animate-scroll-hint motion-reduce:animate-none"
              stroke={1.5}
            />
          </a>
        </div>
      </section>

      <section
        id="story"
        aria-labelledby="story-heading"
        className="scroll-mt-4 border-t border-[#12332c]/10 bg-[#f8f6f0] px-safe py-20 sm:py-28"
      >
        <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal-mask overflow-hidden rounded-3xl border border-[#12332c]/10 shadow-[0_30px_80px_-50px_rgba(18,51,44,0.6)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/img1.jpg"
                alt="Mack and Rolaine"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="slide-right text-center md:text-left">
            <p className="text-[0.7rem] font-medium tracking-[0.4em] text-[#0d6157]/80 uppercase">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="mt-4 font-serif text-4xl font-normal text-balance text-[#12332c] sm:text-5xl"
            >
              A quiet yes, and a lifetime after
            </h2>
            <div className="reveal-line mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#a8874a]/60 to-transparent md:mx-0 md:origin-left" />
            <p className="mt-6 text-sm leading-relaxed text-[#4b5750]">
              What began as a chance meeting over coffee has become a life we
              are building together. We would love for you to be there as we say
              our vows.
            </p>
            <p className="mt-6 font-serif text-lg text-[#0d6157] italic">
              Mack &amp; Rolaine
            </p>
          </div>
        </div>
      </section>

      <section
        id="details"
        aria-labelledby="details-heading"
        className="scroll-mt-4 border-t border-[#12332c]/10 bg-[#f8f6f0] px-safe py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="slide-left text-center">
            <p className="text-[0.7rem] font-medium tracking-[0.4em] text-[#0d6157]/80 uppercase">
              When &amp; Where
            </p>
            <h2
              id="details-heading"
              className="mt-4 font-serif text-4xl font-normal text-[#12332c] sm:text-5xl"
            >
              The Celebration
            </h2>
            <div className="reveal-line mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#a8874a]/60 to-transparent" />
          </div>

          <dl className="reveal-stagger mt-12 grid gap-10 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#12332c]/10">
            {details.map((item) => (
              <div key={item.label} className="sm:px-6">
                <dt className="text-[0.65rem] font-medium tracking-[0.3em] text-[#0d6157]/75 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-3 font-serif text-lg leading-snug text-[#12332c]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="reveal-scale overflow-hidden rounded-2xl border border-[#12332c]/10 bg-white shadow-[0_24px_60px_-40px_rgba(18,51,44,0.55)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/img3.jpg"
                  alt={`The ${wedding.venue}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-2xl border border-[#12332c]/10 bg-white shadow-[0_24px_60px_-40px_rgba(18,51,44,0.55)]">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title={`Map to ${wedding.venue}`}
                  src={mapSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-[44svh] w-full overflow-hidden border-y border-[#12332c]/10 sm:h-[62svh]">
        <Image
          src="/assets/img2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="parallax object-cover"
        />
      </div>

      <section
        id="entourage"
        aria-labelledby="entourage-heading"
        className="border-t border-[#12332c]/10 bg-[#f3f0e6] px-safe py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="slide-right text-center">
            <p className="text-[0.7rem] font-medium tracking-[0.4em] text-[#0d6157]/80 uppercase">
              The Entourage
            </p>
            <h2
              id="entourage-heading"
              className="mt-4 font-serif text-4xl font-normal text-[#12332c] sm:text-5xl"
            >
              Wedding Party
            </h2>
            <div className="reveal-line mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#a8874a]/60 to-transparent" />
          </div>

          <div className="reveal-stagger mt-12 grid gap-8 sm:grid-cols-2">
            {entourage.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[#12332c]/10 bg-[#f8f6f0] px-6 py-9"
              >
                <h3 className="text-center text-[0.65rem] font-medium tracking-[0.35em] text-[#0d6157]/80 uppercase">
                  {group.title}
                </h3>

                <ul className="slide-list mt-5 divide-y divide-[#12332c]/10">
                  {group.names.map((name) => (
                    <li
                      key={name}
                      className="py-2.5 text-center font-serif text-lg text-[#12332c]"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="rsvp"
        aria-labelledby="rsvp-heading"
        className="scroll-mt-4 border-t border-[#12332c]/10 bg-[#f8f6f0] px-safe py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-2xl text-center">
          <div className="slide-left">
            <h2
              id="rsvp-heading"
              className="font-serif text-4xl font-normal text-[#12332c] sm:text-5xl"
            >
              RSVP
            </h2>
            <div className="reveal-line mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#a8874a]/60 to-transparent" />
            <p className="mt-6 text-sm leading-relaxed text-[#4b5750]">
              Please reply by January 10, 2027.
            </p>
          </div>

          <RsvpForm />

          <p className="mt-5 text-[0.65rem] leading-relaxed tracking-[0.08em] text-[#12332c]/45">
            Seats are reserved per invitation. If anything looks off, kindly
            reach out to us.
          </p>
        </div>
      </section>
    </main>
  )
}
