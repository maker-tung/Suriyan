import Link from 'next/link'

const articles = [
  { title: 'ทำความรู้จักกับสุริยาตร์', date: '20 พฤษภาคม 2567', image: '/1.png', slug: 'intro-to-suriyayat' },
  { title: 'วิธีเสริมดวงตามราศีเกิด', date: '18 พฤษภาคม 2567', image: '/2.png', slug: 'enhance-luck-by-zodiac' },
  { title: 'ฤกษ์ดีเดือนมิถุนายน 2567', date: '15 พฤษภาคม 2567', image: '/3.png', slug: 'auspicious-days-june' },
  { title: 'ความหมายของดาวทั้ง 10', date: '10 พฤษภาคม 2567', image: '/4.png', slug: 'meaning-of-10-planets' },
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9 }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="gold-divider justify-center max-w-xs mx-auto">
            <span className="font-thai text-xl font-semibold" style={{ color: '#c9a84c' }}>บทความแนะนำ</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article, i) => (
            <Link key={i} href={`/astrology-articles/${article.slug}`}>
              <div className="blog-card cursor-pointer group">
                <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
                  <img src={article.image} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(10,10,24,0.97) 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-thai font-semibold text-sm leading-snug group-hover:text-yellow-400 transition-colors" style={{ color: 'rgb(243 212 131)' }}>
                      {article.title}
                    </h3>
                    <p className="font-thai text-xs mt-1" style={{ color: 'rgba(245,230,192,0.5)' }}>{article.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/astrology-articles">
            <button className="btn-outline px-8 py-2.5 font-thai text-sm">ดูบทความทั้งหมด →</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
