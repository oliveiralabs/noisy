import React, { useRef, useEffect, useState } from "react"
import styled from 'styled-components'
import GlobalStyle from '../../GlobalStyle'
import Header from '../header'

const ContainerStyled = styled.div`
  overflow: auto;
  height: 100vh;
`

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  & .gifAudioContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }

  & .iconButtonMaterial {
    position: absolute;
  }

  & .material-symbols-outlined {
    font-size: 8rem;
    color: white;
    transition: color 150ms linear, font-size 100ms;

    &:hover {
      color: #deffc8;
      font-size: 9rem;
    }
  }

  img {
    width: 100%;
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
