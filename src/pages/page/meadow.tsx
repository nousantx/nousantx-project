import { styler } from "@styler";

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-2rem p-2rem ai-stretch max-lg:fd-unset lg:fd-[row-reverse]">
      <div className="flex-[1\_1\_200px] max-md:ta-center md:ta-left tw-balance">
        <h2 className="fs-1.8rem ls-0.030em lh-1">Subscribe to our news letter</h2>
        <p className="fs-12px ls-0.025em mt-8px">Keep up-to-date about our new and latest products.</p>

        <form className="mt-1rem center p-6px br-999px border bw-1px bdr-zinc-900 w-mx-auto max-lg:w-mx-auto lg:w-mx-300px">
          <input
            type="email"
            placeholder="yourcompany@mail.com"
            className="all-unset w-full px-12px h-40px fs-14px"
            required
          />
          <button
            type="submit"
            className="flex-shrink-0 btn box-42px br-50% bg-zinc-900 text-zinc-100 center text-lime-100"
            aria-label="submit"
          >
            <span className="fs-1.2rem ri-arrow-right-line"></span>
          </button>
        </form>
      </div>
      <div className="flex-[1\_1\_200px] order-2 max-lg:order-2 lg:order-3">
        <header className="">
          <h2 className="fs-1.2rem fw-400 tw-nowrap ls-0.030em">Meadow Co.</h2>
          <p className="fs-14px ls-0.025em text-zinc-700 mt-6px">Inspired by Nature, Driven by Purpose.</p>
        </header>
      </div>
      <div className="flex-[1\_1\_100px]">
        <h3 className="fs-18px fw-400">Products</h3>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-14px">Blueprint Design</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Green Design</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Packaging</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Fashion</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Green Food</p>
      </div>
      <div className="flex-[1\_1\_100px]">
        <h3 className="fs-18px fw-400">Terms</h3>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-14px">Privacy Policy</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Legal</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Terms & Conditions</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Brand</p>
        <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Company</p>
      </div>

      <div className="flex-100% center space-between order-10 flex-wrap gap-2rem">
        <p className="fs-12px ls-0.030em">&copy; 2024 Meadow Co. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-1rem fs-1.2rem">
          <span className="ri-facebook-box-line"></span>
          <span className="fs-0.95em ri-instagram-line"></span>
          <span className="ri-youtube-line"></span>
          <span className="ri-tiktok-line"></span>
          <span className="ri-medium-line"></span>
          <span className="ri-mastodon-line"></span>
        </div>
      </div>
    </footer>
  );
};

