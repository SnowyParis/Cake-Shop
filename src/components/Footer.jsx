import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const linkClassName = "hover:text-primary";

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-6 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-2xl text-gradient italic font-semibold">
              Sweet Nothings
            </span>
          </div>

          <p className="text-sm text-muted-foreground max-w-xs">
            Handcrafted luxury cakes made fresh daily. Every celebration
            deserves a masterpiece.
          </p>

          <div className="flex gap-3 mt-5">
            {[FiInstagram, FiFacebook, FiTwitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Shop</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className={linkClassName}>
                All Cakes
              </Link>
            </li>

            <li>
              <Link to="/categories" className={linkClassName}>
                Categories
              </Link>
            </li>

            <li>
              <Link to="/order" className={linkClassName}>
                Custom order
              </Link>
            </li>

            <li>
              <Link to="/cart" className={linkClassName}>
                Cart
              </Link>
            </li>

            <li>
              <Link to="/wishlist" className={linkClassName}>
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Company</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className={linkClassName}>
                Our Story
              </Link>
            </li>

            <li>
              <Link to="/contact" className={linkClassName}>
                Contact
              </Link>
            </li>

            <li>
              <a href="#" className={linkClassName}>
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
        © {new Date().getFullYear()} Sweet Nothings Bakery. Baked with love.
      </div>
    </footer>
  );
}

export default Footer;
