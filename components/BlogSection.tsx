const articles = [
  {
    title: 'ทำความรู้จักกับสุริยาตร์',
    date: '20 พฤษภาคม 2567',
    color: '#c9a84c',
    icon: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="160" height="120" fill="url(#blog1bg)"/>
        {/* Zodiac wheel */}
        <circle cx="80" cy="60" r="50" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
        <circle cx="80" cy="60" r="35" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" strokeDasharray="4 3"/>
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * Math.PI / 180
          return <line key={i}
            x1={80 + 35 * Math.cos(angle)} y1={60 + 35 * Math.sin(angle)}
            x2={80 + 50 * Math.cos(angle)} y2={60 + 50 * Math.sin(angle)}
            stroke="#c9a84c" strokeWidth="1" opacity="0.4"
          />
        })}
        <circle cx="80" cy="60" r="16" fill="url(#b1sun)"/>
        <defs>
          <radialGradient id="blog1bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a1020"/>
            <stop offset="100%" stopColor="#050510"/>
          </radialGradient>
          <radialGradient id="b1sun" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#f0d080"/>
            <stop offset="100%" stopColor="#8a5010"/>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'วิธีเสริมดวงตามราศีเกิด',
    date: '18 พฤษภาคม 2567',
    color: '#c9a84c',
    icon: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="160" height="120" fill="url(#blog2bg)"/>
        {/* Compass rose */}
        <circle cx="80" cy="60" r="48" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
        <circle cx="80" cy="60" r="3" fill="#c9a84c"/>
        <polygon points="80,16 83,60 80,52 77,60" fill="#c9a84c" opacity="0.8"/>
        <polygon points="80,104 83,60 80,68 77,60" fill="rgba(201,168,76,0.3)"/>
        <polygon points="36,60 80,57 72,60 80,63" fill="rgba(201,168,76,0.3)"/>
        <polygon points="124,60 80,57 88,60 80,63" fill="rgba(201,168,76,0.3)"/>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180
          return <circle key={i} cx={80 + 42 * Math.cos(angle)} cy={60 + 42 * Math.sin(angle)} r="2" fill="#c9a84c" opacity="0.4"/>
        })}
        <defs>
          <radialGradient id="blog2bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#101520"/>
            <stop offset="100%" stopColor="#050510"/>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'ฤกษ์ดีเดือนมิถุนายน 2567',
    date: '15 พฤษภาคม 2567',
    color: '#c9a84c',
    icon: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="160" height="120" fill="url(#blog3bg)"/>
        {/* Temple spire */}
        <path d="M80 20 L90 50 L95 60 L100 70 L110 90 L50 90 L60 70 L65 60 L70 50 Z" fill="url(#templeB3)" opacity="0.6"/>
        <path d="M80 20 L83 30 L80 28 L77 30 Z" fill="#c9a84c" opacity="0.8"/>
        {/* Stars around */}
        {[[20,25],[140,35],[25,85],[140,80],[80,100]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#c9a84c" opacity="0.5"/>
        ))}
        <defs>
          <radialGradient id="blog3bg" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#180e08"/>
            <stop offset="100%" stopColor="#050510"/>
          </radialGradient>
          <linearGradient id="templeB3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'ความหมายของดาวทั้ง 10',
    date: '10 พฤษภาคม 2567',
    color: '#c9a84c',
    icon: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="160" height="120" fill="url(#blog4bg)"/>
        {/* Sun with face */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * Math.PI / 180
          return <line key={i}
            x1={80 + 32 * Math.cos(angle)} y1={60 + 32 * Math.sin(angle)}
            x2={80 + 44 * Math.cos(angle)} y2={60 + 44 * Math.sin(angle)}
            stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"
          />
        })}
        <circle cx="80" cy="60" r="30" fill="url(#b4sun)"/>
        <ellipse cx="74" cy="56" rx="4" ry="5" fill="#2a1500" opacity="0.9"/>
        <ellipse cx="86" cy="56" rx="4" ry="5" fill="#2a1500" opacity="0.9"/>
        <path d="M73 66 Q80 72 87 66" stroke="#5a3010" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <defs>
          <radialGradient id="blog4bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#120d04"/>
            <stop offset="100%" stopColor="#050510"/>
          </radialGradient>
          <radialGradient id="b4sun" cx="40%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#f5d878"/>
            <stop offset="60%" stopColor="#c9882a"/>
            <stop offset="100%" stopColor="#6a3808"/>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' ,opacity: 0.9,}}>
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
              <div className="h-40 overflow-hidden relative">
                {article.icon}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(4,4,10,0.9) 100%)' }}/>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="font-thai font-semibold text-sm mb-2 leading-snug group-hover:text-yellow-400 transition-colors"
                  style={{ color: 'rgba(245,230,192,0.9)' }}>
                  {article.title}
                </h3>
                <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
