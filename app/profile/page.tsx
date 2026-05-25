'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/')
  }, [status, router])

  if (status === 'loading') return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#04040a' }}>
      <div className="text-center">
        <img src="/logo.png" alt="" className="w-16 h-16 mx-auto mb-4 object-contain animate-float" style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }} />
        <p className="font-thai text-sm" style={{ color: 'rgba(245,230,192,0.45)' }}>กำลังโหลด...</p>
      </div>
    </div>
  )

  if (!session) return null

  const user = session.user
  const menuItems = [
    { label: 'ดวงของฉัน', href: '/my-horoscope', icon: '🌟', desc: 'ดูประวัติดวงที่เคยดู' },
    { label: 'ดูดวงส่วนตัว', href: '/personal-horoscope', icon: '☀', desc: 'วิเคราะห์ดวงชะตาใหม่' },
    { label: 'ดูดวงรายวัน', href: '/daily-horoscope', icon: '📅', desc: 'ดวงประจำวันของคุณ' },
    { label: 'ฤกษ์มงคล', href: '/auspicious-days', icon: '✨', desc: 'เลือกวันมงคล' },
    { label: 'บทความ', href: '/astrology-articles', icon: '📖', desc: 'ความรู้โหราศาสตร์' },
  ]

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(4,4,10,0.6)0%,rgba(4,4,10,0.98)100%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="fortune-card" style={{ padding: '2.5rem' }}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {user?.image ? (
                  <img src={user.image} alt="" className="w-24 h-24 rounded-full object-cover" style={{ border: '3px solid rgba(201,168,76,0.4)', boxShadow: '0 0 30px rgba(201,168,76,0.2)' }} />
                ) : (
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold"
                    style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#1a0e00', border: '3px solid rgba(201,168,76,0.5)', boxShadow: '0 0 30px rgba(201,168,76,0.25)' }}>
                    {user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-thai font-bold text-2xl mb-1" style={{ color: '#f5e6c0' }}>{user?.name ?? 'ผู้ใช้'}</h1>
                <p className="font-thai text-sm mb-4" style={{ color: 'rgba(245,230,192,0.45)' }}>{user?.email}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="font-thai text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c' }}>สมาชิก SURIYAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick access */}
      <section className="py-8 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-thai text-sm font-semibold mb-5" style={{ color: '#c9a84c' }}>เมนูด่วน</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <div className="fortune-card cursor-pointer group transition-all hover:border-yellow-600/50 hover:-translate-y-1" style={{ padding: '1.25rem' }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-thai font-bold text-sm mb-1 group-hover:text-yellow-400 transition-colors" style={{ color: '#c9a84c' }}>{item.label}</p>
                  <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.45)' }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
