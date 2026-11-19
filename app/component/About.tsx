
import React from "react";
import {
  Heart,
  Eye,
  Target,
  Sparkles,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
  MessageCircle,
  Flower2,
} from "lucide-react";

const About = () => {
  const whatsappLink =
    "https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20your%20saree%20plating%20service.";

  const features = [
    {
      icon: <Sparkles size={27} />,
      title: "Perfect Finishing",
      description: "Beautiful and neatly arranged saree pleats.",
    },
    {
      icon: <ShieldCheck size={27} />,
      title: "Fabric Care",
      description: "Careful handling of every saree.",
    },
    {
      icon: <Clock size={27} />,
      title: "Time Saving",
      description: "Convenient service for your busy schedule.",
    },
    {
      icon: <Heart size={27} />,
      title: "Personalized Service",
      description: "Special attention for every customer.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#fffaf0] text-[#39101c]">

      {/* HERO SECTION */}

      <section className="relative bg-[#520d20]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-20">

          <div className="order-2 text-center md:order-1 md:text-left">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8c778]/40 px-4 py-2 text-xs font-medium tracking-wider text-[#e8c778]">
              <Flower2 size={16} />
              OUR STORY & TRADITION
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-[#fff4dc] sm:text-5xl lg:text-6xl">
              About
              <span className="block text-[#e8c778]">
                Our Journey
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#f8e7d4]/90 md:mx-0">
              Every saree tells a beautiful story. We help make
              that story more special with perfectly arranged
              pleats, elegant styling and traditional beauty.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e8c778] px-7 py-3.5 font-bold text-[#520d20] shadow-lg transition hover:scale-105 hover:bg-white"
            >
              <MessageCircle size={19} />
              Connect With Us
              <ArrowRight size={18} />
            </a>

          </div>

          {/* HERO IMAGE */}

          <div className="relative order-1 mx-auto w-full max-w-md md:order-2">

            <div className="absolute -inset-3 rounded-[180px_180px_25px_25px] border border-[#e8c778]/50" />

            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000"
              alt="Beautiful traditional Indian saree"
              className="relative h-[340px] w-full rounded-[180px_180px_25px_25px] border-4 border-[#e8c778]/50 object-cover shadow-2xl sm:h-[450px]"
            />

          </div>

        </div>
      </section>

      {/* OUR STORY */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* IMAGE */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1000"
              alt="Traditional Indian silk saree"
              className="h-[330px] w-full rounded-2xl object-cover shadow-xl sm:h-[450px]"
            />

            <div className="absolute -bottom-5 -right-3 rounded-xl border border-[#e8c778]/40 bg-[#650f29] px-6 py-5 text-center text-white shadow-xl sm:-right-5">
              <Flower2
                size={30}
                className="mx-auto mb-2 text-[#e8c778]"
              />
              <h3 className="font-serif text-lg font-bold">
                Traditional Beauty
              </h3>
              <p className="mt-1 text-xs text-[#e8c778]">
                Perfectly Plated
              </p>
            </div>

          </div>

          {/* CONTENT */}

          <div className="pt-5 md:pt-0">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              Who We Are
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              The Art of Perfect Saree Pleating
            </h2>

            <div className="my-5 h-1 w-20 rounded-full bg-[#d8ad59]" />

            <p className="leading-8 text-[#70594a]">
              We believe that every woman deserves to feel
              beautiful and confident in her traditional attire.
              A perfectly pleated saree adds elegance, comfort
              and grace to every special occasion.
            </p>

            <p className="mt-4 leading-8 text-[#70594a]">
              Our saree plating service focuses on neat pleats,
              careful fabric handling and beautiful finishing.
              From weddings to festivals and family celebrations,
              we help make your special moments even more memorable.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-[#d9b76b] bg-[#f8e9da] px-4 py-2 text-sm font-semibold text-[#650f29]">
                Elegant
              </span>

              <span className="rounded-full border border-[#d9b76b] bg-[#f8e9da] px-4 py-2 text-sm font-semibold text-[#650f29]">
                Traditional
              </span>

              <span className="rounded-full border border-[#d9b76b] bg-[#f8e9da] px-4 py-2 text-sm font-semibold text-[#650f29]">
                Professional
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* MISSION & VISION */}

      <section className="bg-[#f8eee2] px-5 py-16 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              What Drives Us
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              Our Mission & Vision
            </h2>

          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {/* MISSION */}

            <div className="group rounded-2xl border border-[#ead6ad] bg-[#fffaf0] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1dfc5] text-[#8a461c]">
                <Target size={29} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#650f29]">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-[#795e4d]">
                To provide beautiful, neat and long-lasting saree
                pleating services with attention to detail,
                personalized care and customer satisfaction.
              </p>

            </div>

            {/* VISION */}

            <div className="group rounded-2xl border border-[#ead6ad] bg-[#fffaf0] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1dfc5] text-[#8a461c]">
                <Eye size={29} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#650f29]">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-[#795e4d]">
                To become a trusted and preferred saree pleating
                service, making every woman feel elegant,
                confident and comfortable on every occasion.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
            Our Promise
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#795e4d] sm:text-base">
            We combine traditional elegance with thoughtful
            service to give your saree the perfect finish.
          </p>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">

          {features.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-[#ead6ad] bg-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-7"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e9da] text-[#8a461c]">
                {item.icon}
              </div>

              <h3 className="mt-4 font-serif text-base font-bold text-[#650f29] sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#795e4d] sm:text-sm">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-5 pb-16 sm:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#520d20] to-[#851b3c] px-6 py-10 text-center shadow-xl md:flex-row md:px-12 md:text-left">

          <div>

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#e8c778]">
              Let Us Make You Beautiful
            </p>

            <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Your Perfect Saree Look Starts Here!
            </h2>

            <p className="mt-3 text-sm text-[#f8e7d4]/80">
              Get in touch with us and book your appointment.
            </p>

          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e8c778] px-7 py-4 font-bold text-[#520d20] transition hover:scale-105 hover:bg-white"
          >
            <MessageCircle size={19} />
            Book Appointment
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
};

export default About;
