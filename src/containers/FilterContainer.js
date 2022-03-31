import React from 'react'
import AccordionSimple from '../components/AccordionSimple'
import { InputSearch } from '../styled/styledcomponents'

const FilterContainer = () => {
  return (
    <div>
        <InputSearch
        type='search'
        placeholder='Search'
        />
        <AccordionSimple />
    </div>
  )
}

export default FilterContainer