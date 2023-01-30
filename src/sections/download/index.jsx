import styled from 'styled-components'
import colors from '../../utils/colors'

const DownloadStyled = styled.aside`
  display: flex;
  flex-direction: row;  
  align-items: center;
  margin-left: 20px;

  h1 {
    font-size: 100%;
    color: ${() => colors.greyText};
  }

  a > img {
    width: 200px;
  }
`

const Download = () => {
  return (
    <DownloadStyled>
      <h1>Download Noisy App 👉</h1>
      <a href='https://play.google.com/store/apps/details?id=com.oliveiralabs.xpads' target={"_blank"}>
        <img 
          alt='Get Noisy on Google Play' 
          src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
        />
      </a>
    </DownloadStyled>
  )
}


export default Download
