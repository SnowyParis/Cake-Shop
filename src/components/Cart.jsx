import { useShop, cartTotalSelector } from "../store/shop.js";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const cart = useShop((s) => s.cart);
  const updateQuantity = useShop((s) => s.updateQuantity);
  const removeFromCart = useShop((s) => s.removeFromCart);
  const subtotal = useShop(cartTotalSelector);
  const [coupon, setCoupon] = useState("");
  const [gift, setGift] = useState(false);

  const delivery = subtotal > 0 ? (subtotal > 80 ? 0 : 8) : 0;
  const giftFee = gift ? 5 : 0;
  const tax = Math.round(subtotal * 0.15 * 100) / 100;
  const total = subtotal + delivery + giftFee + tax;

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="text-6xl mb-4">🎂</div>
        <h1 className="font-display text-4xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Let's find you something sweet.
        </p>

        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full gradient-rose px-6 py-3 text-sm font-semibold text-white shadow-soft"
        >
          Shop cakes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl md:text-5xl">Your cart</h1>
      <p className="mt-2 text-muted-foreground">
        {cart.length} item{cart.length > 1 ? "s" : ""}
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-4">
          {cart.map((item) => {
            const product = item.product;
            const price = product.discountedPrice ?? product.price; //discounted price or original price
            
            return (
              <div
                key={product.id + (item.size ?? "") + (item.flavor ?? "")}
                className="rounded-3xl bg-card p-4 shadow-soft grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr_auto] gap-4 items-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <Link
                    to={`/product/${product.slug}`}
                    className="font-display text-lg hover:text-primary line-clamp-1"
                  >
                    {product.name}
                  </Link>

                  <div className="text-xs text-muted-foreground mt-1">
                    {item.size && <span>Size: {item.size}</span>}
                    {item.flavor && <span> · Flavor: {item.flavor}</span>}
                  </div>

                  {item.message && (
                    <div className="text-xs text-primary mt-1 italic">
                      "{item.message}"
                    </div>
                  )}

                  <div className="mt-2 font-semibold">
                    R{(price * item.quantity).toFixed(2)}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center justify-between sm:justify-end gap-3">
                  <div className="flex items-center rounded-full border border-input bg-background">
                    <button
                      onClick={() => updateQuantity(product.id, item.quantity - 1)}
                      aria-label="Decrease"
                      className="grid h-9 w-9 place-items-center hover:bg-secondary/60 rounded-l-full"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>

                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(product.id, item.quantity + 1)}
                      aria-label="Increase"
                      className="grid h-9 w-9 place-items-center hover:bg-secondary/60 rounded-r-full"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    aria-label="Remove"
                    className="grid h-9 w-9 place-items-center rounded-full hover:bg-danger/10 text-muted-foreground hover:text-danger"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="rounded-3xl bg-card p-6 shadow-soft h-fit sticky top-24">
          <h2 className="font-display text-xl">Order summary</h2>

          <div className="mt-4 flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Promo code"
                className="w-full rounded-full border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <button className="rounded-full border border-input px-4 py-2 text-sm font-medium hover:bg-secondary/60">
              Apply
            </button>
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={gift}
              onChange={(e) => setGift(e.target.checked)}
              className="accent-primary"
            />
            Add gift wrapping (+R5)
          </label>

          <dl className="mt-5 space-y-2 text-sm">
            <Row label="Subtotal" value={subtotal} />

            <Row
              label="Delivery"
              value={delivery}
              note={delivery === 0 && subtotal > 0 ? "Free" : undefined}
            />
            
            {gift && <Row label="Gift wrap" value={giftFee} />}
            <Row label="Tax" value={tax} />
          </dl>

          <div className="mt-4 pt-4 border-t border-border/60 flex items-baseline justify-between">
            <span className="font-semibold">Total</span>
            
            <span className="font-display text-2xl text-gradient">
              R{total.toFixed(2)}
            </span>
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Estimated delivery: Tomorrow, before 6pm
          </p>

          <button className="mt-5 w-full rounded-full gradient-rose px-6 py-3 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition">
            Proceed to checkout
          </button>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, note }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{note ?? `R${value.toFixed(2)}`}</dd>
    </div>
  );
}

export default Cart;
