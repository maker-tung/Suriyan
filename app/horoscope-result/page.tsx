'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const planets = [
  { name: 'อาทิตย์', symbol: '☀', degree: 42, zodiac: 'เมถุน', color: '#f39c12', meaning: 'ตัวตน, ความมั่นใจ, ความเป็นผู้นำ', strong: true },
  { name: 'จันทร์', symbol: '☽', degree: 156, zodiac: 'กันย์', color: '#bdc3c7', meaning: 'จิตใจ, อารมณ์, ครอบครัว', strong: false },
  { name: 'อังคาร', symbol: '♂', degree: 234, zodiac: 'ธนู', color: '#e74c3c', meaning: 'พลังงาน, ความกล้าหาญ, ความมุ่งมั่น', strong: true },
  { name: 'พุธ', symbol: '☿', degree: 58, zodiac: 'เมถุน', color: '#2ecc71', meaning: 'ปัญญา, การสื่อสาร, การค้า', strong: true },
  { name: 'พฤหัส', symbol: '♃', degree: 298, zodiac: 'มกร', color: '#9b59b6', meaning: 'โชคลาภ, ปัญญา, การขยาย', strong: false },
  { name: 'ศุกร์', symbol: '♀', degree: 112, zodiac: 'สิงห์', color: '#e91e8c', meaning: 'ความรัก, ความงาม, ศิลปะ', strong: true },
  { name: 'เสาร์', symbol: '♄', degree: 189, zodiac: 'ตุลย์', color: '#7f8c8d', meaning: 'วินัย, ความรับผิดชอบ, เวลา', strong: false },
  { name: 'ราหู', symbol: '☊', degree: 324, zodiac: 'กุมภ์', color: '#8e44ad', meaning: 'ความปรารถนา, กรรม, การเปลี่ยนแปลง', strong: false },
  { name: 'เกตุ', symbol: '☋', degree: 144, zodiac: 'สิงห์', color: '#d35400', meaning: 'การปลดปล่อย, จิตวิญญาณ, อดีตชาติ', strong: false },
]

const aspects = [
  { label: 'การงาน', score: 85, desc: 'ดาวอาทิตย์และดาวพุธอยู่ในราศีเดียวกันส่งเสริมความคิดสร้างสรรค์และทักษะการสื่อสาร มีโอกาสก้าวหน้าและได้รับการยอมรับ', color: '#f39c12' },
  { label: 'การเงิน', score: 72, desc: 'ดาวพฤหัสในราศีมกรทำให้ต้องทำงานหนักกว่าปกติเพื่อความมั่งคั่ง แต่ผลลัพธ์ระยะยาวจะมั่นคง', color: '#2ecc71' },
  { label: 'ความรัก', score: 78, desc: 'ดาวศุกร์ในราศีสิงห์ทำให้เต็มไปด้วยเสน่ห์และความโรแมนติก ความสัมพันธ์สดใสและมีชีวิตชีวา', color: '#e91e8c' },
  { label: 'สุขภาพ', score: 80, desc: 'ดาวอังคารในราศีธนูให้พลังงานสูง แต่ควรระวังการบาดเจ็บจากความรีบเร่งหรือกีฬาที่เสี่ยง', color: '#e74c3c' },
  { label: 'ครอบครัว', score: 68, desc: 'ดาวจันทร์ในราศีกันย์ทำให้อ่อนไหวต่อบรรยากาศในครอบครัว ควรใส่ใจการสื่อสารมากขึ้น', color: '#3498db' },
  { label: 'โชคลาภ', score: 61, desc: 'ช่วงนี้ไม่ใช่จังหวะทองสำหรับโชคลาภ แต่เหมาะกับการสะสมและวางรากฐาน', color: '#9b59b6' },
]

