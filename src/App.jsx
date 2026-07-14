import React, { useState } from "react";
import {
  Link2,
  Send,
  Mail,
  ExternalLink,
  Orbit,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const colors = {
  bg: "#05060F",
  panel: "#0D1024",
  panelBorder: "#22264A",
  text: "#ECEDF7",
  muted: "#868CB8",
  accent: "#8B7BFF",
  green: "#4ADE80",
  blue: "#FFB84D",
};

const StarField = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        radial-gradient(1.5px 1.5px at 20px 30px, #ffffff55, transparent),
        radial-gradient(1.5px 1.5px at 90px 70px, #ffffff40, transparent),
        radial-gradient(1px 1px at 150px 20px, #ffffff60, transparent),
        radial-gradient(1.5px 1.5px at 200px 90px, #ffffff35, transparent),
        radial-gradient(1px 1px at 260px 50px, #ffffff55, transparent),
        radial-gradient(1.5px 1.5px at 320px 15px, #ffffff45, transparent)
      `,
      backgroundRepeat: "repeat",
      backgroundSize: "360px 120px",
      opacity: 0.7,
    }}
  />
);

const routes = [
  { path: "/about", label: "about" },
  { path: "/skills", label: "skills" },
  { path: "/projects", label: "projects" },
  { path: "/experience", label: "experience" },
  { path: "/blog", label: "blog" },
  { path: "/contact", label: "contact" },
];

const skillGroups = [
  { label: "languages", items: ["Java", "JavaScript", "SQL"] },
  { label: "backend", items: ["Spring Boot", "Hibernate", "JDBC", "REST APIs"] },
  { label: "frontend", items: ["React", "HTML", "CSS"] },
  { label: "databases", items: ["MySQL", "MongoDB"] },
  { label: "cloud & tools", items: ["AWS", "Git", "GitHub"] },
];

const skillLinks={
  Java: { icon: "java", url: "https://docs.oracle.com/en/java/" },
JavaScript: { icon: "js", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
"Spring Boot": { icon: "spring", url: "https://spring.io/projects/spring-boot" },
React: { icon: "react", url: "https://react.dev" },
HTML: { icon: "html", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
CSS: { icon: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
MySQL: { icon: "mysql", url: "https://dev.mysql.com/doc/" },
MongoDB: { icon: "mongodb", url: "https://www.mongodb.com/docs/" },
AWS: { icon: "aws", url: "https://docs.aws.amazon.com/" },
Git: { icon: "git", url: "https://git-scm.com/doc" },
GitHub: { icon: "github", url: "https://docs.github.com/" },
};

const projects = [
  {
    id: "01",
    name: "AI-Powered Skin Cancer Detection",
    desc: "Hybrid CNN-Transformer diagnostic pipeline. U-Net segmentation isolates lesion areas; EfficientNet-B3 + Vision Transformer classify sequentially. Includes a web interface for image upload and real-time prediction.",
    stack: ["Python", "CNN", "ViT", "U-Net", "Web UI"],
    status: "shipped",
  },
  {
    id: "02",
    name: "Online Job Portal",
    desc: "Full-stack MERN job portal with role-based access for recruiters and job seekers. Secure auth, optimized queries, structured job posting and application tracking.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    status: "shipped",
  },
];

const blogPosts = [
  {
    date: "2026-07-01",
    title: "What I learned wiring auth + roles in Spring Boot 3.5",
    excerpt:
      "Notes from building the auth module for my capstone: Spring Security config, JWT flow, and role-based access decisions I'd make differently next time.",
  },
  {
    date: "2026-06-15",
    title: "Segmentation before classification: why U-Net first",
    excerpt:
      "On the final-year project — why isolating the lesion region before classification improved accuracy, and what the CNN-Transformer handoff actually looks like.",
  },
  {
    date: "2026-05-20",
    title: "Self-paced ≠ unstructured: how I ran my own internship",
    excerpt:
      "No manager, no ticket queue — just a goal. How I scoped, built, and shipped a working web app on my own timeline during my internship.",
  },
];

function SectionLabel({ id, children }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Orbit size={14} style={{ color: colors.accent }} />
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: colors.accent }}
      >
        GET {id}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: colors.panelBorder }} />
    </div>
  );
}

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {/* Nav */}
      <nav
        className="sticky top-0 z-10 border-b backdrop-blur"
        style={{ borderColor: colors.panelBorder, backgroundColor: "rgba(11,14,20,0.85)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-sm" style={{ color: colors.text }}>
            bragadheesh<span style={{ color: colors.accent }}>.dev</span>
          </span>
          <div className="hidden sm:flex gap-5 font-mono text-xs" style={{ color: colors.muted }}>
            {routes.map((r) => (
              <a
                key={r.path}
                href={`https://github.com/Bragadheesh-R${r.label}`}
                className="hover:underline"
                style={{ textUnderlineOffset: "4px" }}
                onMouseEnter={() => setHovered(r.label)}
                onMouseLeave={() => setHovered(null)}
              >
                {r.path}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative max-w-4xl mx-auto px-6 pt-16 pb-20 overflow-hidden">
        <StarField />
        <div className="relative flex items-center gap-2 mb-4 font-mono text-xs" style={{ color: colors.green }}>
          <Sparkles size={12} style={{ color: colors.green }} />
          Open_To_Work
        </div>
        <h1 className="relative text-4xl sm:text-5xl font-mono font-bold leading-tight mb-4">
          Bragadheesh R
        </h1>
        <p className="relative text-lg sm:text-xl mb-8" style={{ color: colors.muted }}>
          Software Engineer. Java &amp; Spring Boot backend, comfortable across the
          full stack. CS grad, 2025.
        </p>

        {/* signature element: profile.json */}
        <div
          className="relative rounded-lg border p-5 font-mono text-sm leading-relaxed overflow-x-auto"
          style={{ backgroundColor: colors.panel, borderColor: colors.panelBorder }}
        >
          <div style={{ color: colors.muted }}>// profile.json</div>
          <div>{"{"}</div>
          <div className="pl-4">
            <span style={{ color: colors.blue }}>"role"</span>: <span style={{ color: colors.accent }}>"Software Engineer"</span>,
          </div>
          <div className="pl-4">
            <span style={{ color: colors.blue }}>"stack"</span>: [<span style={{ color: colors.accent }}>"Java"</span>, <span style={{ color: colors.accent }}>"Spring Boot"</span>, <span style={{ color: colors.accent }}>"React"</span>, <span style={{ color: colors.accent }}>"MySQL"</span>],
          </div>
          <div className="pl-4">
            <span style={{ color: colors.blue }}>"grad_year"</span>: <span style={{ color: colors.green }}>2025</span>,
          </div>
          <div className="pl-4">
            <span style={{ color: colors.blue }}>"based_in"</span>: <span style={{ color: colors.accent }}>"Coimbatore, TN"</span>,
          </div>
          <div className="pl-4">
            <span style={{ color: colors.blue }}>"status"</span>: <span style={{ color: colors.accent }}>"open_to_work"</span>
          </div>
          <div>{"}"}</div>
        </div>

        <div className="mt-8">
          <a
            href="mailto:bragadheeshr@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm"
            style={{ backgroundColor: colors.accent, color: colors.bg }}
          >
            <Mail size={14} /> Say Hi
          </a>
          <a
            href="https://www.linkedin.com/in/bragadheesh-ravichandran"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md border font-mono text-sm"
            style={{ borderColor: colors.panelBorder, color: colors.text }}
          >
            <Send size={14} /> linkedin
          </a>
          <a
            href="https://github.com/Bragadheesh-R"
            className="flex items-center gap-2 px-4 py-2 rounded-md border font-mono text-sm"
            style={{ borderColor: colors.panelBorder, color: colors.muted }}
            title="Add your GitHub link once repos are pushed"
          >
            <Link2 size={14} /> github
          </a>
          <img src="https://skillicons.dev/icons?i=java,spring,react,html,css,js,mysql,mongodb,aws,git,github&theme=dark"
          alt="Tech Stack icons"
          className="max-w-full"></img>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-14">
        <SectionLabel id="/about">About</SectionLabel>
        <p className="text-base leading-relaxed" style={{ color: colors.text }}>
          I'm a Computer Science graduate (2025) focused on backend development
          with Java and Spring Boot, and comfortable working across the stack
          with React on the front end. I like building things that solve a
          concrete problem — from a CNN-Transformer pipeline for skin cancer
          detection to a full-stack job portal — and I debug by tracing values,
          not guessing. Currently deepening my backend fundamentals while
          staying open to full-stack roles.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-14">
        <SectionLabel id="/skills">Skills</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: colors.muted }}>
                {g.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => {
                  const link = skillLinks[s];
                  if (link) {
                    return (
                    <a
                    key={s}
                    href={link.url}target="_blank"rel="noreferrer"className="flex items-center gap-1.5 px-2.5 py-1 rounded text-sm border hover:opacity-80 transition"
                    style={{ borderColor: colors.panelBorder, backgroundColor: colors.panel }}>
                    
                      <img src={`https://skillicons.dev/icons?i=${link.icon}&theme=dark`}alt={s} className="w-4 h-4"/>
                      {s}
                      </a>
                    );
                  }
                  return (
                  <span
                  key={s}
                  className="px-2.5 py-1 rounded text-sm border"
                  style={{ borderColor: colors.panelBorder, backgroundColor: colors.panel }}>
                    {s}
                    </span>
                    );
                    })}
                </div>
                </div>
              ))}
              </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-14">
        <SectionLabel id="/projects">Projects</SectionLabel>
        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border p-5"
              style={{ borderColor: colors.panelBorder, backgroundColor: colors.panel }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs" style={{ color: colors.muted }}>
                    {p.id}
                  </span>
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                </div>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ color: colors.green, backgroundColor: "rgba(74,222,128,0.1)" }}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: colors.muted }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-0.5 rounded border"
                    style={{ borderColor: colors.panelBorder, color: colors.blue }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-14">
        <SectionLabel id="/experience">Experience</SectionLabel>
        <div
          className="rounded-lg border p-5 relative pl-6"
          style={{ borderColor: colors.panelBorder, backgroundColor: colors.panel }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
            style={{ backgroundColor: colors.accent }}
          />
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold">Full Stack Web Development — Edu-Versity, Bangalore</h3>
            <span className="font-mono text-xs" style={{ color: colors.muted }}>
              Mar–Apr 2024
            </span>
          </div>
          <p className="text-sm mb-2" style={{ color: colors.muted }}>
            Self-driven internship, not task-assigned work.
          </p>
          <p className="text-sm leading-relaxed">
            Learned Spring Boot, REST APIs, and MySQL independently, then built
            and shipped a working web application applying those concepts end
            to end — backend logic, API integration, and frontend with HTML,
            CSS, and JavaScript.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-4xl mx-auto px-6 py-14">
        <SectionLabel id="/blog">Blog</SectionLabel>
        <div className="space-y-3">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href="https://github.com/Bragadheesh-R"
              className="block rounded-lg border p-5 group"
              style={{ borderColor: colors.panelBorder, backgroundColor: colors.panel }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs" style={{ color: colors.muted }}>
                  {post.date}
                </span>
                <ChevronRight size={14} style={{ color: colors.muted }} />
              </div>
              <h3 className="font-semibold mb-1">{post.title}</h3>
              <p className="text-sm" style={{ color: colors.muted }}>
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
        <p className="text-xs mt-4 font-mono" style={{ color: colors.muted }}>
          // placeholder posts — replace with real write-ups once published
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-14">
        <SectionLabel id="/contact">Contact</SectionLabel>
        <div
          className="rounded-lg border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderColor: colors.panelBorder, backgroundColor: colors.panel }}
        >
          <div>
            <p className="mb-1">Open to Software Engineer roles — backend-focused, full-stack ready.</p>
            <p className="text-sm" style={{ color: colors.muted }}>
              Coimbatore, Tamil Nadu · +91 9791778566
            </p>
          </div>
          <a
            href="mailto:bragadheeshr@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm shrink-0"
            style={{ backgroundColor: colors.accent, color: colors.bg }}
          >
            <Mail size={14} /> bragadheeshr@gmail.com <ExternalLink size={12} />
          </a>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-10 text-center font-mono text-xs" style={{ color: colors.muted }}>
        built with React · deployed on GitHub Pages
      </footer>
    </div>
  );
}
