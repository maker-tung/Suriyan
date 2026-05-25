'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type AuspiciousDay = {
  day: number; weekday: string; lunar: string
  type: string[]; color: string; score: number; desc: string; time: string
}

const monthData: Record<string, AuspiciousDay[]> = {
  '2567-06': [
    { day: 1, weekday: 'เสาร์', lunar: 'ขึ้น 10 ค่ำ', type: ['แต่งงาน','หมั้น'], color: '#e91e8c', score: 92, desc: 'ฤกษ์ดีมากสำหรับงานมงคล ดาวศุกร์อยู่ในตำแหน่งดี', time: '09:09 – 11:09 น.' },
    { day: 3, weekday: 'จันทร์', lunar: 'ขึ้น 12 ค่ำ', type: ['เริ่มกิจการ'], color: '#27ae60', score: 85, desc: 'ดีสำหรับการเริ่มต้นธุรกิจใหม่ ดาวพุธส่งเสริม', time: '07:00 – 09:00 น.' },
    { day: 5, weekday: 'พุธ', lunar: 'ขึ้น 14 ค่ำ', type: ['ย้ายบ้าน'], color: '#3498db', score: 88, desc: 'ฤกษ์ดีสำหรับการย้ายเข้าบ้านทิศตะวันออก', time: '08:00 – 10:00 น.' },
    { day: 8, weekday: 'เสาร์', lunar: 'แรม 2 ค่ำ', type: ['แต่งงาน','จดทะเบียน'], color: '#e91e8c', score: 95, desc: 'ฤกษ์ดีที่สุดของเดือน ดาวศุกร์และดาวพฤหัสส่งเสริม', time: '10:00 – 12:00 น.' },
    { day: 10, weekday: 'จันทร์', lunar: 'แรม 4 ค่ำ', type: ['เซ็นสัญญา','เริ่มกิจการ'], color: '#27ae60', score: 82, desc: 'เหมาะกับการเซ็นสัญญาธุรกิจและข้อตกลงสำคัญ', time: '09:00 – 11:00 น.' },
    { day: 12, weekday: 'พุธ', lunar: 'แรม 6 ค่ำ', type: ['ย้ายบ้าน','ย้ายสำนักงาน'], color: '#3498db', score: 84, desc: 'ดีสำหรับการย้ายสถานที่ทุกทิศทาง', time: '07:30 – 09:30 น.' },
    { day: 15, weekday: 'เสาร์', lunar: 'แรม 9 ค่ำ', type: ['หมั้น'], color: '#9b59b6', score: 79, desc: 'เหมาะกับพิธีหมั้นและการประกาศความสัมพันธ์', time: '09:19 – 11:19 น.' },
    { day: 17, weekday: 'จันทร์', lunar: 'แรม 11 ค่ำ', type: ['เปิดร้าน','เริ่มกิจการ'], color: '#27ae60', score: 87, desc: 'ฤกษ์ดีสำหรับการเปิดร้านหรือสถานที่ทำการ', time: '08:09 – 10:09 น.' },
    { day: 19, weekday: 'พุธ', lunar: 'แรม 13 ค่ำ', type: ['ย้ายบ้าน'], color: '#3498db', score: 80, desc: 'เหมาะกับการย้ายสำนักงานหรือที่อยู่อาศัย', time: '07:00 – 09:00 น.' },
    { day: 22, weekday: 'เสาร์', lunar: 'ขึ้น 2 ค่ำ', type: ['แต่งงาน','จดทะเบียน'], color: '#e91e8c', score: 90, desc: 'ฤกษ์ดีสำหรับงานแต่งงานและการจดทะเบียน', time: '10:09 – 12:09 น.' },
    { day: 24, weekday: 'จันทร์', lunar: 'ขึ้น 4 ค่ำ', type: ['ลงทุน','เริ่มกิจการ'], color: '#f39c12', score: 83, desc: 'เหมาะกับการลงทุนระยะยาวและการวางแผนธุรกิจ', time: '08:00 – 10:00 น.' },
    { day: 26, weekday: 'พุธ', lunar: 'ขึ้น 6 ค่ำ', type: ['ขึ้นบ้านใหม่'], color: '#1abc9c', score: 86, desc: 'ฤกษ์ดีสำหรับพิธีขึ้นบ้านใหม่ทุกทิศ', time: '09:09 – 11:09 น.' },
  ],
}

