import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const articles = [
  {
    title: 'ทำความรู้จักกับสุริยาตร์',
    excerpt: 'สุริยาตร์คือศาสตร์โบราณแห่งดวงอาทิตย์ที่สืบทอดมายาวนานในวัฒนธรรมไทย ว่าด้วยอิทธิพลของดวงดาวต่อชีวิตมนุษย์',
    date: '20 พฤษภาคม 2567',
    category: 'ความรู้พื้นฐาน',
    img: '/service-zodiac.png',
  },
  {
    title: 'วิธีเสริมดวงตามราศีเกิด',
    excerpt: 'เรียนรู้วิธีเสริมดวงที่ถูกต้องตามราศีเกิดของแต่ละคน ตั้งแต่การเลือกสีมงคล เลขมงคล ไปจนถึงฤกษ์ดี',
    date: '18 พฤษภาคม 2567',
    category: 'เสริมดวง',
    img: '/service-compass.png',
  },
  {
    title: 'ฤกษ์ดีเดือนมิถุนายน 2567',
    excerpt: 'รวมฤกษ์มงคลประจำเดือนมิถุนายน 2567 สำหรับการเริ่มต้นกิจการ แต่งงาน ย้ายบ้าน และกิจกรรมสำคัญต่างๆ',
    date: '15 พฤษภาคม 2567',
    category: 'ฤกษ์มงคล',
    img: '/service-saturn.png',
  },
  {
    title: 'ความหมายของดาวทั้ง 10',
    excerpt: 'ดาวพระเคราะห์ทั้ง 10 ดวงในโหราศาสตร์ไทย มีความหมายและอิทธิพลต่อชีวิตอย่างไร บทความนี้จะพาคุณไปรู้จักทีละดวง',
    date: '10 พฤษภาคม 2567',
    category: 'ความรู้พื้นฐาน',
    img: '/service-book.png',
  },
  {
    title: 'ดาวพฤหัสบดีกับโชคลาภ',
    excerpt: 'ดาวพฤหัสบดีถูกเรียกว่าดาวแห่งโชคลาภ การเข้าใจตำแหน่งของดาวพฤหัสในดวงชะตาจะช่วยให้คุณรู้จักช่วงเวลาทองของชีวิต',
    date: '5 พฤษภาคม 2567',
    category: 'ดาวพระเคราะห์',
    img: '/service-moon.png',
  },
  {
    title: 'การอ่านดวงเบื้องต้นสำหรับมือใหม่',
    excerpt: 'คู่มือฉบับย่อสำหรับผู้ที่เพิ่งเริ่มสนใจโหราศาสตร์ไทย ทำความเข้าใจโครงสร้างของดวงชะตาและการอ่านพื้นฐาน',
    date: '1 พฤษภาคม 2567',
    category: 'ความรู้พื้นฐาน',
    img: '/service-zodiac.png',
  },
]

const categories = ['ทั้งหมด', 'ความรู้พื้นฐาน', 'เสริมดวง', 'ฤกษ์มงคล', 'ดาวพระเคราะห์']

export default function AstrologyArticlesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden" style={{ background: '#04040a', minHeight: '40vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.6 }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <img src="/logo.png" alt="SURIYAN" className="w-20 h-20 mx-auto mb-6 object-contain" style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-4 tracking-wider">บทความโหราศาสตร์</h1>
          <p className="font-thai text-base" style={{ color: 'rgba(245,230,192,0.6)' }}>
            ความรู้โหราศาสตร์ไทย บทความพิเศษ จากนักโหร
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(transparent, #04040a)' }} />
      </section>

      {/* Category filter */}
      <section className="py-8 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat, i) => (
            <button key={cat}
              className="font-thai text-sm px-5 py-2 rounded-full transition-all"
              style={{
                background: i === 0 ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'transparent',
                color: i === 0 ? '#1a0e00' : 'rgba(201,168,76,0.7)',
                border: i === 0 ? 'none' : '1px solid rgba(201,168,76,0.3)',
                fontWeight: i === 0 ? 700 : 400,
              }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-20 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.title} className="blog-card cursor-pointer group">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img src={article.img} alt={article.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(4,4,10,0.95))' }} />
                {/* Category badge */}
                <span className="absolute top-3 left-3 font-thai text-xs px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c' }}>
                  {article.category}
                </span>
              </div>
              {/* Body */}
              <div className="p-5">
                <h3 className="font-thai font-bold text-base mb-2 leading-snug group-hover:text-yellow-400 transition-colors"
                  style={{ color: 'rgba(245,230,192,0.9)' }}>
                  {article.title}
                </h3>
                <p className="font-thai text-xs leading-relaxed mb-4" style={{ color: 'rgba(245,230,192,0.5)' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.35)' }}>{article.date}</span>
                  <span className="font-thai text-xs" style={{ color: '#c9a84c' }}>อ่านต่อ →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
