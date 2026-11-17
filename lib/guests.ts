export type Guest = {
  id: string
  name: string
  /** Total seats reserved for this guest, including the guest themselves. */
  seats: 1 | 2 | 3
}

// Placeholder guest list — replace with the real one.
export const guests: Guest[] = [
  { id: "g01", name: "Abigail Reyes", seats: 2 },
  { id: "g02", name: "Bernard Lim", seats: 1 },
  { id: "g03", name: "Carmela Santos", seats: 3 },
  { id: "g04", name: "Daniel Cruz", seats: 2 },
  { id: "g05", name: "Elena Villanueva", seats: 1 },
  { id: "g06", name: "Fernando Aquino", seats: 2 },
  { id: "g07", name: "Grace Mendoza", seats: 1 },
  { id: "g08", name: "Hector Bautista", seats: 3 },
  { id: "g09", name: "Isabel Navarro", seats: 2 },
  { id: "g10", name: "Jonathan Torres", seats: 1 },
]
