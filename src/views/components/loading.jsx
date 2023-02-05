import styled from 'styled-components'

const LoadingStyled = styled.div`
  margin-top: 100px;
  display: grid;
  place-items: center;
  
  & .loading {
    display: flex;
    transform: scale(4);
  }

  & .loading .ball {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.5rem;
    transition: transform 0.3s infinite;
  }

  & .ball + & .ball {
    margin-left: 0.4rem;
  }

  & .loading .ball.one {
    animation: loadingBall 0.5s infinite alternate;
    background: #FF592930;
  }
  & .loading .ball.two {
    animation: loadingBall2 0.5s infinite 0.2s alternate;
    background: #FC065130;
  }
  & .loading .ball.three {
    animation: loadingBall3 0.5s infinite 0.35s alternate;
    background: #6CB94430;
  }
  & .loading .ball.four {
    animation: loadingBall4 0.5s infinite 0.5s alternate;
    background: #2DE2FA30;
  }

  @keyframes loadingBall {

    0% {
      transform: translateY(-10px) scale(1.2);
      background: #FF5929;
      box-shadow: 0 0 2px #FF5929aa;
    }
    100% {
      transform: translateY(5px);
    }
  }

  @keyframes loadingBall2 {

    0% {
      transform: translateY(-10px) scale(1.2);
      background: #FC0651;
      box-shadow: 0 0 2px #FC0651aa;
    }
    100% {
      transform: translateY(5px);
    }
  }

  @keyframes loadingBall3 {
  
    0% {
      transform: translateY(-10px) scale(1.2);
      background: #6CB944;
      box-shadow: 0 0 2px #6CB944aa;
    }
    100% {
      transform: translateY(5px);
    }
  }

  @keyframes loadingBall4 {

    0% {
      transform: translateY(-10px) scale(1.2);
      background: #2DE2FA;
      box-shadow: 0 0 2px #2DE2FAaa;
    }
    100% {
      transform: translateY(5px);
    }
  }
`

const Loading  = () => {
  return (
    <LoadingStyled>
      <div className="loading">
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
        <div className="ball four"></div>
      </div>
    </LoadingStyled>
  )
}


export default Loading