import styled from 'styled-components'

export default function FormGroupSelect({
  labelText,
  name,
  value,
  onChange,
  list
}) {
  return (
    <Section>
      <label htmlFor={name}>{labelText || name}</label>
      <select name={name} value={value} onChange={onChange}>
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

const Section = styled.div`
  label {
    display: block;
    text-transform: capitalize;
  }

  select {
    display: block;
    width: 100%;
    padding: 0.5rem 0 1rem;
    border: none;
    border-bottom: 1px solid var(--colorDark);
    margin-bottom: 1rem;
    background-color: var(--colorLight);

    &::placeholder {
      color: var(--colorGreyMid);
      font-size: 1.1rem;
    }

    &:focus {
      outline: none;
      background-color: inherit;
      background-color: var(--colorLight);
    }
  }
`
