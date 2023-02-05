import React, { useRef, useEffect, useState } from "react"
import styled from 'styled-components'
import GlobalStyle from '../../GlobalStyle'
import Header from '../header'

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
      font-size: 100px;
    }
  }
  
`

function SoundDetails() {
  const soundTitle = "hamist"//props.sound.title
  const endpoint = `https://oliveiralabs.github.io/noisy-sounds/content/${encodeURIComponent(soundTitle)}/gif.gif`

  return (
    <ContainerStyled>
      <GlobalStyle />
      <Header onSearchTermChange={() => {}} hideSearchBar={true} />
      <DivStyle>
        <h1>{soundTitle}</h1>
        <div className="gifAudioContainer">
          <img data-src={endpoint} alt={soundTitle} className="lazyload" />
          <a className="iconButtonMaterial" href="#">
            <span className="material-symbols-outlined">play_circle</span>
          </a>
        </div>
      </DivStyle>
    </ContainerStyled>
  )
}

export default SoundDetails
