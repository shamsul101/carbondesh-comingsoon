//import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const BRAND = "#1d7258";
const LIGHT_BG = "#F4F9FA";

/**
 * Replace this with your real Mailchimp form action URL
 * Example:
 * https://YOUR_ID.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX
 */
const MAILCHIMP_ACTION =
  "https://example.us1.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID";

function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection  email={email} setEmail={setEmail} />

        
        <FeaturesSection />

        <AudienceSection />

      
      </main>

      <Footer />
    </div>
  );
}

/* -------------------------------- Header -------------------------------- */

function Header() {
  return (
    <header 
    className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div 
      className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div 
        className="flex items-center gap-3">
          <div
            //  className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm"
           
            //className="h-12 w-12 rounded-full object-cover"
            
             // style={{ backgroundColor: LIGHT_BG }}
          >
        {/* <img   src="/logo.png"
     alt="CarbonDesh Logo"
     className="h-18"

       
    /> */}
                  <h1
              className="font-bold text-lg tracking-tight"
              style={{ color: BRAND }}
            >
              Carbondesh
            </h1>
            <p className="text-s text-slate-400">
              Bangladesh Carbon Market Intelligence
            </p> 
          </div>

          <div>
            {/* <h1
              className="font-bold text-lg tracking-tight"
              style={{ color: BRAND }}
            >
              CarbonDesh
            </h1>
            {/* <p className="text-xs text-slate-400">
              Bangladesh Carbon Market Intelligence
            </p> */} 
          </div>
        </div>

        {/* <a
          href="#subscribe"
          className="hidden sm:inline-flex px-5 py-2.5 rounded-lg text-white font-medium transition hover:opacity-90"
          style={{ backgroundColor: BRAND }}
        >
          Join Waitlist
        </a> */}
      </div>
    </header>
  );
}

/* ------------------------------ Hero Section ----------------------------- */

type HeroProps = {
  email: string;
  setEmail: (value: string) => void;
};

function HeroSection({ email, setEmail }: HeroProps) {

  return (
    <section className="px-6 py-20 sm:py-18">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: "#E6F0F1",
              color: BRAND,
            }}
          >
            <span className="h-2 w-4 rounded-full bg-emerald-500" />
            Launching Soon
          </div>

          <h2
            className="text-6xl sm:text-4xl font-bold leading-tight tracking-tight"
            style={{ color: BRAND }}
          >
            Bangladesh Carbon Market Intelligence
          </h2>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl">
            Weekly insights on Bangladesh’s emerging carbon economy —
            Article 6 opportunities, carbon credit markets, project pipelines,
            policy updates, bilateral agreements, and registry intelligence.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge text="Article 6" />
            <Badge text="Carbon Credits" />
            <Badge text="Project Pipeline" />
            <Badge text="Market Intelligence" />
          </div>
<div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-xl">

  <h3
    className="text-xl font-bold"
    style={{ color: BRAND }}
  >
    Download Free Briefing
  </h3>

  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
    Get an introductory briefing on Bangladesh’s emerging carbon market outlook.
  </p>

  <form
    className="mt-5 flex flex-col sm:flex-row gap-3"
    onSubmit={(e) => {
      e.preventDefault();

      if (!email) {
        alert("Please enter your email");
        return;
      }

      // Open PDF download
      //window.open("/carbondesh-briefing.pdf", "_blank");
        // Thank you message
  alert("Thank you! Your download will start now.");

  // Create hidden download link
  const link = document.createElement("a");
  link.href = "/Carbondesh-intro.pdf";
  link.download = "Carbondesh-intro.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Optional: clear email field
  setEmail("");
}
    }
  >
    <input
      type="email"
      required
      placeholder="Enter your best email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2"
      style={{ ["--tw-ring-color" as string]: BRAND }}
    />

    <button
      type="submit"
      className="px-6 py-3 rounded-xl text-white font-semibold transition hover:opacity-90"
      style={{ backgroundColor: BRAND }}
    >
      Download PDF
    </button>
  </form>

  <p className="mt-3 text-xs text-slate-400">
    PDF briefing • Free download
  </p>
