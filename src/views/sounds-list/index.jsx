import Loading from './loading'
import Error from './error'
import styled from 'styled-components'
import SoundItem from './soundItem'

const ContainerStyled = styled.main`
  width: 100%;
  margin-top: 150px;
`

const SoundsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`

const SoundsList = (props) => {
  const {error, isLoading, soundsArray} = props
  
  let content;

  if (error) {
    content = <Error>Error: {error.message}</Error>;
  } else if (isLoading) {
    content = <Loading />;
  } else {
    content = (
      <SoundsGridStyled>
       { soundsArray.map((item, index) => <SoundItem sound={item} key={index} />) }
      </SoundsGridStyled>
    )
  }

  return <ContainerStyled>{content}</ContainerStyled>
}

export default SoundsList