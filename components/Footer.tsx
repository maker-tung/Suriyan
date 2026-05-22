export default function Footer() {
  return (
    <footer className="footer-bg py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9">
                <img src="/logo.png" alt="SURIYAN logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-lg font-bold gold-text tracking-widest">SURIYAN</span>
            </div>
            <p className="font-thai text-xs leading-relaxed" style={{ color: 'rgba(245,230,192,0.45)' }}>
              ศาสตร์แห่งดวงอาทิตย์ สุริยยาตร์
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-thai font-semibold text-sm mb-4" style={{ color: '#c9a84c' }}>ติดต่อเรา</h4>
            <ul className="space-y-2">
              {[
                { label: 'LINE', value: ': @suriyan' },
                { label: 'อีเมล', value: ': info@suriyan.com' },
                { label: 'โทร', value: ': 02-123-4567' },
              ].map((item, i) => (
                <li key={i} className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.5)' }}>
                  <span style={{ color: 'rgba(201,168,76,0.7)' }}>{item.label}</span>{item.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-thai font-semibold text-sm mb-4" style={{ color: '#c9a84c' }}>สิ่งที่ควร</h4>
            <ul className="space-y-2">
              {['เกี่ยวกับเรา', 'คำถามที่พบบ่อย', 'นโยบายความเป็นส่วนตัว', 'เงื่อนไขการให้บริการ'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="font-thai text-xs hover:text-yellow-400 transition-colors"
                    style={{ color: 'rgba(245,230,192,0.5)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="font-thai font-semibold text-sm mb-4" style={{ color: '#c9a84c' }}>ติดตามเรา</h4>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}>
                <svg className="w-4 h-4" fill="rgba(201,168,76,0.8)" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}>
                <svg className="w-4 h-4" fill="rgba(201,168,76,0.8)" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#04040a"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}>
                <svg className="w-4 h-4" fill="none" stroke="rgba(201,168,76,0.8)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(201,168,76,0.8)" stroke="none"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)' }}>
                <svg className="w-4 h-4" fill="rgba(201,168,76,0.8)" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.78 1.52V6.86a4.85 4.85 0 01-1.01-.17z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}/>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.3)' }}>
            © 2024 SURIYAN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
