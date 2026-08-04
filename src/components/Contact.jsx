import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit us",
    body: "58 Center Street, Park West, Bloemfontein, 9300",
  },
  {
    icon: Phone,
    title: "Call us",
    body: "+27 675 555 2253",
  },
  {
    icon: Mail,
    title: "Email",
    body: "hello@sweetnothingsbakery.com",
  },
  {
    icon: Clock,
    title: "Hours",
    body: (
      <>
        Tue - Fri: 9am - 7pm
        <br />
        Sat - Sun: 10am - 8pm
        <br />
        Mon: Closed
      </>
    ),
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-6xl">Say hello</h1>
        <p className="mt-2 text-muted-foreground">
          We'd love to hear about your celebration.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-8 shadow-soft">
          <h2 className="font-display text-[1.7rem] mb-6">Send us a message</h2>
          {sent ? (
            <div className="rounded-2xl bg-primary/10 p-6 text-center">
              <div className="text-3xl mb-2">💌</div>
              <div className="font-semibold">Thank you!</div>
              <p className="text-sm text-muted-foreground mt-1">
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    for="name"
                    className="block text-[1rem] font-semibold mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    className="block text-[1rem] font-semibold mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <label
                for="subject"
                className="block text-[1rem] font-semibold mb-1.5"
              >
                Subject
              </label>
              <input
                required
                className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                for="message"
                className="block text-[1rem] font-semibold mb-1.5"
              >
                Message
              </label>
              <textarea
                required
                rows="3"
                className="w-full rounded-2xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              <button className="w-full rounded-full gradient-rose px-6 py-3 text-[1rem] font-semibold text-white shadow-soft hover:-translate-y-0.5 transition">
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="rounded-3xl bg-card p-6 shadow-soft flex gap-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-rose text-white">
                <info.icon className="h-5 w-5" />
              </div>

              <div>
                <div className="font-semibold">{info.title}</div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {info.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
