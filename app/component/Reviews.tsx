
import React from "react";
import {
  Star,
  Quote,
  Heart,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Flower2,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

const Reviews = () => {

  const whatsappLink =
    "https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20know%20about%20your%20saree%20plating%20service.";

  // Replace these sample reviews with genuine customer feedback.
  const reviews = [
    {
      name: "Customer One",
      role: "Wedding Customer",
      initial: "C",
      date: "Customer feedback",
      rating: 5,
      review:
        "The saree pleating was beautiful and neatly done. I loved the finishing and the overall experience. Highly recommended!",
    },
    {
      name: "Customer Two",
      role: "Bridal Customer",
      initial: "C",
      date: "Customer feedback",
      rating: 5,
      review:
        "Very professional service. The pleats were perfect and made getting ready so much easier for my special occasion.",
    },
    {
      name: "Customer Three",
      role: "Special Occasion",
      initial: "C",
      date: "Customer feedback",
      rating: 5,
      review:
        "Beautiful work and excellent attention to detail. My saree looked elegant and I was very happy with the service.",
    },
    {
      name: "Customer Four",
      role: "Regular Customer",
      initial: "C",
      date: "Customer feedback",
      rating: 5,
      review:
        "A convenient and lovely experience. The saree was handled carefully and the pleating looked very neat.",
    },
    {
      name: "Customer Five",
      role: "Wedding Guest",
      initial: "C",
      date: "Customer feedback",
      rating: 5,
      review:
        "I really liked the finishing. It saved me time and helped me feel confident in my traditional outfit.",
    },
    {
      name: "Customer Six",
      role: "Festival Customer",
      initial: "C",
      date: "Customer feedback",
      rating: 5,
      review:
        "Wonderful saree plating service. Beautifully arranged pleats and a comfortable experience throughout.",
    },
  ];

  const ratingBars = [
    { stars: 5, width: "100%" },
    { stars: 4, width: "0%" },
    { stars: 3, width: "0%" },
    { stars: 2, width: "0%" },
    { stars: 1, width: "0%" },
  ];

  return (
    <main className="overflow-hidden bg-[#fffaf0] text-[#39101c]">

      {/* HERO SECTION */}

      <section className="relative bg-[#520d20]">

        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8c778]/40 px-4 py-2 text-xs font-medium tracking-wider text-[#e8c778]">
            <Flower2 size={16} />
            LOVE FROM OUR CUSTOMERS
          </div>

          <h1 className="font-serif text-4xl font-bold text-[#fff4dc] sm:text-5xl lg:text-6xl">
            Customer
            <span className="block text-[#e8c778]">
              Reviews & Stories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#f8e7d4]/90 sm:text-base">
            Every beautiful experience makes us happy.
            Discover what our customers say about their
            saree plating and styling experience.
          </p>

          <div className="mt-8 flex justify-center gap-1 text-[#e8c778]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={25} fill="currentColor" />
            ))}
          </div>

          <p className="mt-3 text-sm text-[#f8e7d4]/80">
            Your happiness is our inspiration!
          </p>

        </div>

      </section>

      {/* RATING SUMMARY */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">

        <div className="grid gap-7 rounded-3xl border border-[#ead6ad] bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

          {/* Rating */}

          <div className="flex flex-col items-center justify-center border-b border-[#ead6ad] pb-7 text-center md:border-b-0 md:border-r md:pb-0">

            <h2 className="font-serif text-2xl font-bold text-[#650f29]">
              Customer Happiness
            </h2>

            <p className="mt-5 font-serif text-6xl font-bold text-[#650f29]">
              <Heart size={42} className="inline text-[#b54c61]" />
            </p>

            <div className="mt-4 flex gap-1 text-[#d9a52c]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={22} fill="currentColor" />
              ))}
            </div>

            <p className="mt-3 text-sm text-[#795e4d]">
              Every customer experience matters to us.
            </p>

          </div>

          {/* Rating Details */}

          <div className="flex flex-col justify-center">

            <h3 className="mb-5 font-serif text-xl font-bold text-[#650f29]">
              Our Customer Feedback
            </h3>

            <div className="space-y-4">

              {ratingBars.map((item) => (

                <div key={item.stars} className="flex items-center gap-3">

                  <span className="flex w-12 items-center gap-1 text-sm font-semibold">
                    {item.stars}
                    <Star size={14} fill="#d9a52c" color="#d9a52c" />
                  </span>

                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#f1e7d8]">
                    <div
                      className="h-full rounded-full bg-[#d9a52c]"
                      style={{ width: item.width }}
                    />
                  </div>

                </div>

              ))}

            </div>

            <p className="mt-5 text-xs text-[#947d6a]">
              Add your verified customer ratings when available.
            </p>

          </div>

        </div>

      </section>

      {/* CUSTOMER REVIEWS */}

      <section className="bg-[#f8eee2] px-5 py-16 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-11 text-center">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
              Customer Experiences
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
              What Our Customers Say
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#795e4d]">
              We are grateful for every customer who trusts
              us to make their special occasions more beautiful.
            </p>

          </div>

          {/* Review Cards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {reviews.map((item, index) => (

              <article
                key={index}
                className="group rounded-2xl border border-[#ead6ad] bg-[#fffaf0] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
              >

                <div className="flex items-center justify-between">

                  <Quote
                    size={34}
                    className="text-[#d8ad59]"
                  />

                  <div className="flex gap-0.5 text-[#d9a52c]">
                    {Array.from(
                      { length: item.rating },
                      (_, i) => (
                        <Star
                          key={i}
                          size={15}
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>

                </div>

                <p className="mt-5 min-h-[110px] text-sm leading-7 text-[#795e4d]">
                  "{item.review}"
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-[#ead6ad] pt-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#650f29] font-serif text-xl font-bold text-[#e8c778]">
                    {item.initial}
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[#650f29]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#947d6a]">
                      {item.role}
                    </p>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CUSTOMER TRUST US */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#a16a29]">
            Our Commitment
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#650f29] sm:text-4xl">
            Your Trust Means Everything
          </h2>

        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#ead6ad] bg-white p-7 text-center">
            <Sparkles className="mx-auto text-[#a16a29]" size={32} />
            <h3 className="mt-4 font-serif text-lg font-bold text-[#650f29]">
              Quality Work
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#795e4d]">
              Attention to detail in every saree pleat.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ead6ad] bg-white p-7 text-center">
            <ShieldCheck className="mx-auto text-[#a16a29]" size={32} />
            <h3 className="mt-4 font-serif text-lg font-bold text-[#650f29]">
              Trusted Service
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#795e4d]">
              Careful handling and personalized attention.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ead6ad] bg-white p-7 text-center">
            <ThumbsUp className="mx-auto text-[#a16a29]" size={32} />
            <h3 className="mt-4 font-serif text-lg font-bold text-[#650f29]">
              Customer First
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#795e4d]">
              Your satisfaction is always important to us.
            </p>
          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-5 pb-16 sm:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#520d20] to-[#851b3c] px-6 py-11 text-center shadow-xl md:flex-row md:px-12 md:text-left">

          <div>

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#e8c778]">
              Experience the Difference
            </p>

            <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Let Us Make Your Saree Special!
            </h2>

            <p className="mt-3 text-sm text-[#f8e7d4]/80">
              Book your appointment and enjoy beautiful saree pleating.
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

export default Reviews;
