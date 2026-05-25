'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const zodiacData: Record<string, {
  sign: string; name: string; nameEn: string; date: string; element: string; ruler: string
  color: string; luckyNum: number[]; luckyColor: string[]; luckyDirection: string
  overall: number; work: number; money: number; love: number; health: number
  overallText: string; workText: string; moneyText: string; loveText: string; healthText: string
  gem: string; warning: string
}> = {
  aries: { sign: '♈', name: 'เมษ', nameEn: 'Aries', date: '21 มี.ค. – 19 เม.ย.', element: 'ไฟ', ruler: 'ดาวอังคาร', color: '#e74c3c', luckyNum: [9,18,27], luckyColor: ['#e74c3c','#ff6b35'], luckyDirection: 'ทิศตะวันออก', overall: 82, work: 88, money: 75, love: 79, health: 86, gem: 'ทับทิม', warning: 'ระวังการตัดสินใจเร็วเกินไป', overallText: 'วันนี้พลังงานพุ่งสูง เหมาะกับการเริ่มต้นสิ่งใหม่และการแสดงความเป็นผู้นำ', workText: 'ความคิดสร้างสรรค์พุ่งสูง เหมาะกับการนำเสนองานหรือเริ่มโปรเจกต์ใหม่', moneyText: 'มีโอกาสรายรับพิเศษ แต่ควรระวังรายจ่ายที่ไม่จำเป็น', loveText: 'ความสัมพันธ์ร้อนแรง มีความกระตือรือร้น แต่ควรใจเย็นลงบ้าง', healthText: 'พลังงานดี แต่ควรระวังการบาดเจ็บจากความรีบเร่ง' },
  taurus: { sign: '♉', name: 'พฤษภ', nameEn: 'Taurus', date: '20 เม.ย. – 20 พ.ค.', element: 'ดิน', ruler: 'ดาวศุกร์', color: '#27ae60', luckyNum: [6,15,24], luckyColor: ['#27ae60','#a8e6cf'], luckyDirection: 'ทิศใต้', overall: 78, work: 72, money: 85, love: 83, health: 74, gem: 'มรกต', warning: 'อย่ายึดติดกับความคิดเดิม', overallText: 'วันนี้มั่นคงและสงบ เหมาะกับการวางรากฐานและการสะสมทรัพย์สิน', workText: 'ทำงานอย่างมีระเบียบ ผลลัพธ์ออกมาดี แม้จะช้าแต่แม่นยำ', moneyText: 'การเงินมั่นคง มีโอกาสออมเงินและการลงทุนระยะยาว', loveText: 'ความรักมั่นคงและอบอุ่น เหมาะกับการสร้างความสัมพันธ์ระยะยาว', healthText: 'สุขภาพดี แต่ควรออกกำลังกายเพิ่มขึ้น' },
  gemini: { sign: '♊', name: 'เมถุน', nameEn: 'Gemini', date: '21 พ.ค. – 20 มิ.ย.', element: 'ลม', ruler: 'ดาวพุธ', color: '#f1c40f', luckyNum: [5,14,23], luckyColor: ['#f1c40f','#fddb3a'], luckyDirection: 'ทิศตะวันตก', overall: 85, work: 90, money: 78, love: 76, health: 80, gem: 'บุษราคัม', warning: 'ระวังพูดมากเกินไป', overallText: 'วันนี้ความคิดคล่องตัว ข้อมูลใหม่ๆ หลั่งไหลเข้ามา เหมาะกับการเรียนรู้และสื่อสาร', workText: 'ความสามารถด้านการสื่อสารเด่น เหมาะกับการเจรจาและนำเสนอ', moneyText: 'มีโอกาสรายได้จากทักษะการสื่อสาร ระวังการใช้จ่ายฟุ่มเฟือย', loveText: 'สนุกสนานและพูดคุยดี แต่ควรฟังมากกว่าพูด', healthText: 'สุขภาพดี ระวังความเครียดจากการคิดมากเกินไป' },
  cancer: { sign: '♋', name: 'กรกฎ', nameEn: 'Cancer', date: '21 มิ.ย. – 22 ก.ค.', element: 'น้ำ', ruler: 'ดวงจันทร์', color: '#95a5a6', luckyNum: [2,11,20], luckyColor: ['#bdc3c7','#ecf0f1'], luckyDirection: 'ทิศเหนือ', overall: 74, work: 70, money: 72, love: 88, health: 76, gem: 'มุก', warning: 'ระวังอารมณ์แปรปรวน', overallText: 'วันนี้อารมณ์อ่อนไหว ควรใช้สัญชาตญาณในการตัดสินใจ', workText: 'เหมาะกับงานที่ต้องใช้ความใส่ใจและดูแลผู้อื่น', moneyText: 'รายรับมั่นคง แต่ควรระวังการใช้จ่ายตามอารมณ์', loveText: 'ความรักอบอุ่นมาก มีการดูแลเอาใจใส่กันและกัน', healthText: 'ควรดูแลสุขภาพจิต หาเวลาพักผ่อนและทำสิ่งที่ชอบ' },
  leo: { sign: '♌', name: 'สิงห์', nameEn: 'Leo', date: '23 ก.ค. – 22 ส.ค.', element: 'ไฟ', ruler: 'ดวงอาทิตย์', color: '#f39c12', luckyNum: [1,10,19], luckyColor: ['#f39c12','#e67e22'], luckyDirection: 'ทิศตะวันออก', overall: 88, work: 92, money: 80, love: 85, health: 87, gem: 'ทอง', warning: 'อย่าหยิ่งทะนงตนเกินไป', overallText: 'วันนี้ดวงชะตาส่องแสงสว่าง ความมั่นใจและเสน่ห์เด่นชัด', workText: 'ความเป็นผู้นำโดดเด่น ได้รับการยอมรับจากเพื่อนร่วมงาน', moneyText: 'การเงินดี มีโอกาสได้รับโบนัสหรือรางวัล', loveText: 'เสน่ห์เปล่งประกาย ความสัมพันธ์ร้อนแรงและโรแมนติก', healthText: 'พลังงานสูง สุขภาพดีเยี่ยม เหมาะกับการออกกำลังกาย' },
  virgo: { sign: '♍', name: 'กันย์', nameEn: 'Virgo', date: '23 ส.ค. – 22 ก.ย.', element: 'ดิน', ruler: 'ดาวพุธ', color: '#8e44ad', luckyNum: [5,14,23], luckyColor: ['#8e44ad','#9b59b6'], luckyDirection: 'ทิศใต้', overall: 79, work: 85, money: 77, love: 71, health: 82, gem: 'มรกต', warning: 'อย่าวิจารณ์ตัวเองหรือผู้อื่นมากไป', overallText: 'วันนี้ความละเอียดรอบคอบทำงานได้ดี เหมาะกับงานวิเคราะห์', workText: 'ความแม่นยำและละเอียดรอบคอบช่วยให้งานออกมาสมบูรณ์', moneyText: 'การเงินอยู่ในเกณฑ์ดี เหมาะกับการวางแผนการเงินระยะยาว', loveText: 'ควรเปิดใจมากขึ้น อย่าวิเคราะห์ความสัมพันธ์มากเกินไป', healthText: 'สุขภาพดี ควรใส่ใจการกินและการนอนมากขึ้น' },
  libra: { sign: '♎', name: 'ตุลย์', nameEn: 'Libra', date: '23 ก.ย. – 22 ต.ค.', element: 'ลม', ruler: 'ดาวศุกร์', color: '#3498db', luckyNum: [6,15,24], luckyColor: ['#3498db','#74b9ff'], luckyDirection: 'ทิศตะวันตก', overall: 81, work: 76, money: 79, love: 90, health: 78, gem: 'เพชร', warning: 'อย่าลังเลนานเกินไป', overallText: 'วันนี้ความสมดุลและความยุติธรรมนำพา เหมาะกับการเจรจาและสร้างความสัมพันธ์', workText: 'ทักษะการเจรจาและการสร้างความสมดุลเด่น', moneyText: 'การเงินสมดุล เหมาะกับการลงทุนที่สมเหตุสมผล', loveText: 'ความรักกลมกลืนและสวยงาม เหมาะกับการสร้างความประทับใจ', healthText: 'ควรหาความสมดุลระหว่างการทำงานและการพักผ่อน' },
  scorpio: { sign: '♏', name: 'พิจิก', nameEn: 'Scorpio', date: '23 ต.ค. – 21 พ.ย.', element: 'น้ำ', ruler: 'ดาวอังคาร', color: '#c0392b', luckyNum: [9,18,27], luckyColor: ['#c0392b','#922b21'], luckyDirection: 'ทิศเหนือ', overall: 83, work: 80, money: 82, love: 77, health: 79, gem: 'โกเมน', warning: 'ระวังความหึงหวงและการแก้แค้น', overallText: 'วันนี้สัญชาตญาณคมชัด สามารถมองเห็นสิ่งที่ซ่อนอยู่เบื้องหลัง', workText: 'ความสามารถในการวิเคราะห์เชิงลึกทำให้แก้ปัญหาซับซ้อนได้', moneyText: 'มีโอกาสรายได้จากการลงทุนหรือธุรกิจลับ', loveText: 'ความสัมพันธ์เข้มข้น ควรระวังความหึงหวง', healthText: 'สุขภาพดี แต่ควรระบายความเครียดให้ถูกวิธี' },
  sagittarius: { sign: '♐', name: 'ธนู', nameEn: 'Sagittarius', date: '22 พ.ย. – 21 ธ.ค.', element: 'ไฟ', ruler: 'ดาวพฤหัส', color: '#9b59b6', luckyNum: [3,12,21], luckyColor: ['#9b59b6','#8e44ad'], luckyDirection: 'ทิศตะวันออก', overall: 87, work: 83, money: 86, love: 82, health: 88, gem: 'บุษราคัม', warning: 'อย่าสัญญาเกินความสามารถ', overallText: 'วันนี้โชคชะตาเอื้ออำนวย โอกาสใหม่ๆ เปิดกว้าง เหมาะกับการขยายขอบเขต', workText: 'ความคิดกว้างไกลและมองการณ์ไกลทำให้เห็นโอกาสที่คนอื่นมองไม่เห็น', moneyText: 'โชคลาภดี มีโอกาสรายได้จากต่างถิ่นหรือต่างประเทศ', loveText: 'ความรักเต็มไปด้วยการผจญภัยและความสนุกสนาน', healthText: 'สุขภาพดีเยี่ยม พลังงานสูง เหมาะกับกิจกรรมกลางแจ้ง' },
  capricorn: { sign: '♑', name: 'มกร', nameEn: 'Capricorn', date: '22 ธ.ค. – 19 ม.ค.', element: 'ดิน', ruler: 'ดาวเสาร์', color: '#7f8c8d', luckyNum: [8,17,26], luckyColor: ['#7f8c8d','#95a5a6'], luckyDirection: 'ทิศใต้', overall: 76, work: 84, money: 80, love: 68, health: 75, gem: 'นิล', warning: 'อย่าเข้มงวดกับตัวเองมากเกินไป', overallText: 'วันนี้ความอดทนและความมุ่งมั่นนำพา เหมาะกับการทำงานหนักเพื่อเป้าหมายระยะยาว', workText: 'ความรับผิดชอบสูงและทำงานหนักทำให้ก้าวหน้า', moneyText: 'การเงินมั่นคง เหมาะกับการออมและการลงทุนระยะยาว', loveText: 'ควรแสดงความรู้สึกออกมามากขึ้น อย่าเก็บกด', healthText: 'ควรพักผ่อนให้เพียงพอ อย่าทำงานหนักเกินไป' },
  aquarius: { sign: '♒', name: 'กุมภ์', nameEn: 'Aquarius', date: '20 ม.ค. – 18 ก.พ.', element: 'ลม', ruler: 'ดาวเสาร์', color: '#2980b9', luckyNum: [4,13,22], luckyColor: ['#2980b9','#3498db'], luckyDirection: 'ทิศตะวันตก', overall: 80, work: 78, money: 74, love: 73, health: 81, gem: 'ไพลิน', warning: 'ระวังความห่างเหินทางอารมณ์', overallText: 'วันนี้ความคิดสร้างสรรค์และการมองอนาคตเด่นชัด เหมาะกับนวัตกรรมใหม่', workText: 'ไอเดียใหม่ๆ ผุดขึ้นมามาก เหมาะกับงานสร้างสรรค์และเทคโนโลยี', moneyText: 'ระวังการลงทุนในสิ่งที่ยังไม่ผ่านการพิสูจน์', loveText: 'ควรลดความห่างเหินและแสดงความรู้สึกมากขึ้น', healthText: 'สุขภาพดี แต่ควรระวังสุขภาพจิตและความโดดเดี่ยว' },
  pisces: { sign: '♓', name: 'มีน', nameEn: 'Pisces', date: '19 ก.พ. – 20 มี.ค.', element: 'น้ำ', ruler: 'ดาวพฤหัส', color: '#1abc9c', luckyNum: [7,16,25], luckyColor: ['#1abc9c','#16a085'], luckyDirection: 'ทิศเหนือ', overall: 77, work: 73, money: 71, love: 86, health: 79, gem: 'ไข่มุก', warning: 'ระวังความฝันลมๆ แล้งๆ', overallText: 'วันนี้จินตนาการและความเห็นอกเห็นใจสูง เหมาะกับงานศิลปะและการช่วยเหลือผู้อื่น', workText: 'ความสามารถด้านศิลปะและการสร้างสรรค์เด่น', moneyText: 'ระวังการถูกหลอกลวงทางการเงิน ควรตรวจสอบให้รอบคอบ', loveText: 'ความรักโรแมนติกและลึกซึ้ง เหมาะกับการแสดงความรู้สึก', healthText: 'ควรระวังการนอนหลับไม่เพียงพอและความฝันรบกวน' },
}

