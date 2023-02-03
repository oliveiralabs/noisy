import React, { useRef, useEffect, useState } from "react";
import functions from '../../utils/functions'

import styled from 'styled-components'
import GlobalStyle from '../../GlobalStyle'
import Header from '../header'
import SoundsList from '../sounds-list'

const HomeContainerStyled = styled.div`
  overflow: auto;
  height: 100vh;
`

const DivStyle = styled.div`
  display: flex;
  padding: 0 11%;
`

function Home() {
  const listInnerRef = useRef();

  let endpoint = 'https://oliveiralabs.github.io/noisy-sounds/index2.json'
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [shownSoundsArray, setShownSoundsArray] = useState([])
  let allSoundsArray = useRef([]);

  const pushRandomItems = (quantity) => {
    let randomItems = functions.shuffle(allSoundsArray.current).slice(0, quantity)
    let result = shownSoundsArray.concat(randomItems)
    setShownSoundsArray(result)
  }

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(result => {
          setIsLoading(false);
          allSoundsArray.current = result;
          pushRandomItems(4 * 10)
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      const reached = scrollTop + clientHeight
      if (reached === scrollHeight) {
        pushRandomItems(4 * 10)
      }
    }
  };

  return (
    <HomeContainerStyled onScroll={() => onScroll()} ref={listInnerRef}>
      <GlobalStyle />
      <Header />
      <DivStyle>
        <SoundsList soundsArray={shownSoundsArray} error={error} isLoading={isLoading} />
      </DivStyle>
    </HomeContainerStyled>
  )
}

export default Home
