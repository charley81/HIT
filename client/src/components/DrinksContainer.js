import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import { Loading, PagBtnCtn } from '.'
import Drink from './Drink'
import styled from 'styled-components'
import Alert from './Alert'

export default function DrinksContainer() {
  const {
    getDrinks,
    drinks,
    isLoading,
    totalDrinks,
    search,
    sort,
    numOfPages,
    page,
    showAlert
  } = useAppContext()

  useEffect(() => {
    getDrinks()
  }, [search, sort, page])

  if (isLoading) {
    return <Loading center />
  }

  if (drinks.length === 0) {
    return (
      <Section>
        <h2>No drinks to display...</h2>
      </Section>
    )
  }

  return (
    <Section>
      {showAlert && <Alert />}
      <header>
        <h4>
          {totalDrinks} drink{drinks.length > 1 && 's'}
        </h4>
        <h4>
          {page} of {numOfPages}
        </h4>
      </header>

      <div className="drinks">
        {drinks.map(drink => {
          return <Drink key={drink._id} {...drink} />
        })}
      </div>
      {numOfPages > 1 && <PagBtnCtn />}
    </Section>
  )
}

const Section = styled.section`
  max-width: var(--maxWidthTotal);
  margin: auto;
  padding: 1rem;

  header {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    margin-bottom: 1rem;
    color: var(--colorGreyMid);
  }

  .drinks {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
    gap: 1rem;
  }
`
