import { styler } from "@styler";
import React from "react";
const VultureX = () => {
  styler();

  const HeaderLink: React.FC<{
    children?: React.ReactNode;
    icon?: string;
  }> = ({ children, icon }) => (
    <a className="center">
      {icon && <i className={`ti ti-${icon}`}></i>}
      {children}
    </a>
  );

  const SectionHeader: React.FC<{
    icon?: string;
    title: string;
    subtitle: string;
    description: string;
  }> = ({ icon, subtitle, title, description }) => (
    <header className="tw-balance">
      <div className="center bg-gray-600 bg-opacity-0.3 w-[max-content] px-12px py-6px gap-4px br-1rem">
        <span className="ms-sharp fs-12px text-orange-400">{icon}</span>
        <span className="fs-12px">{subtitle}</span>
      </div>
      <h2 className="lh-1 fs-1.8rem mt-1rem fw-500 text-neutral-200">{title}</h2>
      <p className="fs-14px mt-12px text-neutral-400">{description}</p>
    </header>
  );

  const FeatureCard: React.FC<{
    icon?: string;
    title: string;
    color: string;
    description: string;
  }> = ({ icon, color, title, description }) => (
    <div className="flex-[1\_1\_250px] bg-neutral-800 bg-opacity-0.4 p-1.5rem br-8px">
      <span
        className={`center box-40px border bdr-${color}-400 bw-2px br-8px ms-sharp text-gradient [--text-gradient]-[linear-gradient(63deg,var(--${color}-600),var(--${color}-400))] fs-25px`}
      >
        {icon}
      </span>
      <h3 className="mt-2rem fs-1.5rem fw-500">{title}</h3>
      <p className="mt-8px fs-12px text-neutral-300">{description}</p>
    </div>
  );

  return (
    <div className="w-full bg-neutral-900 text-neutral-200 h-mn-100vh">
      <header className="w-full flex ai-center space-between p-2rem py-1rem relative">
        <h1 className="fs-1rem fw-500">VultureX</h1>
        <nav className="text-neutral-400 flex gap-1rem fs-12px">
          {["Docs", "Feature", "Showcase"].map(link => (
            <HeaderLink key={link}>{link}</HeaderLink>
          ))}
          <HeaderLink icon="github_circle" />
        </nav>
      </header>
      <main className="w-mx-1440px mx-auto h-mn-100vh">
        {/* Hero section */}
        <article className="flex flex-wrap ai-stretch jc-center h-100% max-lg:h-100% lg:h-80vh">
          <section className="flex-[1\_1\_400px] p-2rem flex ai-center">
            <header className=" tw-balance">
              <div className="center bg-gray-600 bg-opacity-0.3 w-[max-content] px-12px py-6px gap-4px br-1rem">
                <span className="ms-sharp fs-12px text-orange-400">rocket_launch</span>
                <span className="fs-12px">v2 Release</span>
              </div>

              <h1 className="fs-2.5em lh-1 mt-1rem fw-600">
                The Future of Fast and Modern{" "}
                <span className="text-gradient [--text-gradient]-[linear-gradient(63deg,var(--amber-600),var(--yellow-400))] fw-700">
                  React
                </span>{" "}
                Framework.
              </h1>

              <p className="mt-1rem fs-14px text-neutral-400">
                Fast, Modern, and Intuitive React Framework for Web Applications.
              </p>

              <div className="mt-1.5rem flex flex-wrap ai-center gap-8px">
                <button className="btn px-1rem h-35px br-4px fw-500 bg-neutral-200 text-neutral-900 hover:bg-neutral-400 tr-prop-[background-color] tr-time-0.3s">
                  Get Started
                </button>
                <div className="btn px-1rem h-35px br-4px fw-500 bg-neutral-800 text-neutral-200  bw-1px bs-solid bdr-neutral-600 center gap-8px">
                  <p className="family-code fs-12px">npm create vulturex</p>
                </div>
              </div>
            </header>
          </section>
          <section className="flex-[1\_1\_400px] p-1rem">
            <div className="w-full bg-[linear-gradient(63deg,var(--amber-600),var(--yellow-400))] br-4px br-bl-2rem p-2rem h-full text-neutral-800 center">
              <div className="bg-neutral-900 bg-opacity-0.8  br-1rem shadow-lg shadow-opacity-0.4">
                <div className="w-full bs-solid bw-0 bw-bottom-1px bdr-neutral-500 border-opacity-0.5 px-1.3rem flex ai-center gap-1.3rem">
                  <div className="flex ai-center gap-8px  ">
                    <div className="box-12px br-999px bg-red-500"></div>
                    <div className="box-12px br-999px bg-yellow-500"></div>
                    <div className="box-12px br-999px bg-green-500"></div>
                  </div>

                  <div className="family-code text-neutral-200 fs-12px p-1.3rem bdr-neutral-500 border-opacity-0.5 border br-top-6px bw-bottom-0 bg-red-700 bg-opacity-0.1">
                    index.vtx
                  </div>
                </div>

                <div className="w-full text-neutral-200 p-2rem">
                  <div className="family-code">
                    <p className="fs-14px">
                      <span className="text-amber-500">&lt;main</span>
                      <span className="text-yellow-500"> class</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-lime-400">"tx-wrapper"</span>
                      <span className="text-amber-500">&gt;</span>
                    </p>
                    <p className="fs-14px my-8px pl-2ch">
                      <span className="text-amber-500">&lt;div&gt;</span>
                      Hello World!
                      <span className="text-amber-500">&lt;/div&gt;</span>
                    </p>
                    <p className="fs-14px">
                      <span className="text-amber-500">&lt;/main&gt;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* "Used by" section */}
        <article className="center fd-column p-2rem">
          <h2 className="fs-14px fw-500 text-neutral-500">Used by</h2>

          <div className="w-full relative center mt-1.5rem text-neutral-400 gap-2.5rem over-hidden">
            <p className="center gap-4px ls-1px">
              <span className="ms-sharp fs-1.2rem">code</span>
              Lorem.AI
            </p>

            <p className="center gap-4px">
              <span className="ms-sharp fs-1.1rem">package_2</span>
              WJIX
            </p>

            <p className="center gap-4px">
              <span className="ms-sharp fs-1.1rem">whatshot</span>
              Growqy
            </p>

            <p className="center gap-4px">
              <span className="ms-sharp fs-1.1rem">nest_protect</span>
              Litgram
            </p>

            <p className="center gap-4px">
              <span className="ms-sharp fs-1.1rem">database</span>
              lunak
            </p>

            <div className="box-full absolute bg-[linear-gradient(to\_right,var(--neutral-900),transparent,transparent,transparent,var(--neutral-900)]"></div>
          </div>
        </article>

        {/* Feature section */}
        <article className="p-2rem mt-3rem">
          <SectionHeader
            icon="bolt"
            subtitle="Faster than old method"
            title="Engineered for performance and scalability."
            description="VultureX empowers developers to build lightning-fast, responsive, and modern web applications with ease."
          />
          <section className="flex flex-wrap ai-stretch jc-center gap-1.5rem mt-2.5rem">
            {[
              {
                icon: "bolt",
                color: "yellow",
                title: "Blazing Fast Performance",
                description:
                  "Optimized rendering and efficient state management ensure your applications run smoothly and load quickly."
              },
              {
                icon: "construction",
                color: "green",
                title: "Modern Tooling",
                description:
                  "Seamless integration with the latest development tools and libraries for an enhanced developer experience."
              },
              {
                icon: "widgets",
                color: "purple",
                title: "Modular Architecture",
                description: "Flexible and reusable components that promote clean and maintainable code."
              },
              {
                icon: "auto_stories",
                color: "blue",
                title: "Comprehensive Documentation",
                description: "Extensive guides and examples to help you get started quickly and maximize productivity."
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </section>
        </article>
      </main>

      <footer className="w-mx-1440px mx-auto br-top-1rem w-full p-2rem bg-opacity-0.5 flex flex-wrap gap-2rem">
        <header className="">
          <h4 className="fs-1.5rem fw-500">VultureX</h4>
          <p className="text-neutral-400 fs-12px">by nousantx</p>

          <div className="mt-1.5rem flex ai-center gap-8px">
            <i className="box-24px center fs-16px ti ti-linkedin"></i>
            <i className="box-24px center fs-16px ti ti-github_circle"></i>
            <i className="box-24px center fs-16px ti ti-instagram"></i>
            <i className="box-24px center fs-16px ti ti-twitter_x"></i>
          </div>
        </header>

        <div className="flex flex-wrap ai-stretch mt-2rem gap-2rem jc-center w-full">
          <div className="flex-[1\_1\_250px]">
            <h4 className="fs-1.2rem fw-500">Resources</h4>
            <a href="#" className="block text-neutral-400 fs-14px mt-1rem td-none">
              Documentation
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              API Reference
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              GitHub
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Support
            </a>
          </div>

          <div className="flex-[1\_1\_250px]">
            <h4 className="fs-1.2rem fw-500">Community</h4>
            <a href="#" className="block text-neutral-400 fs-14px mt-1rem td-none">
              Forum
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Discord
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Twitter
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Blog
            </a>
          </div>

          <div className="flex-[1\_1\_250px]">
            <h4 className="fs-1.2rem fw-500">Company</h4>
            <a href="#" className="block text-neutral-400 fs-14px mt-1rem td-none">
              About Us
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Careers
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Contact
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Privacy Policy
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Terms of Service
            </a>
          </div>

          <div className="flex-[1\_1\_250px]">
            <h4 className="fs-1.2rem fw-500">Learn</h4>
            <a href="#" className="block text-neutral-400 fs-14px mt-1rem td-none">
              Tutorials
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Guides
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Webinars
            </a>
            <a href="#" className="block text-neutral-400 fs-14px mt-8px td-none">
              Courses
            </a>
          </div>
        </div>

        <p className="fs-12px text-neutral-400">&copy; 2024. It's just design.</p>
      </footer>
    </div>
  );
};

export default VultureX;
