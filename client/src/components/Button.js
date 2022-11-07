import styled from 'styled-components'
export default function Button({ text }) {
  return <Section>{text}</Section>
}

const Section = styled.button`
  background: var(--colorPrimary);
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--borderRadius);
  cursor: pointer;
  transition: var(--transition);
  font-size: 1.1rem;
  font-family: var(--fontFamily);
  color: var(--colorDark);

  &:hover {
    background-color: var(--colorPrimaryHover);
  }
`
