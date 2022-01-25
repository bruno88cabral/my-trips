import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: var(--medium);

  h2 {
    margin-bottom: var(--medium);
  }
`

export const Grid = styled.div`
  display: grid;
  width: var(--container);
  margin: 0 auto;
  grid-template-columns: 50px 50px 50px;
  align-items: center;
  justify-content: center;
`
