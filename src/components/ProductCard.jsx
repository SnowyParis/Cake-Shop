import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useShop } from "../store/shop.js";

export function ProductCard({ product, index = 0 }) {
  const isWishlisted = useShop((state) =>
    state.wishlist.includes(product.id)
  );
  
  const toggleWishlist = useShop((state) => state.toggleWishlist);
  const addToCart = useShop((state) => state.addToCart);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-glow transition-all duration-500"
    >
      <Link
        to={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-secondary/40"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {product.discountedPrice && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
            Sale
          </span>
        )}

        {product.newArrival && !product.discountedPrice && (
          <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
            New
          </span>
        )}
      </Link>

      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass transition ${isWishlisted ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
      >
        <Heart
          className={`h-4 w-4 ${isWishlisted && "fill-current"}`}
        />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="font-medium text-foreground">
            {product.rating}
          </span>
          <span>({product.reviews})</span>
        </div>

        <Link
          to={`/product/${product.slug}`}
          className="mt-1 font-display text-lg leading-snug hover:text-primary transition line-clamp-2"
        >
          {product.name}
        </Link>

        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            {product.discountedPrice ? (
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-primary">
                  ${product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-semibold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="rounded-full gradient-rose px-4 py-2 text-xs font-semibold text-white shadow-soft hover:opacity-90 transition hover:-translate-y-0.5"
          >
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}