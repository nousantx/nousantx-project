import { styler } from "@styler";

const GreenOwlConfig = {
  property: {
    tenox: "color",
    image: {
      property: "background-image",
      value: "url('{value}')"
    }
  },
  values: {
    orch1:
      "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlhbm98ZW58MHx8MHx8fDA%3D",
    event1:
      "https://images.unsplash.com/photo-1590377894621-65093facaef0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JjaGVzdHJhfGVufDB8fDB8fHww",
    event2:
      "https://images.unsplash.com/photo-1587834423414-9545adae44ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yY2hlc3RyYXxlbnwwfHwwfHx8MA%3D%3D",
    event3:
      "https://images.unsplash.com/photo-1488630228244-bcdf33562a43?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yY2hlc3RyYXxlbnwwfHwwfHx8MA%3D%3D",
    event4:
      "https://images.unsplash.com/photo-1447960020573-2dd39c45812f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHVuZGVyJTIwdGhlJTIwc3RhcnN8ZW58MHx8MHx8fDA%3D"
  },
  classes: {
    background: {
      tenox: "green",
      bire: "yellow"
    }
  }
};

const Footer = () => {
  return (
    <footer className="w-mx-1360px mx-auto p-2rem flex ai-stretch gap-2rem flex-wrap">
      <header className="flex-[1\_1\_300px] flex fd-column">
        <h2 className="fs-1rem ls-0.030em fw-500">Green Owl Organization</h2>

        <p className="mt-6px fs-12px text-neutral-700 ls-0.035em">De Luciv, East Java, Indonesia. +2 61 234 567 89</p>

        <div className="pt-1.5rem mt-auto flex flex-wrap gap-1rem fs-1.2rem">
          <span className="ri-facebook-box-line"></span>
          <span className="fs-0.95em ri-instagram-line"></span>
          <span className="ri-youtube-line"></span>
          <span className="ri-tiktok-line"></span>
          <span className="ri-medium-line"></span>
          <span className="ri-mastodon-line"></span>
        </div>
      </header>

      <div className="flex-[1\_1\_300px] flex flex-wrap gap-2rem">
        <div className="flex-[1\_1\_250px] flex flex-wrap gap-1rem">
          <div className="border br-999px py-8px px-1rem">Music & Song</div>
          <div className="border br-999px py-8px px-1rem">Events</div>
          <div className="border br-999px py-8px px-1rem">Merchandise</div>
          <div className="border br-999px py-8px px-1rem">Charity</div>
          <div className="border br-999px py-8px px-1rem">Sponsors</div>
          <div className="border br-999px py-8px px-1rem">Tickets</div>
        </div>
        <div className="flex-[1\_1\_250px] flex">
          <div className="w-full">
            <h3 className="fs-18px fw-400">More</h3>

            <p className="fs-14px text-neutral-700 ls-0.030em mt-14px">News</p>
            <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Events</p>
            <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Donate</p>
          </div>
          <div className="w-full">
            <h3 className="fs-18px fw-400">Terms & Condition</h3>

            <p className="fs-14px text-neutral-700 ls-0.030em mt-14px">Privacy</p>
            <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Legal</p>
            <p className="fs-14px text-neutral-700 ls-0.030em mt-12px">Charity</p>
          </div>
        </div>
      </div>
      <p className="flex-[100%] fs-14px ls-0.030em lh-1.2em text-neutral-800">
        &copy; 2024 Green Owl Indonesia Music Academy. All Rights Reserved.
      </p>
    </footer>
  );
};

