import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: space-between;
  border: 2px solid black;
`

const ButtonsContainer = ({ children, name }) => {
  return (
    <Container>
      <div>{name}</div>
      <div>{children}</div>
    </Container>
  )
}

export default ButtonsContainer
