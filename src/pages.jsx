/* ==================================================================
   pages.jsx — one component per route.
   ================================================================== */
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  PROFILE, EXPERIENCE, PROJECTS, AWARDS, ARTICLES, VOLUNTEER, SPORTS,
} from "./data";
import {
  Reveal, SectionHead, PageHead, Tag, TagList, usePageMeta,
  ExperienceCard, ProjectCard, AwardCard, ArticleRow,
  GitHubIcon, Arrow, BackArrow, MailIcon, LinkedInIcon,
} from "./ui";

const SITE = "Abel George Mathew";

/* ---------------- home ---------------- */

const Hero = () => (
  <section className="hero">
    <div className="orb orb-a" />
    <div className="orb orb-b" />
    <div className="hero-inner hero-split">
      {PROFILE.photo && (
        <div className="hero-photo">
          <img src={PROFILE.photo} alt={PROFILE.fullName} />
        </div>
      )}
      <div className="hero-text">
        <h1 className="hero-name">
          <span className="ln-1">{PROFILE.first}</span>
          <span className="ln-2">{PROFILE.last}</span>
        </h1>
        <p className="hero-tag">{PROFILE.tagline}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/about">About Me <Arrow /></Link>
          <a className="btn btn-ghost" href={PROFILE.cv} download>View My Resume</a>
        </div>
      </div>
    </div>
  </section>
);

const ConnectPanel = () => (
  <Reveal>
    <div className="connect">
      <h2 className="connect-title">Let's Connect</h2>
      <p>
        For academic collaborations, mentorship, or opportunities — or just to talk about
        Olympiad problems, formal systems, or chess — I'd love to hear from you.
      </p>
      <div className="cta-row">
        <Link className="btn btn-primary" to="/contact">Get in Touch <Arrow /></Link>
        <Link className="btn btn-ghost" to="/awards">See Achievements</Link>
      </div>
    </div>
  </Reveal>
);

export function Home() {
  usePageMeta(
    `${SITE} | IMO Gold Medalist · Olympiad Mathematician`,
    "Grade 11 student from Bangalore, India — IMO gold and silver medalist, INMO All India Rank 1, and researcher in Olympiad mathematics, AI for mathematics, and theoretical computer science."
  );
  return (
    <>
      <Hero />

       <section className="section">
        <SectionHead icon="medal" title="Achievements" to="/awards" />
        <div className="grid-3 tight">
          {AWARDS.filter((a) => a.featured).map((a, i) => (
            <Reveal key={a.title} delay={i * 70}><AwardCard a={a} /></Reveal>
          ))}
        </div>
      </section>
       <section className="section">
        <SectionHead icon="briefcase" title="Research Engagement & Instructor" to="/work" />
        <div className="grid-3">
          {EXPERIENCE.filter((e) => e.featured).map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 90}><ExperienceCard e={e} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="code" title="Featured Projects" to="/projects" />
        <div className="grid-3">
          {PROJECTS.filter((p) => p.featured).map((p, i) => (
            <Reveal key={p.name} delay={i * 90}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </section>

     

      <section className="section">
        <SectionHead icon="book" title="Articles" to="/publications" />
        <div className="stack">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}><ArticleRow a={a} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="people" title="Leadership & Teaching" to="/volunteering" />
        <Reveal>
          <div className="vol-panel">
            <div className="vol-stats">
              {VOLUNTEER.stats.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
            <div className="vol-orgs">
              {VOLUNTEER.orgs.map((o) => <span key={o.name} className="vol-chip">{o.name}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section"><ConnectPanel /></section>
    </>
  );
}

/* ---------------- about ---------------- */

export function About() {
  usePageMeta(`About | ${SITE}`, "Background, research interests, and Olympiad history.");
  return (
    <section className="section">
      <PageHead icon="user" title="About" lead="" />
      <Reveal>
        <div className="about-split">
          <div className="prose">
            {PROFILE.bio.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {PROFILE.aboutPhoto && (
            <figure className="about-photo">
              <img src={PROFILE.aboutPhoto} alt="" />
            </figure>
          )}
        </div>
      </Reveal>
     
     
    </section>
  );
}

/* ---------------- list pages ---------------- */

export function Work() {
  usePageMeta(`Research | ${SITE}`, "Research engagement, teaching, and invited lectures.");
  return (
    <section className="section">
      <PageHead icon="briefcase" title="Research engagement & Instructor " lead="" />
      <div className="stack">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.slug} delay={i * 70}>
            <Link className="org-card" to={`/work/${e.slug}`}>
              <div className="org-head">
                <img className="org-logo" src={e.logo} alt="" />
                <div>
                  <h3>{e.org}</h3>
                  <p className="org-loc">{e.location}</p>
                </div>
              </div>
              <div className="org-body">
                <div className="org-role-row">
                  <h4>{e.role}</h4>
                  <div className="org-role-meta">
                    <span className="badge badge-solid">{e.badge.toUpperCase()}</span>
                    <span>{e.dates}</span>
                  </div>
                </div>
                <p className="card-desc">{e.desc}</p>
                {e.bullets && (
                  <ul className="bullets small">
                    {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">▸</span>{b}</li>)}
                  </ul>
                )}
                <TagList items={e.tags} />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WorkDetail() {
  const { slug } = useParams();
  const e = EXPERIENCE.find((x) => x.slug === slug);
  usePageMeta(e ? `${e.role} — ${e.org} | ${SITE}` : `Not found | ${SITE}`);
  if (!e) return <Navigate to="/work" replace />;

  return (
    <section className="section">
      <Link className="back-link" to="/work"><BackArrow /> Back to Research</Link>

      <header className="detail-head">
        {e.logo
          ? <img className="detail-logo" src={e.logo} alt="" />
          : <span className="detail-logo org-logo-fallback">{e.org.charAt(0)}</span>}
        <div>
          <h1>{e.role}</h1>
          <p className="detail-org">{e.org}</p>
          <div className="detail-meta">
            <span className="badge">{e.badge}</span>
            <span>{e.dates}</span>
            <span>{e.location}</span>
          </div>
        </div>
      </header>

      <Reveal>
        <div className="detail-panel">
          <h2>Overview</h2>
          <p>{e.desc}</p>

          {e.bullets && (
            <>
              <h2>Key Contributions &amp; Achievements</h2>
              <ul className="bullets">
                {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">▸</span>{b}</li>)}
              </ul>
            </>
          )}

          <h2>Areas &amp; Skills</h2>
          <div className="tags centered">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div>
      </Reveal>
    </section>
  );
}

export function Projects() {
  usePageMeta(`Projects | ${SITE}`, "Mathematics and programming projects.");
  return (
    <section className="section">
      <PageHead icon="code" title="Projects" lead="" />
      <div className="stack">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}><ProjectCard p={p} wide /></Reveal>
        ))}
      </div>
    </section>
  );
}

export function Awards() {
  usePageMeta(`Achievements | ${SITE}`, "Olympiad medals, national ranks, and competition results.");
  return (
    <section className="section">
      <PageHead icon="medal" title="Achievements" lead="" />
      <div className="grid-2">
        {AWARDS.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}><AwardCard a={a} showDetail /></Reveal>
        ))}
      </div>
    </section>
  );
}

export function Publications() {
  usePageMeta(`Articles | ${SITE}`, "Areas of mathematical and computational interest.");
  return (
    <section className="section">
      <PageHead icon="book" title="Articles" lead="" />
      <div className="stack">
        {ARTICLES.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}><ArticleRow a={a} /></Reveal>
        ))}
      </div>
    </section>
  );
}

