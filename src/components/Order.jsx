import { useMemo, useState } from "react";
import heroCake from "../assets/hero-cake.jpg";

const InputClassName =
  "w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
const TextareaClassName =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
const LabelClassName = "block text-[1rem] font-semibold mb-1.5";

function Order() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    size: "",
    flavour: "",
    frosting: "",
    filling: "",
    decoration: "",
    topper: "",
    servings: 10,
    message: "",
    pickupDate: "",
    delivery: "Pickup",
    address: "",
    notes: "",
  });

  const sizes = [
    { name: "Size", price: 0 },
    { name: "15cm", price: 400 },
    { name: "20cm", price: 600 },
    { name: "25cm", price: 900 },
    { name: "30cm", price: 1300 },
  ];

  const toppers = [
    { name: "None", price: 0 },
    { name: "Candles", price: 20 },
    { name: "Cake Topper", price: 30 },
    { name: "Both", price: 45 },
  ];

  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const total = useMemo(() => {
    const cake = sizes.find((a) => a.name === form.size);
    const topper = toppers.find((b) => b.name === form.topper);

    let price = cake?.price ?? 40;

    price += topper?.price ?? 0;

    if (form.delivery === "Delivery") {
      price += 30;
    }

    return price;
  }, [form]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold">Order Your Custom Cake</h1>

        <p className="mt-3 text-muted-foreground">
          Tell us exactly what you want and we'll bake it for your special day.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        {/* Form */}
        <form className="space-y-8 rounded-3xl bg-card p-8 shadow-lg">
          {/* Customer Information */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">
              Customer Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label for="name" className={LabelClassName}>
                  Name
                </label>

                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={InputClassName}
                />
              </div>

              <div>
                <label for="email" className={LabelClassName}>
                  Email
                </label>

                <input
                required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={InputClassName}
                />
              </div>

              <div>
                <label for="phone" className={LabelClassName}>
                  Phone Number
                </label>

                <input
                required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={InputClassName}
                />
              </div>

              <div>
                <label for="occasion" className={LabelClassName}>
                  Occasion
                </label>

                <select
                required
                  value={form.occasion}
                  onChange={(e) => update("occasion", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Occasion</option>
                  <option>Birthday</option>
                  <option>Wedding</option>
                  <option>Baby Shower</option>
                  <option>Graduation</option>
                  <option>Anniversary</option>
                </select>
              </div>
            </div>
          </section>

          {/* Cake Details */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">Cake Details</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label for="size" className={LabelClassName}>
                  Cake size
                </label>

                <select
                required
                  value={form.size}
                  onChange={(e) => update("size", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Size</option>

                  {sizes.map((size) => (
                    <option key={size.name} value={size.name}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label for="flavour" className={LabelClassName}>
                  Cake flavour
                </label>

                <select
                required
                  value={form.flavour}
                  onChange={(e) => update("flavour", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Flavour</option>
                  <option>Vanilla</option>
                  <option>Chocolate</option>
                  <option>Red Velvet</option>
                  <option>Strawberry</option>
                  <option>Lemon</option>
                </select>
              </div>

              <div>
                <label for="frosting" className={LabelClassName}>
                  Frosting
                </label>

                <select
                required
                  value={form.frosting}
                  onChange={(e) => update("frosting", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Frosting</option>
                  <option>Buttercream</option>
                  <option>Fondant</option>
                  <option>Cream Cheese</option>
                  <option>Whipped Cream</option>
                </select>
              </div>

              <div>
                <label for="filling" className={LabelClassName}>
                  Filling
                </label>

                <select
                required
                  value={form.filling}
                  onChange={(e) => update("filling", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Filling</option>
                  <option>Buttercream</option>
                  <option>Ganache</option>
                  <option>Cream Cheese</option>
                  <option>Whipped Cream</option>
                </select>
              </div>

              <div>
                <label for="decoration" className={LabelClassName}>
                  Decoration
                </label>

                <select
                required
                  value={form.decoration}
                  onChange={(e) => update("decoration", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Decoration</option>
                  <option>Flowers</option>
                  <option>Gold Leaf</option>
                  <option>Sprinkles</option>
                  <option>Berries</option>
                  <option>Minimal</option>
                </select>
              </div>

              <div>
                <label for="decoration" className={LabelClassName}>
                  Topper
                </label>

                <select
                required
                  value={form.topper}
                  onChange={(e) => update("topper", e.target.value)}
                  className={InputClassName}
                >
                  <option value="">Topper</option>

                  {toppers.map((topper) => (
                    <option key={topper.name} value={topper.name}>
                      {topper.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label for="servings" className={LabelClassName}>
                  Number of Servings
                </label>

                <input
                  type="number"
                  placeholder="Number of Servings"
                  value={form.servings}
                  onChange={(e) => update("servings", Number(e.target.value))}
                  className={InputClassName}
                  required
                />
              </div>
            </div>
          </section>

          {/* Event Details */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">Event Details</h2>

            <div className="space-y-5">
              <div>
                <label for="pickupDate" className={LabelClassName}>
                  Pickup Date
                </label>

                <input
                  type="date"
                  value={form.pickupDate}
                  onChange={(e) => update("pickupDate", e.target.value)}
                  className={InputClassName}
                />
              </div>

              <div>
                <label for="message" className={LabelClassName}>
                  Cake Message
                </label>

                <textarea
                  rows={3}
                  placeholder="Cake Message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={TextareaClassName}
                />
              </div>

              <div>
                <label for="notes" className={LabelClassName}>
                  Special Instructions
                </label>

                <textarea
                  rows={4}
                  placeholder="Special Instructions"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={TextareaClassName}
                />
              </div>
            </div>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold">Delivery</h2>

            <div className="space-y-5">
              <select
                value={form.delivery}
                onChange={(e) => update("delivery", e.target.value)}
                className={InputClassName}
              >
                <option>Pickup</option>
                <option>Delivery</option>
              </select>

              {form.delivery === "Delivery" && (
                <div>
                  <label for="address" className={LabelClassName}>
                    Delivery Address
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Delivery Address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    className={TextareaClassName}
                  />
                </div>
              )}
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-full gradient-rose px-6 py-3 text-[1rem] font-semibold text-white shadow-soft hover:-translate-y-0.5 transition"
          >
            Place Order
          </button>
        </form>

        {/* Summary */}
        <aside className="sticky top-20 h-fit rounded-3xl bg-card p-6 shadow-lg">
          <img
            src={heroCake}
            alt="Cake"
            className="mb-6 aspect-square rounded-2xl object-cover"
          />

          <h3 className="font-display text-xl mb-3 font-semibold">Your cake</h3>

          <div className="space-y-1 text-[1rem]">
            <Summary label="Name" item={form.name} />
            <Summary label="Occasion" item={form.occasion} />
            <Summary label="Size" item={form.size} />
            <Summary label="Flavour" item={form.flavour} />
            <Summary label="Frosting" item={form.frosting} />
            <Summary label="Filling" item={form.filling} />
            <Summary label="Decoration" item={form.decoration} />
            <Summary label="Topper" item={form.topper} />
          </div>

          <hr className="text-muted my-6" />

          <div className="flex justify-between text-2xl font-bold">
            <span className="text-md text-muted-foreground">Total</span>
            <span className="font-display text-3xl text-gradient">
              R{total.toFixed(2)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Summary({ label, item }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right">{item || "-"}</span>
    </div>
  );
}

export default Order;
