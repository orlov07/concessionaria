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
const priceRanges = ['Qualquer valor', 'Ate R$ 50K', 'R$ 50K - R$ 80K', 'R$ 80K - R$ 120K', 'Acima de R$ 120K']
const categories = ['SUV', 'Seda', 'Hatch', 'Pickup']

export function FilterBar({ onFilter }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    model: '',
    year: '',
    priceRange: '',
    category: '',
  })

  const update = (key: keyof FilterState, value: string) => {
    const next = { ...filters, [key]: value }
    setFilters(next)
  }

  const setCategory = (category: string) => {
    const next = { ...filters, category: filters.category === category ? '' : category }
    setFilters(next)
    onFilter?.(next)
  }

  const fieldClass =
    'w-full rounded-sm border border-[#2a2a2a] bg-[#0f0f0f] px-4 py-3 text-sm text-[#AAAAAA] outline-none transition-colors focus:border-[#C9A227]'

  return (
    <div className="rounded border border-[#1f1f1f] bg-[#111] p-5 md:p-7">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Buscar Veiculo</div>

      <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <select className={fieldClass} onChange={(e) => update('brand', e.target.value)}>
          {brands.map((brand) => (
            <option key={brand} value={brand === 'Todas as marcas' ? '' : brand}>
              {brand}
            </option>
          ))}
        </select>

        <input className={fieldClass} placeholder="Modelo" onChange={(e) => update('model', e.target.value)} />

        <select className={fieldClass} onChange={(e) => update('year', e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year === 'Qualquer ano' ? '' : year}>
              {year}
            </option>
          ))}
        </select>

        <select className={fieldClass} onChange={(e) => update('priceRange', e.target.value)}>
          {priceRanges.map((range) => (
            <option key={range} value={range === 'Qualquer valor' ? '' : range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setCategory(category)}
            className={`rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-[1px] transition-all ${
              filters.category === category
                ? 'border-[#C9A227] bg-[#C9A227] text-black'
                : 'border-[#333] text-[#888] hover:border-[#C9A227] hover:text-[#C9A227]'
            }`}
          >
            {category}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onFilter?.(filters)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#C9A227] px-5 py-2.5 text-xs font-extrabold uppercase tracking-[1px] text-black transition-colors hover:bg-[#E8C84A] sm:ml-auto sm:w-auto"
        >
          <Search size={13} />
          Buscar veiculo
        </button>
      </div>
    </div>
  )
}
