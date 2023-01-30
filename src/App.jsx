import React, { useRef, useLayoutEffect, useState } from "react";
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Header from './sections/header'
import Main from './sections/main'

const DivStyle = styled.div`
  display: flex;
  padding: 0 11%;
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <DivStyle>
        <Main />
      </DivStyle>
    </div>
  )
}

export default App
