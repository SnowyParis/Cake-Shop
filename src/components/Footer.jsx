import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="grid h-9 w-9 place-items-center rounded-full gradient-rose text-white font-display text-lg">
              R
            </div>
            <span className="font-display text-2xl font-semibold">Rosé</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Handcrafted luxury cakes made fresh daily. Every celebration
            deserves a masterpiece.
          </p>
          {/* <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-primary">
                All Cakes
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Build Your Own
              </a>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-primary">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Sweet updates, straight to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-full gradient-rose px-4 py-2 text-sm font-medium text-white shadow-soft hover:opacity-90 transition">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rosé Bakery. Baked with love.
      </div>
    </footer>
  );
}

export default Footer;
