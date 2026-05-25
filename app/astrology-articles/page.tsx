'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { articles, categories } from '@/lib/articles'

export default function AstrologyArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'all' || a.categorySlug === activeCategory
    const matchSearch = !search || a.title.includes(search) || a.excerpt.includes(search) || a.tags.some(t => t.includes(search))
    return matchCat && matchSearch
  })

  const featured = articles[0]

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden" style={{ minHeight: '38vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.7 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(4,4,10,0.5) 0%, rgba(4,4,10,0.2) 50%, rgba(4,4,10,0.95) 100%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex justify-center mb-5">
            <img src="/logo.png" alt="SURIYAN" className="w-16 h-16 object-contain" style={{ filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.55))' }} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold gold-text mb-3 tracking-wider">บทความโหราศาสตร์</h1>
          <p className="font-thai text-base mb-8" style={{ color: 'rgba(245,230,192,0.6)' }}>ความรู้โหราศาสตร์ไทย บทความพิเศษ จากนักโหร</p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <input type="text" placeholder="ค้นหาบทความ..." value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full font-thai text-sm outline-none"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(201,168,76,0.35)', color: '#f5e6c0' }} />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4" fill="none" stroke="rgba(201,168,76,0.6)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured */}
      {!search && activeCategory === 'all' && (
        <section className="px-4 pb-10" style={{ background: '#04040a' }}>
          <div className="max-w-5xl mx-auto">
            <p className="font-thai text-xs mb-3 uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.45)' }}>✦ บทความแนะนำ</p>
            <Link href={`/astrology-articles/${featured.slug}`}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,76,0.15)]"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
                <div className="relative h-64 md:h-80">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(4,4,10,0.97) 35%, rgba(4,4,10,0.2))' }} />
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14 max-w-2xl">
                    <span className="font-thai text-xs px-3 py-1 rounded-full mb-4 inline-block w-fit"
                      style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c' }}>
                      {featured.category}
                    </span>
                    <h2 className="font-thai font-bold text-2xl md:text-3xl mb-3 group-hover:text-yellow-300 transition-colors" style={{ color: '#f5e6c0' }}>
                      {featured.title}
                    </h2>
                    <p className="font-thai text-sm leading-relaxed mb-5" style={{ color: 'rgba(245,230,192,0.55)' }}>{featured.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs font-thai" style={{ color: 'rgba(245,230,192,0.4)' }}>
                      <span>{featured.author}</span><span>•</span>
                      <span>{featured.date}</span><span>•</span>
                      <span>⏱ {featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category tabs */}
      <section className="px-4 pb-8" style={{ background: '#04040a' }}>
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat.slug} onClick={() => setActiveCategory(cat.slug)}
              className="font-thai text-sm px-5 py-2 rounded-full transition-all"
              style={{
                background: activeCategory === cat.slug ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'transparent',
                color: activeCategory === cat.slug ? '#1a0e00' : 'rgba(201,168,76,0.7)',
                border: activeCategory === cat.slug ? 'none' : '1px solid rgba(201,168,76,0.25)',
                fontWeight: activeCategory === cat.slug ? 700 : 400,
              }}>{cat.label}</button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-4" style={{ background: '#04040a' }}>
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-thai text-lg" style={{ color: 'rgba(245,230,192,0.35)' }}>ไม่พบบทความที่ค้นหา</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <Link key={article.slug} href={`/astrology-articles/${article.slug}`}>
                  <div className="blog-card cursor-pointer group h-full flex flex-col">
                    <div className="relative overflow-hidden" style={{ height: '200px' }}>
                      <img src={article.img} alt={article.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(4,4,10,0.97))' }} />
                      <span className="absolute top-3 left-3 font-thai text-xs px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c' }}>
                        {article.category}
                      </span>
                      <span className="absolute top-3 right-3 font-thai text-xs px-2 py-1 rounded"
                        style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(245,230,192,0.55)' }}>
                        ⏱ {article.readTime}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-thai font-bold text-base mb-2 leading-snug group-hover:text-yellow-400 transition-colors"
                        style={{ color: 'rgba(245,230,192,0.9)' }}>{article.title}</h3>
                      <p className="font-thai text-xs leading-relaxed mb-4 flex-1" style={{ color: 'rgba(245,230,192,0.5)' }}>{article.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="font-thai text-xs px-2 py-0.5 rounded"
                            style={{ background: 'rgba(201,168,76,0.08)', color: 'rgba(201,168,76,0.6)' }}>#{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                        <span className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.35)' }}>{article.date}</span>
                        <span className="font-thai text-xs font-semibold" style={{ color: '#c9a84c' }}>อ่านต่อ →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
