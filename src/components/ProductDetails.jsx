import { ProductCard } from "../components/ProductCard.jsx";
import { Navigate, useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { useShop } from "../store/shop.js";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  Share2,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function ProductDetails() {
  const { slug } = useParams();

  // Find the product using the URL slug
  const product = products.find((p) => p.slug === slug);

  // Redirect if the product doesn't exist
  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const [size, setSize] = useState(product.sizes[1]);
  const [flavor, setFlavor] = useState(product.flavors[0]);
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");
  const [tab, setTab] = useState("desc");

  const addToCart = useShop((state) => state.addToCart);
  const toggleWishlist = useShop((state) => state.toggleWishlist);
  const isWishlisted = useShop((state) =>
    state.wishlist.includes(product.id)
  );

  const price = product.discountedPrice ?? product.price;

  const related = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group relative aspect-square overflow-hidden rounded-3xl bg-secondary/40 shadow-glow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>

        {/* Product Information */}
        <div>
          {/* Category */}
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            {product.category.replace("-", " ")}
          </div>

          {/* Product Name */}
          <h1 className="mt-2 font-display text-4xl md:text-5xl">
            {product.name}
          </h1>

          {/* Rating + Stock */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />

              <span className="font-semibold">
                {product.rating}
              </span>

              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            <span
              className={`text-xs ${product.stock > 0 ? "text-emerald-600" : "text-destructive"}`}
            >
              {product.stock > 0 ? "In stock" : "Sold out"}
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl text-gradient">
              ${price.toFixed(2)}
            </span>

            {product.discountedPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Size */}
          <div className="mt-6">
            <label className="text-sm font-semibold">
              Size
            </label>

            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((sizeOption) => (
                <button
                  key={sizeOption}
                  type="button"
                  onClick={() => setSize(sizeOption)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${size === sizeOption ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-secondary/60"}`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor */}
          <div className="mt-5">
            <label className="text-sm font-semibold">
              Flavor
            </label>

            <div className="mt-2 flex flex-wrap gap-2">
              {product.flavors.map((flavorOption) => (
                <button
                  key={flavorOption}
                  type="button"
                  onClick={() => setFlavor(flavorOption)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${flavor === flavorOption ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-secondary/60"}`}
                >
                  {flavorOption}
                </button>
              ))}
            </div>
          </div>

          {/* Cake Message */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-sm font-semibold"
            >
              Cake message (optional)
            </label>

            <input
              id="message"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value.slice(0, 60))
              }
              placeholder="Happy Birthday, love!"
              className="mt-2 w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Delivery Date */}
          <div className="mt-5">
            <label
              htmlFor="date"
              className="text-sm font-semibold"
            >
              Delivery date
            </label>

            <input
              id="date"
              type="date"
              min={
                new Date(Date.now() + 86400000)
                  .toISOString()
                  .split("T")[0]
              }
              className="mt-2 w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Quantity + Cart + Wishlist + Share */}
          <div className="mt-6 flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center rounded-full border border-input bg-background">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() =>
                  setQty((quantity) => Math.max(1, quantity - 1))
                }
                className="grid h-11 w-11 place-items-center rounded-l-full hover:bg-secondary/60"
              >
                <Minus className="h-4 w-4" />
              </button>

              <span className="w-10 text-center text-sm font-semibold">
                {qty}
              </span>

              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() =>
                  setQty((quantity) => quantity + 1)
                }
                className="grid h-11 w-11 place-items-center rounded-r-full hover:bg-secondary/60"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={() =>
                addToCart(product, {
                  size,
                  flavor,
                  quantity: qty,
                  message,
                })
              }
              className="flex-1 rounded-full gradient-rose px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Add to cart · ${(price * qty).toFixed(2)}
            </button>

            {/* Wishlist */}
            <button
              type="button"
              aria-label="Wishlist"
              onClick={() => toggleWishlist(product.id)}
              className={`grid h-12 w-12 place-items-center rounded-full border transition ${isWishlisted ? "border-primary bg-primary/10 text-primary" : "border-input hover:bg-secondary/60"}`}
            >
              <Heart
                className={`h-5 w-5 ${isWishlisted && "fill-current"}`}
              />
            </button>

            {/* Share */}
            <button
              type="button"
              aria-label="Share"
              className="grid h-12 w-12 place-items-center rounded-full border border-input hover:bg-secondary/60"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Delivery Information */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft">
              <Truck className="h-6 w-6 text-primary" />

              <div className="text-xs">
                <div className="text-sm font-semibold">
                  Same-day delivery
                </div>
                Order before 2pm
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft">
              <ShieldCheck className="h-6 w-6 text-primary" />

              <div className="text-xs">
                <div className="text-sm font-semibold">
                  Freshness promise
                </div>
                Baked the same day
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 flex gap-6 border-b border-border/60">
        {[
          ["desc", "Description"],
          ["ing", "Ingredients"],
          ["reviews", "Reviews"],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`relative pb-3 text-sm font-medium transition ${tab === key ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            {label}

            {tab === key && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">

        {/* Description */}
        {tab === "desc" && (
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            {product.description} Each cake is baked to order and
            hand-finished by our pastry team. Please allow 24 hours
            notice for delivery.
          </p>
        )}

        {/* Ingredients */}
        {tab === "ing" && (
          <div className="grid max-w-3xl gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">
                Ingredients
              </h4>

              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">
                Allergens
              </h4>

              <div className="flex flex-wrap gap-2">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="rounded-full bg-secondary/60 px-3 py-1 text-xs"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reviews */}
        {tab === "reviews" && (
          <div className="max-w-3xl space-y-4">
            {[
              {
                name: "Emma R.",
                rating: 5,
                text: "Absolutely incredible. Rich, moist, and beautifully decorated. Will be ordering again!",
              },
              {
                name: "Daniel S.",
                rating: 5,
                text: "Delivered on time and the flavor was outstanding. Highly recommend.",
              },
              {
                name: "Priya M.",
                rating: 4,
                text: "Beautiful presentation. Wished for a slightly less sweet frosting, but overall lovely.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card p-5 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">
                    {review.name}
                  </div>

                  <div className="text-sm text-accent">
                    {"★".repeat(review.rating)}
                  </div>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-8 font-display text-3xl">
            You may also love
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}