import styled from 'styled-components'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';


const SoundItemStyled = styled.div`
  background: url('loading.gif') no-repeat center;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.41);
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
    display: block;  
    object-fit: cover;
  }
`

const SoundItem = (props) => {
  const soundTitle = props.sound.title
  const endpoint = `https://oliveiralabs.github.io/noisy-sounds/content/${encodeURIComponent(soundTitle)}/gif.gif`

  return (
    <SoundItemStyled>
      <img
        data-src={endpoint}
        alt={soundTitle}
        className="lazyload" />

    </SoundItemStyled>
  )
}

export default SoundItem