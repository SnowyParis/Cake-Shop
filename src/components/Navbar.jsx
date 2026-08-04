import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cartCountSelector, useShop } from "../store/shop.js";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const cartCount = useShop(cartCountSelector);
  const wishlistCount = useShop((s) => s.wishlist.length);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl text-gradient italic font-semibold tracking-tight">
              Sweet Nothings
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative text-[1rem] font-medium transition-colors hover:text-primary ${active ? "text-primary" : "text-foreground/80"}`}
                >
                  {item.label}

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              to="/shop"
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-secondary/60 hover:text-primary transition"
            >
              <Search className="h-5 w-5" />
            </Link>

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-secondary/60 hover:text-primary transition"
            >
              <Heart className="h-5 w-5" />

              {/* the pink counter on the top right corner */}
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-secondary/60 hover:text-primary transition"
            >
              <ShoppingBag className="h-5 w-5" />

              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              aria-label="Menu"
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-secondary/60"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border/40 bg-background/95"
          >
            <div className="flex flex-col p-4 gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary/60"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
