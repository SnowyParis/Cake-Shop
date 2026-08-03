import { products, testimonials, categories, galleryImages } from "../data/products.js";
import { ArrowRight, Sparkles, Truck, Cake, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ProductCard } from "./ProductCard.jsx";
import heroCake from "../assets/hero-cake.jpg";

function Home() {
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 8);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 4);
  const featured = products.filter((p) => p.featured).slice(0, 4);
  
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="flex justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Cakes that make{" "}
              <span className="text-gradient italic">moments</span>{" "}
              unforgettable
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Handcrafted with obsessive care. From intimate birthdays to
              storybook weddings — every Rosé cake is a signature centerpiece.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full gradient-rose px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition">
                Shop cakes <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-glow">
            <img
              src={heroCake}
              alt="Signature rose cake"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <Section title="Shop by occasion" subtitle="Every moment has a flavor">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/shop"
                search={{ category: cat.slug }}
                className="group block relative aspect-square overflow-hidden rounded-3xl shadow-soft"
              >
                <img src={cat.image} alt={cat.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg text-white leading-tight">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Best sellers */}
      <Section title="Best sellers" subtitle="Loved by 10,000+ customers">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </Section>

      {/* New arrivals */}
      <Section title="New arrivals" subtitle="Fresh from the pastry kitchen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </Section>

      {/* About strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-4">
            {featured.slice(0, 4).map((p, i) => (
              <div key={p.id} className={`aspect-square rounded-3xl overflow-hidden shadow-soft ${i % 2 ? "translate-y-8" : ""}`}>
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <span className="text-sm font-medium text-primary tracking-widest uppercase">Our story</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A love letter to celebration</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Rosé began in a small kitchen with one belief: that a cake can hold a memory forever. Today, our team of pastry artists still bakes every cake by hand, using only the finest butter, single-origin chocolate, and heirloom fruit.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Meet our bakers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Section title="Sweet words" subtitle="From customers who trusted us with their moments">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-card p-6 shadow-soft"
            >
              <div className="flex gap-0.5 text-accent mb-3">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t border-border/60">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Instagram */}
      <Section title="@rosebakery" subtitle="Follow along on Instagram">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition" />
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

export default Home;
