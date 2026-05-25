'use client'
import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'

interface AuthModalProps {
  isOpen: boolean
  defaultTab?: 'login' | 'register'
  onClose: () => void
}

export default function AuthModal({ isOpen, defaultTab = 'login', onClose }: AuthModalProps) {
  const [tab, setTab] = useState<'login' | 'register'>(defaultTab)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')

  // Sync tab when defaultTab changes (e.g. open register from button)
  useEffect(() => { setTab(defaultTab) }, [defaultTab])

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!isOpen) return null

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    setError('')
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (tab === 'register' && form.password !== form.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน')
      return
    }
    setIsLoading(true)
    try {
      if (tab === 'login') {
        const result = await signIn('credentials', {
          email: form.email,
          password: form.password,
          redirect: false,
        })
        if (result?.error) setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
        else onClose()
      } else {
        // Register — call your API route here
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
        })
        if (!res.ok) {
          const data = await res.json()
          setError(data.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่')
        } else {
          // Auto-login after register
          await signIn('credentials', { email: form.email, password: form.password, redirect: false })
          onClose()
        }
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200]"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center px-4">
        <div
          className="relative w-full max-w-md"
          style={{
            // background: 'linear-gradient(135deg, #09091a 0%, #0f0f28 100%)',
            backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1,
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '16px',
            boxShadow: '0 0 60px rgba(201,168,76,0.12), 0 30px 80px rgba(0,0,0,0.6)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top gold line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)' }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-yellow-900/20"
            style={{ color: 'rgba(201,168,76,0.6)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="px-8 pt-8 pb-8" >
            {/* Logo */}
            <div className="text-center mb-6">
              <img src="/logo.png" alt="SURIYAN" className="w-32 h-32 mx-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.85))' }} />
              <h2 className="font-serif text-2xl font-bold gold-text tracking-widest">SURIYAN</h2>
              <p className="font-thai text-xs mt-1" style={{ color: 'rgba(245,230,192,0.45)' }}>
                ศาสตร์แห่งดวงอาทิตย์ สุริยยาตร์
              </p>
            </div>

            {/* Tabs */}
            <div className="flex mb-6 rounded-lg overflow-hidden"
              style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(0,0,0,0.3)' }}>
              {(['login', 'register'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setError('') }}
                  className="flex-1 py-2.5 font-thai text-sm font-semibold transition-all"
                  style={{
                    background: tab === t ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'transparent',
                    color: tab === t ? '#1a0e00' : 'rgba(201,168,76,0.6)',
                  }}
                >
                  {t === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
                </button>
              ))}
            </div>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-lg mb-5 font-thai text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: '#fff',
                color: '#1a1a1a',
                border: 'none',
                boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
              }}
            >
              {/* Google icon */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {tab === 'login' ? 'เข้าสู่ระบบด้วย Google' : 'สมัครด้วย Google'}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.15)' }} />
              <span className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.35)' }}>หรือใช้อีเมล</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.15)' }} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name (register only) */}
              {tab === 'register' && (
                <div>
                  <label className="font-thai text-xs mb-1.5 block" style={{ color: 'rgba(201,168,76,0.75)' }}>
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="กรอกชื่อ-นามสกุล"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg font-thai text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      color: '#f5e6c0',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="font-thai text-xs mb-1.5 block" style={{ color: 'rgba(201,168,76,0.75)' }}>
                  อีเมล
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg font-thai text-sm outline-none transition-all"
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: '#f5e6c0',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              {/* Password */}
              <div>
                <label className="font-thai text-xs mb-1.5 block" style={{ color: 'rgba(201,168,76,0.75)' }}>
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="อย่างน้อย 8 ตัวอักษร"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full px-4 py-2.5 pr-11 rounded-lg font-thai text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      color: '#f5e6c0',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: 'rgba(201,168,76,0.5)' }}
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password (register only) */}
              {tab === 'register' && (
                <div>
                  <label className="font-thai text-xs mb-1.5 block" style={{ color: 'rgba(201,168,76,0.75)' }}>
                    ยืนยันรหัสผ่าน
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="กรอกรหัสผ่านอีกครั้ง"
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg font-thai text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      color: '#f5e6c0',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                </div>
              )}

              {/* Forgot password (login only) */}
              {tab === 'login' && (
                <div className="text-right -mt-1">
                  <button type="button" className="font-thai text-xs hover:underline"
                    style={{ color: 'rgba(201,168,76,0.6)' }}>
                    ลืมรหัสผ่าน?
                  </button>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="px-4 py-2.5 rounded-lg font-thai text-xs"
                  style={{ background: 'rgba(220,50,50,0.12)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080' }}>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-gold w-full py-3 text-sm mt-1 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    กำลังดำเนินการ...
                  </>
                ) : tab === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
              </button>
            </form>

            {/* Switch tab link */}
            <p className="text-center font-thai text-xs mt-5" style={{ color: 'rgba(245,230,192,0.4)' }}>
              {tab === 'login' ? 'ยังไม่มีบัญชี?' : 'มีบัญชีแล้ว?'}{' '}
              <button
                onClick={() => { setTab(tab === 'login' ? 'register' : 'login'); setError('') }}
                className="hover:underline font-semibold"
                style={{ color: 'rgba(201,168,76,0.8)' }}
              >
                {tab === 'login' ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
