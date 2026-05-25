'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import AuthModal from './AuthModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [authModal, setAuthModal] = useState<{ open: boolean; tab: 'login' | 'register' }>({ open: false, tab: 'login' })
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  const isActive = (path: string) => pathname === path

  const openLogin = () => setAuthModal({ open: true, tab: 'login' })
  const openRegister = () => setAuthModal({ open: true, tab: 'register' })
  const closeAuth = () => setAuthModal({ open: false, tab: 'login' })

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <img src="/logo.png" alt="SURIYAN logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-serif text-xl font-bold gold-text tracking-widest">SURIYAN</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>หน้าแรก</Link>
            <Link href="/personal-horoscope" className={`nav-link ${isActive('/personal-horoscope') ? 'active' : ''}`}>ดูดวงส่วนตัว</Link>
            <Link href="/daily-horoscope" className={`nav-link ${isActive('/daily-horoscope') ? 'active' : ''}`}>ดูดวงรายวัน</Link>
            <Link href="/astrology-articles" className={`nav-link ${isActive('/astrology-articles') ? 'active' : ''}`}>บทความโหราศาสตร์</Link>
            <Link href="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>เกี่ยวกับเรา</Link>
          </div>

          {/* Auth area */}
          <div className="hidden md:flex items-center gap-3">
            {session?.user ? (
              /* Logged-in user menu */
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full transition-all hover:bg-yellow-900/20"
                  style={{ border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  {session.user.image ? (
                    <img src={session.user.image} alt="" className="w-7 h-7 rounded-full object-cover" />
                  ) : (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#1a0e00' }}>
                      {session.user.name?.[0]?.toUpperCase() ?? 'U'}
                    </div>
                  )}
                  <span className="font-thai text-sm max-w-[120px] truncate" style={{ color: '#f5e6c0' }}>
                    {session.user.name ?? session.user.email}
                  </span>
                  <svg className={`w-3.5 h-3.5 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="rgba(201,168,76,0.7)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden z-50"
                    style={{ background: '#0f0f24', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                    <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
                      <p className="font-thai text-xs font-semibold truncate" style={{ color: '#c9a84c' }}>{session.user.name}</p>
                      <p className="font-thai text-xs truncate" style={{ color: 'rgba(245,230,192,0.4)' }}>{session.user.email}</p>
                    </div>
                    {[
                      { label: 'โปรไฟล์', href: '/profile' },
                      { label: 'ดวงของฉัน', href: '/my-horoscope' },
                      { label: 'ตั้งค่า', href: '/settings' },
                    ].map((item) => (
                      <Link key={item.label} href={item.href}
                        onClick={() => setUserMenuOpen(false)}
                        className="block px-4 py-2.5 font-thai text-sm transition-colors hover:bg-yellow-900/20"
                        style={{ color: 'rgba(245,230,192,0.7)' }}>
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
                      <button
                        onClick={() => { signOut({ callbackUrl: '/' }); setUserMenuOpen(false) }}
                        className="w-full text-left px-4 py-2.5 font-thai text-sm transition-colors hover:bg-red-900/20"
                        style={{ color: 'rgba(255,120,120,0.8)' }}>
                        ออกจากระบบ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Not logged in */
              <>
                <button onClick={openLogin} className="btn-outline text-sm px-5 py-2">เข้าสู่ระบบ</button>
                <button onClick={openRegister} className="btn-gold text-sm px-5 py-2">สมัครสมาชิก</button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gold-300 p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-yellow-900/20">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" onClick={() => setIsOpen(false)} className={`nav-link ${isActive('/') ? 'active' : ''}`}>หน้าแรก</Link>
              <Link href="/personal-horoscope" onClick={() => setIsOpen(false)} className={`nav-link ${isActive('/personal-horoscope') ? 'active' : ''}`}>ดูดวงส่วนตัว</Link>
              <Link href="/daily-horoscope" onClick={() => setIsOpen(false)} className={`nav-link ${isActive('/daily-horoscope') ? 'active' : ''}`}>ดูดวงรายวัน</Link>
              <Link href="/astrology-articles" onClick={() => setIsOpen(false)} className={`nav-link ${isActive('/astrology-articles') ? 'active' : ''}`}>บทความโหราศาสตร์</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)} className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>เกี่ยวกับเรา</Link>
              <div className="flex gap-3 pt-2">
                {session?.user ? (
                  <button onClick={() => signOut({ callbackUrl: '/' })}
                    className="btn-outline text-sm flex-1">ออกจากระบบ</button>
                ) : (
                  <>
                    <button onClick={() => { openLogin(); setIsOpen(false) }} className="btn-outline text-sm flex-1">เข้าสู่ระบบ</button>
                    <button onClick={() => { openRegister(); setIsOpen(false) }} className="btn-gold text-sm flex-1">สมัครสมาชิก</button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.open}
        defaultTab={authModal.tab}
        onClose={closeAuth}
      />
    </>
  )
}
