"use client";

import { useEffect } from "react";
import { aboutParagraphs, profile, projects, skills } from "@/data/portfolio";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
];

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const onScroll = () =>
      document
        .getElementById("nav")
        ?.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav id="nav" className="topnav">
        <div className="logo">
          Fairuz<span>.</span>
        </div>
        <ul>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#kontak">
          Hubungi Saya
        </a>
      </nav>

      <header className="hero" id="beranda">
        <div className="avatar-wrap">
          <div className="avatar">
            {/* Taruh file foto di public/fotosaya.jpeg */}
            <img src={profile.avatar} alt={`Foto ${profile.name}`} />
          </div>
        </div>
        <div className="hero-text">
          <span className="badge">{profile.badge}</span>
          <h1>
            <span>{profile.name}</span>
          </h1>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn" href="#proyek">
              Lihat Karya
            </a>
            <a className="btn" href="#kontak">
              Hubungi Saya
            </a>
          </div>
        </div>
      </header>

      <section id="tentang" className="page-section reveal">
        <div className="sec-label">Profil</div>
        <h2>
          Tentang <span>Saya</span>
        </h2>
        <div className="bar"></div>
        <div className="about">
          <div className="about-card">
            {aboutParagraphs.map((p, i) => (
              <p key={i} style={i > 0 ? { marginTop: "1rem" } : undefined}>
                {p}
              </p>
            ))}
          </div>
          <div className="info-card">
            <ul className="info">
              <li>👤 <b>Nama</b> {profile.name}</li>
              <li>🎓 <b>Status</b> {profile.status}</li>
              <li>📍 <b>Domisili</b> {profile.location}</li>
              <li>✉️ <b>Email</b> {profile.email}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keahlian" className="page-section reveal">
        <div className="sec-label">Kemampuan</div>
        <h2>
          Keahlian <span>Saya</span>
        </h2>
        <div className="bar"></div>
        <div className="card-grid">
          {skills.map((s) => (
            <div className="card" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div>
                {s.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="proyek" className="page-section reveal">
        <div className="sec-label">Karya</div>
        <h2>
          Proyek <span>Pilihan</span>
        </h2>
        <div className="bar"></div>
        <div className="card-grid">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              {p.image && p.link ? (
                p.image.toLowerCase().endsWith(".pdf") ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-img-link"
                    title="Buka sertifikat (PDF)"
                  >
                    <span className="project-pdf">
                      <span className="project-pdf-icon">📄</span>
                      <span className="project-pdf-label">
                        {p.title}
                      </span>
                      <span className="project-pdf-open">
                        Klik untuk buka PDF
                      </span>
                    </span>
                  </a>
                ) : (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-img-link"
                  >
                    <img
                      src={p.image}
                      alt={`Sertifikat ${p.title}`}
                      className="project-img"
                      loading="lazy"
                    />
                  </a>
                )
              ) : null}
              <p>{p.description}</p>
              <div>
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Lihat sertifikat →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="kontak" className="page-section reveal">
        <div className="contact">
          <div className="sec-label" style={{ color: "#ffd9ec" }}>
            Kontak
          </div>
          <h2 style={{ color: "#fff" }}>
            Mari <span>Terhubung</span>
          </h2>
          <p>
            Punya pertanyaan, ajakan kolaborasi, atau sekadar ingin berkenalan?
            Klik tombol di bawah.
          </p>
          <span className="mail">✉️ {profile.email}</span>
          <br />
          <a className="btn" href={`mailto:${profile.email}`}>
            ✉️ Email Saya
          </a>
        </div>
      </section>

      <footer className="site-footer">
        © 2026 <b>{profile.name}</b> — Dibuat dengan Next.js
      </footer>
    </>
  );
}
