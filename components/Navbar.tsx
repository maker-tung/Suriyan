'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <img src="/logo.png" alt="SURIYAN logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-serif text-xl font-bold gold-text tracking-widest">SURIYAN</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="nav-link active">หน้าแรก</a>
          <a href="#" className="nav-link">ดูดวงส่วนตัว</a>
          <a href="#" className="nav-link">ดูดวงรายวัน</a>
          <a href="#" className="nav-link">บทความโหราศาสตร์</a>
          <a href="#" className="nav-link">เกี่ยวกับเรา</a>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline text-sm px-5 py-2">เข้าสู่ระบบ</button>
          <button className="btn-gold text-sm px-5 py-2">สมัครสมาชิก</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gold-300 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
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
            <a href="#" className="nav-link active">หน้าแรก</a>
            <a href="#" className="nav-link">ดูดวงส่วนตัว</a>
            <a href="#" className="nav-link">ดูดวงรายวัน</a>
            <a href="#" className="nav-link">บทความโหราศาสตร์</a>
            <a href="#" className="nav-link">เกี่ยวกับเรา</a>
            <div className="flex gap-3 pt-2">
              <button className="btn-outline text-sm flex-1">เข้าสู่ระบบ</button>
              <button className="btn-gold text-sm flex-1">สมัครสมาชิก</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
