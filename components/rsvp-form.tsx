"use client"

import { Dialog } from "@base-ui/react/dialog"
import { IconCheck, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { GuestPicker } from "@/components/guest-picker"
import { guests, type Guest } from "@/lib/guests"

type Companion = {
  firstName: string
  lastName: string
  middleInitial: string
}

const emptyCompanion: Companion = {
  firstName: "",
  lastName: "",
  middleInitial: "",
}

const fieldClass =
  "w-full rounded-xl border border-[#12332c]/15 bg-white px-3 py-2.5 text-sm text-[#12332c] outline-none transition-colors placeholder:text-[#12332c]/35 focus-visible:border-[#0d6157]/50 focus-visible:ring-3 focus-visible:ring-[#0d6157]/15"

const labelClass =
  "text-[0.6rem] font-medium tracking-[0.16em] text-[#12332c]/60 uppercase"

const scrollClass =
  "flex-1 overflow-y-auto overscroll-contain [scrollbar-color:#12332c40_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#12332c]/20 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5"

export function RsvpForm() {
  const [open, setOpen] = useState(false)
  const [guest, setGuest] = useState<Guest | null>(null)
  const [companions, setCompanions] = useState<Companion[]>([])
  const [confirmed, setConfirmed] = useState(false)

  const companionCount = guest ? guest.seats - 1 : 0

  function reset() {
    setGuest(null)
    setCompanions([])
    setConfirmed(false)
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)
    if (nextOpen) reset()
  }

  function selectGuest(nextGuest: Guest) {
    setGuest(nextGuest)
    setCompanions(
      Array.from({ length: nextGuest.seats - 1 }, () => ({ ...emptyCompanion }))
    )
    setConfirmed(false)
  }

  function clearGuest() {
    setGuest(null)
    setCompanions([])
    setConfirmed(false)
  }

  function updateCompanion(
    index: number,
    field: keyof Companion,
    value: string
  ) {
    setCompanions((current) =>
      current.map((companion, position) =>
        position === index ? { ...companion, [field]: value } : companion
      )
    )
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0d6157] px-9 text-[0.7rem] font-medium tracking-[0.25em] text-[#f8f6f0] uppercase shadow-[0_18px_40px_-22px_rgba(13,97,87,0.9)] transition-colors outline-none select-none hover:bg-[#12332c] focus-visible:ring-3 focus-visible:ring-[#0d6157]/35 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8f6f0]">
        RSVP
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 min-h-svh bg-[#12332c]/45 backdrop-blur-[2px] transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />

        <Dialog.Popup className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92svh] flex-col rounded-t-3xl border border-[#12332c]/10 bg-[#f8f6f0] text-[#12332c] shadow-[0_-30px_80px_-30px_rgba(18,51,44,0.55)] transition-[opacity,translate] duration-300 ease-out outline-none data-ending-style:translate-y-6 data-ending-style:opacity-0 data-starting-style:translate-y-6 data-starting-style:opacity-0 sm:inset-x-auto sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:w-[calc(100%-3rem)] sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:data-ending-style:translate-y-0 sm:data-starting-style:translate-y-0">
          <div className="flex items-start justify-between gap-4 border-b border-[#12332c]/10 px-6 pt-5 pb-4">
            <div>
              <Dialog.Title className="font-serif text-2xl font-normal">
                {confirmed ? "You’re on the list" : "Kindly reply"}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-xs tracking-[0.02em] text-[#4b5750]">
                {confirmed
                  ? "We can’t wait to celebrate with you."
                  : "Please reply by January 10, 2027."}
              </Dialog.Description>
            </div>

            <Dialog.Close
              aria-label="Close"
              className="rounded-full p-2 text-[#12332c]/50 transition-colors outline-none hover:bg-[#12332c]/5 hover:text-[#12332c] focus-visible:ring-3 focus-visible:ring-[#0d6157]/25"
            >
              <IconX aria-hidden="true" className="size-4" stroke={1.75} />
            </Dialog.Close>
          </div>

          {confirmed && guest ? (
            <>
              <div className={`${scrollClass} px-6 py-8 text-center`}>
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#0d6157]/10 text-[#0d6157]">
                  <IconCheck aria-hidden="true" className="size-7" stroke={2} />
                </span>

                <p className="mt-5 font-serif text-xl">
                  Thank you, {guest.name}.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5750]">
                  {companionCount > 0
                    ? "Your seats are reserved for:"
                    : "Your seat is reserved."}
                </p>

                <ul className="mx-auto mt-4 max-w-xs divide-y divide-[#12332c]/10 rounded-xl border border-[#12332c]/10 bg-white text-left text-sm">
                  <li className="px-4 py-2.5 font-serif text-base">
                    {guest.name}
                  </li>
                  {companions.map((companion, index) => {
                    const name = [
                      companion.firstName,
                      companion.middleInitial
                        ? `${companion.middleInitial}.`
                        : "",
                      companion.lastName,
                    ]
                      .filter(Boolean)
                      .join(" ")

                    return (
                      <li
                        key={index}
                        className="px-4 py-2.5 font-serif text-base"
                      >
                        {name}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="border-t border-[#12332c]/10 px-6 py-4">
                <Dialog.Close className="flex h-11 w-full items-center justify-center rounded-full bg-[#0d6157] text-[0.7rem] font-medium tracking-[0.25em] text-[#f8f6f0] uppercase transition-colors outline-none hover:bg-[#12332c] focus-visible:ring-3 focus-visible:ring-[#0d6157]/35">
                  Done
                </Dialog.Close>
              </div>
            </>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setConfirmed(true)
              }}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className={`${scrollClass} px-6 py-5`}>
                {guest ? (
                  <>
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#0d6157]/25 bg-white px-4 py-3">
                      <div>
                        <p className="font-serif text-lg leading-tight">
                          {guest.name}
                        </p>
                        <p className="mt-0.5 text-[0.7rem] text-[#4b5750]">
                          {guest.seats} {guest.seats === 1 ? "seat" : "seats"}{" "}
                          reserved
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={clearGuest}
                        className="rounded-full px-3 py-1.5 text-[0.65rem] font-medium tracking-[0.18em] text-[#0d6157] uppercase underline-offset-4 transition-colors outline-none hover:bg-[#0d6157]/5 hover:underline focus-visible:ring-3 focus-visible:ring-[#0d6157]/25"
                      >
                        Change
                      </button>
                    </div>

                    {companionCount > 0 ? (
                      <div className="mt-6">
                        <p className="text-[0.65rem] font-medium tracking-[0.3em] text-[#0d6157]/80 uppercase">
                          {companionCount === 1 ? "Your guest" : "Your guests"}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#4b5750]">
                          You have {guest.seats} seats in total. Please add the
                          name{companionCount === 1 ? "" : "s"} of the{" "}
                          {companionCount === 1 ? "person" : "people"} joining
                          you.
                        </p>

                        <div className="mt-4 space-y-5">
                          {companions.map((companion, index) => (
                            <fieldset
                              key={index}
                              className="rounded-xl border border-[#12332c]/10 bg-white/60 p-4"
                            >
                              <legend className="px-1 text-[0.6rem] font-medium tracking-[0.22em] text-[#0d6157]/80 uppercase">
                                Companion {index + 1}
                              </legend>

                              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                <label className="block">
                                  <span className={labelClass}>First name</span>
                                  <input
                                    type="text"
                                    required
                                    autoComplete="given-name"
                                    value={companion.firstName}
                                    onChange={(event) =>
                                      updateCompanion(
                                        index,
                                        "firstName",
                                        event.target.value
                                      )
                                    }
                                    className={`${fieldClass} mt-1.5`}
                                  />
                                </label>

                                <label className="block">
                                  <span className={labelClass}>Last name</span>
                                  <input
                                    type="text"
                                    required
                                    autoComplete="family-name"
                                    value={companion.lastName}
                                    onChange={(event) =>
                                      updateCompanion(
                                        index,
                                        "lastName",
                                        event.target.value
                                      )
                                    }
                                    className={`${fieldClass} mt-1.5`}
                                  />
                                </label>

                                <label className="block max-w-28 sm:col-span-2">
                                  <span className={labelClass}>M.I.</span>
                                  <input
                                    type="text"
                                    maxLength={2}
                                    autoComplete="off"
                                    value={companion.middleInitial}
                                    onChange={(event) =>
                                      updateCompanion(
                                        index,
                                        "middleInitial",
                                        event.target.value
                                      )
                                    }
                                    className={`${fieldClass} mt-1.5`}
                                  />
                                </label>
                              </div>
                            </fieldset>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="mt-6 rounded-xl border border-dashed border-[#12332c]/15 bg-white/50 px-4 py-4 text-center text-xs leading-relaxed text-[#4b5750]">
                        One seat is reserved under your name. We look forward to
                        seeing you.
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <GuestPicker guests={guests} onSelect={selectGuest} />
                    <p className="mt-4 text-center text-[0.7rem] text-[#4b5750]">
                      Select the name your invitation was addressed to.
                    </p>
                  </>
                )}
              </div>

              <div className="border-t border-[#12332c]/10 px-6 py-4">
                <button
                  type="submit"
                  disabled={!guest}
                  className="flex h-11 w-full items-center justify-center rounded-full bg-[#0d6157] text-[0.7rem] font-medium tracking-[0.25em] text-[#f8f6f0] uppercase transition-colors outline-none hover:bg-[#12332c] focus-visible:ring-3 focus-visible:ring-[#0d6157]/35 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Confirm RSVP
                </button>
              </div>
            </form>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
