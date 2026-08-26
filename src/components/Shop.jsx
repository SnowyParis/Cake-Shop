import { products, categories } from "../data/products.js";
import { Search, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "./ProductCard.jsx";
import { useMemo, useState } from "react";

const sortOptions = [
  { value: "popular", label: "Popularity" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
  { value: "newest", label: "Newest" },
];

const PAGE_SIZE = 12;

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [q, setQ] = useState(searchParams.get("query") || "");
  const [maxPrice, setMaxPrice] = useState(150);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;

      if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;

      const price = p.discountedPrice ?? p.price;

      if (price > maxPrice) return false;
      if (p.rating < minRating) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = list.sort(
          (a, b) =>
            (a.discountedPrice ?? a.price) - (b.discountedPrice ?? b.price),
        );
        break;
      case "price-desc":
        list = list.sort(
          (a, b) =>
            (b.discountedPrice ?? b.price) - (a.discountedPrice ?? a.price),
        );
        break;
      case "rating":
        list = list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list = list.sort(
          (a, b) => Number(b.newArrival ?? 0) - Number(a.newArrival ?? 0),
        );
        break;
      default:
        list = list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [category, q, maxPrice, minRating, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl">
          Our Cake Collection
        </h1>

        <p className="mt-2 text-muted-foreground">
          {filtered.length} exquisite creations to choose from
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search cakes..."
                className="w-full rounded-full border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </label>

              <div className="mt-2 space-y-1 max-h-64 overflow-auto pr-2">
                <button
                  onClick={() => {
                    setCategory("all");
                    setPage(1);
                  }}
                  className={`w-full text-left rounded-full px-3 py-1.5 text-sm transition ${category === "all" ? "bg-primary text-primary-foreground" : "hover:bg-secondary/60 text-foreground/80"}`}
                >
                  All
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      setCategory(cat.slug);
                      setPage(1);
                    }}
                    className={`w-full text-left rounded-full px-3 py-1.5 text-sm transition ${category === cat.slug ? "bg-primary text-primary-foreground" : "hover:bg-secondary/60 text-foreground/80"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Max price: ${maxPrice}
              </label>

              <input
                type="range"
                min={20}
                max={150}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-2 w-full accent-primary"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Minimum rating
              </label>

              <div className="mt-2 flex gap-1">
                {[0, 3, 4, 4.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setMinRating(rate)}
                    className={`flex-1 rounded-full border px-2 py-1.5 text-xs font-medium transition",
                      ${
                        minRating === rate
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-secondary/60"
                      }`}
                  >
                    {rate === 0 ? "Any" : `${rate}+★`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="text-sm text-muted-foreground">
              Showing {(page - 1) * PAGE_SIZE + 1}–
              {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort by: {option.label}
                </option>
              ))}
            </select>
          </div>

          {paginated.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border p-16 text-center">
              <div className="font-display text-2xl">
                No cakes match your filters
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters or search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((page, index) => (
                <ProductCard key={page.id} product={page} index={index} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => ( //the array loops a length number of times
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`h-10 w-10 rounded-full text-sm font-medium transition
                    ${
                      page === index + 1
                        ? "gradient-rose text-white shadow-soft"
                        : "bg-card hover:bg-secondary/60"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
