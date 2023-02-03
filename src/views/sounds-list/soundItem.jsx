import React, { useRef } from "react";
import styled from 'styled-components'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';


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
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.41);
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
    justify-content: center;

    .iconButtonMaterial {
      margin: 0 6%;
      &:hover .material-symbols-outlined {
        color: #a4acff;
      }
    }


    .material-symbols-outlined {
      font-size: 70px;
      color: white;
      cursor: pointer;
      transition: color 80ms linear;
    }
  }

  &:hover .overlay {
    display: flex;
  }
`

const SoundItem = (props) => {
  const ref = useRef()
  const soundTitle = props.sound.title
  const endpoint = `https://oliveiralabs.github.io/noisy-sounds/content/${encodeURIComponent(soundTitle)}/gif.gif`

  return (
    <SoundItemStyled>
      <SoundItemImgStyled  ref={ref}>
        <img
          data-src={endpoint}
          alt={soundTitle}
          className="lazyload" />
        <div className='overlay'>
          <a className="iconButtonMaterial" href="#">
            <span className="material-symbols-outlined">
              play_circle
            </span>
          </a>

          <a className="iconButtonMaterial" href='gif'>
            <span className="material-symbols-outlined">
              open_in_browser
            </span>
          </a>
        </div>
      </SoundItemImgStyled>
      <a href='gif'>{soundTitle}</a>
    </SoundItemStyled>
  )
}

export default SoundItem