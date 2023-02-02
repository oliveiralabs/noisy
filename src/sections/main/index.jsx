import Loading from './loading'
import Error from './error'
import styled from 'styled-components'
import SoundItem from './soundItem'

const MainStyled = styled.main`
  width: 100%;
  margin-top: 150px;
`

const SoundsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`

const Main = (props) => {
  const {error, isLoading, soundsArray} = props
  
  let content;

  if (error) {
    content = <Error>Error: {error.message}</Error>;
  } else if (isLoading) {
    content = <Loading />;
  } else {
    content = (
      <SoundsContainerStyled>
       { soundsArray.map((item, index) => <SoundItem sound={item} key={index} />) }
      </SoundsContainerStyled>
    )
  }

  return <MainStyled>{content}</MainStyled>
}

export default Main