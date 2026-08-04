import strawberry from "../assets/cake-strawberry.jpg";
import cheesecake from "../assets/cake-cheesecake.jpg";
import redvelvet from "../assets/cake-redvelvet.jpg";
import chocolate from "../assets/cake-chocolate.jpg";
import cupcakes from "../assets/cake-cupcakes.jpg";
import vanilla from "../assets/cake-vanilla.jpg";
import rainbow from "../assets/cake-rainbow.jpg";
import hero from "../assets/hero-cake.jpg";
import donuts from "../assets/donuts.jpg";

export const categories = [
  { slug: "birthday", name: "Birthday Cakes", image: rainbow },
  { slug: "wedding", name: "Wedding Cakes", image: vanilla },
  { slug: "cupcakes", name: "Cupcakes", image: cupcakes },
  { slug: "cheesecakes", name: "Cheesecakes", image: cheesecake },
  { slug: "chocolate", name: "Chocolate Cakes", image: chocolate },
  { slug: "fruit", name: "Fruit Cakes", image: strawberry },
  { slug: "kids", name: "Kids Cakes", image: rainbow },
  { slug: "donuts", name: "Donuts", image: donuts },
  { slug: "vegan", name: "Vegan Cakes", image: redvelvet },
  { slug: "gluten-free", name: "Gluten-Free", image: strawberry },
  { slug: "anniversary", name: "Anniversary", image: redvelvet },
  { slug: "graduation", name: "Graduation", image: chocolate },
  { slug: "holiday", name: "Holiday", image: vanilla },
];

const images = [
  chocolate,
  strawberry,
  vanilla,
  cupcakes,
  cheesecake,
  rainbow,
  redvelvet,
  hero,
  donuts,
];

const names = [
  "Rose Petal Dream",
  "Midnight Chocolate",
  "Strawberry Kiss",
  "Ivory Elegance",
  "Confetti Bliss",
  "Berry Cheesecake",
  "Red Velvet Romance",
  "Golden Vanilla",
  "Raspberry Rhapsody",
  "Salted Caramel",
  "Tiramisu Cloud",
  "Lemon Sunshine",
  "Pistachio Rose",
  "Black Forest",
  "Coconut Paradise",
  "Champagne Truffle",
  "Matcha Whisper",
  "Hazelnut Praline",
  "Passionfruit Charm",
  "Honey Almond",
  "Blueberry Lavender",
  "Mango Tango",
  "Peach Melba",
  "Espresso Mousse",
  "Peppermint Kiss",
  "Rainbow Sprinkle",
  "Unicorn Magic",
  "Dinosaur Party",
  "Vegan Chocolate Bliss",
  "Gluten-Free Vanilla",
  "Wedding White Roses",
  "Golden Anniversary",
  "Graduation Star",
  "Christmas Spice",
  "Halloween Ghost",
  "Valentine Heart",
  "Easter Bunny",
  "Summer Berry Tart",
  "Autumn Apple Spice",
  "Winter Wonderland",
  "Classic Tres Leches",
  "New York Cheesecake",
  "Basque Burnt",
  "Japanese Cotton",
  "Fudge Brownie",
  "Molten Lava",
  "Carrot Walnut",
  "Banana Cream Pie",
  "Coffee Kahlua",
  "Pink Ombré Fantasy",
];

const cats = [
  "birthday",
  "chocolate",
  "fruit",
  "wedding",
  "cupcakes",
  "cheesecakes",
  "vegan",
  "gluten-free",
  "anniversary",
  "kids",
  "holiday",
  "custom",
];

function seedRandom(seed) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const flavors = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Red Velvet",
  "Lemon",
  "Coffee",
  "Matcha",
  "Coconut",
];

const sizes = [
  '6" (serves 4-6)',
  '8" (serves 8-10)',
  '10" (serves 12-15)',
  '12" (serves 20-24)',
];

const allIngredients = [
  "Flour",
  "Butter",
  "Sugar",
  "Eggs",
  "Vanilla",
  "Cocoa",
  "Cream",
  "Milk",
  "Berries",
  "Chocolate",
  "Almonds",
  "Coconut",
];

const allAllergens = ["Dairy", "Eggs", "Gluten", "Nuts", "Soy"];

export const products = names.map((name, index) => {
  const rand = seedRandom(index + 1);
  const price = Math.round((30 + rand() * 90) * 100) / 100;
  const hasDiscount = rand() > 0.7;
  const category = cats[index % cats.length];

  return {
    id: String(index + 1),
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    description: `A signature ${name.toLowerCase()} handcrafted by our master pastry chefs. Made fresh daily with the finest ingredients sourced from local farms and premium suppliers around the world. Every bite is a moment of pure indulgence.`,
    category,
    image: images[index % images.length],
    price,
    discountedPrice: hasDiscount
      ? Math.round(price * 0.8 * 100) / 100
      : undefined,
    rating: Math.round((3.8 + rand() * 1.2) * 10) / 10,
    reviews: Math.floor(20 + rand() * 480),
    ingredients: allIngredients.slice(0, 4 + Math.floor(rand() * 5)),
    allergens: allAllergens.slice(0, 1 + Math.floor(rand() * 3)),
    stock: Math.floor(rand() * 50) + 5,
    sizes,
    flavors: flavors.slice(0, 3 + Math.floor(rand() * 4)),
    tags: [category, index % 3 === 0 ? "popular" : "new"],
    featured: index < 6,
    bestSeller: index % 5 === 0,
    newArrival: index % 7 === 0,
  };
});

export const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Bride",
    quote:
      "The wedding cake was absolutely breathtaking. Every guest asked where we got it. Truly a masterpiece.",
    rating: 5,
  },
  {
    name: "James Smith",
    role: "Birthday Party Host",
    quote:
      "Best cake I've ever had. The custom design exceeded all our expectations and the flavor was heavenly.",
    rating: 5,
  },
  {
    name: "Thabiso Radebe",
    role: "Regular Customer",
    quote:
      "I order from Sweet Nothings every month. The consistency and quality are unmatched. My family is obsessed.",
    rating: 5,
  },
  {
    name: "Sihle Ndlovu",
    role: "Corporate Client",
    quote:
      "Our office events aren't complete without a Sweet Nothings cake. Elegant, delicious, and always on time.",
    rating: 5,
  },
];

export const galleryImages = [
  hero,
  chocolate,
  strawberry,
  vanilla,
  cupcakes,
  cheesecake,
  rainbow,
  redvelvet,
  donuts,
];
