import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { articles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()
  const related = getRelatedArticles(article.related)

  return (
    <main style={{ background: '#04040a', minHeight: '100vh' }}>
      <Navbar />

      {/* Banner */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-72 md:h-96">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(4,4,10,0.35) 0%, rgba(4,4,10,0.98) 100%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/stars-bg.png)', backgroundSize: 'cover', opacity: 0.15 }} />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4 font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>
                <Link href="/" className="hover:text-yellow-400 transition-colors">หน้าแรก</Link>
                <span>/</span>
                <Link href="/astrology-articles" className="hover:text-yellow-400 transition-colors">บทความ</Link>
                <span>/</span>
                <span style={{ color: 'rgba(201,168,76,0.7)' }}>{article.category}</span>
              </div>
              <span className="font-thai text-xs px-3 py-1 rounded-full mb-3 inline-block"
                style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c' }}>
                {article.category}
              </span>
              <h1 className="font-thai font-bold text-2xl md:text-4xl leading-snug" style={{ color: '#f5e6c0' }}>{article.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6" style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#1a0e00' }}>
                {article.author.charAt(3)}
              </div>
              <div>
                <p className="font-thai text-sm font-semibold" style={{ color: '#c9a84c' }}>{article.author}</p>
                <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>{article.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto font-thai text-xs" style={{ color: 'rgba(245,230,192,0.4)' }}>
              <span>📅 {article.date}</span>
              <span>⏱ {article.readTime}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="font-thai text-base leading-loose mb-10 italic"
            style={{ color: 'rgba(245,230,192,0.65)', borderLeft: '3px solid #c9a84c', paddingLeft: '1.25rem' }}>
            {article.excerpt}
          </p>

          {/* Content */}
          <div className="space-y-10">
            {article.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(180deg,#f0d080,#c9a84c)' }} />
                    <h2 className="font-thai font-bold text-lg" style={{ color: '#c9a84c' }}>{section.heading}</h2>
                  </div>
                )}
                <div className="font-thai text-sm leading-[2.1] whitespace-pre-line" style={{ color: 'rgba(245,230,192,0.72)' }}>
                  {section.body}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
            <p className="font-thai text-xs mb-3" style={{ color: 'rgba(245,230,192,0.38)' }}>แท็ก:</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="font-thai text-sm px-3 py-1 rounded-full cursor-pointer transition-all hover:border-yellow-500"
                  style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)', color: 'rgba(201,168,76,0.7)' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 pt-6 flex items-center gap-3 flex-wrap" style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}>
            <span className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.38)' }}>แชร์:</span>
            {[{ label: 'Facebook', color: '#4267B2' }, { label: 'LINE', color: '#06C755' }, { label: 'X', color: '#aaa' }, { label: 'คัดลอกลิงก์', color: '#c9a84c' }].map((s) => (
              <button key={s.label} className="font-thai text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                style={{ background: `${s.color}22`, border: `1px solid ${s.color}55`, color: s.color }}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-10 fortune-card" style={{ padding: '1.5rem' }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#1a0e00' }}>
                {article.author.charAt(3)}
              </div>
              <div>
                <p className="font-thai font-bold text-base" style={{ color: '#c9a84c' }}>{article.author}</p>
                <p className="font-thai text-xs" style={{ color: 'rgba(245,230,192,0.5)' }}>{article.authorRole}</p>
              </div>
            </div>
            <p className="font-thai text-sm leading-relaxed" style={{ color: 'rgba(245,230,192,0.55)' }}>
              ผู้เชี่ยวชาญด้านโหราศาสตร์ไทยและสุริยยาตร์ มีประสบการณ์กว่า 20 ปีในการวิเคราะห์ดวงชะตาและเผยแพร่ความรู้โหราศาสตร์ไทยโบราณ
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg,#04040a,#06060e)' }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
              <span className="font-thai font-semibold" style={{ color: '#c9a84c' }}>บทความที่เกี่ยวข้อง</span>
              <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/astrology-articles/${rel.slug}`}>
                  <div className="blog-card group cursor-pointer flex gap-4 p-4">
                    <div className="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img src={rel.img} alt={rel.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-thai text-xs" style={{ color: 'rgba(201,168,76,0.6)' }}>{rel.category}</span>
                      <h3 className="font-thai font-semibold text-sm leading-snug mt-1 group-hover:text-yellow-400 transition-colors"
                        style={{ color: 'rgba(245,230,192,0.85)' }}>{rel.title}</h3>
                      <p className="font-thai text-xs mt-1" style={{ color: 'rgba(245,230,192,0.38)' }}>{rel.date} · {rel.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/astrology-articles">
                <button className="btn-outline px-8 py-2.5 font-thai text-sm">← ดูบทความทั้งหมด</button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
