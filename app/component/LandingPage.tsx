
import React from "react";
import {
  Menu,
  Phone,
  MessageCircle,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Heart,
  Clock,
  ShieldCheck,
  Star,
  MapPin,
  Flower2,
  Scissors,
  ChevronRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const services = [
  {
    title: "Saree Pre-Pleating",
    description: "Perfect pleats, ready to wear.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700",
  },
  {
    title: "Bridal Saree Plating",
    description: "Look beautiful on your special day.",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=700",
  },
  {
    title: "Wedding & Events",
    description: "Elegant styling for every occasion.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700",
  },
];

const benefits = [
  {
    icon: <Sparkles size={28} />,
    title: "Perfect Pleats",
    description: "Neat and elegant finishing.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Fabric Care",
    description: "Careful handling of your sarees.",
  },
  {
    icon: <Clock size={28} />,
    title: "Time Saving",
    description: "Hassle-free and convenient service.",
  },
  {
    icon: <Heart size={28} />,
    title: "Personalized",
    description: "Styling for your special occasions.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600",
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600",
];

const LandingPage = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I am interested in your saree plating service."
  )}`;

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#39101c]">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-[#d9b76b]/30 bg-[#520d20] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}

          <a href="#" className="flex items-center gap-2">
            <Flower2 size={38} className="text-[#e8c778]" />

            <div>
              <h1 className="font-serif text-xl font-bold tracking-wide sm:text-2xl">
                SareeGrace
              </h1>
              <p className="text-[10px] tracking-[3px] text-[#e8c778] sm:text-xs">
                SAREE PLATING SERVICE
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#" className="text-[#e8c778]">Home</a>
            <a href="#about" className="transition hover:text-[#e8c778]">About</a>
            <a href="#services" className="transition hover:text-[#e8c778]">Services</a>
            <a href="#gallery" className="transition hover:text-[#e8c778]">Gallery</a>
            <a href="#reviews" className="transition hover:text-[#e8c778]">Reviews</a>
            <a href="#contact" className="transition hover:text-[#e8c778]">Contact</a>
          </nav>

          {/* Desktop Button */}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#e8c778] px-5 py-2.5 text-sm font-bold text-[#520d20] transition hover:bg-white lg:flex"
          >
            <MessageCircle size={18} />
            Book Now
          </a>

          {/* Mobile Menu Icon */}

          <a
            href="#contact"
            className="rounded-lg border border-[#e8c778]/50 p-2 text-[#e8c778] lg:hidden"
            aria-label="Go to contact section"
          >
            <Menu size={24} />
          </a>

        </div>
      </header>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#520d20]">

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-20 lg:px-10">

          {/* Hero Content */}

          <div className="relative z-10 order-2 text-center md:order-1 md:text-left">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8c778]/40 bg-white/5 px-4 py-2 text-xs tracking-wider text-[#e8c778] sm:text-sm">
              <Sparkles size={16} />
              ELEGANCE IN EVERY PLEAT
            </div>

            <h2 className="font-serif text-4xl font-bold leading-tight text-[#fff4dc] sm:text-5xl lg:text-6xl">
              Perfect Pleats,
              <span className="block text-[#e8c778]">
                Beautiful You!
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#f8e7d4]/90 sm:text-lg md:mx-0">
              Experience professional saree plating services.
              Beautifully arranged pleats, elegant draping and
              a perfect look for your special occasions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8c778] px-7 py-3.5 font-bold text-[#520d20] shadow-lg transition hover:scale-105 hover:bg-white"
              >
                <CalendarDays size={19} />
                Book Appointment
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e8c778] px-7 py-3.5 font-semibold text-[#fff4dc] transition hover:bg-[#e8c778] hover:text-[#520d20]"
              >
                Our Services
              </a>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#f8e7d4]/90 md:justify-start">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-[#e8c778]" size={17} />
                Elegant Finishing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-[#e8c778]" size={17} />
                Professional Care
              </span>
            </div>

          </div>

          {/* Hero Image */}

          <div className="relative order-1 mx-auto w-full max-w-md md:order-2">

            <div className="absolute -inset-3 rounded-[180px_180px_25px_25px] border border-[#e8c778]/50"></div>

            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000"
              alt="Traditional Indian saree"
              className="relative h-[350px] w-full rounded-[180px_180px_25px_25px] border-4 border-[#e8c778]/60 object-cover shadow-2xl sm:h-[450px]"
            />

            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-[#e8c778]/50 bg-[#fffaf0] p-4 text-center shadow-xl">
              <p className="font-serif text-lg font-bold text-[#650f29]">
                Traditional Beauty
              </p>
              <p className="text-xs text-[#805b42]">
                Perfectly Plated. Elegantly Styled.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="border-b border-[#ead6ad] bg-[#f8e9da]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-9 sm:grid-cols-4 lg:px-10">

          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              <div className="mb-3 rounded-full bg-[#f1d8b2] p-3 text-[#8a461c]">
                {item.icon}
              </div>

              <h3 className="font-serif text-sm font-bold sm:text-base">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-[#795e4d] sm:text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        <div className="grid items-center gap-10 md:grid-cols-2">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=900"
              alt="Beautiful traditional saree"
              className="h-[350px] w-full rounded-2xl object-cover shadow-xl sm:h-[450px]"
            />

            <div className="absolute -bottom-5 -right-3 rounded-xl bg-[#650f29] px-6 py-4 text-center text-white shadow-xl sm:-right-5">
              <Flower2 className="mx-auto mb-1 text-[#e8c778]" size={28} />
              <p className="font-serif text-sm font-bold">
                The Art of
              </p>
              <p className="text-sm text-[#e8c778]">
                Perfect Pleating
              </p>
            </div>
          </div>

          <div className="pt-6 md:pt-0">

            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#a16a29]">
              Welcome to SareeGrace
            </p>

            <h2 className="font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              About Our Service
            </h2>

            <div className="my-5 h-1 w-20 rounded-full bg-[#d8ad59]"></div>

            <p className="leading-8 text-[#70594a]">
              We believe every saree deserves a beautiful and
              elegant look. Our saree plating service focuses
              on neat pleats, proper finishing and comfortable
              styling for every special occasion.
            </p>

            <p className="mt-4 leading-8 text-[#70594a]">
              Whether it is a wedding, festival, engagement or
              family celebration, we help you get ready with
              confidence and elegance.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#650f29] px-7 py-3 font-semibold text-white transition hover:bg-[#8a193b]"
            >
              Know More
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}

      <section id="services" className="bg-[#f8eee2] px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#a16a29]">
              What We Offer
            </p>

            <h2 className="font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              Our Services
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#795e4d] sm:text-base">
              Discover our saree plating services and get
              the perfect traditional look for every occasion.
            </p>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#e7d3b5] bg-[#fffaf0] shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 text-center">

                  <h3 className="font-serif text-xl font-bold text-[#650f29]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#795e4d]">
                    {service.description}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-[#8a461c] transition hover:text-[#650f29]"
                  >
                    Book This Service
                    <ChevronRight size={18} />
                  </a>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[3px] text-[#a16a29]">
            Our Promise
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
            Why Choose Us?
          </h2>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#ead6ad] bg-white p-5 text-center shadow-sm transition hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e9da] text-[#8a461c]">
                {item.icon}
              </div>

              <h3 className="font-serif font-bold text-[#650f29]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#795e4d] sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* GALLERY PREVIEW */}

      <section id="gallery" className="bg-[#520d20] px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#e8c778]">
              Our Creations
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#fff4dc] sm:text-4xl">
              Our Gallery
            </h2>

            <p className="mt-3 text-sm text-[#f8e7d4]/80">
              A glimpse of beautiful saree styling and pleating.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

            {gallery.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border-2 border-[#e8c778]/40 ${
                  index === 2 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Saree plating gallery ${index + 1}`}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-110 sm:h-72"
                />
              </div>
            ))}

          </div>

          <div className="mt-9 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-[#e8c778] px-7 py-3 font-bold text-[#520d20] transition hover:bg-white"
            >
              View All Gallery
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* REVIEWS PREVIEW */}

      <section id="reviews" className="px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#a16a29]">
              Happy Customers
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              Customer Reviews
            </h2>

            <p className="mt-3 text-sm text-[#795e4d]">
              Hear from our customers about their experience.
            </p>

          </div>

          <div className="mx-auto mt-9 max-w-2xl rounded-2xl border border-[#ead6ad] bg-white p-7 text-center shadow-md">

            <div className="flex justify-center gap-1 text-[#d9a52c]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={23} fill="currentColor" />
              ))}
            </div>

            <h3 className="mt-4 font-serif text-xl font-bold text-[#650f29]">
              Your Experience Matters!
            </h3>

            <p className="mt-3 leading-7 text-[#795e4d]">
              We value every customer and strive to provide
              beautiful, comfortable and professional saree
              plating services.
            </p>

            <a
              href="/reviews"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#8a461c] hover:text-[#650f29]"
            >
              View Customer Reviews
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </section>

      {/* BOOKING BANNER */}

      <section className="px-5 pb-16 sm:px-8 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#520d20] to-[#851b3c] px-6 py-10 text-center shadow-xl sm:px-12 md:flex-row md:text-left">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#e8c778]">
              Make Your Special Day Beautiful
            </p>

            <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Ready for Perfect Saree Pleats?
            </h2>

            <p className="mt-3 text-sm text-[#f8e7d4]/80">
              Contact us today and book your appointment.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e8c778] px-7 py-4 font-bold text-[#520d20] transition hover:scale-105 hover:bg-white"
          >
            <MessageCircle size={20} />
            Book on WhatsApp
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section id="contact" className="bg-[#f8eee2] px-5 py-14 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#a16a29]">
              Get in Touch
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#650f29]">
              Contact Us
            </h2>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">

            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <Phone className="mx-auto mb-3 text-[#8a461c]" size={28} />
              <h3 className="font-bold text-[#650f29]">Call Us</h3>
              <p className="mt-2 text-sm text-[#795e4d]">
                Contact for enquiries
              </p>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <MessageCircle className="mx-auto mb-3 text-[#8a461c]" size={28} />
              <h3 className="font-bold text-[#650f29]">WhatsApp</h3>
              <p className="mt-2 text-sm text-[#795e4d]">
                Chat with us
              </p>
            </a>

            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <MapPin className="mx-auto mb-3 text-[#8a461c]" size={28} />
              <h3 className="font-bold text-[#650f29]">Our Location</h3>
              <p className="mt-2 text-sm text-[#795e4d]">
                Add business address here
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#390817] px-5 pb-8 pt-12 text-white sm:px-8">

        <div className="mx-auto grid max-w-7xl gap-9 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="flex items-center gap-2">
              <Flower2 className="text-[#e8c778]" size={35} />
              <h2 className="font-serif text-2xl font-bold">
                SareeGrace
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Making every saree look beautiful with perfect
              pleats and elegant traditional styling.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#e8c778]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-[#e8c778]">Home</a>
              <a href="#about" className="hover:text-[#e8c778]">About Us</a>
              <a href="#services" className="hover:text-[#e8c778]">Services</a>
              <a href="#gallery" className="hover:text-[#e8c778]">Gallery</a>
              <a href="#reviews" className="hover:text-[#e8c778]">Reviews</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#e8c778]">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <span>Saree Pre-Pleating</span>
              <span>Bridal Saree Plating</span>
              <span>Wedding Plating</span>
              <span>Special Occasion Styling</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#e8c778]">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <a href={whatsappLink} aria-label="WhatsApp">
                <MessageCircle className="transition hover:text-[#e8c778]" />
              </a>

              {/* <a href="https://instagram.com" aria-label="Instagram">
                <Instagram className="transition hover:text-[#e8c778]" />
              </a> */}

              <a href={`tel:+${WHATSAPP_NUMBER}`} aria-label="Call">
                <Phone className="transition hover:text-[#e8c778]" />
              </a>

            </div>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} SareeGrace. All Rights Reserved.
        </div>

      </footer>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
      >
        <MessageCircle size={28} />
      </a>

    </main>
  );
};

export default LandingPage;
