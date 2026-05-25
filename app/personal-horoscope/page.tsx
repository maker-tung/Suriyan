import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PersonalHoroscopePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden" style={{ background: '#04040a', minHeight: '40vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.6 }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="SURIYAN" className="w-20 h-20 mx-auto mb-6 object-contain" style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-4 tracking-wider">ดูดวงส่วนตัว</h1>
          <p className="font-thai text-base" style={{ color: 'rgba(245,230,192,0.6)' }}>
            วิเคราะห์ดวงชะตา เจาะลึกชีวิต การงาน การเงิน ความรัก
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(transparent, #04040a)' }} />
      </section>

      {/* Birth info form */}
      <section className="py-16 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-xl mx-auto">
          <div className="fortune-card">
            <div className="divider-line mb-8">
              <div className="flex items-center gap-3 justify-center">
                <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.25)' }} />
                <span className="font-thai font-semibold text-lg" style={{ color: '#c9a84c' }}>กรอกข้อมูลเกิด</span>
                <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.25)' }} />
              </div>
            </div>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="font-thai text-sm mb-1 block" style={{ color: 'rgba(201,168,76,0.8)' }}>ชื่อ-นามสกุล</label>
                <input type="text" placeholder="กรอกชื่อ-นามสกุล"
                  className="w-full px-4 py-3 rounded font-thai text-sm"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.25)', color: '#f5e6c0', outline: 'none' }} />
              </div>

              {/* Birth date */}
              <div>
                <label className="font-thai text-sm mb-1 block" style={{ color: 'rgba(201,168,76,0.8)' }}>วันเกิด</label>
                <input type="date"
                  className="w-full px-4 py-3 rounded font-thai text-sm"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.25)', color: '#f5e6c0', outline: 'none', colorScheme: 'dark' }} />
              </div>

              {/* Birth time */}
              <div>
                <label className="font-thai text-sm mb-1 block" style={{ color: 'rgba(201,168,76,0.8)' }}>เวลาเกิด</label>
                <input type="time"
                  className="w-full px-4 py-3 rounded font-thai text-sm"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.25)', color: '#f5e6c0', outline: 'none', colorScheme: 'dark' }} />
              </div>

              {/* Birth place */}
              <div>
                <label className="font-thai text-sm mb-1 block" style={{ color: 'rgba(201,168,76,0.8)' }}>สถานที่เกิด</label>
                <input type="text" placeholder="จังหวัด / ประเทศ"
                  className="w-full px-4 py-3 rounded font-thai text-sm"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.25)', color: '#f5e6c0', outline: 'none' }} />
              </div>

              {/* Gender */}
              <div>
                <label className="font-thai text-sm mb-2 block" style={{ color: 'rgba(201,168,76,0.8)' }}>เพศ</label>
                <div className="flex gap-4">
                  {['ชาย', 'หญิง', 'ไม่ระบุ'].map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" className="accent-yellow-600" />
                      <span className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.7)' }}>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="btn-gold w-full py-3 text-base mt-2">วิเคราะห์ดวงชะตา</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #04040a, #06060e)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
            <span className="font-thai font-semibold text-lg" style={{ color: '#c9a84c' }}>หมวดหมู่ดวงชะตา</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💼', label: 'การงาน' },
              { icon: '💰', label: 'การเงิน' },
              { icon: '❤️', label: 'ความรัก' },
              { icon: '🏥', label: 'สุขภาพ' },
              { icon: '👨‍👩‍👧', label: 'ครอบครัว' },
              { icon: '✈️', label: 'การเดินทาง' },
              { icon: '📚', label: 'การศึกษา' },
              { icon: '🌟', label: 'โชคลาภ' },
            ].map((cat) => (
              <div key={cat.label} className="fortune-card text-center cursor-pointer hover:border-yellow-500 transition-all"
                style={{ padding: '1.2rem' }}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-thai text-sm font-medium" style={{ color: '#c9a84c' }}>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
