import styled from 'styled-components'

export default function FormGroupSelect({
  labelText,
  name,
  value,
  handleChange,
  list
}) {
  return (
    <Section>
      <label htmlFor={name}>{labelText || name}</label>
      <select name={name} value={value} onChange={handleChange}>
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          )
        })}
      </select>
    </Section>
  )
}

const Section = styled.div``
