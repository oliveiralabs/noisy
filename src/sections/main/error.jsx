import colors from '../../utils/colors'
import styled from 'styled-components'

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #8f0000;
    margin: 20px 0;
  }

  h2 {
    font-size: 16px;
    color: ${() => colors.greyText};
  }

  img {
    width: 300px;
  }
`

const Error = () => {
  return (
    <ErrorStyled>
      <img src='error.png' />
      <h1>Sorry, something went wrong</h1>
      <h2>Try reloading the page. We're working hard to fix it for you as soon as possible.</h2>
    </ErrorStyled>
  )
}

export default Error