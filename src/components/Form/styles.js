import styled from 'styled-components'

export const Wrapper = styled.div`
  width: clamp(500px, 50%, 800px);
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`

export const Inputs = styled.div`
  display: flex;
  gap: 1rem;

  input {
    border-radius: 4px;
  }
`
