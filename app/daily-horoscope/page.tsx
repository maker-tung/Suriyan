'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const zodiacSigns = [
  { sign: '♈', name: 'เมษ', slug: 'aries', date: '21 มี.ค. – 19 เม.ย.', color: '#e74c3c', score: 82 },
  { sign: '♉', name: 'พฤษภ', slug: 'taurus', date: '20 เม.ย. – 20 พ.ค.', color: '#27ae60', score: 78 },
  { sign: '♊', name: 'เมถุน', slug: 'gemini', date: '21 พ.ค. – 20 มิ.ย.', color: '#f1c40f', score: 85 },
  { sign: '♋', name: 'กรกฎ', slug: 'cancer', date: '21 มิ.ย. – 22 ก.ค.', color: '#95a5a6', score: 74 },
  { sign: '♌', name: 'สิงห์', slug: 'leo', date: '23 ก.ค. – 22 ส.ค.', color: '#f39c12', score: 88 },
  { sign: '♍', name: 'กันย์', slug: 'virgo', date: '23 ส.ค. – 22 ก.ย.', color: '#8e44ad', score: 79 },
  { sign: '♎', name: 'ตุลย์', slug: 'libra', date: '23 ก.ย. – 22 ต.ค.', color: '#3498db', score: 81 },
  { sign: '♏', name: 'พิจิก', slug: 'scorpio', date: '23 ต.ค. – 21 พ.ย.', color: '#c0392b', score: 83 },
  { sign: '♐', name: 'ธนู', slug: 'sagittarius', date: '22 พ.ย. – 21 ธ.ค.', color: '#9b59b6', score: 87 },
  { sign: '♑', name: 'มกร', slug: 'capricorn', date: '22 ธ.ค. – 19 ม.ค.', color: '#7f8c8d', score: 76 },
  { sign: '♒', name: 'กุมภ์', slug: 'aquarius', date: '20 ม.ค. – 18 ก.พ.', color: '#2980b9', score: 80 },
  { sign: '♓', name: 'มีน', slug: 'pisces', date: '19 ก.พ. – 20 มี.ค.', color: '#1abc9c', score: 77 },
]

export default function DailyHoroscopePage() {
  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      <section className="relative pt-28 pb-14 px-4 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.65 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(4,4,10,0.5)0%,rgba(4,4,10,0.97)100%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="" className="w-16 h-16 mx-auto mb-5 object-contain" style={{ filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.5))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3 tracking-wider">ดูดวงรายวัน</h1>
          <p className="font-thai text-base mb-1" style={{ color: 'rgba(245,230,192,0.55)' }}>เช็กดวงประจำวัน แม่นยำ อัปเดตทุกวัน</p>
          <p className="font-thai text-sm" style={{ color: 'rgba(201,168,76,0.65)' }}>วันศุกร์ที่ 24 พฤษภาคม 2567 · ขึ้น 9 ค่ำ เดือน 6</p>
        </div>
      </section>

      <section className="py-12 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>เลือกราศีของคุณ</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {zodiacSigns.map((z) => (
              <Link key={z.slug} href={`/daily-horoscope/${z.slug}`}>
                <div className="fortune-card text-center cursor-pointer group transition-all duration-300 hover:-translate-y-2"
                  style={{ padding: '1.2rem 0.8rem', '--hover-border': z.color } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${z.color}66`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)')}>
                  <div className="text-3xl mb-2 transition-transform group-hover:scale-110" style={{ color: z.color }}>{z.sign}</div>
                  <div className="font-thai font-bold text-sm mb-1" style={{ color: '#c9a84c' }}>ราศี{z.name}</div>
                  <div className="font-thai text-xs mb-2" style={{ color: 'rgba(245,230,192,0.35)', fontSize: '0.62rem' }}>{z.date}</div>
                  {/* Score bar mini */}
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div className="h-full rounded-full" style={{ width: `${z.score}%`, background: z.color }} />
                  </div>
                  <div className="font-serif text-xs font-bold mt-1" style={{ color: z.color }}>{z.score}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today overview */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="fortune-card" style={{ padding: '2rem' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
              <span className="font-thai font-semibold text-sm" style={{ color: '#c9a84c' }}>ภาพรวมดาวพระเคราะห์วันนี้</span>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            </div>
            <p className="font-thai text-sm leading-loose text-center" style={{ color: 'rgba(245,230,192,0.65)' }}>
              วันนี้ดาวศุกร์โคจรอยู่ในราศีสิงห์ส่งเสริมด้านความรักและความสัมพันธ์ ดาวพุธในราศีเมถุนเพิ่มความคล่องตัวในการสื่อสาร
              ดาวพระอาทิตย์ส่งแสงแห่งความมั่นใจให้กับราศีที่อยู่ในทิศมิตร ราศีที่ควรระวังวันนี้คือราศีที่มีดาวเสาร์กำลังโคจรผ่าน
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6 pt-5" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
              {[{ label: 'ราศีดีที่สุด', value: 'สิงห์ ♌ 88' }, { label: 'ดาวเด่นวันนี้', value: 'ดาวศุกร์ ♀' }, { label: 'ทิศมงคล', value: 'ทิศตะวันออก' }].map(item => (
                <div key={item.label} className="text-center">
                  <p className="font-thai text-xs mb-1" style={{ color: 'rgba(201,168,76,0.55)' }}>{item.label}</p>
                  <p className="font-thai font-bold text-sm" style={{ color: '#f0d080' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
