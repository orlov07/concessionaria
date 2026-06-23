'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import { VehicleCard } from '@/components/ui/VehicleCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { vehicles } from '@/data/vehicles'

type SortOption = 'recent' | 'price-asc' | 'price-desc' | 'km-asc'

const kmOptions = ['Qualquer', 'Até 30K', '30K–60K', '60K–100K', '+100K']
const transmissionOptions = ['Qualquer', 'Manual', 'Automático', 'CVT']
const fuelOptions = ['Qualquer', 'Flex', 'Gasolina', 'Diesel', 'Elétrico', 'Híbrido']
const brandOptions = ['Todas', ...Array.from(new Set(vehicles.map((v) => v.brand))).sort()]

interface Filters {
  brand: string
  minPrice: number
  maxPrice: number
  minYear: number
  maxYear: number
  km: string
  transmission: string
  fuel: string
  category: string
}

const defaultFilters: Filters = {
  brand: '',
  minPrice: 0,
  maxPrice: 999999,
  minYear: 2000,
  maxYear: 2025,
  km: '',
  transmission: '',
  fuel: '',
  category: '',
}

export default function EstoquePage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [sort, setSort] = useState<SortOption>('recent')
  const [page, setPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const PER_PAGE = 9

  const filtered = useMemo(() => {
    let list = [...vehicles]

    if (filters.brand) list = list.filter((v) => v.brand === filters.brand)
    if (filters.category) list = list.filter((v) => v.category === filters.category)
    if (filters.transmission) list = list.filter((v) => v.transmission === filters.transmission)
    if (filters.fuel) list = list.filter((v) => v.fuel === filters.fuel)
    list = list.filter((v) => v.price >= filters.minPrice && v.price <= (filters.maxPrice || 999999))
    list = list.filter((v) => v.year >= filters.minYear && v.year <= filters.maxYear)

    if (filters.km === 'Até 30K') list = list.filter((v) => v.km <= 30000)
    else if (filters.km === '30K–60K') list = list.filter((v) => v.km > 30000 && v.km <= 60000)
    else if (filters.km === '60K–100K') list = list.filter((v) => v.km > 60000 && v.km <= 100000)
    else if (filters.km === '+100K') list = list.filter((v) => v.km > 100000)

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (sort === 'km-asc') list.sort((a, b) => a.km - b.km)

    return list
  }, [filters, sort])

  const paginated = filtered.slice(0, page * PER_PAGE)

  const clearFilters = () => {
    setFilters(defaultFilters)
    setPage(1)
  }

  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters((f) => ({ ...f, [key]: value }))
    setPage(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-[#666] text-xs uppercase tracking-widest mb-6">
        <span className="hover:text-[#C9A227] cursor-pointer">Home</span>
        <span className="mx-2">/</span>
        <span className="text-[#C9A227]">Estoque</span>
      </nav>

      <SectionHeader title="Nosso Estoque" highlight="Estoque" subtitle={`${filtered.length} veículos encontrados`} />

      <div className="flex gap-8">
        {/* Sidebar filters (desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar filters={filters} updateFilter={updateFilter} clearFilters={clearFilters} />
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Sort bar */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 border border-[#333] text-[#AAA] px-4 py-2 text-sm hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
            >
              <SlidersHorizontal size={14} /> Filtros
            </button>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[#666] text-xs uppercase tracking-wide hidden sm:block">Ordenar:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="bg-[#111] border border-[#333] text-[#AAA] px-3 py-2 text-xs focus:border-[#C9A227] outline-none"
              >
                <option value="recent">Mais recentes</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="km-asc">Menor km</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-white font-oswald text-xl uppercase mb-2">Nenhum veículo encontrado</p>
              <p className="text-[#666] text-sm mb-6">Tente ajustar os filtros de busca</p>
              <button onClick={clearFilters} className="border border-[#C9A227] text-[#C9A227] px-6 py-2.5 text-sm uppercase font-bold hover:bg-[#C9A227] hover:text-black transition-colors">
                Limpar filtros
              </button>
            </div>
          ) : (
            <>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
              >
                {paginated.map((v) => <VehicleCard key={v.id} {...v} />)}
              </motion.div>

              {paginated.length < filtered.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="border border-[#C9A227] text-[#C9A227] px-8 py-3 text-sm uppercase font-bold hover:bg-[#C9A227] hover:text-black transition-colors"
                  >
                    Carregar mais ({filtered.length - paginated.length} restantes)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile filter modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowFilters(false)} />
          <div className="relative ml-auto w-80 bg-[#111] h-full overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-5">
              <span className="font-oswald text-white uppercase tracking-wide">Filtros</span>
              <button onClick={() => setShowFilters(false)}><X size={20} className="text-[#AAA]" /></button>
            </div>
            <FilterSidebar filters={filters} updateFilter={updateFilter} clearFilters={() => { clearFilters(); setShowFilters(false) }} />
          </div>
        </div>
      )}
    </div>
  )
}

function FilterSidebar({ filters, updateFilter, clearFilters }: {
  filters: Filters
  updateFilter: (key: keyof Filters, value: any) => void
  clearFilters: () => void
}) {
  const selectClass = 'w-full bg-[#0a0a0a] border border-[#333] text-[#AAA] px-3 py-2 text-sm focus:border-[#C9A227] outline-none transition-colors'

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className="text-[#666] text-xs uppercase tracking-widest block mb-2">Marca</label>
        <select className={selectClass} value={filters.brand} onChange={(e) => updateFilter('brand', e.target.value === 'Todas' ? '' : e.target.value)}>
          {brandOptions.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>

      <div>
        <label className="text-[#666] text-xs uppercase tracking-widest block mb-2">Câmbio</label>
        <select className={selectClass} value={filters.transmission} onChange={(e) => updateFilter('transmission', e.target.value === 'Qualquer' ? '' : e.target.value)}>
          {transmissionOptions.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="text-[#666] text-xs uppercase tracking-widest block mb-2">Combustível</label>
        <select className={selectClass} value={filters.fuel} onChange={(e) => updateFilter('fuel', e.target.value === 'Qualquer' ? '' : e.target.value)}>
          {fuelOptions.map((f) => <option key={f}>{f}</option>)}
        </select>
      </div>

      <div>
        <label className="text-[#666] text-xs uppercase tracking-widest block mb-2">Quilometragem</label>
        <select className={selectClass} value={filters.km} onChange={(e) => updateFilter('km', e.target.value === 'Qualquer' ? '' : e.target.value)}>
          {kmOptions.map((k) => <option key={k}>{k}</option>)}
        </select>
      </div>

      <div>
        <label className="text-[#666] text-xs uppercase tracking-widest block mb-2">
          Preço máximo: R$ {(filters.maxPrice === 999999 ? 200000 : filters.maxPrice).toLocaleString('pt-BR')}
        </label>
        <input
          type="range" min={20000} max={200000} step={5000}
          value={filters.maxPrice === 999999 ? 200000 : filters.maxPrice}
          onChange={(e) => updateFilter('maxPrice', Number(e.target.value) === 200000 ? 999999 : Number(e.target.value))}
          className="w-full accent-[#C9A227]"
        />
      </div>

      <button onClick={clearFilters} className="text-[#888] text-xs uppercase tracking-widest underline hover:text-[#C9A227] transition-colors text-left">
        Limpar filtros
      </button>
    </div>
  )
}
