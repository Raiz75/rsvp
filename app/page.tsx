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

export default function Page() {
  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#f8f6f0] py-20 pr-[max(1.5rem,env(safe-area-inset-right))] pl-[max(1.5rem,env(safe-area-inset-left))] text-center">
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

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[max(2rem,calc(env(safe-area-inset-bottom)_+_1rem))] flex justify-center md:translate-x-[8%]"
      >
        <IconChevronDown
          className="size-7 animate-scroll-hint text-[#0d6157]/70 motion-reduce:animate-none"
          stroke={1.5}
        />
      </div>
    </main>
  )
}
