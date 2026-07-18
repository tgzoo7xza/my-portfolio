"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="page" data-theme={theme}>
      <main className="container">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? (
            // ไอคอนพระจันทร์ (กดแล้วจะเปลี่ยนเป็นมืด)
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            // ไอคอนพระอาทิตย์ (กดแล้วจะเปลี่ยนเป็นสว่าง)
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          )}
        </button>

        <section className="hero">
          <Image
            src="/T1.jpg"
            alt="รูปโปรไฟล์"
            width={120}
            height={120}
            className="profile-pic"
          />
          <h1>[นาย ธนดิลกชัย ครุฑพุ่ม]</h1>
          <p className="role">[นักศึกษาฝึกงาน]</p>
        </section>

        <section className="about">
          <h2>เกี่ยวกับฉัน</h2>
          <p>[เขียนแนะนำตัวสั้นๆ 2-3 ประโยค]</p>
        </section>

        <section className="skills">
          <h2>ทักษะ</h2>

          <div className="skill-group">
            <h3 className="skill-subtitle">Hard Skills</h3>
            <ul className="skill-list">
              <li>[HTML]</li>
              <li>[CSS]</li>
              <li>[JavaScript]</li>
              <li>[Next.js]</li>
              <li>[Tailwind CSS]</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3 className="skill-subtitle">Tools</h3>
            <ul className="skill-list tools">
              <li>[Github]</li>
              <li>[Figma]</li>
              <li>[Vercel]</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3 className="skill-subtitle">Soft Skills</h3>
            <ul className="skill-list soft">
              <li>[ทักษะ 1 เช่น การทำงานเป็นทีม]</li>
              <li>[ทักษะ 2 เช่น การสื่อสาร]</li>
              <li>[ทักษะ 3 เช่น การแก้ปัญหา]</li>
            </ul>
          </div>
          <section className="education">
            <h2>ประวัติการศึกษา</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-head">
                  <h3>[ชื่อสถาบัน]</h3>
                  <span className="timeline-date">[2565 - ปัจจุบัน]</span>
                </div>
                <p className="timeline-company">[คณะ / สาขา]</p>
                <p>[เกรดเฉลี่ย หรือกิจกรรม/ผลงานเด่นระหว่างเรียน]</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-head">
                  <h3>[ชื่อโรงเรียนมัธยม]</h3>
                  <span className="timeline-date">[2562 - 2565]</span>
                </div>
                <p className="timeline-company">[แผนการเรียน]</p>
                <p>[เกรดเฉลี่ย หรือกิจกรรมเด่น (ถ้ามี ไม่บังคับ)]</p>
              </div>
            </div>
          </section>
        </section>

        <section className="experience">
          <h2>ประสบการณ์ทำงาน</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-head">
                <h3>[ตำแหน่งงาน]</h3>
                <span className="timeline-date">[ม.ค. 2566 - ปัจจุบัน]</span>
              </div>
              <p className="timeline-company">[ชื่อบริษัท]</p>
              <p>[อธิบายหน้าที่/ผลงานสั้นๆ 1-2 ประโยค]</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-head">
                <h3>[ตำแหน่งงาน]</h3>
                <span className="timeline-date">[มิ.ย. 2565 - ธ.ค. 2565]</span>
              </div>
              <p className="timeline-company">[ชื่อบริษัท]</p>
              <p>[อธิบายหน้าที่/ผลงานสั้นๆ 1-2 ประโยค]</p>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2>ผลงาน</h2>
          <div className="project-grid">
            <a href="https://my-booking-system-rho.vercel.app/" target="_blank" className="project-card">
              <h3>[ชื่อโปรเจกต์ 1]</h3>
              <p>[อธิบายโปรเจกต์สั้นๆ ว่าทำอะไร ใช้เทคโนโลยีอะไร]</p>
            </a>

            <a href="[ลิงก์โปรเจกต์ 2]" target="_blank" className="project-card">
              <h3>[ชื่อโปรเจกต์ 2]</h3>
              <p>[อธิบายโปรเจกต์สั้นๆ ว่าทำอะไร ใช้เทคโนโลยีอะไร]</p>
            </a>

            <a href="[ลิงก์โปรเจกต์ 3]" target="_blank" className="project-card">
              <h3>[ชื่อโปรเจกต์ 3]</h3>
              <p>[อธิบายโปรเจกต์สั้นๆ ว่าทำอะไร ใช้เทคโนโลยีอะไร]</p>
            </a>
          </div>
        </section>

        <section className="contact">
          <h2>ติดต่อฉัน</h2>
          <p>Email: [email ของคุณ]</p>
          <p>โทร: [เบอร์โทร]</p>
          <p>Facebook: [ชื่อเฟสบุ๊ก หรือลิงก์]</p>
          <p>Instagram: @[ชื่อไอจี]</p>
          <p>Line ID: [ไอดีไลน์]</p>


          <section className="links">
            <h2>ลิงก์</h2>
            <div className="link-grid">
              {/* <a href="https://linkedin.com/in/[username]" target="_blank" className="link-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.8H9z" />
                </svg>
                LinkedIn
              </a> */}

              <a href="https://github.com/[username]" target="_blank" className="link-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.62.24 2.82.12 3.12.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15v3.18c0 .3.2.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
                GitHub
              </a>

              <a href="/" target="_blank" className="link-btn resume">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                </svg>
                ดาวน์โหลดเรซูเม่
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}