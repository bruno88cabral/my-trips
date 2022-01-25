import { createGlobalStyle } from 'styled-components'

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 736
  }
}

const GlobalStyles = createGlobalStyle`
    :root {
        --highlight: #00ADB5;
        --background: #222831;
        --off-black: #393E46;
        --white: #eee;

        --container: ${isMobile() ? '80%' : '65%'};

        --small: ${isMobile() ? '1.8rem' : '2rem'};
        --medium: ${isMobile() ? '2rem' : '3rem'};
        --large: ${isMobile() ? '3rem' : '5rem'};
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    html, body, #__next {
        height: 100%;
        background: var(--background);
        color: var(--white);
    } 

    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    }

    p {
        font-size: 2rem;
        line-height: var(--medium);
    }

    a {
        color: var(--highlight);
    }
`

export default GlobalStyles
