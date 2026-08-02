"use client";

import { useState } from "react";
import Image from "next/image";

const GUTTER_LINES = Array.from({ length: 113 }, (_, i) => i + 1);

function Bar({ pct }: { pct: number }) {
  const total = 20;
  const filled = Math.round((pct / 100) * total);
  return (
    <span className="bar-ascii">
      {"█".repeat(filled)}
      {"░".repeat(total - filled)}
    </span>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="ide" data-theme={theme}>
      <header className="ide-titlebar">
        <nav className="ide-tabs">
          <a className="ide-tab" href="#home">หน้าแรก</a>
          <a className="ide-tab" href="#about">เกี่ยวกับฉัน</a>
          <a className="ide-tab" href="#history">ประวัติส่วนตัว</a>
          <a className="ide-tab" href="#skills">ทักษะ</a>
          <a className="ide-tab" href="#soft-skills">ทักษะการทำงาน</a>
          <a className="ide-tab" href="#education">การศึกษา</a>
          <a className="ide-tab" href="#goals">เป้าหมาย</a>
          <a className="ide-tab" href="#experience">ประสบการณ์</a>
          <a className="ide-tab" href="#projects">ผลงาน</a>
          <a className="ide-tab" href="#contact">ติดต่อฉัน</a>
        </nav>
      </header>

      <div className="ide-body">
        <aside className="gutter" aria-hidden="true">
          {GUTTER_LINES.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </aside>

        <main className="ide-main">
          <section id="home" className="block hero">
            <Image
              src="/T1.jpg"
              alt="รูปโปรไฟล์"
              width={104}
              height={104}
              className="avatar"
            />
            <h1>
              <span className="str">สวัสดีครับ</span>
            </h1>
            <p className="prompt-line">
              นักศึกษาฝึกงาน / สาขาวิทยาการคอมพิวเตอร์{""}
              <span className="cursor-blink">▊</span>
            </p>
          </section>

          <section id="about" className="block">
            <h2>เกี่ยวกับฉัน</h2>
            <p className="template-string">
              <span className="tick">`</span>
              สวัสดีครับ ผมชื่อ นาย ธนดิลกชัย ครุฑพุ่ม หรือเรียกสั้น ๆ ว่า แต้มครับ
              ปัจจุบันกำลังศึกษาระดับปริญญาตรี สาขาวิทยาการคอมพิวเตอร์
              มหาวิทยาลัยราชภัฏพระนคร ผมมีความสนใจในการพัฒนาเว็บไซต์ทั้งฝั่ง
              Front-end และ Back-end ผมพร้อมเปิดรับความคิดเห็นของทุกคน
              พร้อมเรียนรู้จากประสบการณ์ใหม่ ๆ
              สามารถปรับตัวให้เข้ากับการทำงานร่วมกับผู้อื่นได้ดี
              และหวังว่าการฝึกงานครั้งนี้จะทำให้ผมพัฒนาตัวได้อีกขั้นนึงครับ
              <span className="tick">`</span>
            </p>
          </section>

          <section id="history" className="block">
            <h2>ประวัติส่วนตัว</h2>
            <p className="template-string">
              <span className="tick">`</span>
              <p>ชื่อ: นาย ธนดิลกชัย ครุฑพุ่ม</p>
              <p>ชื่อเล่น: แต้ม</p>
              <p>อายุ: 21 ปี</p>
              <p>วันเกิด: 22 พ.ค 2548</p>
              <p>สัญชาติ: ไทย</p>
              <span className="tick">`</span>
            </p>
          </section>

          <section id="skills" className="block">
            <h2>ทักษะ</h2>
            <pre className="json-block">
              <code>
                {"{"}
                {"\n"}  <span className="json-key">"skills"</span>: [
                <span className="json-str">"HTML"</span>,{" "}
                <span className="json-str">"CSS"</span>,{" "}
                <span className="json-str">"JavaScript"</span>,{" "}
                <span className="json-str">"Next.js"</span>,{" "}
                <span className="json-str">"Tailwind CSS"</span>,{" "}
                <span className="json-str">"Vue.js"</span>],
                {"\n"}  <span className="json-key">"tools"</span>: [
                <span className="json-str">"GitHub"</span>,{" "}
                <span className="json-str">"VS Code"</span>,{" "}
                <span className="json-str">"Figma"</span>,{" "}
                <span className="json-str">"Vercel"</span>,{" "}
                <span className="json-str">"Supabase"</span>]
                {"\n"}
                {"}"}
              </code>
            </pre>
          </section>

          <section id="soft-skills" className="block">
            <h2 className="section-title">ทักษะการทำงาน</h2>

            <div className="tag-row">
              {[
                "การทำงานเป็นทีมได้",
                "มีการสื่อสารกับเพื่อนร่วมงานได้ค่อยข้างดี",
                "การแก้ปัญหาเฉพาะหน้าพอได้",
                "ความรับผิดชอบ",
                "มีการปรับตัวอยู่ตลอดเวลา",
              ].map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </section>


          <section id="education" className="block">
            <h2>ประวัติการศึกษา</h2>

            <div className="log-entry">
              <div className="log-head">
                <span className="prompt-arrow">&gt;</span>
                <h3>มหาวิทยาลัยราชภัฏพระนคร</h3>
                <span className="log-date">2566 - ปัจจุบัน</span>
              </div>
              <p className="log-meta">คณะวิทยาศาสตร์และเทคโนโลยี / สาขาวิทยาการคอมพิวเตอร์</p>
              <p className="log-meta">GPA 3.40</p>
            </div>

            <div className="log-entry">
              <div className="log-head">
                <span className="prompt-arrow">&gt;</span>
                <h3>โรงเรียนดอนเมืองทหารอากาศบำรุง</h3>
                <span className="log-date">2563 - 2565</span>
              </div>
              <p className="log-meta">ศิลป์ภาษาจีน</p>
              <p className="log-meta">GPA 3.74</p>
            </div>
          </section>

          <section id="goals" className="block">
            <h2>เป้าหมายการฝึกงาน</h2>

            <div className="todo-group">
              <p className="todo-title">สิ่งที่คาดหวังจากการฝึกงาน</p>
              <ul className="todo-list">
                <li>
                  <span className="checkbox">[ ]</span> ได้เรียนรู้การทำงานจริงในสายงานพัฒนาเว็บไซต์
                  ทั้งฝั่ง Front-end และ Back-end
                </li>
                <li>
                  <span className="checkbox">[ ]</span> ได้ฝึกการทำงานร่วมกับทีม
                  และพร้อมรับฟังคำแนะนำจากรุ่นพี่ในองค์กร
                </li>
                <li>
                  <span className="checkbox">[ ]</span> ได้นำความรู้ที่เรียนมาประยุกต์ใช้กับงานจริง
                  และพัฒนาทักษะการแก้ปัญหา
                </li>
              </ul>
            </div>

            <div className="todo-group">
              <p className="todo-title">สิ่งที่บริษัทจะได้รับ</p>
              <ul className="todo-list">
                <li>
                  <span className="checkbox">[x]</span> นักศึกษาฝึกงานที่มีความรับผิดชอบ
                  ตั้งใจเรียนรู้ และพร้อมรับมอบหมายงาน
                </li>
                <li>
                  <span className="checkbox">[x]</span> กำลังเสริมช่วยงานด้านพัฒนาเว็บไซต์ในช่วงระยะเวลาฝึกงาน
                </li>
                <li>
                  <span className="checkbox">[x]</span> ได้มุมมองและความคิดใหม่ ๆ และความกระตือรือร้นในการเรียนรู้เทคโนโลยีปัจจุบัน
                </li>
              </ul>
            </div>

          </section>

          <section id="experience" className="block">
            <h2>ประสบการณ์ทำงาน</h2>

            <div className="git-entry">
              <p className="git-meta">Date: เม.ย. 2569 - มิ.ย. 2569</p>
              <p className="git-msg">7-11 — นักศึกษาฝึกงาน PT (ระยะเวลา 3 เดือน)</p>
              <p className="git-body">ทำทุกอย่างที่ได้รับมอบหมายในแต่ละวันครับ</p>
            </div>

            <div className="git-entry">
              <p className="git-meta">Date: มี.ค. 2568 - มิ.ย. 2568</p>
              <p className="git-msg">7-11 — นักศึกษาฝึกงาน PT (ระยะเวลา 4 เดือน)</p>
              <p className="git-body">ทำทุกอย่างที่ได้รับมอบหมายในแต่ละวันครับ</p>
            </div>
          </section>

          <section id="projects" className="block">
            <h2>ผลงาน</h2>

            <div className="file-grid">

              <a
                href="https://github.com/tgzoo7xza/my-booking-system"
                target="_blank"
                rel="noopener noreferrer"
                className="file-card"
              >
                <h3>เว็บแอปสำหรับจองคิวร้านตัดผม</h3>
                <p>
                  ระบบจองคิวตัดผมออนไลน์แบบ Step-by-Step ที่ช่วยให้ลูกค้าสามารถเลือกทรงผม 
                  เลือกวันและเวลาที่สะดวก พร้อมระบบป้องกันการจองคิวซ้ำ และส่งแจ้งเตือนไปยังช่างตัดผมผ่าน 
                  LINE Notify แบบ Real-time
                </p>
                <span className="file-status">● repo</span>
              </a>

              <a
                href="https://github.com/tgzoo7xza/5053-app"
                target="_blank"
                rel="noopener noreferrer"
                className="file-card"
              >
                <h3>ออกแบบ ui/ux หน้าlanding page เว็บขายน้ำปั่น</h3>
                <p>ออกแบบ UI/UX สำหรับหน้า landing page เว็บขายน้ำปั่น เป็นมินิโปรเจกต์ตอนทำแลป
                  deployเว็บโดยใช้vercelครับ
                </p>
                <span className="file-status">● repo</span>
              </a>

              <a
                href="https://www.figma.com/design/ziiqSQaf0yOekRhMee9wTe/Untitled?node-id=0-1&p=f&t=1KlajzTYQlZnpmdZ-0#"
                target="_blank"
                rel="noopener noreferrer"
                className="file-card"
              >
                <h3>ออกแบบ ui/ux แอปร้านขายไก่</h3>
                <p>ออกแบบ UI/UX  สำหรับแอปร้านขายไก่ บน figma
                  ทำร่วมกับเพื่อนอีก 5 คน โดยแบ่งหน้าที่กันทำคนละส่วน และนำมารวมกันเป็นแอปเดียวครับ
                </p>
                <span className="file-status">● ui/ux</span>
              </a>

              <a
                href="https://www.figma.com/design/lryUMK7Q4zMH7xvg29Xtam/Project-Group-%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%8810-4123103-2?node-id=0-1&t=Pw06LCgkU6Q7MuW9-1"
                target="_blank"
                rel="noopener noreferrer"
                className="file-card"
              >
                <h3>ออกแบบ ui/ux และ prototype เว็บจองสถานที่พัก Chok i am camping</h3>
                <p>ออกแบบ UI/UXและprototype สำหรับเว็บจองสถานที่พัก Chok i am camping บน figma
                  ทำร่วมกับเพื่อนอีก 2 คน โดยแบ่งหน้าที่กันทำคนละส่วน และนำมารวมกันเป็นเว็บเดียวครับ
                </p>
                <span className="file-status">● ux/ui</span>
              </a>

            </div>
          </section>

          <section id="contact" className="block">
            <h2>ติดต่อฉัน</h2>
            <div className="shell-block">
              <p>
                <span className="prompt-dollar"></span>E-mail
              </p>
              <p className="shell-out">tgzoo7xza@gmail.com</p>
              <p>
                <span className="prompt-dollar"></span>Phone
              </p>
              <p className="shell-out">096-825-1078</p>
              <p>
                <span className="prompt-dollar"></span>Line
              </p>
              <p className="shell-out">
                <a href="https://line.me/ti/p/w_s5nB8hX3" target="_blank">
                  ติดต่อไลน์
                </a>
              </p>
            </div>

            <div className="link-row">
              <a href="https://github.com/tgzoo7xza" target="_blank" className="link-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.62.24 2.82.12 3.12.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15v3.18c0 .3.2.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
                GitHub
              </a>
              <a href="/portfolio.pdf" target="_blank" className="link-btn resume">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                </svg>
                ดาวน์โหลดเรซูเม่
              </a>
            </div>
          </section>
        </main >
      </div >

      <footer className="statusbar">
        <button className="status-item theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 dark" : "☀️ light"}
        </button>
      </footer>
    </div >
  );
}