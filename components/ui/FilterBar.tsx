'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'

interface FilterBarProps {
  onFilter?: (filters: FilterState) => void
}

interface FilterState {
  brand: string
  model: string
  year: string
  priceRange: string
  category: string
}

const brands = ['Todas as marcas', 'Chevrolet', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Renault', 'Toyota', 'Volkswagen']
const years = ['Qualquer ano', '2023', '2022', '2021', '2020', '2019', '2018 ou anterior']
const priceRanges = ['Qualquer valor', 'Até R$ 50K', 'R$ 50K – R$ 80K', 'R$ 80K – R$ 120K', 'Acima de R$ 120K']
const categories = ['SUV', 'Sedã', 'Hatch', 'Pickup']

export function FilterBar({ onFilter }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    model: '',
    year: '',
    priceRange: '',
    category: '',
  })

  const update = (key: keyof FilterState, val: string) => {
    const next = { ...filters, [key]: val }
    setFilters(next)
  }

  const setCategory = (cat: string) => {
    const next = { ...filters, category: filters.category === cat ? '' : cat }
    setFilters(next)
    onFilter?.(next)
  }

  const selectClass = 'bg-[#0a0a0a] border border-[#1f1f1f] text-[#AAA] px-3 py-2.5 text-sm focus:border-[#C9A227] outline-none transition-colors w-full appearance-none'

  return (
    <div className="bg-[#111] border border-[#1f1f1f] p-5 md:p-6">
      <p className="text-[#C9A227] text-xs uppercase tracking-[0.2em] font-semibold mb-4">Buscar Veículo</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <select className={selectClass} onChange={(e) => update('brand', e.target.value)}>
          {brands.map((b) => <option key={b} value={b === 'Todas as marcas' ? '' : b}>{b}</option>)}
        </select>
        <input
          className={selectClass}
          placeholder="Modelo"
          onChange={(e) => update('model', e.target.value)}
        />
        <select className={selectClass} onChange={(e) => update('year', e.target.value)}>
          {years.map((y) => <option key={y} value={y === 'Qualquer ano' ? '' : y}>{y}</option>)}
        </select>
        <select className={selectClass} onChange={(e) => update('priceRange', e.target.value)}>
          {priceRanges.map((p) => <option key={p} value={p === 'Qualquer valor' ? '' : p}>{p}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-all ${
              filters.category === cat
                ? 'border-[#C9A227] bg-[#C9A227] text-black'
                : 'border-[#333] text-[#888] hover:border-[#C9A227] hover:text-[#C9A227]'
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => { onFilter?.(filters) }}
          className="ml-auto flex items-center gap-2 bg-[#C9A227] text-black px-5 py-2 text-xs font-bold uppercase tracking-wide hover:bg-[#E8C84A] transition-colors"
        >
          <Search size={13} /> Buscar
        </button>
      </div>
    </div>
  )
}
