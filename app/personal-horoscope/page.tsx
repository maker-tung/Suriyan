'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PersonalHoroscopePage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', birth: '', time: '', place: '', gender: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.birth) return
    setLoading(true)
    setTimeout(() => {
      router.push(`/horoscope-result?name=${encodeURIComponent(form.name)}&birth=${encodeURIComponent(form.birth)}&time=${encodeURIComponent(form.time)}&place=${encodeURIComponent(form.place)}`)
    }, 1800)
  }

  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', color: '#f5e6c0', outline: 'none', colorScheme: 'dark' as const }
  const labelStyle = { color: 'rgba(201,168,76,0.8)' }

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      <section className="relative pt-28 pb-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.6 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(4,4,10,0.5)0%,rgba(4,4,10,0.97)100%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="" className="w-16 h-16 mx-auto mb-5 object-contain animate-float" style={{ filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.5))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3 tracking-wider">ดูดวงส่วนตัว</h1>
          <p className="font-thai text-base" style={{ color: 'rgba(245,230,192,0.55)' }}>วิเคราะห์ดวงชะตา เจาะลึกชีวิต การงาน การเงิน ความรัก</p>
        </div>
      </section>

      <section className="py-10 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="fortune-card" style={{ padding: '2.5rem' }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
                <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>กรอกข้อมูลเกิด</span>
                <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
              </div>

              <div className="space-y-5">
                <div>
                  <label className="font-thai text-sm mb-1.5 block" style={labelStyle}>ชื่อ-นามสกุล <span style={{ color: '#e74c3c' }}>*</span></label>
                  <input type="text" required placeholder="กรอกชื่อ-นามสกุล" value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg font-thai text-sm transition-all"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.55)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-thai text-sm mb-1.5 block" style={labelStyle}>วันเกิด <span style={{ color: '#e74c3c' }}>*</span></label>
                    <input type="date" required value={form.birth}
                      onChange={e => setForm({...form, birth: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg font-thai text-sm transition-all"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.55)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                  </div>
                  <div>
                    <label className="font-thai text-sm mb-1.5 block" style={labelStyle}>เวลาเกิด</label>
                    <input type="time" value={form.time}
                      onChange={e => setForm({...form, time: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg font-thai text-sm transition-all"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.55)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                  </div>
                </div>

                <div>
                  <label className="font-thai text-sm mb-1.5 block" style={labelStyle}>สถานที่เกิด</label>
                  <input type="text" placeholder="จังหวัด / ประเทศ" value={form.place}
                    onChange={e => setForm({...form, place: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg font-thai text-sm transition-all"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.55)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'} />
                </div>

                <div>
                  <label className="font-thai text-sm mb-2 block" style={labelStyle}>เพศ</label>
                  <div className="flex gap-4">
                    {['ชาย', 'หญิง', 'ไม่ระบุ'].map((g) => (
                      <label key={g} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" value={g} onChange={e => setForm({...form, gender: e.target.value})} className="accent-yellow-600" />
                        <span className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.65)' }}>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" disabled={loading || !form.name || !form.birth}
                  className="btn-gold w-full py-3.5 text-base flex items-center justify-center gap-3 mt-2"
                  style={{ opacity: (!form.name || !form.birth) ? 0.5 : 1, cursor: (!form.name || !form.birth) ? 'not-allowed' : 'pointer' }}>
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      กำลังวิเคราะห์ดวงชะตา...
                    </>
                  ) : '✦ วิเคราะห์ดวงชะตา'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>หมวดหมู่ดวงชะตา</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💼', label: 'การงาน', desc: 'ความก้าวหน้า, ความสำเร็จ' },
              { icon: '💰', label: 'การเงิน', desc: 'โชคลาภ, การลงทุน' },
              { icon: '❤️', label: 'ความรัก', desc: 'ความสัมพันธ์, คู่ครอง' },
              { icon: '🌿', label: 'สุขภาพ', desc: 'ร่างกาย, จิตใจ' },
              { icon: '👨‍👩‍👧', label: 'ครอบครัว', desc: 'ความสัมพันธ์, บ้าน' },
              { icon: '✈️', label: 'การเดินทาง', desc: 'โอกาส, ต่างถิ่น' },
              { icon: '📚', label: 'การศึกษา', desc: 'ปัญญา, การเรียนรู้' },
              { icon: '🌟', label: 'โชคชะตา', desc: 'ช่วงเวลาทอง, โอกาส' },
            ].map((cat) => (
              <div key={cat.label} className="fortune-card text-center cursor-pointer group transition-all hover:border-yellow-600/50 hover:-translate-y-1" style={{ padding: '1.2rem' }}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div className="font-thai font-bold text-sm mb-0.5" style={{ color: '#c9a84c' }}>{cat.label}</div>
                <div className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>{cat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
