import { Header } from "@/components/Header";
import { LogoHorizontal, LogoStacked, Submark } from "@/components/Logo";
import { CountUp, Reveal } from "@/components/motion";
import { Phone, ScreenBible, ScreenCalendar, ScreenChurch, ScreenHome } from "@/components/Phone";
import { SoapSteps } from "@/components/SoapSteps";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Method />
        <Features />
        <Habit />
        <Churches />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Lamplight glow — placeholder until brand photography is available */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 38%, rgba(191,142,74,.28), transparent 70%), radial-gradient(40% 40% at 10% 100%, rgba(89,29,31,.55), transparent 70%)",
        }}
      />
      <div className="wrap relative grid items-center gap-16 pb-24 pt-32 md:grid-cols-[1.1fr_1fr] md:pb-32 md:pt-40">
        <div>
          <Submark trace className="h-16 w-16 text-gold sm:h-20 sm:w-20" />
          <h1 className="h-display hero-rise mt-8 max-w-[14ch] text-[40px] sm:text-[56px] md:text-[46px] lg:text-[64px]" style={{ animationDelay: "600ms" }}>
            Your appointed time with God, every day.
          </h1>
          <p className="hero-rise mt-6 max-w-[46ch] text-[17px] leading-[1.7] text-cream/75" style={{ animationDelay: "800ms" }}>
            Moed is a Bible and SOAP journaling app from {site.org}. Read the passage, write what
            you see, and pray — one quiet appointment, kept each day.
          </p>
          <div className="hero-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "1000ms" }}>
            <a href={site.signupUrl} className="btn-gold">Get started</a>
            <a href="#method" className="btn-ghost-light">See how it works</a>
          </div>
          <p className="hero-rise mt-12 text-[14px] text-cream/55" style={{ animationDelay: "1200ms" }}>
            Moed (<span lang="he" dir="rtl">מוֹעֵד</span>) is Hebrew for an appointed time.
          </p>
        </div>

        <div className="hero-rise relative" style={{ animationDelay: "900ms" }}>
          <div className="phone-float">
            <Phone label="Moed home screen with the Verse of the Day and quick links">
              <ScreenHome />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Method() {
  return (
    <section id="method" className="bg-burgundy text-cream">
      <div className="wrap py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="h-display text-[34px] sm:text-[44px]">Four steps that turn reading into meeting.</h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-cream/75">
            SOAP is a simple, time-tested way to sit with Scripture. Moed walks you through each step,
            with bold and highlight on every field so the words that matter stand out later.
          </p>
        </Reveal>
        <div className="mt-16">
          <SoapSteps />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function FeatureRow({
  title, body, points, phone, flip = false, id,
}: {
  title: string; body: string; points: string[]; phone: React.ReactNode; flip?: boolean; id?: string;
}) {
  return (
    <div id={id} className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <Reveal className={flip ? "md:order-2" : ""}>
        <h3 className="h-display text-[28px] sm:text-[34px]">{title}</h3>
        <p className="mt-4 max-w-[48ch] text-[17px] leading-[1.7] text-ink/75">{body}</p>
        <ul className="mt-7 space-y-3 border-t border-cream-line pt-6">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-[15.5px] leading-[1.6] text-ink/85">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={150} className={flip ? "md:order-1" : ""}>
        <div className="relative rounded-[28px] bg-cream-deep py-12">{phone}</div>
      </Reveal>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-cream">
      <div className="wrap py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="h-display text-[34px] sm:text-[44px]">Everything for your time in the Word.</h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-ink/70">
            A journal that remembers, a Bible that’s easy to read, and a way to stay close to your church.
          </p>
        </Reveal>

        <div className="mt-20 space-y-28">
          <FeatureRow
            title="A journal that keeps every entry."
            body="Your SOAP entries build into a record of what God has been teaching you — easy to search, easy to revisit."
            points={[
              "Search across the text of every entry as you type",
              "A monthly calendar marks the days you journaled — tap any day to read or add",
              "Edit or delete any past entry",
              "Share an entry, or just the verse, through your phone’s share sheet",
            ]}
            phone={<Phone label="Journal calendar with marked days"><ScreenCalendar /></Phone>}
          />
          <FeatureRow
            flip
            title="The whole Bible, in three translations."
            body="All 66 books of the Old and New Testament, with a reader that stays out of the way."
            points={[
              "Switch between the WEB, KJV and ASV translations",
              "Adjust the reading font size",
              "Tap to select verses and copy them with the reference and translation attached",
              "Move from chapter to chapter, and from one book into the next",
            ]}
            phone={<Phone label="Bible reader showing John 1 in the KJV"><ScreenBible /></Phone>}
          />
          <FeatureRow
            title="Stay connected to your church."
            body="Find a church nearby, join yours, and see what’s happening this week."
            points={[
              "Search by your location or an address, with results sorted by distance",
              "Call, get directions, or open the website and Facebook page in one tap",
              "See service times and denomination at a glance",
              "Events show your own church’s gatherings plus announcements for everyone",
            ]}
            phone={<Phone label="Find a Church results sorted by distance"><ScreenChurch /></Phone>}
          />
        </div>

        <div className="mt-28 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-[28px] border border-cream-line bg-cream-deep/60 p-8 sm:p-10">
            <h3 className="h-display text-[24px]">Sermon notes</h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-ink/75">
              Take notes on Sunday with headings, lists, bold, italic and underline — and undo when you
              need to. Every note has a title, so you can find it again.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-[28px] border border-cream-line bg-cream-deep/60 p-8 sm:p-10">
            <h3 className="h-display text-[24px]">What to Share</h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-ink/75">
              A searchable library of discipleship and evangelism pieces, published by church leaders,
              ready for you to read and pass on.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Habit() {
  const day = 87;
  return (
    <section className="bg-ink text-cream">
      <div className="wrap py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="h-display text-[34px] sm:text-[44px]">Keep the appointment.</h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-cream/70">
            A reminder at the time you choose, a streak that grows with you, and a plan that takes you
            through the whole Bible in a year.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="rounded-[28px] bg-ink-soft p-8 sm:p-10">
            <p className="text-[14px] text-cream/55">Your profile, for example</p>
            <dl className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Current streak", value: 12 },
                { label: "Longest streak", value: 40 },
                { label: "Days logged", value: 86 },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-[13px] leading-snug text-cream/60">{s.label}</dt>
                  <dd className="mt-2 font-serif text-[40px] leading-none text-gold-light">
                    <CountUp to={s.value} />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 space-y-4 border-t border-cream/10 pt-8 text-[15.5px] leading-[1.6] text-cream/80">
              <p>Finish an entry and Moed shows a quote card from your verse, ready to share, along with your current streak.</p>
              <p>Set a daily reminder for the hour that fits your morning — or your lunch break, or your evening.</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-[28px] bg-ink-soft p-8 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="h-display text-[24px]">Genesis to Revelation in 365 days</h3>
              <p className="text-[14px] text-cream/60">Day {day} of 365</p>
            </div>
            <p className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.6] text-cream/75">
              Check off each day as you read, pick up where you left off, or tap any day to open that passage.
            </p>
            <div
              className="mt-8 grid gap-[3px]"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(9px, 1fr))" }}
              role="img"
              aria-label={`Reading plan progress: ${day} of 365 days complete`}
            >
              {Array.from({ length: 365 }).map((_, i) => (
                <span
                  key={i}
                  className={`aspect-square rounded-[2px] ${
                    i < day ? "bg-gold-light" : i === day ? "bg-gold-light/40 ring-1 ring-gold-light" : "bg-cream/10"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Churches() {
  const tools = [
    { t: "Verse of the Day", d: "Post the verse your congregation opens the app to each morning." },
    { t: "Events", d: "Publish gatherings for your own church, or announcements for every church on Moed." },
    { t: "Your church listing", d: "Add your church to the directory and keep service times and links current." },
    { t: "What to Share", d: "Publish discipleship and evangelism pieces your members can read and pass on." },
  ];
  return (
    <section id="churches" className="bg-burgundy text-cream">
      <div className="wrap grid gap-14 py-24 md:py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <h2 className="h-display text-[34px] sm:text-[44px]">For pastors and church leaders.</h2>
          <p className="mt-5 max-w-[44ch] text-[17px] leading-[1.7] text-cream/75">
            Moed gives verified church admins simple tools to encourage their people through the week.
            Admin access is set up by the Moed team — there’s no self-service sign-up for it.
          </p>
          <a href={site.churchContactUrl} className="btn-gold mt-9">Talk to us about your church</a>
        </Reveal>
        <dl className="grid gap-px overflow-hidden rounded-[28px] bg-cream/10 sm:grid-cols-2">
          {tools.map((x, i) => (
            <Reveal key={x.t} delay={i * 80} className="bg-burgundy p-7 sm:p-8">
              <dt className="font-serif text-[20px] text-gold-light">{x.t}</dt>
              <dd className="mt-2 text-[15px] leading-[1.65] text-cream/80">{x.d}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Trust() {
  const items = [
    { t: "Yours to keep, yours to delete", d: "Delete your account at any time, and every journal entry is removed with it." },
    { t: "Secure sign-in", d: "Sign in with email and password, with a reset link if you ever forget it." },
    { t: "Comfortable to read", d: "Light, dark, or match your phone — your choice follows your account across devices." },
  ];
  return (
    <section className="bg-cream">
      <div className="wrap py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={i * 100} className="border-t border-ink/15 pt-7">
              <h3 className="h-display text-[21px]">{x.t}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-ink/70">{x.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Faq() {
  const qs = [
    {
      q: "What is the SOAP method?",
      a: "SOAP stands for Scripture, Observation, Application and Prayer. You read a passage, note what it says, consider what it means for your life, and respond in prayer. Moed guides you through each step and saves the entry to your journal.",
    },
    {
      q: "Which Bible translations are included?",
      a: "The World English Bible (WEB), the King James Version (KJV) and the American Standard Version (ASV). You can switch between them while you read.",
    },
    {
      q: "Do I have to belong to My HOPE Church?",
      a: "No. You can choose your church from the directory in your profile. Events then show your church’s gatherings plus announcements for everyone.",
    },
    {
      q: "Can I delete my account?",
      a: "Yes. Deleting your account removes it along with every journal entry you’ve written.",
    },
    {
      q: "How does my church get admin access?",
      a: "Admin access is granted by the Moed team to verified church leaders. Get in touch and we’ll help you set up your church.",
    },
  ];
  return (
    <section id="faq" className="border-t border-cream-line bg-cream">
      <div className="wrap grid gap-12 py-24 md:grid-cols-[1fr_1.6fr] md:gap-20 md:py-32">
        <Reveal>
          <h2 className="h-display text-[34px] sm:text-[44px]">Questions</h2>
        </Reveal>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {qs.map((x) => (
            <details key={x.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-[19px] [&::-webkit-details-marker]:hidden">
                {x.q}
                <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-ink transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.75] text-ink/75">{x.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section id="signup" className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 60% at 50% 0%, rgba(191,142,74,.22), transparent 70%)" }}
      />
      <div className="wrap relative flex flex-col items-center py-28 text-center md:py-36">
        <Reveal>
          <LogoStacked className="mx-auto h-36 w-36 text-gold" />
          <h2 className="h-display mx-auto mt-10 max-w-[18ch] text-[34px] sm:text-[48px]">
            Make room for your appointed time.
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-[17px] leading-[1.7] text-cream/70">
            Create your account and write your first SOAP entry today.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={site.signupUrl} className="btn-gold">Get started</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="wrap flex flex-col gap-10 border-t border-cream/10 py-12 md:flex-row md:items-center md:justify-between">
        <LogoHorizontal className="h-14 w-auto text-cream" />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-cream/70">
          <a href="/about" className="hover:text-cream">About</a>
          <a href="/privacy" className="hover:text-cream">Privacy Policy</a>
          <a href="/terms" className="hover:text-cream">Terms</a>
        </nav>
      </div>
      <div className="wrap pb-10 text-[13px] text-cream/45">
        © {new Date().getFullYear()} {site.org}. All rights reserved.
      </div>
    </footer>
  );
}
