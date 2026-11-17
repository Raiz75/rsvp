import { IconChevronDown } from "@tabler/icons-react"
import type { Metadata, Viewport } from "next"
import Image from "next/image"

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
    <main className="bg-[#f8f6f0]">
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

        <div className="flex w-full max-w-2xl animate-in flex-col items-center duration-1000 fade-in slide-in-from-bottom-2 motion-reduce:animate-none md:translate-x-[8%]">
          <p className="text-[0.7rem] font-medium tracking-[0.45em] text-[#0d6157]/80 uppercase">
            The Wedding of
          </p>

          <h1 className="mt-6 font-serif text-5xl font-normal tracking-tight text-balance text-[#12332c] sm:text-6xl md:text-7xl">
            Mack &amp; Rolaine
          </h1>
        </div>

        <div className="absolute inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] flex justify-center md:translate-x-[8%]">
          <a
            href="#details"
            aria-label="Scroll to event details"
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
        id="details"
        aria-labelledby="details-heading"
        className="scroll-mt-4 border-t border-[#12332c]/10 bg-[#f8f6f0] px-safe py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="reveal text-center">
            <p className="text-[0.7rem] font-medium tracking-[0.4em] text-[#0d6157]/80 uppercase">
              When &amp; Where
            </p>
            <h2
              id="details-heading"
              className="mt-4 font-serif text-4xl font-normal text-[#12332c] sm:text-5xl"
            >
              The Celebration
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#a8874a]/60 to-transparent" />
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

          <div className="reveal mt-12 overflow-hidden rounded-2xl border border-[#12332c]/10 bg-white shadow-[0_24px_60px_-40px_rgba(18,51,44,0.55)]">
            <div className="aspect-[4/3] w-full sm:aspect-[16/9]">
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
      </section>

      <section
        id="entourage"
        aria-labelledby="entourage-heading"
        className="border-t border-[#12332c]/10 bg-[#f3f0e6] px-safe py-20 sm:py-28"
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="reveal text-center">
            <p className="text-[0.7rem] font-medium tracking-[0.4em] text-[#0d6157]/80 uppercase">
              The Entourage
            </p>
            <h2
              id="entourage-heading"
              className="mt-4 font-serif text-4xl font-normal text-[#12332c] sm:text-5xl"
            >
              Wedding Party
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#a8874a]/60 to-transparent" />
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

                <ul className="mt-5 divide-y divide-[#12332c]/10">
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
    </main>
  )
}
