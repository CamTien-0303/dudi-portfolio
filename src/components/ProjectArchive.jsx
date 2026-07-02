import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { allProjects, allIndustries } from '../data/projects'

const ITEMS_PER_PAGE = 12
const categoryFilters = ['Tất cả', 'Website', 'Web App']

export default function ProjectArchive({ isOpen, onClose }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [activeIndustry, setActiveIndustry] = useState('Tất cả')
  const [page, setPage] = useState(1)

  // Reset filters when opening
  useEffect(() => {
    if (isOpen) {
      setSearch('')
      setActiveCategory('Tất cả')
      setActiveIndustry('Tất cả')
      setPage(1)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Filter + search
  const filtered = useMemo(() => {
    let items = allProjects
    if (activeCategory !== 'Tất cả') {
      items = items.filter(p => p.category === activeCategory)
    }
    if (activeIndustry !== 'Tất cả') {
      items = items.filter(p => p.industry === activeIndustry)
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim()
      items = items.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.industry.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }
    return items
  }, [activeCategory, activeIndustry, search])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat)
    setPage(1)
  }, [])

  const handleIndustryChange = useCallback((ind) => {
    setActiveIndustry(ind)
    setPage(1)
  }, [])

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value)
    setPage(1)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="archive-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="archive-container allow-scroll"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="archive-header">
              <div>
                <h2 className="archive-title">Thư viện dự án</h2>
                <p className="archive-subtitle">
                  300+ dự án website, web app và hệ thống đã triển khai
                </p>
              </div>
              <button onClick={onClose} className="archive-close" aria-label="Đóng">
                <X size={20} />
              </button>
            </div>

            {/* Search + Filters */}
            <div className="archive-filters">
              <div className="archive-search-wrap">
                <Search size={16} className="archive-search-icon" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dự án..."
                  value={search}
                  onChange={handleSearch}
                  className="archive-search-input"
                />
              </div>

              <div className="archive-filter-row">
                {/* Category filter */}
                <div className="archive-chip-group">
                  {categoryFilters.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`archive-chip ${activeCategory === cat ? 'archive-chip-active' : ''}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Industry filter */}
                <div className="archive-chip-group archive-chip-group-scroll allow-scroll">
                  <button
                    onClick={() => handleIndustryChange('Tất cả')}
                    className={`archive-chip ${activeIndustry === 'Tất cả' ? 'archive-chip-active' : ''}`}
                  >
                    Tất cả ngành
                  </button>
                  {allIndustries.map(ind => (
                    <button
                      key={ind}
                      onClick={() => handleIndustryChange(ind)}
                      className={`archive-chip ${activeIndustry === ind ? 'archive-chip-active' : ''}`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="archive-results-count">
              <span>{filtered.length}</span> dự án
              {search && <span> cho "{search}"</span>}
            </div>

            {/* Grid */}
            <div className="archive-grid allow-scroll">
              {paged.length > 0 ? (
                paged.map((project) => (
                  <ArchiveCard key={project.id} project={project} />
                ))
              ) : (
                <div className="archive-empty">
                  <p>Không tìm thấy dự án phù hợp.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="archive-pagination">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="archive-page-btn"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="archive-page-numbers">
                  {generatePageNumbers(page, totalPages).map((num, i) =>
                    num === '...' ? (
                      <span key={`dots-${i}`} className="archive-page-dots">…</span>
                    ) : (
                      <button
                        key={num}
                        onClick={() => setPage(num)}
                        className={`archive-page-num ${page === num ? 'archive-page-num-active' : ''}`}
                      >
                        {num}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="archive-page-btn"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Archive Card ────────────────────────────────────────────────
function ArchiveCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="archive-card group"
    >
      {/* Image placeholder */}
      <div className="archive-card-img">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="archive-card-img-placeholder">
            <span style={{ color: project.color }}>{project.title.charAt(0)}</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="archive-card-img-hover">
          <ExternalLink size={18} />
          <span>Xem chi tiết</span>
        </div>
      </div>

      {/* Info */}
      <div className="archive-card-body">
        <div className="archive-card-meta">
          <span className="archive-card-industry">{project.industry}</span>
          <span className="archive-card-category">{project.category}</span>
        </div>
        <h4 className="archive-card-title">{project.title}</h4>
        <p className="archive-card-desc">{project.description}</p>
        {project.url && (
          <span className="archive-card-url">{project.url.replace('https://', '')}</span>
        )}
      </div>
    </a>
  )
}

// ── Pagination helpers ──────────────────────────────────────────
function generatePageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = []
  pages.push(1)
  if (current > 3) pages.push('...')
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i)
  }
  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
}
