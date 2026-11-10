export interface AmenityGroup {
  id: string;
  title: string;
  intro: string;
  items: string[];
  image: string;
  imageAlt: string;
}

const A = "/projects/mahalaxmi-nagar-51-anaya";

export const amenityGroups: AmenityGroup[] = [
  {
    id: "wellness",
    title: "Clubhouse & Wellness",
    intro:
      "A full-fledged clubhouse built around your health and relaxation, with indoor and outdoor spaces for the whole family.",
    items: [
      "Fully equipped gymnasium",
      "Yoga & meditation room",
      "Swimming pool",
      "Kids' pool",
    ],
    image: `${A}/gallery-10.jpg`,
    imageAlt: "Swimming pool at the clubhouse",
  },
  {
    id: "sports",
    title: "Sports & Fitness",
    intro:
      "Courts, turf and tracks for every sport, so staying active becomes part of daily life.",
    items: [
      "Basketball court",
      "Football turf",
      "Cricket turf",
      "Pickleball court",
      "Volleyball court",
      "Jogging track",
      "Green gym",
      "Sports changing rooms",
    ],
    image: `${A}/gallery-04.jpg`,
    imageAlt: "Pickleball court",
  },
  {
    id: "family",
    title: "Kids & Family",
    intro:
      "Safe, cheerful spaces where children can play and learn, and elders can walk and relax.",
    items: [
      "Outdoor kids' play area",
      "Indoor kids' play area",
      "Crèche",
      "Library & card room",
      "Senior citizens' garden",
      "Walking track",
    ],
    image: `${A}/gallery-06.jpg`,
    imageAlt: "Kids' play area",
  },
  {
    id: "social",
    title: "Social & Celebrations",
    intro:
      "Places to host birthdays, festivals and get-togethers without leaving your community.",
    items: [
      "Banquet hall (approx. 2,000 sq. ft.)",
      "Party lawn",
      "Cafeteria",
      "Modern kitchen",
      "Indoor games zone",
      "Amphitheatre",
    ],
    image: `${A}/gallery-09.jpg`,
    imageAlt: "Party lawn",
  },
  {
    id: "nature",
    title: "Nature & Open Spaces",
    intro:
      "Landscaped lawns, tree groves and shaded seating, planned so greenery is part of every walk.",
    items: [
      "Grand central lawn",
      "Landscaped gardens",
      "Court pergola",
      "Seating cabanas",
      "Seating lawn area",
      "Tree groves",
    ],
    image: `${A}/gallery-07.jpg`,
    imageAlt: "Cabana seating area",
  },
];