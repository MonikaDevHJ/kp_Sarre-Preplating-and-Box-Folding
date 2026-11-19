
"use client";

import React, { useState } from "react";
import {
  Menu, X, Phone, MessageCircle, CalendarDays,
  ArrowRight, CheckCircle2, Sparkles, Heart,
  Clock, ShieldCheck, Star, MapPin, Flower2,
   Scissors, GraduationCap, Shirt,
  PackageCheck, Quote
} from "lucide-react";

// Replace with the client's WhatsApp number
const PHONE = "91XXXXXXXXXX";

const whatsapp = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello! I am interested in your saree pleating services. Please share the details."
)}`;

// Direct image URLs
const images = {
  hero: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=85",
  about: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1000&q=85",
  red: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
  silk: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=85",
  wedding: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85",
  pink: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
  green: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=85",
  traditional: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85",
};

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "Saree Pre-Pleating",
    description: "Beautifully arranged saree pleats for easy and comfortable wearing.",
    icon: <Scissors size={25} />,
    image: images.red,
  },
  {
    title: "Box Folding",
    description: "Neat and professional box folding for your favourite sarees.",
    icon: <PackageCheck size={25} />,
    image: images.silk,
  },
  {
    title: "Saree Ironing",
    description: "Careful ironing and preparation for a clean, elegant finish.",
    icon: <Shirt size={25} />,
    image: images.wedding,
  },
  {
    title: "Pleating Classes",
    description: "Learn saree pre-pleating and box folding techniques.",
    icon: <GraduationCap size={25} />,
    image: images.green,
  },
];

const gallery = [
  { image: images.red, title: "Red Saree Pleating" },
  { image: images.silk, title: "Traditional Silk Saree" },
  { image: images.wedding, title: "Wedding Saree Styling" },
  { image: images.pink, title: "Elegant Saree Look" },
  { image: images.green, title: "Traditional Collection" },
  { image: images.traditional, title: "Special Occasion Saree" },
];

const benefits = [
  {
    icon: <Sparkles size={25} />,
    title: "Perfect Pleats",
    desc: "Neat and beautiful finishing",
  },
  {
    icon: <ShieldCheck size={25} />,
    title: "Fabric Care",
    desc: "Careful saree handling",
  },
  {
    icon: <Clock size={25} />,
    title: "Save Time",
    desc: "Easy saree preparation",
  },
  {
    icon: <Heart size={25} />,
    title: "Personal Care",
    desc: "Attention to every detail",
  },
];

const reviews = [
  {
    name: "Customer One",
    review: "Beautiful saree pleating work and neat finishing. Really happy with the service!",
  },
  {
    name: "Customer Two",
    review: "The saree folding was done very neatly. Excellent experience.",
  },
  {
    name: "Customer Three",
    review: "Very helpful service for my special occasion. Highly appreciated!",
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0] text-[#39101c]">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 bg-[#520d20] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <a href="#home" className="flex items-center gap-2">
            <Flower2 size={35} className="text-[#e8c778]" />
            <div>
              <h1 className="font-serif text-xl font-bold sm:text-2xl">
                SareeGrace
              </h1>
              <p className="text-[9px] tracking-[2px] text-[#e8c778]">
                SAREE PLEATING SERVICE
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm transition hover:text-[#e8c778]"
              >
                {name}
              </a>
            ))}
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#e8c778] px-5 py-3 text-sm font-bold text-[#520d20] lg:flex"
          >
            <MessageCircle size={17} />
            Book Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-[#e8c778]/50 p-2 text-[#e8c778] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#520d20] px-5 py-4 lg:hidden">
            {navLinks.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 text-sm hover:text-[#e8c778]"
              >
                {name}
              </a>
            ))}
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex justify-center gap-2 rounded-full bg-[#e8c778] py-3 font-bold text-[#520d20]"
            >
              <MessageCircle size={18} /> Book on WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* HOME */}

      <section id="home" className="scroll-mt-20 bg-[#520d20]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-20">

          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e8c778]/40 px-4 py-2 text-xs tracking-wider text-[#e8c778]">
              <Sparkles size={15} />
              THE ART OF PERFECT PLEATING
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#fff4dc] sm:text-5xl lg:text-6xl">
              Perfect Pleats,
              <span className="block text-[#e8c778]">
                Beautiful You!
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-[#f8e7d4]/90 sm:text-base md:mx-0">
              Make every saree special with our professional
              saree pre-pleating, box folding and ironing services.
              Save time and look elegant at every special occasion.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8c778] px-7 py-4 font-bold text-[#520d20] shadow-lg transition hover:scale-105"
              >
                <CalendarDays size={19} />
                Book Appointment
                <ArrowRight size={18} />
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-[#e8c778] px-7 py-4 font-semibold text-white hover:bg-white hover:text-[#520d20]"
              >
                View Our Work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/90 md:justify-start sm:text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-[#e8c778]" size={17} />
                Neat Finishing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-[#e8c778]" size={17} />
                Fabric Care
              </span>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md md:order-2">
            <div className="absolute -inset-3 rounded-[180px_180px_25px_25px] border border-[#e8c778]/50" />

            <img
              src={images.hero}
              alt="Traditional saree styling"
              fetchPriority="high"
              className="relative h-[380px] w-full rounded-[180px_180px_25px_25px] border-4 border-[#e8c778]/50 object-cover shadow-2xl sm:h-[490px]"
            />

            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl bg-[#fffaf0] p-4 text-center shadow-xl">
              <p className="font-serif text-lg font-bold text-[#650f29]">
                Traditional Beauty
              </p>
              <p className="text-xs text-[#805b42]">
                Perfectly Pleated. Elegantly Prepared.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS */}

      <section className="border-b border-[#ead6ad] bg-[#f8e9da]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-9 sm:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1d8b2] text-[#8a461c]">
                {item.icon}
              </div>
              <h3 className="font-serif text-sm font-bold sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-[#795e4d] sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={images.about}
            alt="Traditional Indian saree"
            loading="lazy"
            className="h-[350px] w-full rounded-2xl object-cover shadow-xl sm:h-[450px]"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              About Our Business
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              The Art of Perfect Saree Preparation
            </h2>
            <div className="my-5 h-1 w-20 rounded-full bg-[#d8ad59]" />

            <p className="leading-8 text-[#70594a]">
              Every saree deserves a beautiful and elegant look.
              We provide saree pre-pleating, box folding and
              ironing services with attention to detail.
            </p>

            <p className="mt-4 leading-8 text-[#70594a]">
              We also offer saree pleating master classes for
              those interested in learning professional techniques.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Professional saree pre-pleating",
                "Neat box folding",
                "Saree ironing services",
                "Saree pleating training classes",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-medium text-[#650f29]">
                  <CheckCircle2 size={19} className="shrink-0 text-[#a16a29]" />
                  {item}
                </p>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#650f29] px-7 py-3 font-semibold text-white hover:bg-[#851b3c]"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="scroll-mt-20 bg-[#f8eee2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              What We Offer
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              Our Professional Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#795e4d]">
              Everything you need to prepare your sarees beautifully.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-[#e7d3b5] bg-[#fffaf0] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8c778] text-[#520d20] shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-[#650f29]">
                    {service.title}
                  </h3>
                  <p className="mt-2 min-h-[65px] text-sm leading-6 text-[#795e4d]">
                    {service.description}
                  </p>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#8a461c]"
                  >
                    Enquire Now <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section id="gallery" className="scroll-mt-20 bg-[#520d20] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#e8c778]">
              Our Collection
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#fff4dc] sm:text-4xl">
              Beautiful Saree Creations
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Discover traditional saree styles and elegant pleats.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-[#e8c778]/40 bg-[#fffaf0]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-serif text-sm font-bold text-[#650f29] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#a16a29]">
                    Saree Collection
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING CLASSES */}

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl bg-[#f8e9da] md:grid-cols-2">
          <div className="p-7 sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8c778] text-[#520d20]">
              <GraduationCap size={30} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              Learn With Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              Saree Pleating Master Classes
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#795e4d]">
              Interested in learning saree pre-pleating and box folding?
              Join our classes and learn professional saree preparation
              techniques.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#650f29] px-7 py-3 font-semibold text-white"
            >
              Enquire About Classes <ArrowRight size={18} />
            </a>
          </div>

          <img
            src={images.red}
            alt="Traditional saree collection"
            loading="lazy"
            className="h-full min-h-[300px] w-full object-cover md:min-h-[420px]"
          />
        </div>
      </section>

      {/* REVIEWS */}

      <section id="reviews" className="scroll-mt-20 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              Customer Experiences
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl border border-[#ead6ad] bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <Quote size={30} className="text-[#d8ad59]" />

                <div className="mt-4 flex gap-1 text-[#d9a52c]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-[#795e4d]">
                  "{review.review}"
                </p>

                <div className="mt-5 border-t border-[#ead6ad] pt-4">
                  <p className="font-serif font-bold text-[#650f29]">
                    {review.name}
                  </p>
                  <p className="mt-1 text-xs text-[#947d6a]">
                    Sample review
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#520d20] to-[#851b3c] px-6 py-11 text-center shadow-xl md:flex-row md:px-12 md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#e8c778]">
              Make Your Special Day Beautiful
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Ready for Perfect Saree Pleats?
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Contact us today and book your appointment.
            </p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e8c778] px-7 py-4 font-bold text-[#520d20] transition hover:scale-105"
          >
            <MessageCircle size={20} />
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="scroll-mt-20 bg-[#f8eee2] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              Get In Touch
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29]">
              Contact Us
            </h2>
            <p className="mt-3 text-sm text-[#795e4d]">
              We would love to hear from you.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            <a
              href={`tel:+${PHONE}`}
              className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <Phone className="mx-auto mb-3 text-[#8a461c]" size={28} />
              <h3 className="font-bold text-[#650f29]">Call Us</h3>
              <p className="mt-2 text-sm text-[#795e4d]">
                Contact for enquiries
              </p>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <MessageCircle className="mx-auto mb-3 text-green-600" size={28} />
              <h3 className="font-bold text-[#650f29]">WhatsApp</h3>
              <p className="mt-2 text-sm text-[#795e4d]">
                Chat with us
              </p>
            </a>

            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <MapPin className="mx-auto mb-3 text-[#8a461c]" size={28} />
              <h3 className="font-bold text-[#650f29]">Our Location</h3>
              <p className="mt-2 text-sm text-[#795e4d]">
                Bengaluru, Karnataka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#390817] px-5 pb-8 pt-12 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="flex items-center gap-2">
              <Flower2 className="text-[#e8c778]" size={35} />
              <h2 className="font-serif text-2xl font-bold">SareeGrace</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Professional saree pre-pleating, box folding,
              ironing and training services.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#e8c778]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              {navLinks.map(([name, href]) => (
                <a key={name} href={href} className="hover:text-[#e8c778]">
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#e8c778]">
              Our Services
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              {services.map((service) => (
                <span key={service.title}>{service.title}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-[#e8c778]">
              Connect With Us
            </h3>
            <div className="flex gap-5">
              <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle className="hover:text-[#e8c778]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              </a>
              <a href={`tel:+${PHONE}`} aria-label="Call">
                <Phone className="hover:text-[#e8c778]" />
              </a>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-white/60">
          © 2026 SareeGrace. All Rights Reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 sm:right-6"
      >
        <MessageCircle size={27} />
      </a>

    </main>
  );
}