const GreenOwl = () => {
  styler(GreenOwlConfig);
  return (
    <div className="box-full h-mn-100vh bg-neutral-100 text-neutral-900 over-hidden">
      <header className="fixed t-0 l-0 r-0 w-mx-1360px mx-auto px-2rem py-1.3rem bg-neutral-100 center space-between z-999">
        <h1 className="fs-1.3rem center gap-6px fw-400 ls-0.030em">
          <span className="fs-1.2em ri-service-line text-emerald-600"></span>
          Green Owl
        </h1>

        <nav className="">
          <span className="fs-28px ri-menu-3-fill"></span>
        </nav>
      </header>
      <main className="w-mx-1360px mx-auto pt-7.4rem">
        <article className="center w-full fd-column">
          <section className="relative w-full w-mx-600px h-400px">
            <div className="w-80% absolute r-0 h-mn-300px bg-size-cover image-orch1 br-6px"></div>
            <header className="w-350px absolute l-1rem t-150px bg-emerald-400 flex ai-[flex-start] fd-column p-2rem br-6px">
              <h1 className="tw-balance fs-2rem fw-400 lh-1.2em ls-0.035em">
                Experience the Wonder of Classical Music
              </h1>

              <button className="btn mt-2.5rem px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-6px">
                <span className="fs-1.1em ri-calendar-event-fill"></span>
                See Upcoming Concerts & Events
              </button>
            </header>
          </section>
          <section className="p-2rem w-full">
            <p className="fs-1.3rem lh-1.4em ls-0.030em w-mx-500px">
              Join us for an enchanting evening filled with the timeless melodies of Beethoven, Mozart, and Tchaikovsky.{" "}
            </p>
            <button className="btn mt-2rem px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-2px">
              Book a Ticket
              <span className="fs-1.3em ri-arrow-right-s-fill"></span>
            </button>
          </section>
        </article>

        <article id="event" className=" bg-neutral-200">
          <header className="p-2rem pb-0">
            <h2 className="fs-1.8em fw-500 ls-0.045em lh-1">Upcoming Events</h2>
            <div className="w-full h-1px bg-emerald-400 my-1rem"></div>
          </header>

          <section className="w-full flex flex-wrap ai-stretch gap-1.5rem">
            <div className="flex-[1\_1\_300px] p-1.5rem bg-neutral-100 flex gap-1rem tw-balance">
              <div className="flex-shrink-0 w-125px h-auto image-event1 bg-loc-center bg-size-cover br-4px"></div>
              <div>
                <h3 className="fs-1.2em fw-500 ls-0.030em lh-1">Classical Symphony Night</h3>
                <p className="fs-14px mt-16px">Grand Java Hall, Malang</p>
                <p className="fs-12px mt-4px">18 - 20 September 2024</p>
                <div className="mt-1.5rem flex flex-wrap gap-8px">
                  <button className="btn px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-6px">
                    Book Tickets
                  </button>
                  <button className="btn px-16px h-35px br-999px border center gap-6px bg-neutral-100 text-neutral-900">
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-[1\_1\_300px] p-1.5rem bg-neutral-100 flex gap-1rem tw-balance">
              <div className="flex-shrink-0 w-125px h-auto image-event2 bg-loc-center bg-size-cover br-4px"></div>
              <div>
                <h3 className="fs-1.2em fw-500 ls-0.030em lh-1">Strings and Melodies of Java</h3>
                <p className="fs-14px mt-16px">Malang Sirewa Village</p>
                <p className="fs-12px mt-4px">10 - 11 October 2024</p>
                <div className="mt-1.5rem flex flex-wrap gap-8px">
                  <button className="btn px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-6px">
                    Book Tickets
                  </button>
                  <button className="btn px-16px h-35px br-999px border center gap-6px bg-neutral-100 text-neutral-900">
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-[1\_1\_300px] p-1.5rem bg-neutral-100 flex gap-1rem tw-balance">
              <div className="flex-shrink-0 w-125px h-auto image-event4 bg-loc-center bg-size-cover br-4px"></div>
              <div>
                <h3 className="fs-1.2em fw-500 ls-0.030em lh-1">Under the Stars by Opera Air Theatre</h3>
                <p className="fs-14px mt-16px">Green Beach, Surabaya</p>
                <p className="fs-12px mt-4px">18 - 20 September 2024</p>
                <div className="mt-1.5rem flex flex-wrap gap-8px">
                  <button className="btn px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-6px">
                    Book Tickets
                  </button>
                  <button className="btn px-16px h-35px br-999px border center gap-6px bg-neutral-100 text-neutral-900">
                    Details
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-100% p-1.5rem bg-neutral-100 center mb-1.5rem">
              <p className="fs-14px ls-0.030em">See More</p>
            </div>
          </section>
        </article>
        <article id="creator" className="center fd-column">
          <header className="p-2rem pb-0 w-full">
            <h2 className="fs-1.8em fw-500 ls-0.045em lh-1">Values</h2>
            <div className="w-full h-1px bg-emerald-400 my-1rem"></div>
          </header>
          <section className="relative w-full w-mx-800px h-400px center">
            <div className="w-80% absolute l-0 h-mn-350px bg-size-cover image-event3 br-6px"></div>
            <header className="w-350px absolute r-1rem bg-emerald-400 flex ai-[flex-start] fd-column p-2rem br-6px">
              <h2 className="tw-balance fs-2rem fw-400 lh-1.2em ls-0.035em">
                An innovative event where classical meets contemporary.
              </h2>

              <button className="btn mt-2.5rem px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-6px">
                Learn More
                <span className="fs-1.1em ri-arrow-right-line"></span>
              </button>
            </header>
          </section>
          <section className="w-full flex flex-wrap ai-stretch p-1.5rem gap-2rem">
            <div className="flex-[1\_1\_200px] bg-red-200 p-1.5rem tw-balance relative">
              <div className="absolute t--15px r--15px box-50px br-50% center bg-neutral-100">
                <span className="fs-20px ri-team-fill"></span>
              </div>
              <h3 className="fs-1.4rem fw-500 lh-1 ls-0.045em">Social and Community Engagement</h3>
              <p className="mt-1.5rem text-neutral-800 fs-14px lh-1.4em ls-0.025em">
                Meet and interact with fellow classical music enthusiasts and share your passion for the arts.
              </p>

              <div className="center end mt-2rem">
                <a href="#" className="fs-14px ls-0.025em text-neutral-800">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-[1\_1\_200px] bg-yellow-200 p-1.5rem tw-balance relative">
              <div className="absolute t--15px r--15px box-50px br-50% center bg-neutral-100">
                <span className="fs-20px ri-hand-heart-fill"></span>
              </div>
              <h3 className="fs-1.4rem fw-500 lh-1 ls-0.045em">Support the Arts</h3>
              <p className="mt-1.5rem text-neutral-800 fs-14px lh-1.4em ls-0.025em">
                Contribute to the vitality of your local cultural scene by supporting live performances and the
                musicians who bring them to life.
              </p>

              <div className="center end mt-2rem">
                <a href="#" className="fs-14px ls-0.025em text-neutral-800">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-[1\_1\_200px] bg-sky-300 p-1.5rem tw-balance relative">
              <div className="absolute t--15px r--15px box-50px br-50% center bg-neutral-100">
                <span className="fs-20px ri-palette-fill"></span>
              </div>
              <h3 className="fs-1.4rem fw-500 lh-1 ls-0.045em">Visual and Auditory</h3>
              <p className="mt-1.5rem text-neutral-800 fs-14px lh-1.4em ls-0.025em">
                Enjoy the visual spectacle of the orchestra's performance, including the elegant movements of the
                musicians and the conductor.
              </p>

              <div className="center end mt-2rem">
                <a href="#" className="fs-14px ls-0.025em text-neutral-800">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-[1\_1\_200px] bg-lime-200 p-1.5rem tw-balance relative">
              <div className="absolute t--15px r--15px box-50px br-50% center bg-neutral-100">
                <span className="fs-20px ri-music-2-fill"></span>
              </div>
              <h3 className="fs-1.4rem fw-500 lh-1 ls-0.045em">Inspiration for Creativity</h3>
              <p className="mt-1.5rem text-neutral-800 fs-14px lh-1.4em ls-0.025em">
                Let the music inspire your own creative pursuits, whether in music, art, writing, or other forms of
                expression.
              </p>

              <div className="center end mt-2rem">
                <a href="#" className="fs-14px ls-0.025em text-neutral-800">
                  Learn More
                </a>
              </div>
            </div>
          </section>
        </article>
        <article id="news" className="bg-neutral-200">
          <header className="p-2rem pb-0">
            <h2 className="fs-1.8em fw-500 ls-0.045em lh-1">News</h2>
            <div className="w-full h-1px bg-emerald-400 my-1rem"></div>
          </header>

          <section className="w-full flex flex-wrap ai-stretch gap-1.5rem">
            <div className="flex-[1\_1\_300px] p-1.5rem bg-neutral-100 flex gap-1rem tw-balance">
              <div className="flex-shrink-0 w-125px h-auto image-event1 bg-loc-center bg-size-cover br-4px"></div>
              <div>
                <h3 className="fs-1.2em fw-500 ls-0.030em lh-1">Green Owl Launches New Classical Music Album</h3>
                <p className="fs-12px mt-8px text-neutral-800">
                  Green Owl is excited to announce the release of its newest classical music album, "Timeless Melodies."
                </p>
                <p className="fs-12px mt-8px">10 May 2024</p>
                <div className="mt-1.5rem flex flex-wrap gap-8px">
                  <button className="btn px-16px h-35px br-999px border center gap-6px bg-neutral-100 text-neutral-900">
                    See Details
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-[1\_1\_300px] p-1.5rem bg-neutral-100 flex gap-1rem tw-balance">
              <div className="flex-shrink-0 w-125px h-auto image-event2 bg-loc-center bg-size-cover br-4px"></div>
              <div>
                <h3 className="fs-1.2em fw-500 ls-0.030em lh-1">Special Concert: An Evening with the Symphony</h3>
                <p className="fs-12px mt-8px text-neutral-800">
                  Green Owl presents a special evening with the world-class Symphony Orchestra at the Grand Concert
                  Hall.
                </p>
                <p className="fs-12px mt-8px">7 August 2024</p>
                <div className="mt-1.5rem flex flex-wrap gap-8px">
                  <button className="btn px-16px h-35px br-999px border center gap-6px bg-neutral-100 text-neutral-900">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </section>
        </article>
        <article id="donate" className="bg-emerald-400 p-2rem relative over-hidden isolate">
          <span className="absolute ri-service-line text-neutral-100 fs-300px t--20px r--30px z--3 opa-0.4 text-green-300"></span>
          <h1 className="tw-balance fs-1.6rem fw-400 lh-1.2em ls-0.035em">Harmonizing Hearts, Changing Lives</h1>

          <button className="btn mt-2rem px-16px h-35px br-999px bg-neutral-900 text-neutral-100 center gap-6px">
            Donate to Green Owl
          </button>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default GreenOwl;