function ResultContent() {
  const params = useSearchParams()
  const name = params.get('name') || 'ผู้ใช้'
  const birth = params.get('birth') || '1 มกราคม 2530'
  const time = params.get('time') || '08:00'
  const place = params.get('place') || 'กรุงเทพมหานคร'

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.6 }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%), linear-gradient(180deg,rgba(4,4,10,0.5)0%,rgba(4,4,10,0.98)100%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <img src="/logo.png" alt="SURIYAN" className="w-16 h-16 mx-auto mb-4 object-contain animate-float"
            style={{ filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.5))' }} />
          <h1 className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2 tracking-wider">ดวงชะตาของ {name}</h1>
          <div className="flex items-center justify-center gap-3 font-thai text-xs flex-wrap" style={{ color: 'rgba(245,230,192,0.45)' }}>
            <span>📅 {birth}</span><span>|</span>
            <span>🕐 {time} น.</span><span>|</span>
            <span>📍 {place}</span>
          </div>
        </div>
      </section>

      {/* Zodiac wheel + planet positions */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Wheel visual */}
            <div className="flex flex-col items-center">
              <div className="relative w-72 h-72">
                <svg viewBox="0 0 300 300" className="w-full h-full animate-rotate-slow">
                  {/* Outer ring */}
                  <circle cx="150" cy="150" r="145" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
                  <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" strokeDasharray="4 3"/>
                  {/* 12 segments */}
                  {Array.from({length:12}).map((_,i)=>{
                    const angle = (i*30-90)*Math.PI/180
                    return <line key={i} x1={150+120*Math.cos(angle)} y1={150+120*Math.sin(angle)} x2={150+145*Math.cos(angle)} y2={150+145*Math.sin(angle)} stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
                  })}
                  {/* Zodiac symbols */}
                  {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map((s,i)=>{
                    const angle = (i*30-75)*Math.PI/180
                    return <text key={i} x={150+132*Math.cos(angle)} y={150+132*Math.sin(angle)} textAnchor="middle" dominantBaseline="central" fill="#c9a84c" fontSize="11" opacity="0.7">{s}</text>
                  })}
                  {/* Inner rings */}
                  <circle cx="150" cy="150" r="95" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1"/>
                  <circle cx="150" cy="150" r="65" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5"/>
                  {/* Planet dots */}
                  {planets.slice(0,7).map((p)=>{
                    const angle = (p.degree-90)*Math.PI/180
                    const r = 80
                    return (
                      <g key={p.name}>
                        <circle cx={150+r*Math.cos(angle)} cy={150+r*Math.sin(angle)} r="5" fill={p.color} opacity="0.85"/>
                        <text x={150+(r+14)*Math.cos(angle)} y={150+(r+14)*Math.sin(angle)} textAnchor="middle" dominantBaseline="central" fill={p.color} fontSize="8" opacity="0.7">{p.symbol}</text>
                      </g>
                    )
                  })}
                  {/* Center */}
                  <circle cx="150" cy="150" r="38" fill="url(#resultSunGrad)"/>
                  <text x="150" y="147" textAnchor="middle" fill="#1a0e00" fontSize="10" fontFamily="serif" fontWeight="bold">ลัคนา</text>
                  <text x="150" y="158" textAnchor="middle" fill="#1a0e00" fontSize="11" fontFamily="serif" fontWeight="bold">เมถุน</text>
                  <defs>
                    <radialGradient id="resultSunGrad" cx="45%" cy="38%" r="56%">
                      <stop offset="0%" stopColor="#f5d878"/>
                      <stop offset="100%" stopColor="#8a5010"/>
                    </radialGradient>
                  </defs>
                </svg>
                <div className="text-center mt-3">
                  <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>แผนภูมิดวงชะตา</p>
                </div>
              </div>

              {/* Key info */}
              <div className="mt-6 w-full space-y-2">
                {[
                  { label: 'ราศีเกิด', value: 'เมถุน ♊', sub: 'ดวงอาทิตย์ที่ 42°' },
                  { label: 'ลัคนา', value: 'เมถุน', sub: 'ขอบฟ้าตะวันออก' },
                  { label: 'ดาวเจ้าชะตา', value: 'ดาวพุธ ☿', sub: 'แข็งแกร่งในราศีเมถุน' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-4 py-2.5 rounded-lg"
                    style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                    <span className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.5)' }}>{item.label}</span>
                    <div className="text-right">
                      <span className="font-thai text-sm font-bold" style={{ color: '#c9a84c' }}>{item.value}</span>
                      <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.35)' }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Planet table */}
            <div>
              <p className="font-thai text-sm font-semibold mb-4" style={{ color: '#c9a84c' }}>ตำแหน่งดาวพระเคราะห์</p>
              <div className="space-y-2">
                {planets.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:border-yellow-700/40"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '1.3rem', color: p.color, width: '1.8rem', textAlign: 'center' }}>{p.symbol}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-thai text-sm font-medium" style={{ color: 'rgba(245,230,192,0.85)' }}>ดาว{p.name}</span>
                        {p.strong && <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c' }}>แข็งแกร่ง</span>}
                      </div>
                      <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>{p.meaning}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-thai text-xs font-semibold" style={{ color: p.color }}>ราศี{p.zodiac}</p>
                      <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.35)' }}>{p.degree}°</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aspect scores */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>การวิเคราะห์ดวงชะตาเชิงลึก</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aspects.map((a) => (
              <div key={a.label} className="fortune-card" style={{ padding: '1.5rem' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-thai font-bold text-sm" style={{ color: a.color }}>{a.label}</span>
                  <span className="font-serif text-xl font-black" style={{ color: a.color }}>{a.score}</span>
                </div>
                <div className="h-1.5 rounded-full mb-3 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: `${a.score}%`, background: `linear-gradient(90deg, ${a.color}99, ${a.color})` }} />
                </div>
                <p className="font-thai text-xs leading-relaxed" style={{ color: 'rgba(245,230,192,0.6)' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary prophecy */}
      <section className="py-12 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-3xl mx-auto">
          <div className="fortune-card" style={{ padding: '2.5rem' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
              <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>คำทำนายชีวิต</span>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            </div>
            <div className="space-y-5">
              {[
                { period: 'ช่วงอายุ 25–35 ปี', text: 'ช่วงนี้เป็นช่วงสร้างรากฐาน ดาวพุธที่แข็งแกร่งช่วยเสริมทักษะการสื่อสารและธุรกิจ การศึกษาและการพัฒนาตนเองจะเปิดประตูสู่โอกาสใหม่ๆ' },
                { period: 'ช่วงอายุ 35–45 ปี', text: 'ช่วงรุ่งเรืองของชีวิต ดาวอังคารที่แข็งแกร่งให้พลังและความกล้าในการก้าวข้ามอุปสรรค การลงทุนในช่วงนี้มีโอกาสให้ผลตอบแทนสูง' },
                { period: 'ช่วงอายุ 45 ปีขึ้นไป', text: 'ช่วงเก็บเกี่ยวผลแห่งความพยายาม ความมั่นคงและความสงบจะตามมา สุขภาพควรให้ความสำคัญมากขึ้นในช่วงนี้' },
              ].map((item) => (
                <div key={item.period} className="pl-4" style={{ borderLeft: '2px solid rgba(201,168,76,0.3)' }}>
                  <p className="font-thai text-xs font-bold mb-1" style={{ color: '#c9a84c' }}>{item.period}</p>
                  <p className="font-thai text-sm leading-relaxed" style={{ color: 'rgba(245,230,192,0.65)' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4" style={{ background: 'linear-gradient(180deg,#06060e,#04040a)' }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="font-thai text-sm mb-6" style={{ color: 'rgba(245,230,192,0.45)' }}>
            ผลการวิเคราะห์นี้เป็นข้อมูลเบื้องต้น สำหรับการพยากรณ์เชิงลึกแนะนำให้ปรึกษานักโหราศาสตร์
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/personal-horoscope">
              <button className="btn-outline px-6 py-2.5 font-thai text-sm">ดูดวงใหม่</button>
            </Link>
            <Link href="/astrology-articles">
              <button className="btn-gold px-6 py-2.5 font-thai text-sm">อ่านบทความเพิ่มเติม</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function HoroscopeResultPage() {
  return (
    <Suspense fallback={<div style={{color:'white',padding:'2rem',textAlign:'center'}}>กำลังโหลด...</div>}>
      <ResultContent />
    </Suspense>
  )
}
