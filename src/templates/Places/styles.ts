import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShinner 1s linear infinite forwards;

    @keyframes placeholderShinner {
      0% {
        background-position: 0 -40rem;
      }
      100% {
        background-position: 0 40rem;
      }
    }
  }
`
