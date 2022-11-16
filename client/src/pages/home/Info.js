import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { Loading, Header, BarChart } from '../../components'

export default function Info() {
  const { isLoading, showInfo, monthlyDrinks } = useAppContext()

  useEffect(() => {
    showInfo()
  }, [showInfo])

  if (isLoading) {
    return <Loading center />
  }
  return (
    <div>
      <Header text="monthly" />
      {monthlyDrinks?.length ? (
        <BarChart data={monthlyDrinks} />
      ) : (
        <h3>No drinks to track</h3>
      )}
    </div>
  )
}
