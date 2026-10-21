import { MapPin, Monitor } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../components/sections/SectionHeader";
import TechPill from "../components/TechPill";

const experiences = [
  {
    company: "24/7 Teach",
    role: "Full Stack Developer (Frontend Focused)",
    location: "Remote",
    location_icon: Monitor,
    start_date: "03/2023",
    end_date: "08/2026",
    points: [
      "Reduced admin dashboard load time by 83% (~30s to under 5s) by replacing 5 sequential per-student API requests with batched endpoints that fetch data for groups of 20 students in a single request, cutting total request volume by up to 20x.",
      "Built a responsive React and TypeScript admin dashboard from the ground up to monitor activity for 300+ students across multiple educational applications, partnering directly with the CPO to deliver real-time classroom visualizations and reusable analytics components.",
      "Reduced unnecessary backend requests by 90% in the Naomi Math app by extending polling intervals from 60s to 5 minutes, pausing background polling via the Page Visibility API when tabs were inactive, and unmounting polling hooks outside active admin routes.",
      "Built a real-time data pipeline where external educational applications sent events to an API service, which persisted updates to Supabase; React clients subscribed to database changes to update dashboard state without manual refreshes.",
      "Integrated Clever SSO by building a backend authentication service that validated users against Supabase, issued authorized Supabase tokens, and enforced role-aware access across protected frontend routes and UI features.",
      "Established automated testing for Naomi Math, one of the platform’s core React applications, using Vitest, React Testing Library, and Playwright, with 34 unit/component test files and 7 E2E test suites integrated into GitHub Actions CI/CD.",
    ],
    techs: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "Zustand",
      "Playwright",
      "Git",
    ],
  },
  {
    company: "Westlake Financial",
    role: "Software Engineer Intern",
    location: "Los Angeles, CA",
    location_icon: MapPin,
    start_date: "06/2022",
    end_date: "09/2022",
    points: [
      "Developed backend ETL processes using Spring Batch to automate the aggregation of client account and financial delinquency data from MySQL databases into automated internal reports.",
      "Participated in daily Agile workflows to optimize complex SQL reporting queries, enhancing data processing efficiency for enterprise risk analysis and partner distribution workflows",
    ],
    techs: ["Java", "Spring", "PL/SQL", "Oracle SQL Developer"],
  },
];

export default function Experience() {
  const [visibleCount, setVisibleCount] = useState<number>(1);

  return (
    <section id="experience" className="content-section">
      <div className="container-content-section">
        {/* experience header */}
        <SectionHeader
          sectionTitle="Experience"
          sectionSubtext="My professional journey and key contributions"
        />
        <div className="relative flex flex-col gap-5">
          {/* timeline line */}
          <div className="absolute top-2 bottom-2 left-0 w-0.5 bg-accent z-10" />
          {/* experience */}
          {experiences
            .slice(0, visibleCount)
            .map(
              ({
                company,
                role,
                location,
                location_icon: LocationIcon,
                start_date,
                end_date,
                techs,
                points,
              }) => (
                <div
                  key={company}
                  className="relative flex flex-col gap-2 pl-6"
                >
                  {/* dot (used for the timeline) */}
                  <div className="absolute top-1 left-px -translate-x-1/2 bg-accent w-3 h-3 rounded-full" />
                  {/* company info */}
                  <div className="flex flex-col">
                    {/* date and location*/}
                    <div className="flex justify-between text-muted">
                      <p className="text-accent lg:text-xl">
                        {start_date} - {end_date}
                      </p>
                      <p className="flex gap-1.5 items-center border border-muted/30 rounded-full py-1 px-2 text-xs bg-surface lg:text-lg">
                        <LocationIcon
                          className="size-5 lg:size-6"
                          strokeWidth={1.5}
                        />{" "}
                        {location}
                      </p>
                    </div>
                    {/* company name */}
                    <h3 className="text-xl font-semibold lg:text-3xl">
                      {company}
                    </h3>
                    {/* role */}
                    <p className="text-mute lg:text-xl">{role}</p>
                  </div>
                  <div className="py-3 pl-7 pr-3 bg-surface/80 rounded-2xl border border-white/10 flex flex-col gap-3.5">
                    {/* resume point */}
                    <ul className="list-disc lg:columns-2 lg:gap-x-18 lg:[column-rule:1px_solid_#334155]">
                      {points.map((point) => (
                        <li
                          key={point}
                          className="text-muted text-sm lg:text-lg"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    {/* tech */}
                    <div className="flex gap-1 flex-wrap -ml-5">
                      {techs.map((tech) => (
                        <TechPill key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
        </div>
        {visibleCount < experiences.length ? (
          <button className="lg:text-xl" onClick={() => setVisibleCount((prev) => prev + 1)}>
            View More
          </button>
        ) : (
          experiences.length > 1 && (
            <button onClick={() => setVisibleCount(1)}>Show Less</button>
          )
        )}
      </div>
    </section>
  );
}
