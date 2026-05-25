'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const savedReadings = [
  { id: 1, name: 'ดวงของตัวเอง', birth: '15 มิถุนายน 2533', time: '14:30', place: 'กรุงเทพมหานคร', zodiac: 'เมถุน ♊', date: '20 พ.ค. 2567', scores: { work:85, money:72, love:78, health:80 } },
  { id: 2, name: 'ดวงของแม่', birth: '3 มีนาคม 2505', time: '08:00', place: 'เชียงใหม่', zodiac: 'มีน ♓', date: '18 พ.ค. 2567', scores: { work:70, money:75, love:82, health:68 } },
  { id: 3, name: 'ดวงประจำเดือน', birth: '15 มิถุนายน 2533', time: '14:30', place: 'กรุงเทพมหานคร', zodiac: 'เมถุน ♊', date: '1 พ.ค. 2567', scores: { work:79, money:65, love:83, health:77 } },
]

export default function MyHoroscopePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  if (status === 'loading') return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#04040a' }}>
      <p className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.45)' }}>กำลังโหลด...</p>
    </div>
  )
  if (!session) return null

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(4,4,10,0.6)0%,rgba(4,4,10,0.98)100%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <img src="/logo.png" alt="" className="w-14 h-14 mx-auto mb-4 object-contain" style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }} />
          <h1 className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2 tracking-wider">ดวงของฉัน</h1>
          <p className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.5)' }}>ประวัติการดูดวงและดวงชะตาที่บันทึกไว้</p>
        </div>
      </section>

      <section className="py-8 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-thai text-sm font-semibold" style={{ color: '#c9a84c' }}>ดวงที่บันทึกไว้ ({savedReadings.length})</p>
            <Link href="/personal-horoscope">
              <button className="btn-gold text-xs px-4 py-2">+ ดูดวงใหม่</button>
            </Link>
          </div>

          <div className="space-y-4">
            {savedReadings.map((r) => (
              <div key={r.id} className="fortune-card" style={{ padding: '1.5rem' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-thai font-bold text-base mb-0.5" style={{ color: '#c9a84c' }}>{r.name}</h3>
                    <div className="flex items-center gap-3 font-thai text-xs" style={{ color: 'rgba(245,230,192,0.45)' }}>
                      <span>🎂 {r.birth}</span>
                      <span>📍 {r.place}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-thai text-lg" style={{ color: 'rgba(201,168,76,0.8)' }}>{r.zodiac}</span>
                    <p className="font-thai text-xs mt-0.5" style={{ color: 'rgba(245,230,192,0.35)' }}>บันทึกเมื่อ {r.date}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-4">
                  {Object.entries(r.scores).map(([key, val]) => {
                    const labels: Record<string, string> = { work:'การงาน', money:'การเงิน', love:'ความรัก', health:'สุขภาพ' }
                    return (
                      <div key={key} className="text-center">
                        <div className="font-serif text-xl font-black" style={{ color: val >= 80 ? '#f0d080' : val >= 70 ? '#c9a84c' : 'rgba(201,168,76,0.6)' }}>{val}</div>
                        <div className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>{labels[key]}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex gap-2">
                  <Link href={`/horoscope-result?name=${encodeURIComponent(r.name)}&birth=${encodeURIComponent(r.birth)}&time=${r.time}&place=${encodeURIComponent(r.place)}`} className="flex-1">
                    <button className="btn-outline w-full text-xs py-2 font-thai">ดูผลเต็ม</button>
                  </Link>
                  <button className="px-3 py-2 rounded text-xs font-thai transition-all hover:bg-red-900/20"
                    style={{ border: '1px solid rgba(220,50,50,0.25)', color: 'rgba(255,100,100,0.7)' }}>ลบ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
