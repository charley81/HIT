import styled from 'styled-components'
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { Loading, Header, BarChart } from '../../components'

export default function Info() {
  const { isLoading, showInfo, monthlyDrinks } = useAppContext()

  useEffect(() => {
    showInfo()
  }, [])

  if (isLoading) {
    return <Loading center />
  }
  return (
    <Section>
      <Header text="monthly" />
      {monthlyDrinks?.length ? (
        <BarChart data={monthlyDrinks} />
      ) : (
        <h3>No drinks to track</h3>
      )}
    </Section>
  )
}

const Section = styled.section`
  max-width: var(--maxWidthTotal);
  margin: auto;
  padding: 1rem;
`
