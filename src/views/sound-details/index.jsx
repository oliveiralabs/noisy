import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import GlobalStyle from '../../GlobalStyle'
import Header from '../header'
import { useParams } from 'react-router-dom';
import Loading from "../components/loading";


const ContainerStyled = styled.div`
  overflow: auto;
  height: 100vh;
`

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  margin: 150px auto 0 auto;

  & .gifAudioContainer {
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    position: relative;
  }

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  & .iconButtonMaterial {
    z-index: 1;
    align-self: center;

    & .material-symbols-outlined {
      color: white;
      font-size: 100px;
      transition: color 150ms linear, font-size 100ms;

      &:hover {
        color: #deffc8;
        font-size: 120px;
      }
    }
  }
`

function SoundDetails() {
  const [isLoading, setIsLoading] = useState(true)
  const { soundSlug } = useParams()
  const endpoint = `https://oliveiralabs.github.io/noisy-sounds/content/${soundSlug}`
  const infoJson = `${endpoint}/info.json`
  const [soundTitle, setSoundTitle] = useState('')


  useEffect(() => {
    fetch(infoJson)
      .then(res => res.json())
      .then(result => {
          setSoundTitle(result.name)
          setIsLoading(false)
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  const content = (
    <DivStyle>
      <h1>{soundTitle}</h1>
      <div className="gifAudioContainer">
        <img src={`${endpoint}/gif.gif`} alt={soundTitle} />
        <a className="iconButtonMaterial" href="#">
          <span className="material-symbols-outlined">play_circle</span>
        </a>
      </div>
    </DivStyle>
  )

  return (
    <ContainerStyled>
      <GlobalStyle />
      <Header onSearchTermChange={() => {}} hideSearchBar={true} />
      {isLoading ? <DivStyle><Loading /></DivStyle> : content}
    </ContainerStyled>
  )
}

export default SoundDetails
