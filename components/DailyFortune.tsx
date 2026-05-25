export default function DailyFortune() {
  return (
    <section className="py-20 px-4" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9, }}>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          <div className="fortune-card relative inline-block w-full overflow-hidden" style={{ opacity: 0.9 }}>
            <img
              src="/a1.png"
              alt="Zodiac Background"
              className="w-full h-auto block object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[45%] flex flex-col justify-between p-6 pb-8 text-center">
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="gold-divider justify-center max-w-[100px] mx-auto mb-2">
                  <span className="font-thai text-base font-semibold" style={{ color: '#c9a84c' }}>ดวงวันนี้</span>
                </div>
                <div className="font-thai text-3xl font-medium mb-0.5" style={{ color: 'rgba(201,168,76,0.9)' }}> 24 พฤษภาคม 2567</div>
                <div className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.6)' }}>วันศุกร์ ขึ้น 9 ค่ำ เดือน 6</div>
              </div>
              <button className="btn-gold w-[80%] mx-auto mt-auto">
                เช็กดวงวันนี้
              </button>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <div className="relative z-10 animate-float mt-8 mb-4"
              style={{ filter: 'drop-shadow(0 0 100px rgba(201,168,76,0.85))' }}>
              <img src="/logo.png" alt="SURIYAN" className="w-72 h-72 mx-auto object-contain" />
            </div>
          </div>

          {/* Right: Today's prophecy */}
          <div className="fortune-card relative inline-block w-full overflow-hidden" style={{ opacity: 0.9 }}>
            <img
              src="/a2.png"
              alt="Prediction Background"
              className="w-full h-auto block object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[55%] flex flex-col justify-between p-6 pb-8">
              <div className="flex-1 flex flex-col justify-center px-2">
                <div className="gold-divider justify-center max-w-[220px] mx-auto mb-4">
                  <span className="font-thai text-base font-semibold" style={{ color: '#c9a84c' }}>คำทำนายวันนี้</span>
                </div>
                <blockquote className="font-thai text-sm leading-relaxed mb-5 italic text-center"
                  style={{ color: 'rgba(245,230,192,0.75)', borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '1rem' }}>
                  &quot;เป็นวันที่ดวงดาวส่งเสริมในเรื่องการเริ่มต้น สิ่งใหม่ๆ มีผู้ใหญ่คอยสนับสนุน การเงินมีโอกาสได้รับโชคลาภน้อยๆ&quot;
                </blockquote>
                <div className="flex flex-col items-center gap-2.5 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-thai text-sm font-medium" style={{ color: 'rgba(201,168,76,0.8)' }}>สีมงคล</span>
                    <div className="flex gap-2">
                      <div className="color-dot" style={{ background: '#8fbc8f', border: '1px solid rgba(255,255,255,0.1)' }} />
                      <div className="color-dot" style={{ background: '#228B22', border: '1px solid rgba(255,255,255,0.1)' }} />
                      <div className="color-dot" style={{ background: '#4169e1', border: '1px solid rgba(255,255,255,0.1)' }} />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-gold w-[80%] mx-auto mt-auto">
                อ่านคำทำนายเพิ่มเติม
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
