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

  let endpoint = 'https://oliveiralabs.github.io/noisy-sounds/index.json'
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [shownSoundsArray, setShownSoundsArray] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [userMadeSearch, setuserMadeSearch] = useState(false)
  let allSoundsArray = useRef([]);

  const pushRandomItems = (quantity) => {
    let randomItems = functions.shuffle(allSoundsArray.current).slice(0, quantity)
    let result = shownSoundsArray.concat(randomItems)
    setShownSoundsArray(result)
  }

  const filterSearch = (term) => {
    if (term.length == 0) {
      return shownSoundsArray
    }

    return allSoundsArray.current.filter(item => {
      return item.name.toLowerCase().includes(term.toLowerCase())
    });
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
      
      // Só carrega no scroll se o usuário não tiver pesquisado ainda
      if (!userMadeSearch && reached === scrollHeight) {
        pushRandomItems(4 * 10)
      }
    }
  };

  return (
    <HomeContainerStyled onScroll={() => onScroll()} ref={listInnerRef}>
      <GlobalStyle />
      <Header onSearchTermChange={(e) => {
        if (!userMadeSearch) {
          setuserMadeSearch(true)
        }
        
        setSearchTerm(e)
      }} />
      <DivStyle>
        <SoundsList soundsArray={filterSearch(searchTerm)} error={error} isLoading={isLoading} />
      </DivStyle>
    </HomeContainerStyled>
  )
}

export default Home
