import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const team = [
  {
    name: 'อาจารย์สุริยา วิเชียรชัย',
    role: 'นักโหราศาสตร์อาวุโส',
    exp: 'ประสบการณ์กว่า 25 ปี',
    desc: 'ผู้เชี่ยวชาญด้านโหราศาสตร์ไทยและสุริยยาตร์ ศึกษาตำราโหราศาสตร์โบราณกว่า 300 เล่ม',
  },
  {
    name: 'อาจารย์จันทร์เพ็ญ มณีรัตน์',
    role: 'นักพยากรณ์ผู้เชี่ยวชาญ',
    exp: 'ประสบการณ์กว่า 18 ปี',
    desc: 'เชี่ยวชาญด้านการดูดวงรายวัน ฤกษ์มงคล และการเสริมดวงตามหลักโหราศาสตร์ไทย',
  },
  {
    name: 'อาจารย์ดาราวดี ศรีสุวรรณ',
    role: 'ที่ปรึกษาโหราศาสตร์',
    exp: 'ประสบการณ์กว่า 15 ปี',
    desc: 'ผู้เชี่ยวชาญการอ่านดวงด้านความรักและครอบครัว สืบสานตำราโหราศาสตร์จากบรรพบุรุษ',
  },
]

const stats = [
  { num: '10,000+', label: 'ผู้ใช้บริการ' },
  { num: '25+', label: 'ปีประสบการณ์' },
  { num: '98%', label: 'ความพึงพอใจ' },
  { num: '50,000+', label: 'การพยากรณ์' },
]

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden" style={{ background: '#04040a', minHeight: '40vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.6 }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="SURIYAN" className="w-24 h-24 mx-auto mb-6 object-contain" style={{ filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.5))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-4 tracking-wider">เกี่ยวกับเรา</h1>
          <p className="font-thai text-base" style={{ color: 'rgba(245,230,192,0.6)' }}>
            ศาสตร์แห่งดวงอาทิตย์ สุริยยาตร์ — สืบสานภูมิปัญญาไทยกว่า 25 ปี
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(transparent, #04040a)' }} />
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="fortune-card text-center" style={{ padding: '1.5rem 1rem' }}>
              <div className="font-serif text-3xl font-bold mb-1 gold-text">{s.num}</div>
              <div className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.55)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
            <span className="font-thai font-semibold text-lg" style={{ color: '#c9a84c' }}>พันธกิจของเรา</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
          </div>
          <div className="fortune-card">
            <p className="font-thai text-base leading-loose text-center" style={{ color: 'rgba(245,230,192,0.75)' }}>
              SURIYAN ก่อตั้งขึ้นด้วยปณิธานในการสืบสานและเผยแพร่ศาสตร์โหราศาสตร์ไทยโบราณ
              ที่มีรากฐานมาจากหลักสุริยยาตร์ ซึ่งเป็นการศึกษาอิทธิพลของดวงอาทิตย์และดาวนพเคราะห์
              ที่มีต่อชีวิตมนุษย์ เราเชื่อว่าความรู้โบราณเหล่านี้ยังคงมีคุณค่าและสามารถนำมาประยุกต์ใช้
              เพื่อช่วยให้ผู้คนเข้าใจตนเองและวางแผนชีวิตได้อย่างมีทิศทาง
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
            <span className="font-thai font-semibold text-lg" style={{ color: '#c9a84c' }}>ทีมนักโหราศาสตร์</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.2)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="fortune-card text-center">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.3)' }}>
                  <img src="/logo.png" alt="" className="w-12 h-12 object-contain opacity-60" />
                </div>
                <h3 className="font-thai font-bold text-sm mb-1" style={{ color: '#c9a84c' }}>{member.name}</h3>
                <p className="font-thai text-xs mb-1" style={{ color: 'rgba(201,168,76,0.6)' }}>{member.role}</p>
                <p className="font-thai text-xs mb-3" style={{ color: 'rgba(245,230,192,0.4)' }}>{member.exp}</p>
                <p className="font-thai text-xs leading-relaxed" style={{ color: 'rgba(245,230,192,0.6)' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg,#06060e,#04040a)' }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="fortune-card">
            <h2 className="font-thai font-bold text-xl mb-3" style={{ color: '#c9a84c' }}>ติดต่อเรา</h2>
            <p className="font-thai text-sm mb-6" style={{ color: 'rgba(245,230,192,0.6)' }}>
              มีคำถามหรือต้องการนัดหมายดูดวงส่วนตัว ติดต่อเราได้ทันที
            </p>
            <div className="space-y-2 mb-6 text-sm font-thai" style={{ color: 'rgba(245,230,192,0.6)' }}>
              <p>LINE : <span style={{ color: '#c9a84c' }}>@suriyan</span></p>
              <p>อีเมล : <span style={{ color: '#c9a84c' }}>info@suriyan.com</span></p>
              <p>โทร : <span style={{ color: '#c9a84c' }}>02-123-4567</span></p>
            </div>
            <button className="btn-gold px-10 py-3">ติดต่อเรา</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
