import { FormGroup, FormGroupSelect } from '.'
import { useAppContext } from '../context/appContext'
import styled from 'styled-components'

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

  function handleSubmit(e) {
    e.preventDefault()
    clearFilters()
  }

  return (
    <Section>
      <form>
        <FormGroup
          type="text"
          name="search"
          value={search}
          handleChange={handleSearch}
          placeholder="search beer types i.e.. stout, ipa"
        />
        <FormGroupSelect
          name="sort"
          value={sort}
          handleChange={handleSearch}
          list={sortOptions}
        />

        {/* submit btn */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Clear Filters
        </button>
      </form>
    </Section>
  )
}

const Section = styled.section`
  padding: 1rem;
  max-width: var(--maxWidthTablet);
  margin: auto;

  form {
    margin: 2rem 0;
  }

  button {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    max-width: var(--formMaxDesktop);
  }
`
