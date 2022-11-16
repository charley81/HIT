import styled from 'styled-components'

export default function Input({
  type,
  name,
  value,
  onChange,
  text,
  placeholder
}) {
  return (
    <Group>
      <label htmlFor={name}>{text || name}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Group>
  )
}

const Group = styled.div`
  label {
    display: block;
    text-transform: capitalize;
  }

  input {
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
