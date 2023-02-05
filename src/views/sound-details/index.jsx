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
    cursor: pointer;
    align-self: center;
    animation: scale-up-center 0.4s ease-out infinite alternate both;

    &:hover {
      animation: 0;
    }

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

  @keyframes scale-up-center {
    0% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
`

const ProgressStyled = styled.div`
  visibility: ${props => props.progress == 0 ? 'hidden' : 'visible'};
  width: 100%;
  border: solid 1px #f0f0f0;
  margin-top: 20px;
  height: 20px;

  &, & .content {
    border-radius: 20px;
  }

  & .content {
    background-image: linear-gradient(to right, #4f5bd5,#962fbf);
    width: ${props => props.progress}%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
  }
`

function SoundDetails() {
  const [isLoading, setIsLoading] = useState(true)
  const { soundSlug } = useParams()
  const endpoint = `https://oliveiralabs.github.io/noisy-sounds/content/${soundSlug}`
  const infoJson = `${endpoint}/info.json`
  const [soundTitle, setSoundTitle] = useState('')
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [audio, setAudio] = useState()

  const stopAudio = () => {
    audio.pause()
    audio.currentTime = 0
    setPlaying(false)
  }

  // Triggered by setAudio inside togglePlaying method through 
  // useEffect changes monitoring " ...}, [audio])"
  useEffect(() => {
    if (audio == null) {
      return
    }

    audio.addEventListener("timeupdate", () => (
      setProgress((audio.currentTime / audio.duration) * 100))
    )

    audio.addEventListener("ended", () => stopAudio())

    audio.play();
    setPlaying(true);
  }, [audio])

  const togglePlaying = () => {
    if (!playing) {
      setAudio(new Audio(`${endpoint}/sound.ogg`))
    } else {
      stopAudio()
    }
  }


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
        <a onClick={togglePlaying} className="iconButtonMaterial">
          {!playing ? <span className="material-symbols-outlined">play_circle</span> : <></>}
        </a>
      </div>
      <ProgressStyled progress={progress}>
        <div className="content"></div>
      </ProgressStyled>
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
