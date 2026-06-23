'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import { VehicleCard } from '@/components/ui/VehicleCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { vehicles } from '@/data/vehicles'

type SortOption = 'recent' | 'price-asc' | 'price-desc' | 'km-asc'

const kmOptions = ['Qualquer', 'Ate 30K', '30K-60K', '60K-100K', '+100K']
const transmissionOptions = ['Qualquer', 'Manual', 'Automatico', 'CVT']
const fuelOptions = ['Qualquer', 'Flex', 'Gasolina', 'Diesel', 'Eletrico', 'Hibrido']
const brandOptions = ['Todas', ...Array.from(new Set(vehicles.map((vehicle) => vehicle.brand))).sort()]

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
  const perPage = 9

  const filtered = useMemo(() => {
    let list = [...vehicles]

    if (filters.brand) list = list.filter((vehicle) => vehicle.brand === filters.brand)
    if (filters.category) list = list.filter((vehicle) => vehicle.category === filters.category)
    if (filters.transmission) list = list.filter((vehicle) => vehicle.transmission === filters.transmission)
    if (filters.fuel) list = list.filter((vehicle) => vehicle.fuel === filters.fuel)
    list = list.filter((vehicle) => vehicle.price >= filters.minPrice && vehicle.price <= (filters.maxPrice || 999999))
    list = list.filter((vehicle) => vehicle.year >= filters.minYear && vehicle.year <= filters.maxYear)

    if (filters.km === 'Ate 30K') list = list.filter((vehicle) => vehicle.km <= 30000)
    else if (filters.km === '30K-60K') list = list.filter((vehicle) => vehicle.km > 30000 && vehicle.km <= 60000)
    else if (filters.km === '60K-100K') list = list.filter((vehicle) => vehicle.km > 60000 && vehicle.km <= 100000)
    else if (filters.km === '+100K') list = list.filter((vehicle) => vehicle.km > 100000)

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (sort === 'km-asc') list.sort((a, b) => a.km - b.km)

    return list
  }, [filters, sort])

  const paginated = filtered.slice(0, page * perPage)

  const clearFilters = () => {
    setFilters(defaultFilters)
    setPage(1)
  }

  const updateFilter = (key: keyof Filters, value: string | number) => {
    setFilters((current) => ({ ...current, [key]: value }))
    setPage(1)
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-6 text-xs uppercase tracking-widest text-[#666]">
          <span className="cursor-pointer transition-colors hover:text-[#C9A227]">Home</span>
          <span className="mx-2">/</span>
          <span className="text-[#C9A227]">Estoque</span>
        </nav>

        <SectionHeader title="Nosso Estoque" highlight="Estoque" subtitle={`${filtered.length} veiculos encontrados`} />

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden w-64 shrink-0 lg:block">
            <FilterSidebar filters={filters} updateFilter={updateFilter} clearFilters={clearFilters} />
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-6 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 rounded-sm border border-[#333] px-4 py-2 text-sm text-[#AAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227] lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filtros
              </button>

              <div className="ml-auto flex items-center gap-2">
                <span className="hidden text-xs uppercase tracking-wide text-[#666] sm:block">Ordenar:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="rounded-sm border border-[#333] bg-[#111] px-3 py-2 text-xs text-[#AAA] outline-none focus:border-[#C9A227]"
                >
                  <option value="recent">Mais recentes</option>
                  <option value="price-asc">Menor preco</option>
                  <option value="price-desc">Maior preco</option>
                  <option value="km-asc">Menor km</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-oswald mb-2 text-xl uppercase text-white">Nenhum veiculo encontrado</p>
                <p className="mb-6 text-sm text-[#666]">Tente ajustar os filtros de busca</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-sm border border-[#C9A227] px-6 py-2.5 text-sm font-bold uppercase text-[#C9A227] transition-colors hover:bg-[#C9A227] hover:text-black"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <>
                <motion.div
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  initial="initial"
                  animate="animate"
                  variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
                >
                  {paginated.map((vehicle) => (
                    <VehicleCard key={vehicle.id} {...vehicle} />
                  ))}
                </motion.div>

                {paginated.length < filtered.length ? (
                  <div className="mt-10 text-center">
                    <button
                      type="button"
                      onClick={() => setPage((current) => current + 1)}
                      className="rounded-sm border border-[#C9A227] px-8 py-3 text-sm font-bold uppercase text-[#C9A227] transition-colors hover:bg-[#C9A227] hover:text-black"
                    >
                      Carregar mais ({filtered.length - paginated.length} restantes)
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>

        {showFilters ? (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="absolute inset-0 bg-black/70" onClick={() => setShowFilters(false)} />
            <div className="relative ml-auto h-full w-80 overflow-y-auto bg-[#111] p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-oswald uppercase tracking-wide text-white">Filtros</span>
                <button type="button" onClick={() => setShowFilters(false)}>
                  <X size={20} className="text-[#AAA]" />
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                updateFilter={updateFilter}
                clearFilters={() => {
                  clearFilters()
                  setShowFilters(false)
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function FilterSidebar({
  filters,
  updateFilter,
  clearFilters,
}: {
  filters: Filters
  updateFilter: (key: keyof Filters, value: string | number) => void
  clearFilters: () => void
}) {
  const selectClass = 'w-full rounded-sm border border-[#333] bg-[#0a0a0a] px-3 py-2 text-sm text-[#AAA] outline-none transition-colors focus:border-[#C9A227]'

  return (
    <div className="flex flex-col gap-6 rounded border border-[#1f1f1f] bg-[#111] p-5">
      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-[#666]">Marca</label>
        <select className={selectClass} value={filters.brand} onChange={(e) => updateFilter('brand', e.target.value === 'Todas' ? '' : e.target.value)}>
          {brandOptions.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-[#666]">Cambio</label>
        <select className={selectClass} value={filters.transmission} onChange={(e) => updateFilter('transmission', e.target.value === 'Qualquer' ? '' : e.target.value)}>
          {transmissionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-[#666]">Combustivel</label>
        <select className={selectClass} value={filters.fuel} onChange={(e) => updateFilter('fuel', e.target.value === 'Qualquer' ? '' : e.target.value)}>
          {fuelOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-[#666]">Quilometragem</label>
        <select className={selectClass} value={filters.km} onChange={(e) => updateFilter('km', e.target.value === 'Qualquer' ? '' : e.target.value)}>
          {kmOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-[#666]">
          Preco maximo: R$ {(filters.maxPrice === 999999 ? 200000 : filters.maxPrice).toLocaleString('pt-BR')}
        </label>
        <input
          type="range"
          min={20000}
          max={200000}
          step={5000}
          value={filters.maxPrice === 999999 ? 200000 : filters.maxPrice}
          onChange={(e) => updateFilter('maxPrice', Number(e.target.value) === 200000 ? 999999 : Number(e.target.value))}
          className="w-full accent-[#C9A227]"
        />
      </div>

      <button type="button" onClick={clearFilters} className="text-left text-xs uppercase tracking-widest text-[#888] underline transition-colors hover:text-[#C9A227]">
        Limpar filtros
      </button>
    </div>
  )
}
