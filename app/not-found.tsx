import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ background: '#04040a' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.5 }} />
      <div className="relative z-10">
        <img src="/logo.png" alt="SURIYAN" className="w-28 h-28 mx-auto mb-6 object-contain animate-float"
          style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.45))' }} />

        <div className="font-serif text-9xl font-black mb-2" style={{
          background: 'linear-gradient(135deg,#c9a84c,#f0d080,#a07830)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>404</div>

        <h2 className="font-thai font-bold text-xl mb-3" style={{ color: '#f5e6c0' }}>ดาวพาหลงทาง</h2>
        <p className="font-thai text-sm mb-8 max-w-xs mx-auto leading-relaxed" style={{ color: 'rgba(245,230,192,0.5)' }}>
          เส้นทางนี้ไม่มีในดวงชะตา กรุณากลับไปยังหน้าหลักเพื่อค้นหาเส้นทางของคุณ
        </p>

        {/* Decorative zodiac symbols */}
        <div className="flex justify-center gap-4 text-2xl mb-8 opacity-30">
          {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map(s => (
            <span key={s} style={{ color: '#c9a84c' }}>{s}</span>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/">
            <button className="btn-gold px-8 py-3 font-thai">กลับหน้าแรก</button>
          </Link>
          <Link href="/daily-horoscope">
            <button className="btn-outline px-8 py-3 font-thai">ดูดวงรายวัน</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
