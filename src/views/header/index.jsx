import styled from 'styled-components'
import colors from '../../utils/colors'
import DownloadBtn from './downloadBtn'

const HeaderContainerStyled = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  z-index: 1;
`

const HeaderStyled = styled.div`
    padding: 20px 11%;
    display: flex;
    justify-content: space-between;
    height: 54px;
    align-items: center;
    border-bottom: solid 1px ${() => colors.greyBackground};
`

const LogoStyled = styled.a`
  outline: solid 1px ${() => colors.greyBackground};
  font-weight: bold;
  font-size: 40px;
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background: linear-gradient(#4f5bd5,#962fbf);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SearchInput = styled.div`
  margin-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;

  .icon {
    border-radius: 8px 0 0px 8px;
    background-color: ${() => colors.greyBackground};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    

    & > .material-symbols-outlined {
      color: #949494;
    }
  }

  input, input:focus, textarea:focus, select:focus {
    flex: 1;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background-color: ${() => colors.greyBackground};
    border-radius: 0 8px 8px 0;
    font-size: 100%;
    font-weight: bold;
    &::placeholder {
      color: #949494;
      opacity: 1;
    }
  }
`

const Header = (props) => {
  return (
    <HeaderContainerStyled>
    <HeaderStyled>
      <LogoStyled href="/">Noisy</LogoStyled>
      {
        props.hideSearchBar === true ? <></> : 
        <SearchInput>
          <div className='icon'>
            <span className="material-symbols-outlined">
              search
            </span>
          </div>
          <input onChange={(e) => props.onSearchTermChange(e.target.value)} type="text" placeholder="Search..." />
        </SearchInput>
      }
      <DownloadBtn />
    </HeaderStyled>
    </HeaderContainerStyled>
  )
}

export default Header