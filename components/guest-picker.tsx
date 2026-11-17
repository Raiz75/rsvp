"use client"

import { IconCheck, IconSearch } from "@tabler/icons-react"
import { useId, useState } from "react"
import type { Guest } from "@/lib/guests"
import { cn } from "cn"

type GuestPickerProps = {
  guests: Guest[]
  onSelect: (guest: Guest) => void
}

export function GuestPicker({ guests, onSelect }: GuestPickerProps) {
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)

  const baseId = useId()
  const listId = `${baseId}-listbox`
  const inputId = `${baseId}-input`
  const optionId = (id: string) => `${baseId}-option-${id}`

  const trimmed = query.trim().toLowerCase()
  const filtered = trimmed
    ? guests.filter((guest) => guest.name.toLowerCase().includes(trimmed))
    : guests

  const active = filtered.length
    ? Math.min(activeIndex, filtered.length - 1)
    : -1

  function moveTo(index: number) {
    setActiveIndex(index)
    const node = document.getElementById(optionId(filtered[index].id))
    node?.scrollIntoView({ block: "nearest" })
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!filtered.length) return

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault()
        moveTo((active + 1) % filtered.length)
        break
      case "ArrowUp":
        event.preventDefault()
        moveTo((active - 1 + filtered.length) % filtered.length)
        break
      case "Home":
        event.preventDefault()
        moveTo(0)
        break
      case "End":
        event.preventDefault()
        moveTo(filtered.length - 1)
        break
      case "Enter":
        event.preventDefault()
        onSelect(filtered[active])
        break
      default:
        break
    }
  }

  return (
    <div>
      <label
        htmlFor={inputId}
        className="text-[0.65rem] font-medium tracking-[0.3em] text-[#0d6157]/80 uppercase"
      >
        Find your name
      </label>

      <div className="relative mt-2">
        <IconSearch
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-[#12332c]/40"
          stroke={1.75}
        />
        <input
          id={inputId}
          type="text"
          role="combobox"
          aria-expanded={filtered.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            active >= 0 ? optionId(filtered[active].id) : undefined
          }
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          placeholder="Search your name"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setActiveIndex(0)
          }}
          onKeyDown={handleKeyDown}
          className="w-full rounded-xl border border-[#12332c]/15 bg-white py-3 pr-3 pl-10 text-sm text-[#12332c] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors outline-none placeholder:text-[#12332c]/35 focus-visible:border-[#0d6157]/50 focus-visible:ring-3 focus-visible:ring-[#0d6157]/15"
        />
      </div>

      <ul
        id={listId}
        role="listbox"
        aria-label="Guests"
        className="mt-3 max-h-60 [scrollbar-width:thin] [scrollbar-color:#12332c40_transparent] space-y-1 overflow-y-auto overscroll-contain rounded-xl border border-[#12332c]/10 bg-white/70 p-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#12332c]/20 [&::-webkit-scrollbar-track]:bg-transparent"
      >
        {filtered.map((guest, index) => (
          <li
            key={guest.id}
            id={optionId(guest.id)}
            role="option"
            aria-selected={index === active}
            onClick={() => onSelect(guest)}
            onPointerMove={() => setActiveIndex(index)}
            className={cn(
              "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
              index === active
                ? "bg-[#0d6157]/10 text-[#12332c]"
                : "text-[#3d4a44] hover:bg-[#0d6157]/5"
            )}
          >
            <span className="font-serif text-base">{guest.name}</span>
            <span className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-[#a8874a]/35 bg-[#a8874a]/10 px-2 py-0.5 text-[0.6rem] font-medium tracking-[0.12em] text-[#7a6031] uppercase">
                {guest.seats} {guest.seats === 1 ? "seat" : "seats"}
              </span>
              <IconCheck
                aria-hidden="true"
                className={cn(
                  "size-4 text-[#0d6157] transition-opacity",
                  index === active ? "opacity-100" : "opacity-0"
                )}
                stroke={2}
              />
            </span>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-3 rounded-xl border border-dashed border-[#12332c]/15 bg-white/50 px-3 py-4 text-center text-sm text-[#4b5750]">
          No guest found for “{query.trim()}”. Please check the spelling or
          contact us.
        </p>
      ) : null}
    </div>
  )
}
