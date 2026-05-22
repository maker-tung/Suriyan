const services = [
  {
    title: 'ดูดวงส่วนตัว',
    desc: 'วิเคราะห์ดวงชะตา เจาะลึกชีวิต การงาน การเงิน ความรัก',
    img: '/service-zodiac.png',
  },
  {
    title: 'ดูดวงรายวัน',
    desc: 'เช็กดวงประจำวัน แม่นยำ อัปเดตทุกวัน',
    img: '/service-moon.png',
  },
  {
    title: 'ดูดวงรายเดือน',
    desc: 'วางแผนชีวิตล่วงหน้า ตลอดทั้งเดือน',
    img: '/service-compass.png',
  },
  {
    title: 'ฤกษ์มงคล',
    desc: 'เลือกฤกษ์ดี เสริมดวงชะตา เรียกสิริมงคล',
    img: '/service-saturn.png',
  },
  {
    title: 'บทความโหราศาสตร์',
    desc: 'ความรู้โหราศาสตร์ไทย บทความพิเศษ จากนักโหร',
    img: '/service-book.png',
  },
]

export default function Services() {
  return (
    <section className="section-bg py-20 px-4" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' ,opacity: 0.9,}}>
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="gold-divider justify-center max-w-xs mx-auto">
            <span className="font-thai text-xl font-semibold" style={{ color: '#c9a84c' }}>
              บริการของเรา
            </span>
          </div>
        </div>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <div key={i} className="service-card group overflow-hidden" style={{ padding: 0 }}>
              {/* Real image — top 58% of card */}
              <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Fade image into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-16"
                  style={{ background: 'linear-gradient(transparent, #0a0a18)' }} />
              </div>

              {/* Text body */}
              <div className="px-5 pb-5 pt-1 text-center">
                {/* Gold diamond separator */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.25)' }} />
                  <svg width="8" height="8" viewBox="0 0 8 8"><rect x="4" y="0" width="4" height="4" transform="rotate(45 4 4)" fill="#c9a84c" opacity="0.7" /></svg>
                  <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.25)' }} />
                </div>

                <h3 className="font-thai font-bold text-base mb-2" style={{ color: '#c9a84c' }}>
                  {service.title}
                </h3>
                <p className="font-thai text-xs leading-relaxed mb-4" style={{ color: 'rgba(245,230,192,0.65)' }}>
                  {service.desc}
                </p>
                <button className="border border-yellow-700/50 text-yellow-600 text-xs font-thai py-1.5 px-4 rounded hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
