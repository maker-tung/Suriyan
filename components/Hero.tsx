export default function Hero() {
  return (
    <section className="hero-bg pt-20" style={{ minHeight: '100vh', background: '#04040a' }}>
      {/* Real starfield background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/stars-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
        maskImage: 'linear-gradient(to bottom, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent)',
      }} />
      {/* Hero scene: temple + sun + clouds + zodiac ring — blended over stars */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/hero-scene.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        opacity: 0.85,
        mixBlendMode: 'screen',
        maskImage: 'linear-gradient(to bottom, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent)',
      }} />

      {/* Subtle animated orbit rings layered over the scene */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] animate-rotate-slow"
          style={{ border: '1px solid rgba(201,168,76,0.12)', borderRadius: '50%' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] animate-rotate-reverse"
          style={{ border: '1px dashed rgba(201,168,76,0.09)', borderRadius: '50%' }}
        />
      </div>

      {/* Main Logo */}
      {/* <div className="relative z-10 animate-float mt-8 mb-4"
        style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.45))' }}>
        <img src="/logo.png" alt="SURIYAN" className="w-52 h-52 mx-auto object-contain" />
      </div> */}

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 mt-24">
        <div className="font-serif text-7xl font-bold gold-text drop-shadow-[0_2px_3px_rgba(0,0,0,1)]">
          <h1 className="font-serif text-7xl md:text-8xl font-bold gold-text gold-glow mb-3 tracking-wider hero-title">
            SURIYAN
          </h1>
          <p className="text-xl md:text-2xl font-thai font-medium mb-2" style={{ color: '#d4a840' }}>
            ศาสตร์แห่งดวงอาทิตย์ สุริยยาตร์
          </p>
          <p className="text-base md:text-lg font-thai text-yellow-100/70 mb-10 tracking-wide">
            ค้นพบชะตาชีวิต ด้วยโหราศาสตร์ไทยอันศักดิ์สิทธิ์
          </p>
        </div>


        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
          <button className="btn-hero-primary drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]">ดูดวงส่วนตัว</button>
          <button className="btn-hero-primary drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]">ดูดวงรายวัน</button>
        </div>
      </div>

      {/* Bottom gradient fade — stronger so sections below feel grounded */}
      <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, rgba(4,4,10,0.85) 60%, #04040a 100%)' }} />
      {/* Top vignette to keep navbar area dark */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(rgba(4,4,10,0.6), transparent)' }} />
    </section>
  )
}
