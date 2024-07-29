import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";
import { colors } from "./_components/color";
import { dzikir } from "./_components/dzikir";
import "./_components/index.css";

function Dzikir() {
  useLayoutEffect(() => {
    use({
      property: [property],
      classes: colors
    });

    makeStyles({
      body: "bg-neutral-900 text-neutral-100 family-poppins",
      ".ayat":
        "family-amiri position-relative fs-1.8rem ta-right lh-2.2em p-1.8rem bg-neutral-700 [--bg-opa]-0.2 text-neutral-100",
      ".ayat span.rep": "d-[inline-block] mr-1rem fs-1.4rem",
      ".ayat-container .desc": "family-poppins lh-normal text-neutral-300 ta-left p-2rem",
      ".ayat-container .desc p": "fw-400 fs-13px text-neutral-500 mt-8px font-s-italic",
      ".ayat-container .desc span": "d-block fs-14px mt-1.7rem tw-balance",
      ".referensi": {
        "": "mt-3rem",
        p: "mt-1rem fs-14px text-neutral-300 lh-1.3em",
        "p span": "text-neutral-100 fw-500"
      }
    });

    tenoxui(property);
  }, []);

  return (
    <>
      <main className="w-100% w-mx-1440px mx-auto">
        <article className="p-2rem position-relative">
          <header>
            <h1 className="fs-2rem tw-balance lh-1">Dzikir Setelah Sholat</h1>
            <p className="fs-14px text-neutral-300 mt-1rem">
              Berikut adalah Do'a dan Dzikir sesuai sunnah yang dapat diamalkan setelah melaksanakan sholat.
            </p>
          </header>
        </article>

        {dzikir.map((item, index) => (
          <article className="ayat-container" key={index}>
            <p className="ayat">
              <span className="family-poppins position-absolute fs-12px box-30px t-0 l-0 bg-accent-400 lh-1 d-flex flex-parent-center">
                {index + 1}
              </span>
              {item.repetition && <span className="rep">(×{item.repetition})</span>}
              {item.verse}
            </p>
            <div className="desc">
              <p>{item.transliteration}</p>
              <span>“{item.translation}”</span>
            </div>
          </article>
        ))}
        <article className="p-2rem bg-neutral-700 [--bg-opa]-0.2">
          <header>
            <h2 className="fs-1.8rem">Referensi</h2>
            <p className="fs-12px text-neutral-300 mt-8px">
              Berikut adalah sumber referensi hadits dari do'a dan dzikir di atas.
            </p>
          </header>

          <section className="referensi">
            <p>
              <span>1 dan 2 :</span> HR. Muslim no. 591.
            </p>
            <p>
              <span>3 dan 4 : </span>HR. Bukhari no. 844 dan Muslim no. 593.
            </p>
            <p>
              <span>5, 6, dan 7 : </span>HR. Muslim no. 594.
            </p>
            <p>
              <span>8, 9, 10, dan 11 : </span>HR. Muslim no. 597 dan Lihat Syarh Shahih Muslim, 5: 84.
            </p>

            <p>
              <span>12 : </span>HR. An-Nasai dalam Al Kubro 9: 44. Hadits ini dinyatakan shahih oleh Ibnu Hibban,
              sebagaimana disebut oleh Ibnu Hajar dalam Bulughul Maram.
            </p>
            <p>
              <span>13, 14, dan 15 : </span>HR. Abu Daud no. 1523 dan An-Nasai no. 1337. Al Hafizh Abu Thohir mengatakan
              bahwa sanad hadits ini hasan.
            </p>
            <p>
              <span>16 :</span> HR. Ibnu Majah no. 925 dan Ahmad 6: 305, 322. Al Hafizh Abu Thohir mengatakan bahwa
              hadits ini shahih.
            </p>
            <p className="mt-3rem fs-12px">
              Seluruh referensi diatas, di ambil dari{" "}
              <a className="text-primary-400" href="https://rumaysho.com/1997-dzikir-setelah-shalat.html">
                Link Berikut
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <footer className="w-100% w-mx-1440px mx-auto px-2rem py-1rem">
        <p className="fs-12px fw-500">
          Project by{" "}
          <a className="text-primary-400" href="https://github.com/nousantx">
            NOuSantx
          </a>
          . Built with{" "}
          <a className="text-primary-400" href="https://github.com/tenoxui/css">
            TenoxUI
          </a>
        </p>
      </footer>
    </>
  );
}

export default Dzikir;
