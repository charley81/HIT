import { FormGroup, FromGroupSelect } from '.'
import { useAppContext } from '../context/appContext'
import styled from 'styled-components'
import { useContext } from 'react'

export default function SearchContainer() {
  const { isLoading, search, sort, sortOptions, handleChange, clearFilters } =
    useAppContext()

  function handleSearch(e) {
    if (isLoading) return
    handleChange({
      name: e.target.name,
      value: e.target.value
    })
  }

  return (
    <Section>
      <form>
        <FormGroup
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          placeholder="search beer types i.e.. stout, ipa"
        />

        {/* submit btn */}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Submit
        </button>
      </form>
    </Section>
  )
}

const Section = styled.section``
