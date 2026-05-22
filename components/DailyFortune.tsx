export default function DailyFortune() {
  return (
    <section className="py-20 px-4" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9, }}>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Left: Daily date card */}
          <div className="fortune-card">
            <div className="text-center mb-6">
              <div className="gold-divider justify-center max-w-[200px] mx-auto mb-4">
                <span className="font-thai text-base font-semibold" style={{ color: '#c9a84c' }}>ดวงวันนี้</span>
              </div>
              <div className="font-serif text-8xl font-bold gold-text gold-glow leading-none mb-2">24</div>
              <div className="font-thai text-lg font-medium mb-1" style={{ color: 'rgba(201,168,76,0.8)' }}>พฤษภาคม 2567</div>
              <div className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.5)' }}>วันศุกร์ ขึ้น 9 ค่ำ เดือน 6</div>
            </div>
            <button className="btn-gold w-full">เช็กดวงวันนี้</button>
          </div>

          {/* Center: Zodiac wheel */}
          <div className="flex justify-center">
            {/* <div className="relative w-72 h-72 animate-rotate-slow">
              <img src="/logo.png" alt="SURIYAN" className="w-72 h-72 mx-auto object-contain" />
            </div> */}
            <div className="relative z-10 animate-float mt-8 mb-4"
              style={{ filter: 'drop-shadow(0 0 100px rgba(201,168,76,0.85))' }}>
              <img src="/logo.png" alt="SURIYAN" className="w-72 h-72 mx-auto object-contain" />
            </div>
          </div>

          {/* Right: Today's prophecy */}
          <div className="fortune-card">
            <div className="gold-divider justify-center max-w-[220px] mx-auto mb-4">
              <span className="font-thai text-base font-semibold" style={{ color: '#c9a84c' }}>คำทำนายวันนี้</span>
            </div>

            <blockquote className="font-thai text-sm leading-relaxed mb-6 italic"
              style={{ color: 'rgba(245,230,192,0.75)', borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '1rem' }}>
              &quot;เป็นวันที่ดวงดาวส่งเสริมในเรื่องการเริ่มต้น สิ่งใหม่ๆ มีผู้ใหญ่คอยสนับสนุน การเงินมีโอกาสได้รับโชคลาภน้อยๆ&quot;
            </blockquote>

            {/* Lucky colors */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-thai text-sm font-medium" style={{ color: 'rgba(201,168,76,0.8)' }}>สีมงคล</span>
              <div className="flex gap-2">
                <div className="color-dot" style={{ background: '#8fbc8f', border: '1px solid rgba(255,255,255,0.1)' }} />
                <div className="color-dot" style={{ background: '#228B22', border: '1px solid rgba(255,255,255,0.1)' }} />
                <div className="color-dot" style={{ background: '#4169e1', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
            </div>

            {/* Lucky numbers */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-thai text-sm font-medium" style={{ color: 'rgba(201,168,76,0.8)' }}>เลขมงคล</span>
              <div className="flex gap-2">
                <span className="lucky-num">2</span>
                <span className="lucky-num">5</span>
                <span className="lucky-num">9</span>
              </div>
            </div>

            <button className="btn-gold w-full">อ่านคำทำนายเพิ่มเติม</button>
          </div>
        </div>
      </div>
    </section>
  )
}
