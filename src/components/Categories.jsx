import { categories } from "../data/products";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-6xl">
          A cake for every occasion
        </h1>

        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          From storybook weddings to Saturday afternoons — we bake for every
          moment.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            <Link
              to={`/shop?category=${cat.slug}`} //takes us to e.g. shop with search category=cupcakes
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-soft hover:shadow-glow transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-display text-xl text-white">{cat.name}</h3>

                <span className="text-xs text-white/80 group-hover:text-white transition">
                  Shop now →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