const signKeys = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']

export default function DailySignPage({ params }: { params: { sign: string } }) {
  const data = zodiacData[params.sign]
  if (!data) return <div style={{color:'white',padding:'2rem'}}>ไม่พบราศีนี้</div>

  const scores = [
    { label: 'ภาพรวม', score: data.overall, text: data.overallText },
    { label: 'การงาน', score: data.work, text: data.workText },
    { label: 'การเงิน', score: data.money, text: data.moneyText },
    { label: 'ความรัก', score: data.love, text: data.loveText },
    { label: 'สุขภาพ', score: data.health, text: data.healthText },
  ]

  const currentIndex = signKeys.indexOf(params.sign)
  const prevSign = currentIndex > 0 ? signKeys[currentIndex - 1] : null
  const nextSign = currentIndex < signKeys.length - 1 ? signKeys[currentIndex + 1] : null

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.65 }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${data.color}22 0%, transparent 65%)` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(4,4,10,0.4)0%,rgba(4,4,10,0.95)100%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>
            <Link href="/" className="hover:text-yellow-400 transition-colors">หน้าแรก</Link>
            <span>/</span>
            <Link href="/daily-horoscope" className="hover:text-yellow-400 transition-colors">ดูดวงรายวัน</Link>
            <span>/</span>
            <span style={{ color: '#c9a84c' }}>ราศี{data.name}</span>
          </div>

          {/* Big zodiac symbol */}
          <div className="relative inline-block mb-4">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto"
              style={{ background: `radial-gradient(circle, ${data.color}33, ${data.color}11)`, border: `2px solid ${data.color}55`, boxShadow: `0 0 60px ${data.color}33` }}>
              <span style={{ fontSize: '4rem', color: data.color }}>{data.sign}</span>
            </div>
          </div>

          <h1 className="font-serif text-5xl font-bold mb-1 gold-text tracking-wider">ราศี{data.name}</h1>
          <p className="font-thai text-base mb-1" style={{ color: 'rgba(245,230,192,0.5)' }}>{data.nameEn} · {data.date}</p>
          <div className="flex items-center justify-center gap-4 mt-3 font-thai text-xs">
            <span style={{ color: data.color }}>ธาตุ{data.element}</span>
            <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
            <span style={{ color: 'rgba(201,168,76,0.7)' }}>ปกครองโดย{data.ruler}</span>
            <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
            <span style={{ color: 'rgba(245,230,192,0.5)' }}>อัญมณี: {data.gem}</span>
          </div>

          {/* Overall score big display */}
          <div className="mt-8 inline-flex flex-col items-center">
            <div className="font-serif text-7xl font-black gold-text" style={{ lineHeight: 1 }}>{data.overall}</div>
            <div className="font-thai text-sm mt-1" style={{ color: 'rgba(245,230,192,0.45)' }}>คะแนนดวงวันนี้</div>
          </div>
        </div>
      </section>

      {/* Score bars */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {scores.map((item) => (
            <div key={item.label} className="fortune-card" style={{ padding: '1.5rem' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-thai font-bold text-sm" style={{ color: '#c9a84c' }}>{item.label}</span>
                <span className="font-serif text-lg font-bold" style={{ color: '#f0d080' }}>{item.score}<span className="text-xs font-normal" style={{ color: 'rgba(245,230,192,0.4)' }}>/100</span></span>
              </div>
              <div className="h-2 rounded-full mb-3 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${item.score}%`, background: `linear-gradient(90deg, ${data.color}, #f0d080)` }} />
              </div>
              <p className="font-thai text-sm leading-relaxed" style={{ color: 'rgba(245,230,192,0.65)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lucky info */}
      <section className="py-8 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="fortune-card" style={{ padding: '2rem' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
              <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>ข้อมูลมงคลวันนี้</span>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <p className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>เลขมงคล</p>
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {data.luckyNum.map((n) => (
                    <span key={n} className="w-8 h-8 rounded-full flex items-center justify-center font-serif text-sm font-bold"
                      style={{ border: `1px solid ${data.color}55`, color: data.color }}>{n}</span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>สีมงคล</p>
                <div className="flex justify-center gap-2">
                  {data.luckyColor.map((c) => (
                    <div key={c} className="w-7 h-7 rounded-full" style={{ background: c, border: '1px solid rgba(255,255,255,0.15)' }} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>ทิศมงคล</p>
                <p className="font-thai font-bold text-sm" style={{ color: '#f0d080' }}>{data.luckyDirection}</p>
              </div>
              <div className="text-center">
                <p className="font-thai text-xs mb-2" style={{ color: 'rgba(201,168,76,0.6)' }}>อัญมณีมงคล</p>
                <p className="font-thai font-bold text-sm" style={{ color: '#f0d080' }}>{data.gem}</p>
              </div>
            </div>

            {/* Warning */}
            <div className="px-4 py-3 rounded-lg" style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <p className="font-thai text-xs" style={{ color: 'rgba(201,168,76,0.8)' }}>
                <span className="mr-2">⚠️</span>{data.warning}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigate signs */}
      <section className="py-10 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            <span className="font-thai text-sm" style={{ color: 'rgba(201,168,76,0.5)' }}>ราศีอื่นๆ</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
          </div>
          <div className="flex justify-between items-center gap-4">
            {prevSign ? (
              <Link href={`/daily-horoscope/${prevSign}`}>
                <button className="btn-outline px-5 py-2 font-thai text-sm flex items-center gap-2">
                  ← ราศี{zodiacData[prevSign].name}
                </button>
              </Link>
            ) : <div />}
            <Link href="/daily-horoscope">
              <button className="font-thai text-sm px-4 py-2 rounded transition-all hover:text-yellow-400"
                style={{ color: 'rgba(245,230,192,0.5)' }}>ดูทุกราศี</button>
            </Link>
            {nextSign ? (
              <Link href={`/daily-horoscope/${nextSign}`}>
                <button className="btn-outline px-5 py-2 font-thai text-sm flex items-center gap-2">
                  ราศี{zodiacData[nextSign].name} →
                </button>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
