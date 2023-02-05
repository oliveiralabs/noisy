import React, { useRef, useState } from "react"
import styled from 'styled-components'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import functions from "../../utils/functions"


const SoundItemStyled = styled.div`
  text-align: center;

  & > a {
    color: #3f3f3f;
    word-breaK: break-all;
  }
`

const SoundItemImgStyled = styled.div`
  background: url('loading.gif') no-repeat center;
  background-size: 25%;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.41);
  height: 200px;
  position: relative;
  margin-bottom: 12px;
  
  &, & > img, & > .overlay {
    border-radius: 12px;
  }

  & > img {
    width: 100%;
    height: 100%;
    display: block;  
    object-fit: cover;
  }

  & .overlay {
    background-color: rgba(0, 0, 0, 0.616);
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    display: none;
    align-items: center;
    justify-content: space-evenly;

    & .iconButtonMaterial {
      &:hover .material-symbols-outlined {
        color: #deffc8;
        font-size: 80px;
      }
    }

    .material-symbols-outlined {
      font-size: 70px;
      color: white;
      cursor: pointer;
      transition: color 150ms linear, font-size 100ms;
    }
  }

  & .progress-overlay {
    background-color: rgb(0, 255, 191);
    border-radius: 12px;
    width: ${props => props.progress}%;
    height: 20px;
    position: absolute;
    bottom: 0;
    display: flex;
  }

  &:hover .overlay {
    display: flex;
  }
`

const SoundItem = (props) => {
  const soundTitle = props.sound.title
  const endpoint = `https://oliveiralabs.github.io/noisy-sounds/content/${encodeURIComponent(soundTitle)}`
  const ref = useRef()
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const detailsUrl = functions.slugify(soundTitle)
  const [audio, setAudio] = useState(new Audio(`${endpoint}/sound.ogg`))

  audio.addEventListener("timeupdate", () => {
    setProgress((audio.currentTime / audio.duration) * 100);
  });

  const togglePlaying = () => {
    if (!playing) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0
      setPlaying(false);
    }
  }

  return (
    <SoundItemStyled>
      <SoundItemImgStyled ref={ref} progress={progress}>
        <img
          data-src={`${endpoint}/gif.gif`}
          alt={soundTitle}
          className="lazyload" />
        <div className="progress-overlay"></div>
        <div className='overlay'>
          <a onClick={togglePlaying} className="iconButtonMaterial">
            <span className="material-symbols-outlined">{playing ? 'stop_circle' : 'play_circle'}</span>
          </a>
          <a className="iconButtonMaterial" href={detailsUrl}>
            <span className="material-symbols-outlined">open_in_browser</span>
          </a>
        </div>
        
      </SoundItemImgStyled>
      <a href={detailsUrl}>{soundTitle}</a>
    </SoundItemStyled>
  )
}

export default SoundItem