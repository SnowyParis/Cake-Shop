import { ProductCard } from "./ProductCard.jsx";
import { products } from "../data/products.js";
import { useShop } from "../store/shop.js";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist = useShop((state) => state.wishlist);
  const items = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl md:text-5xl">Your wishlist</h1>

      <p className="mt-2 text-muted-foreground">
        Cakes you've saved for later.
      </p>

      {items.length === 0 ? (
        <div className="mt-16 text-center rounded-3xl border border-dashed p-16">
          <div className="text-5xl mb-3">💖</div>

          <div className="font-display text-2xl">No favorites yet</div>

          <p className="mt-2 text-muted-foreground">
            Tap the heart on any cake to save it.
          </p>

          <Link
            to="/shop"
            className="mt-5 inline-flex rounded-full gradient-rose px-6 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Discover cakes
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