const Site = () => {
  styler({
    property: {
      image: {
        property: "backgroundImage",
        value: "url('{value}')"
      },
      "br-right": ["borderTopRightRadius", "borderBottomRightRadius"],
      "br-left": ["borderTopLeftRadius", "borderBottomLeftRadius"]
    },
    values: {
      img1: "https://images.unsplash.com/photo-1605615923013-f26c14fe7155?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVjbyUyMGZyaWVuZGx5fGVufDB8fDB8fHww",
      fruit:
        "https://plus.unsplash.com/premium_photo-1670963025394-5cd71a3ae967?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      pro1: "https://images.unsplash.com/photo-1652607779025-55e89f9fcfe0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      pro2: "https://images.unsplash.com/photo-1588959570943-b686e76e5c4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      pro3: "https://images.unsplash.com/photo-1624377638671-904e9428f79c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      pro4: "https://images.unsplash.com/photo-1633878353628-5fc8b983325c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGVjbyUyMGZyaWVuZGx5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    classes: {
      lineSpacing: {
        "heading-line": "0.030em",
        "para-line": "0.025em"
      },
      backgroundSize: {
        img: "cover"
      },
      backgroundPosition: {
        img: "center"
      }
    }
  });
  return (
    <div className="w-full bg-lime-100 text-zinc-900">
      <header className="center space-between p-2rem bs-solid bw-0 bw-bottom-1px">
        <div className="w-full center jc-start">
          <span className="ri-menu-fill box-35px br-50% center border"></span>
        </div>
        <span className="tw-nowrap ls-0.030em">Meadow Co.</span>
        {/* only visible on large screen */}
        <div className="w-full d-none max-lg:d-none lg:d-flex ai-center jc-end">
          <span className="br-999px center border h-35px px-12px">Contact Us</span>
        </div>
      </header>
      <main className="w-mx-1280px mx-auto">
        <article className="">
          <header className="p-2rem tw-balance ta-left max-lg:ta-left lg:ta-center">
            <div className="flex max-lg:jc-start lg:jc-center gap-12px">
              <span className="fs-12px block px-8px py-2px br-999px bg-zinc-900 text-lime-100 para-line">
                Eco-Friendly
              </span>
              <span className="fs-12px block px-8px py-2px br-999px bg-zinc-900 text-lime-100 para-line">Design</span>
            </div>
            <h1 className="mt-1rem fs-3rem fw-500 lh-1 ls-0.025em ">
              Innovative Branding Solutions with a Focus on Sustainability
            </h1>
            <p className="mt-1.5rem lh-1.4em fs-1.2em ls-0.025em">
              We prioritize the use of eco-friendly materials and sustainable design practices in every project.
            </p>

            <div className="mt-2rem flex max-lg:jc-start lg:jc-center gap-12px">
              <a href="#" className="td-none br-999px center bg-zinc-900 h-35px px-12px text-lime-100">
                All Products
              </a>
              <span className="br-999px center border h-35px px-12px">Contact Us</span>
            </div>
          </header>

          <div className="w-full p-2rem bg-lime-50 flex-wrap center gap-2.5rem">
            <div className="flex-[1\_1\_150px]">
              <h2 className="fs-2.9rem fw-500 lh-1 ls-0.025em">±172k</h2>
              <p className="fs-12px ls-0.030em mt-6px text-zinc-700 w-mx-250px">Products sold around the globe!</p>
            </div>
            <div className="flex-[1\_1\_150px]">
              <h2 className="fs-2.9rem fw-500 lh-1 ls-0.025em">2k+</h2>
              <p className="fs-12px ls-0.030em mt-6px text-zinc-700 w-mx-250px">Different products type and design!</p>
            </div>
            <div className="flex-[1\_1\_150px]">
              <h2 className="fs-2.9rem fw-500 lh-1 ls-0.025em">4.8</h2>
              <p className="fs-12px ls-0.030em mt-6px text-zinc-700 w-mx-250px">Rates by all awesome customers!</p>
            </div>
            <div className="flex-[1\_1\_150px]">
              <h2 className="fs-2.9rem fw-500 lh-1 ls-0.025em">7k+</h2>
              <p className="fs-12px ls-0.030em mt-6px text-zinc-700 w-mx-250px">
                Our stores in every corners of the world!
              </p>
            </div>
          </div>
        </article>

        <article className="p-2rem flex ai-stretch flex-wrap gap-2rem">
          <div className="flex-[1\_1\_300px] h-mn-300px h-mx-400px img image-img1 br-8px"></div>
          <div className="flex-[1\_1\_300px] py-1rem">
            <header className="flex fd-column gap-1rem">
              <div className="flex gap-12px">
                <span className="fs-12px block px-8px py-2px br-999px bg-zinc-900 text-lime-100 para-line">
                  Eco-Friendly
                </span>
                <span className="fs-12px block px-8px py-2px br-999px bg-zinc-900 text-lime-100 para-line">Design</span>
              </div>
              <h2 className="fs-2rem fw-500 lh-1 ls-0.025em">
                Tailored branding strategies that resonate with your audience and reflect your values.
              </h2>

              <p className="fs-12px ls-0.030em text-zinc-700">
                From concept to execution, we offer comprehensive branding services, ensuring a cohesive and impactful
                identity.
              </p>

              <div className="flex mt-0.8rem gap-8px">
                <a href="#" className="td-none br-999px center bg-zinc-900 h-35px px-12px text-lime-100">
                  Overview
                </a>
                <span className="br-999px center border h-35px px-12px">Details</span>
              </div>
            </header>
          </div>
        </article>

        <article className="p-2rem">
          <header className="tw-balance ta-center">
            <h2 className="fs-2rem fw-500 lh-1 ls-0.025em">Our Values</h2>
            <p className="mt-8px fs-14px ls-0.030em text-zinc-700">What we offer for you. It's worth it!</p>
          </header>

          <section className="mt-2rem w-full flex flex-wrap ai-stretch gap-1.5rem">
            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-recycle-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Sustainable Materials & Processes</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                We prioritize eco-friendly materials and sustainable practices in every aspect of our design process to
                minimize environmental impact.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-pencil-ruler-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Custom Branding Solutions</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                Tailored branding strategies that resonate with your audience and reflect your business's core values,
                focusing on sustainability.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-global-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">End-to-End Brand Development</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                Comprehensive services from initial concept to final execution, ensuring your brand identity is cohesive
                and impactful across all platforms.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-box-2-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Eco-Conscious Packaging Design</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                Innovative and sustainable packaging solutions that reduce waste and showcase your commitment to the
                environment.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-device-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Responsive & Green Web Design</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                Websites designed to be visually stunning, highly functional, and optimized for all devices, with a
                focus on reducing the carbon footprint.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-article-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Ethical Marketing Collateral</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                Design of brochures, flyers, and other promotional materials that align with sustainable practices and
                effectively communicate your brand message.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-group-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Client-Centric Approach</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                We work closely with our clients, ensuring that every design solution is personalized and reflects their
                unique vision and eco-conscious goals.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>

            <div className="flex-[1\_1\_250px] bg-lime-50 p-1.5rem br-8px">
              <span className="center box-45px br-50% ri-image-line fs-18px bg-lime-100"></span>
              <h3 className="mt-1.5rem fs-1.5rem fw-500 lh-1 ls-0.025em">Story-Driven Visuals</h3>
              <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                High-quality, custom imagery and illustrations that tell your brand's story and highlight its dedication
                to sustainability and creativity.
              </p>
              <a
                href="#"
                className="fs-12px ls-0.030em block mt-2.5rem ta-right td-underline decoration-lime-300 text-zinc-800"
              >
                Learn More
              </a>
            </div>
          </section>
        </article>
        <article className="p-2rem">
          <header className="tw-balance ta-center">
            <h2 className="fs-2rem fw-500 lh-1 ls-0.025em">Sample Products</h2>
            <p className="mt-8px fs-14px ls-0.030em text-zinc-700">What we offer for you. It's worth it!</p>
          </header>

          <section className="mt-2rem w-full flex flex-wrap ai-stretch gap-1.5rem">
            <div className="flex-[1\_1\_400px] bg-lime-50 p-1.5rem br-8px flex gap-1rem">
              <div className="flex-shrink-0 w-mn-100px h-full br-6px img image-pro4"></div>
              <header className="flex fd-column">
                <h3 className=" fs-1.2rem fw-500 lh-1 ls-0.025em">Organic Food Packaging Design</h3>
                <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                  Custom packaging solutions for organic food producers.
                </p>
                <p className="mt-16px fs-16px ls-0.030em text-zinc-700">$4.99</p>

                <div className="mt-auto pt-2rem flex flex-wrap gap-12px">
                  <a href="#" className="td-none br-999px center bg-zinc-900 h-35px px-12px text-lime-100">
                    Buy Now
                  </a>
                  <span className="br-999px center border h-35px px-12px">Details</span>
                </div>
              </header>
            </div>
            <div className="flex-[1\_1\_400px] bg-lime-50 p-1.5rem br-8px flex gap-1rem">
              <div className="flex-shrink-0 w-mn-100px h-full br-6px img image-pro3"></div>
              <header className="flex fd-column">
                <h3 className=" fs-1.2rem fw-500 lh-1 ls-0.025em">Eco-Friendly Cosmetics Packaging</h3>
                <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                  Innovative packaging design for eco-conscious cosmetic brands, using recyclable and biodegradable
                  materials
                </p>
                <p className="mt-16px fs-16px ls-0.030em text-zinc-700">$4.99</p>

                <div className="mt-auto pt-2rem flex flex-wrap gap-12px">
                  <a href="#" className="td-none br-999px center bg-zinc-900 h-35px px-12px text-lime-100">
                    Buy Now
                  </a>
                  <span className="br-999px center border h-35px px-12px">Details</span>
                </div>
              </header>
            </div>
            <div className="flex-[1\_1\_400px] bg-lime-50 p-1.5rem br-8px flex gap-1rem">
              <div className="flex-shrink-0 w-mn-100px h-full br-6px img image-pro2"></div>
              <header className="flex fd-column">
                <h3 className=" fs-1.2rem fw-500 lh-1 ls-0.025em">Synthetic Eco-Friendly Ctton</h3>
                <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                  Recyclable and biodegradable materials to create a luxurious yet sustainable product experience.
                </p>
                <p className="mt-16px fs-16px ls-0.030em text-zinc-700">$4.99</p>

                <div className="mt-auto pt-2rem flex flex-wrap gap-12px">
                  <a href="#" className="td-none br-999px center bg-zinc-900 h-35px px-12px text-lime-100">
                    Buy Now
                  </a>
                  <span className="br-999px center border h-35px px-12px">Details</span>
                </div>
              </header>
            </div>
            <div className="flex-[1\_1\_400px] bg-lime-50 p-1.5rem br-8px flex gap-1rem">
              <div className="flex-shrink-0 w-mn-100px h-full br-6px img image-fruit"></div>
              <header className="flex fd-column">
                <h3 className=" fs-1.2rem fw-500 lh-1 ls-0.025em">Organic Food Packaging Design</h3>
                <p className="mt-12px fs-12px ls-0.030em text-zinc-600">
                  Custom packaging solutions for organic food producers.
                </p>
                <p className="mt-16px fs-16px ls-0.030em text-zinc-700">$4.99</p>

                <div className="mt-auto pt-2rem flex flex-wrap gap-12px">
                  <a href="#" className="td-none br-999px center bg-zinc-900 h-35px px-12px text-lime-100">
                    Buy Now
                  </a>
                  <span className="br-999px center border h-35px px-12px">Details</span>
                </div>
              </header>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Site;