export function Volunteering() {
  usePageMeta(`Leadership & Teaching | ${SITE}`, "Teaching Olympiad mathematics, mentorship, and activities.");
  return (
    <section className="section">
      <PageHead icon="people" title="Leadership & Teaching" lead="" />
      <Reveal>
        <div className="vol-panel">
          <div className="vol-stats">
            {VOLUNTEER.stats.map((s) => (
              <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="grid-2 spaced">
        {VOLUNTEER.orgs.map((o, i) => (
          <Reveal key={o.name} delay={i * 80}>
            <article className="card">
              <h3>{o.name}</h3>
              <p className="card-org">{o.role}</p>
              <p className="card-desc">{o.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Sports() {
  usePageMeta(`Sports | ${SITE}`, "Basketball, badminton, chess, scrabble, and sports leadership.");
  return (
    <section className="section">
      <PageHead
        icon="trophy"
        title="Sports"
        lead=""
      />
      <div className="grid-3 tight">
        {SPORTS.map((s, i) => (
          <Reveal key={s.name} delay={i * 70}>
            {s.link ? (
              <a className="sport-card" href={s.link} target="_blank" rel="noopener noreferrer">
                <span className="sport-ico">{s.icon}</span>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </a>
            ) : (
              <article className="sport-card">
                <span className="sport-ico">{s.icon}</span>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </article>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- contact ---------------- */

export function Contact() {
  const ghHandle = PROFILE.socials.github?.split("/").filter(Boolean).pop();
  usePageMeta(`Contact | ${SITE}`, "Get in touch about academic collaborations, mentorship, or opportunities.");
  return (
    <section className="section">
      <PageHead icon="user" title="Get in Touch" lead="For academic collaborations, mentorship, or opportunities." />
      <Reveal>
        <div className="contact-grid">
          {PROFILE.email && (
            <a className="contact-card" href={`mailto:${PROFILE.email}`}>
              <MailIcon size={22} />
              <div><h4>Email</h4><p>{PROFILE.email}</p></div>
            </a>
          )}
          {PROFILE.socials.linkedin && (
            <a className="contact-card" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={22} />
              <div><h4>LinkedIn</h4><p>Professional updates and messages</p></div>
            </a>
          )}
          {PROFILE.socials.github && (
            <a className="contact-card" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={22} />
              <div><h4>GitHub</h4><p>@{ghHandle}</p></div>
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- 404 ---------------- */

export function NotFound() {
  usePageMeta(`Page not found | ${SITE}`);
  return (
    <section className="section notfound">
      <h1>404</h1>
      <p>That page doesn't exist. It may have been renamed or moved.</p>
      <Link className="btn btn-primary" to="/">Back to home <Arrow /></Link>
    </section>
  );
}