const typeColors: Record<string, string> = {
  'แต่งงาน': '#e91e8c', 'หมั้น': '#c0392b', 'จดทะเบียน': '#e91e8c',
  'เริ่มกิจการ': '#27ae60', 'เปิดร้าน': '#27ae60', 'เซ็นสัญญา': '#27ae60',
  'ย้ายบ้าน': '#3498db', 'ย้ายสำนักงาน': '#3498db', 'ขึ้นบ้านใหม่': '#1abc9c',
  'ลงทุน': '#f39c12',
}

const filterTypes = ['ทั้งหมด', 'แต่งงาน', 'เริ่มกิจการ', 'ย้ายบ้าน', 'ลงทุน']

export default function AuspiciousDaysPage() {
  const [filter, setFilter] = useState('ทั้งหมด')
  const [selectedDay, setSelectedDay] = useState<AuspiciousDay | null>(null)

  const days = monthData['2567-06'] || []
  const filtered = filter === 'ทั้งหมด' ? days : days.filter(d => d.type.some(t => t.includes(filter) || filter.includes(t)))

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 px-4 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.65 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(4,4,10,0.5)0%,rgba(4,4,10,0.97)100%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="" className="w-16 h-16 mx-auto mb-5 object-contain" style={{ filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.5))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3 tracking-wider">ฤกษ์มงคล</h1>
          <p className="font-thai text-base mb-2" style={{ color: 'rgba(245,230,192,0.55)' }}>เลือกฤกษ์ที่ดีที่สุดสำหรับวันสำคัญของคุณ</p>
          <p className="font-thai text-sm" style={{ color: 'rgba(201,168,76,0.65)' }}>ประจำเดือน มิถุนายน 2567</p>
        </div>
      </section>

      {/* Legend */}
      <section className="px-4 pb-6" style={{ background: '#04040a' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {Object.entries(typeColors).slice(0,5).map(([type, color]) => (
              <div key={type} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                <span className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.55)' }}>{type}</span>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {filterTypes.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className="font-thai text-sm px-4 py-1.5 rounded-full transition-all"
                style={{
                  background: filter === f ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'transparent',
                  color: filter === f ? '#1a0e00' : 'rgba(201,168,76,0.65)',
                  border: filter === f ? 'none' : '1px solid rgba(201,168,76,0.2)',
                  fontWeight: filter === f ? 700 : 400,
                }}>{f}</button>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((d) => (
              <div key={d.day} onClick={() => setSelectedDay(selectedDay?.day === d.day ? null : d)}
                className="fortune-card cursor-pointer transition-all duration-300 hover:border-yellow-600/50"
                style={{ padding: '1.25rem', borderColor: selectedDay?.day === d.day ? '#c9a84c' : undefined, boxShadow: selectedDay?.day === d.day ? '0 0 30px rgba(201,168,76,0.2)' : undefined }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-serif text-4xl font-black" style={{ color: d.color, lineHeight: 1 }}>{d.day}</div>
                    <div className="font-thai text-xs mt-0.5" style={{ color: 'rgba(245,230,192,0.45)' }}>{d.weekday} · {d.lunar}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-xl font-bold" style={{ color: d.color }}>{d.score}</div>
                    <div className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.35)' }}>คะแนน</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {d.type.map((t) => (
                    <span key={t} className="font-thai text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${typeColors[t] || '#c9a84c'}22`, border: `1px solid ${typeColors[t] || '#c9a84c'}44`, color: typeColors[t] || '#c9a84c' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {selectedDay?.day === d.day && (
                  <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                    <p className="font-thai text-xs leading-relaxed mb-2" style={{ color: 'rgba(245,230,192,0.65)' }}>{d.desc}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">⏰</span>
                      <span className="font-thai text-xs font-semibold" style={{ color: '#c9a84c' }}>ช่วงเวลาดี: {d.time}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-thai text-base" style={{ color: 'rgba(245,230,192,0.35)' }}>ไม่มีฤกษ์ในหมวดที่เลือก</p>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-8 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="px-5 py-4 rounded-xl" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-thai text-xs leading-loose" style={{ color: 'rgba(245,230,192,0.5)' }}>
              <span className="font-bold" style={{ color: '#c9a84c' }}>หมายเหตุ: </span>
              ฤกษ์มงคลที่แสดงเป็นการคำนวณเบื้องต้นตามหลักสุริยยาตร์ สำหรับงานสำคัญควรปรึกษานักโหราศาสตร์ผู้เชี่ยวชาญเพื่อการกำหนดฤกษ์ที่แม่นยำยิ่งขึ้น
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
