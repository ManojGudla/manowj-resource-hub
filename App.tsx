import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Check, Code2, Compass, GraduationCap, Layers3, Search, Sparkles, Video, X } from 'lucide-react'
import { categories, resources } from './resources'

const categoryIcons: Record<string, typeof Sparkles> = {
  'AI Tools': Sparkles,
  'Career & Interviews': BriefcaseBusiness,
  'MCA & Study': GraduationCap,
  'Projects & Code': Code2,
  'Free Learning': BookOpen,
  'Developer Toolkit': Layers3,
  'Data & Analytics': Compass,
  'Web Development': Code2,
  'Cloud & DevOps': Layers3,
  'Coding Practice': Code2,
  'Creator Resources': Video,
}

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All resources')
  const [copied, setCopied] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return resources.filter((item) => {
      const matchesCategory = category === 'All resources' || item.category === category
      const matchesQuery = !q || `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('Copy your resource hub link:', window.location.href)
    }
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar wrap">
        <a className="brand" href="#" aria-label="maNOWj home"><span className="brand-mark">m.</span><span>maNOWj<span className="brand-dot">.</span></span></a>
        <button className="share-button" onClick={copyLink}>{copied ? <Check size={16} /> : null}{copied ? 'Copied' : 'Share hub'}{!copied ? <ArrowUpRight size={16} /> : null}</button>
      </header>

      <section className="hero wrap">
        <div className="eyebrow"><span className="pulse" /> A little help for your next big step</div>
        <h1>Your free<br /><span>growth toolkit.</span></h1>
        <p className="hero-copy">Useful AI tools, career roadmaps, coding platforms and learning resources, all collected in one place.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#resources">Explore resources <ArrowUpRight size={17} /></a>
          <span className="resource-count">{resources.length}+ hand-picked links</span>
        </div>
        <div className="hero-note"><Sparkles size={15} /> Curated by maNOWj, made for curious minds.</div>
      </section>

      <section className="directory wrap" id="resources">
        <div className="section-heading">
          <div><p className="section-kicker">THE DIRECTORY</p><h2>Find your next useful thing.</h2></div>
          <span className="result-count">{filtered.length} resources</span>
        </div>
        <div className="search-wrap"><Search size={19} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tools, skills, courses..." aria-label="Search resources" />{query && <button className="clear-search" onClick={() => setQuery('')} aria-label="Clear search"><X size={17} /></button>}</div>
        <div className="filters" aria-label="Filter by category">
          {categories.map((item) => <button key={item} className={`filter ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        {filtered.length ? <div className="resource-grid">{filtered.map((item) => {
          const Icon = categoryIcons[item.category] || BookOpen
          return <article className="resource-card" key={item.id}>
            <div className="card-top"><span className="card-icon"><Icon size={20} /></span>{item.tag && <span className="tag">{item.tag}</span>}</div>
            <p className="card-category">{item.category}</p>
            <h3>{item.name}</h3>
            <p className="card-description">{item.description}</p>
            <a className="resource-link" href={item.url} target="_blank" rel="noreferrer">Open resource <ArrowUpRight size={16} /></a>
          </article>
        })}</div> : <div className="empty-state"><Search size={28} /><h3>No resources found</h3><p>Try another search or clear your category filter.</p><button className="primary-button" onClick={() => { setQuery(''); setCategory('All resources') }}>Clear filters</button></div>}
      </section>

      <footer className="footer wrap">
        <a className="brand footer-brand" href="https://www.manowj.com/"><span className="brand-mark">m.</span><span>maNOWj<span className="brand-dot">.</span></span></a>
        <p>Stay curious. Keep building.</p>
        <a href="https://www.manowj.com/" target="_blank" rel="noreferrer">Visit maNOWj.com <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  )
}
