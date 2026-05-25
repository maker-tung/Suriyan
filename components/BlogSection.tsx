const articles = [
  {
    title: 'ทำความรู้จักกับสุริยาตร์',
    date: '20 พฤษภาคม 2569',
    color: '#c9a84c',
    image: '/1.png',
  },
  {
    title: 'วิธีเสริมดวงตามราศีเกิด',
    date: '18 พฤษภาคม 2569',
    color: '#c9a84c',
    image: '/2.png',
  },
  {
    title: 'ฤกษ์ดีเดือนมิถุนายน 2569',
    date: '15 พฤษภาคม 2569',
    color: '#c9a84c',
    image: '/3.png',
  },
  {
    title: 'ความหมายของดาวทั้ง 10',
    date: '10 พฤษภาคม 2569',
    color: '#c9a84c',
    image: '/4.png',
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9, }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="gold-divider justify-center max-w-xs mx-auto">
            <span className="font-thai text-xl font-semibold" style={{ color: '#c9a84c' }}>
              บทความแนะนำ
            </span>
          </div>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article, i) => (
            <div key={i} className="blog-card cursor-pointer group">
              {/* Image area */}
              <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
                <img
                  src={article.image}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Fade image into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-12"
                  style={{ background: 'linear-gradient(transparent, #0a0a18)' }} >
                  <h3 className="font-thai font-semibold text-sm ml-5 leading-snug group-hover:text-yellow-400 transition-colors"
                    style={{ color: 'rgb(243 212 131)' }}>
                    {article.title}
                  </h3>
                  <p className="font-thai text-xs ml-5" style={{ color: 'rgb(205 205 205)' }}>
                    {article.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
