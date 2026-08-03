import { motion } from "motion/react";
import { galleryImages } from "../data/products.js";
import heroCake from "../assets/hero-cake.jpg";
import donuts from "../assets/donuts.jpg";

const bakers = [
  {
    name: "Amélie Rousseau",
    role: "Head Pastry Chef",
    bio: "Trained at Le Cordon Bleu. 15 years crafting cakes for weddings and royalty.",
  },
  {
    name: "Marco Bianchi",
    role: "Chocolatier",
    bio: "Fourth-generation chocolatier from Turin. Obsessed with single-origin cocoa.",
  },
  {
    name: "Yuki Tanaka",
    role: "Cake Artist",
    bio: "Sugar-flower specialist. Her petal work has been featured in Vogue Weddings.",
  },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Our story
            </span>

            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight">
              A little bakery with a big obsession
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Rosé began in 2012 as a home kitchen experiment — one
              grandmother's recipe, two hands, and a stubborn belief that a cake
              could hold a memory forever. Twelve years later, we still bake the
              same way: slowly, by hand, with the finest ingredients we can
              find.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-4/5 rounded-3xl overflow-hidden shadow-glow"
          >
            <img
              src={donuts}
              alt="Signature Rosé donuts"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              body: "To make every celebration extraordinary through cakes that feel like art and taste like memory.",
            },
            {
              title: "Our Craft",
              body: "Every layer, every petal, every flourish is made by hand. No shortcuts. No compromises.",
            },
            {
              title: "Our Promise",
              body: "Baked the day it's delivered. If you're not delighted, we'll make it right — always.",
            },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-card p-8 shadow-soft"
            >
              <h3 className="font-display text-2xl">{a.title}</h3>
              <p className="mt-3 text-muted-foreground">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl md:text-5xl text-center">
          Meet our bakers
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {bakers.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/30 mb-4">
                <img
                  //we use i + 1 to get the current image since the image in the first index of galleryImages is the hero image
                  src={galleryImages[i + 1]}
                  alt={b.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl">{b.name}</h3>
              <div className="text-sm text-primary font-medium">{b.role}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-10">
          Inside our kitchen
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl overflow-hidden ${i % 3 === 0 ? "row-span-2 md:aspect-1/2" : ""}`}
            >
              <img
                src={img}
                alt={`Kitchen ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
