import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const zodiacSigns = [
  { sign: '♈', name: 'เมษ', date: '21 มี.ค. – 19 เม.ย.' },
  { sign: '♉', name: 'พฤษภ', date: '20 เม.ย. – 20 พ.ค.' },
  { sign: '♊', name: 'เมถุน', date: '21 พ.ค. – 20 มิ.ย.' },
  { sign: '♋', name: 'กรกฎ', date: '21 มิ.ย. – 22 ก.ค.' },
  { sign: '♌', name: 'สิงห์', date: '23 ก.ค. – 22 ส.ค.' },
  { sign: '♍', name: 'กันย์', date: '23 ส.ค. – 22 ก.ย.' },
  { sign: '♎', name: 'ตุลย์', date: '23 ก.ย. – 22 ต.ค.' },
  { sign: '♏', name: 'พิจิก', date: '23 ต.ค. – 21 พ.ย.' },
  { sign: '♐', name: 'ธนู', date: '22 พ.ย. – 21 ธ.ค.' },
  { sign: '♑', name: 'มกร', date: '22 ธ.ค. – 19 ม.ค.' },
  { sign: '♒', name: 'กุมภ์', date: '20 ม.ค. – 18 ก.พ.' },
  { sign: '♓', name: 'มีน', date: '19 ก.พ. – 20 มี.ค.' },
]

export default function DailyHoroscopePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden" style={{ background: '#04040a', minHeight: '40vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.6 }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="SURIYAN" className="w-20 h-20 mx-auto mb-6 object-contain" style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-4 tracking-wider">ดูดวงรายวัน</h1>
          <p className="font-thai text-base mb-2" style={{ color: 'rgba(245,230,192,0.6)' }}>
            เช็กดวงประจำวัน แม่นยำ อัปเดตทุกวัน
          </p>
          <p className="font-thai text-sm" style={{ color: 'rgba(201,168,76,0.7)' }}>
            วันศุกร์ที่ 24 พฤษภาคม 2567
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(transparent, #04040a)' }} />
      </section>

      {/* Zodiac grid */}
      <section className="py-16 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
            <span className="font-thai font-semibold text-lg" style={{ color: '#c9a84c' }}>เลือกราศีของคุณ</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {zodiacSigns.map((z) => (
              <div key={z.name}
                className="fortune-card text-center cursor-pointer group transition-all hover:border-yellow-500"
                style={{ padding: '1.2rem 0.8rem' }}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform" style={{ color: '#c9a84c' }}>{z.sign}</div>
                <div className="font-thai font-bold text-sm mb-1" style={{ color: '#c9a84c' }}>{z.name}</div>
                <div className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)', fontSize: '0.65rem' }}>{z.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample daily reading */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #04040a, #06060e)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="fortune-card">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
              <span className="font-serif text-2xl" style={{ color: '#c9a84c' }}>♌ สิงห์</span>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
            </div>

            {[
              { label: 'ภาพรวม', score: 85, text: 'วันนี้ดวงชะตาส่งเสริมในด้านการงานและการเงิน มีโอกาสได้รับข่าวดีจากคนใกล้ชิด ควรระวังการตัดสินใจที่เร่งรีบ' },
              { label: 'การงาน', score: 90, text: 'งานก้าวหน้า มีผู้ใหญ่ให้การสนับสนุน โครงการที่รอคอยมานานจะเริ่มเห็นผลลัพธ์' },
              { label: 'การเงิน', score: 75, text: 'รายรับมั่นคง แต่ควรระวังรายจ่ายที่ไม่จำเป็น หลีกเลี่ยงการลงทุนเสี่ยงในช่วงนี้' },
              { label: 'ความรัก', score: 80, text: 'ความสัมพันธ์ราบรื่น คู่รักมีความเข้าใจกันดี โสดมีโอกาสพบเจอคนพิเศษในสภาพแวดล้อมการทำงาน' },
            ].map((item) => (
              <div key={item.label} className="mb-6 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-thai font-semibold text-sm" style={{ color: '#c9a84c' }}>{item.label}</span>
                  <span className="font-serif text-sm font-bold" style={{ color: '#f0d080' }}>{item.score}/100</span>
                </div>
                {/* Score bar */}
                <div className="h-1.5 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <div className="h-full rounded-full" style={{ width: `${item.score}%`, background: 'linear-gradient(90deg, #c9a84c, #f0d080)' }} />
                </div>
                <p className="font-thai text-sm leading-relaxed" style={{ color: 'rgba(245,230,192,0.65)' }}>{item.text}</p>
              </div>
            ))}

            {/* Lucky info */}
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>สีมงคล</div>
                  <div className="flex gap-1.5 justify-center">
                    <div className="w-5 h-5 rounded-full" style={{ background: '#8fbc8f' }} />
                    <div className="w-5 h-5 rounded-full" style={{ background: '#4169e1' }} />
                  </div>
                </div>
                <div>
                  <div className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>เลขมงคล</div>
                  <div className="font-serif font-bold" style={{ color: '#f0d080' }}>2, 5, 9</div>
                </div>
                <div>
                  <div className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>ทิศมงคล</div>
                  <div className="font-thai font-bold" style={{ color: '#f0d080' }}>ทิศเหนือ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