</div>
          <form
            id="subscribe"
            action={MAILCHIMP_ACTION}
            method="post"
            target="_blank"
            noValidate
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {/* <input
              type="email"
              name="EMAIL"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2"
              style={{ ["--tw-ring-color" as string]: BRAND }}
            /> */}

            {/* Mailchimp Honeypot */}
            {/* <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_YOUR_U_YOUR_ID"
                tabIndex={-1}
                defaultValue=""
              />
            </div> */}

            {/* <button
              type="submit"
              className="px-7 py-4 rounded-xl text-white font-semibold transition hover:opacity-90 shadow-sm"
              style={{ backgroundColor: BRAND }}
            >
              Subscribe
            </button> */}
          </form>

          {/* <p className="mt-3 text-sm text-slate-500">
            Free preview issues. No spam. Unsubscribe anytime.
          </p> */}
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div
            className="rounded-3xl p-8 border shadow-sm"
            style={{
              backgroundColor: LIGHT_BG,
              borderColor: "#D7E7E9",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                {/* <p className="text-sm text-slate-500">Weekly Intelligence</p> */}
                <h3
                  className="text-2xl font-bold mt-1"
                  style={{ color: BRAND }}
                >
                  Weekly Intelligence on
                </h3>
              </div>

              <div
               // className="h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                //style={{ backgroundColor: BRAND }}
              >
                
                 <img   src="/Fabicon.png"
     alt="CarbonDesh Logo"
     className="h-22"
     
    />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <InsightCard
                title="Policy & DNA Decisions"
                description="Track approvals, government policy shifts, and national carbon initiatives."
              />

              <InsightCard
                title="Project Pipeline"
                description="Monitor carbon projects entering development and certification stages."
              />

              <InsightCard
                title="Carbon Market Signals"
                description="Understand pricing trends, deal flow, and international market movements."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------- Features Section --------------------------- */

function FeaturesSection() {
  const features = [
    {
      title: "Registry Intelligence",
      description:
        "Follow BCR registry updates, project issuances, and verification activities.",
    },
    {
      title: "Article 6 Insights",
      description:
        "Track bilateral agreements and Bangladesh’s positioning in international carbon markets.",
    },
    {
      title: "Market Signals",
      description:
        "Receive curated analysis on pricing trends, investor movement, and carbon finance.",
    },
    {
      title: "Policy Monitoring",
      description:
        "Stay informed about national climate policy and carbon governance developments.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ color: BRAND }}
          >
            What You’ll Get
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Built for investors, project developers,
            sustainability leaders, and policy makers.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: BRAND }}
              >
                ✓
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Audience Section --------------------------- */

function AudienceSection() {
  const audiences = [
    "Carbon Project Developers",
    "Carbon Credit Stakeholders",
    "Investors & Fund raisers",
    "Financial Institutions",
    "Reseach Institutions",
    "Policy Makers",
    "Government and non-government Agencies",
   ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl font-bold tracking-tight"
          style={{ color: BRAND }}
        >
          Who Is It For?
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          CarbonDesh is designed for professionals and organizations building
          in the climate and carbon economy.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {audiences.map((item) => (
            <div
              key={item}
              className="px-5 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-700 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-slate-100 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3
            className="font-bold text-lg"
            style={{ color: BRAND }}
          >
            Carbondesh
          </h3>

          <p className="text-sm text-slate-500">
            Bangladesh Carbon Market Intelligence
          </p>
        </div>

        <div className="text-sm text-slate-500">
          © 2026 CarbonDesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------- Small Components --------------------------- */

function Badge({ text }: { text: string }) {
  return (
    <div
      className="px-4 py-2 rounded-full text-sm font-medium border"
      style={{
        borderColor: "#D7E7E9",
        backgroundColor: "#F8FBFB",
        color: BRAND,
      }}
    >
      {text}
    </div>
  );
}

function InsightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200">
      <h4 className="font-semibold text-slate-800">{title}</h4>

      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
export default HomePage;