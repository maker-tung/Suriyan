# 🌟 SURIYAN — ศาสตร์แห่งดวงอาทิตย์ สุริยยาตร์

> เว็บไซต์ดูดวงโหราศาสตร์ไทยโบราณ ที่ผสมผสานระหว่างภูมิปัญญาดั้งเดิมกับเทคโนโลยีสมัยใหม่

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![NextAuth](https://img.shields.io/badge/NextAuth-4-purple?style=flat-square)

---

## 📖 เกี่ยวกับโปรเจกต์

SURIYAN เป็นแพลตฟอร์มดูดวงโหราศาสตร์ไทยโบราณออนไลน์ อ้างอิงจากหลักวิชา **สุริยยาตร์** (Suriyayat) ซึ่งเป็นศาสตร์การคำนวณตำแหน่งดาวพระเคราะห์ตามแบบฉบับไทยโบราณ เป้าหมายคือการนำภูมิปัญญาที่สืบทอดมากว่า 700 ปี มาเผยแพร่ในรูปแบบดิจิทัลที่เข้าถึงได้ง่ายและแม่นยำ

### ✨ ฟีเจอร์ที่มีแล้ว (Frontend)

- **หน้าหลัก** — Hero section, บริการของเรา, ดวงวันนี้, บทความแนะนำ
- **ดูดวงส่วนตัว** — ฟอร์มกรอกข้อมูลวันเดือนปีเกิด / เวลาเกิด / สถานที่เกิด
- **ดูดวงรายวัน** — เลือกราศี 12 ราศี ดูคำทำนายประจำวัน
- **บทความโหราศาสตร์** — ค้นหา กรองหมวดหมู่ อ่านบทความเต็ม
- **เกี่ยวกับเรา** — ทีมนักโหราศาสตร์ พันธกิจ ข้อมูลติดต่อ
- **ระบบ Login / Register** — Modal popup พร้อม Google OAuth และ Email/Password
- **Responsive Design** — รองรับทุกขนาดหน้าจอ

### 🚧 ฟีเจอร์ที่กำลังพัฒนา (Backend / Algorithm)

- [ ] **สมการคำนวณตำแหน่งดาวสุริยยาตร์** — หัวใจหลักของระบบ *(ดูรายละเอียดด้านล่าง)*
- [ ] ระบบฐานข้อมูลผู้ใช้ (PostgreSQL / MongoDB)
- [ ] API คำนวณดวงชะตาแบบ Real-time
- [ ] ระบบบันทึกดวงชะตาส่วนตัว
- [ ] ระบบ Subscription / Payment
- [ ] Admin Dashboard สำหรับนักโหราศาสตร์

---

## 🏗️ โครงสร้างโปรเจกต์

```
suriyan/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # หน้าหลัก
│   ├── layout.tsx                # Root layout + Providers
│   ├── globals.css               # Global styles + CSS variables
│   ├── about-us/                 # หน้าเกี่ยวกับเรา
│   ├── personal-horoscope/       # หน้าดูดวงส่วนตัว
│   ├── daily-horoscope/          # หน้าดูดวงรายวัน
│   ├── astrology-articles/       # หน้าบทความ
│   │   └── [slug]/               # หน้าอ่านบทความ (dynamic route)
│   └── api/
│       └── auth/
│           ├── [...nextauth]/    # NextAuth handler
│           └── register/         # Register API
│
├── components/                   # React Components
│   ├── Navbar.tsx                # Navigation + Auth modal trigger
│   ├── Hero.tsx                  # Hero section
│   ├── Services.tsx              # บริการของเรา
│   ├── DailyFortune.tsx          # ดวงวันนี้
│   ├── BlogSection.tsx           # บทความแนะนำ
│   ├── Footer.tsx                # Footer
│   ├── AuthModal.tsx             # Login/Register popup
│   └── Providers.tsx             # NextAuth SessionProvider
│
├── lib/
│   └── articles.ts               # ข้อมูลบทความ + helper functions
│   └── suriyayat.ts              # 🚧 (TODO) สมการคำนวณดาว
│
├── public/                       # Static assets
│   ├── logo.png                  # โลโก้ SURIYAN
│   ├── hero-scene.png            # ภาพพื้นหลัง Hero
│   ├── stars-bg.png              # ภาพดาว background
│   ├── service-*.png             # ภาพการ์ดบริการ (5 ใบ)
│   ├── a1.png, a2.png            # ภาพการ์ดดวงวันนี้
│   └── 1.png - 4.png             # ภาพบทความ
│
├── .env.local.example            # Template environment variables
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 เริ่มต้นใช้งาน

### ความต้องการของระบบ

- Node.js 18+
- npm หรือ yarn หรือ pnpm

### ติดตั้งและรันโปรเจกต์

```bash
# 1. Clone หรือ unzip โปรเจกต์
cd suriyan

# 2. ติดตั้ง dependencies
npm install

# 3. ตั้งค่า environment variables
cp .env.local.example .env.local
# แล้วแก้ไขค่าใน .env.local

# 4. รัน development server
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

สร้างไฟล์ `.env.local` จาก `.env.local.example`:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here   # สร้างด้วย: openssl rand -base64 32

# Google OAuth
# สร้างได้ที่ https://console.cloud.google.com
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### วิธีตั้งค่า Google OAuth

1. ไปที่ [Google Cloud Console](https://console.cloud.google.com)
2. สร้าง Project ใหม่ หรือเลือก Project ที่มีอยู่
3. ไปที่ **APIs & Services → Credentials**
4. กด **Create Credentials → OAuth 2.0 Client ID**
5. เลือก Application type: **Web application**
6. เพิ่ม Authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   https://yourdomain.com/api/auth/callback/google
   ```
7. Copy **Client ID** และ **Client Secret** ใส่ใน `.env.local`

---

## 🔭 สถานะ Backend: สมการคำนวณดาวสุริยยาตร์

> ⚠️ **นี่คือส่วนที่ยากที่สุดของโปรเจกต์และยังอยู่ระหว่างการวิจัย**

### สุริยยาตร์คืออะไร?

สุริยยาตร์เป็นระบบการคำนวณดาราศาสตร์ของไทยโบราณ ที่ใช้คำนวณตำแหน่งของ **ดาวนพเคราะห์ทั้ง 9** (หรือ 10) ดวง ณ เวลาและสถานที่ที่กำหนด แตกต่างจาก Western Astronomy ตรงที่ใช้ **ระบบสุริยคติแบบอินเดีย (Hindu Solar Calendar)** เป็นฐาน

### สิ่งที่ต้องการสำหรับ Algorithm

```
Input:
  - วันเกิด (ปี พ.ศ. / ค.ศ.)
  - เวลาเกิด (ชั่วโมง:นาที)
  - สถานที่เกิด (ละติจูด, ลองจิจูด)

Output:
  - ตำแหน่งดาวพระเคราะห์ทั้ง 9-10 ดวง (องศา/ราศี)
  - ลัคนา (Ascendant)
  - ราศีเกิด
  - ดาวเจ้าชะตา
```

### แนวทางการวิจัยที่กำลังดำเนินอยู่

| แหล่งข้อมูล | สถานะ | หมายเหตุ |
|---|---|---|
| คัมภีร์สุริยยาตร์โบราณ | 🔍 กำลังศึกษา | ต้องแปลจากอักษรขอม/โบราณ |
| Swiss Ephemeris Library | ✅ พร้อมใช้ | คำนวณตำแหน่งดาวแม่นยำสูง แต่ใช้ระบบตะวันตก |
| Ayanamsa (ค่าปรับ Sidereal) | 🔍 กำลังหา | ต้องหาค่า Ayanamsa แบบไทย |
| NASA JPL Horizons API | ✅ พร้อมใช้ | ข้อมูลดาราศาสตร์แม่นยำ แต่ต้อง convert |
| ตำราโหราศาสตร์ไทยสมัยใหม่ | 🔍 กำลังรวบรวม | |

### ไฟล์ที่เตรียมไว้สำหรับ Algorithm

```typescript
// lib/suriyayat.ts  (TODO)
export interface PlanetPosition {
  planet: string        // ชื่อดาว
  degree: number        // องศา 0-360
  zodiac: string        // ราศีที่อยู่
  zodiacDegree: number  // องศาในราศี
  retrograde: boolean   // ย้อนหลังหรือไม่
}

export interface Horoscope {
  ascendant: PlanetPosition   // ลัคนา
  planets: PlanetPosition[]   // ดาวทั้งหมด
  birthZodiac: string         // ราศีเกิด
  lordOfChart: string         // ดาวเจ้าชะตา
}

export function calculateHoroscope(
  birthDate: Date,
  birthTime: string,
  latitude: number,
  longitude: number
): Horoscope {
  // 🚧 TODO: implement Suriyayat calculation
  throw new Error('Not implemented yet')
}
```

### ถ้าใครมีข้อมูลเกี่ยวกับสมการสุริยยาตร์ ช่วย contribute ได้เลย!

---

## 🎨 Design System

| Token | Value | ใช้สำหรับ |
|---|---|---|
| `--gold-primary` | `#c9a84c` | สีหลัก, border, icon |
| `--gold-light` | `#e8c97a` | highlight, gradient |
| `--gold-glow` | `#f0d080` | text gradient สว่าง |
| `--bg-deep` | `#04040a` | พื้นหลังหลัก |
| `--bg-card` | `#0a0a18` | พื้นหลัง card |
| `--text-primary` | `#f5e6c0` | ข้อความหลัก |

**Fonts:**
- `Cinzel` — หัวข้อภาษาอังกฤษ, โลโก้
- `Sarabun` — ข้อความภาษาไทยทั้งหมด

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Auth | NextAuth.js 4 (Google + Credentials) |
| Fonts | Google Fonts (Cinzel, Sarabun) |
| Deployment | Vercel (recommended) |
| DB (planned) | PostgreSQL + Prisma |
| Astro Engine (planned) | Swiss Ephemeris / NASA JPL |

---

## 🚢 Deploy บน Vercel

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Deploy
vercel

# ตั้งค่า Environment Variables ใน Vercel Dashboard:
# NEXTAUTH_URL, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
```

---

## 🤝 Contributing

ยินดีรับ contribution โดยเฉพาะในส่วน:

1. **สมการคำนวณดาวสุริยยาตร์** — ถ้ามีความรู้ด้านนี้ช่วยได้มาก
2. **เนื้อหาบทความ** — บทความโหราศาสตร์ไทยที่ถูกต้อง
3. **UI/UX** — Design improvements
4. **Bug fixes** — แจ้งปัญหาได้เลย

---

## 📜 License

MIT License — ใช้งานได้อย่างอิสระ

---

## 👨‍💻 ผู้พัฒนา

SURIYAN Project — พัฒนาด้วยความตั้งใจในการสืบสานและเผยแพร่โหราศาสตร์ไทยโบราณ

> *"ดาวฟ้ามิใช่เพียงแสงสว่าง แต่คือกระจกสะท้อนชะตาชีวิต"*
