import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import GlobalStyle from '../../GlobalStyle'
import Header from '../header'
import DocumentMeta from 'react-document-meta'


const DownloadStyled = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  a > img {
    width: 300px;
  }
`

const DownloadBtn = () => {
  return (
    <DownloadStyled>      
      <a href='https://play.google.com/store/apps/details?id=com.oliveiralabs.xpads' target={"_blank"}>
        <img 
          alt='Get Noisy on Google Play' 
          src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
        />
      </a>
    </DownloadStyled>
  )
}

const ContainerStyled = styled.div`
  background-color: #F8F9FA;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`

const ArticleStyled = styled.article`
  max-width: 700px;
  margin-top: 150px;
`

const H1Styled = styled.h1`
  color: #343A40;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const H2Styled = styled.h2`
  color: #6C757D;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
`

const PStyled = styled.p`
  color: #6C757D;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
`

const IconStyled = styled.p`
  font-size: 3rem;
  margin-bottom: 10px;
`

function DownloadApp() {
  const meta = {
    title: 'Baixar Noisy: Meus botões instantâneos',
    description: 'Baixar Noisy - Aplicativo de sons e ruídos engraçados. Pegadinha engraçada soa meus botões instantâneos',
    canonical: window.location.href,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'memes, gifs, áudios, engraçados, compartilhar, amigos, divertir, conteúdo'
      }
    }
  }

  return (
    <ContainerStyled>
      <GlobalStyle />
      <Header onSearchTermChange={() => {}} hideSearchBar={true} />
      <ArticleStyled>
        <DocumentMeta {...meta} />
        <H1Styled>Baixar aplicativo Noisy</H1Styled>
        
        <DownloadBtn />
        <IconStyled>🎺🥁</IconStyled>
        <PStyled>É um aplicativo de efeitos sonoros que permite obter diferentes áudios divertidos e um criador de mesa de som integrado que permite desfrutar de vários tipos de sons estranhos, como guinchos e sons de animais, e permite criar ruídos malucos através de alguns sons realmente processo fácil.</PStyled>
        <PStyled>Baixe o aplicativo Noisy: my instant buttons para se divertir com botões de ruído e sons estranhos de sua própria criação.</PStyled>
        <PStyled>Os ruídos altos podem ser usados ​​para encantar e irritar de uma forma divertida. Esteja você procurando um aplicativo de sons engraçados de pegadinhas ou criador de efeitos sonoros tolos ou criador de ruídos para aproveitar o verdadeiro deleite dos botões de som, este aplicativo é para você.</PStyled>
        <PStyled>Noisy é um aplicativo divertido que permite gravar seus próprios sons e combiná-los com efeitos sonoros pré-existentes para que você possa fazer todos os tipos de ruídos malucos. Existem muitos efeitos sonoros bobos para escolher, mas a verdadeira diversão vem de gravar o que você quiser e misturá-lo com outros ruídos para criar sons diferentes. Você também pode salvar suas gravações e compartilhá-las (ou apenas se gabar de como elas são incríveis).</PStyled>
        <PStyled>🎺🥁 Principais recursos do aplicativo Noisy: ruídos e sons engraçados📣🎼</PStyled>
        <PStyled>🔊 Muitos ruídos engraçados e estranhos pré-carregados:</PStyled>
        <PStyled>Percorrer a lista aparentemente interminável de ruídos é bastante divertido por si só. Cada som tem um nome, como "The Boring Beep Of Doom" ou "Slurp" (o último é exatamente o que parece). Os nomes são engraçados e peculiares e dão uma ideia de como as pessoas por trás do aplicativo pensam. Os desenvolvedores ainda tiveram a audácia de incluir uma entrada chamada "Annoying Sound", que é exatamente o que parece: um som irritante.</PStyled>
        <PStyled>💥Combine áudios pré-carregados e crie novas trilhas sonoras:</PStyled>
        <PStyled>O que poderia ser mais divertido do que fazer barulhos de brincadeira? Todo mundo tem seu próprio som favorito, seja uma risadinha, folhas trituradas ou a abertura de um refrigerante. Existem praticamente infinitas combinações de sons para divertir você e seus amigos. Ao usar este aplicativo como ponto de partida, você pode criar suas próprias combinações de ruído e compartilhá-las com seus amigos.</PStyled>
        <PStyled>🦁 Divirta-se com os amigos com este estranho aplicativo de criação de ruídos:</PStyled>
        <PStyled>Ruídos engraçados podem ajudar bastante a melhorar a qualidade de sua vida. Você pode estar cercado por entes queridos, mas ainda é útil ter alguns sons prontos para fazê-los rir. Se você usar o Noisy o suficiente, ele pode salvar sua ceia de Natal!</PStyled>
        <PStyled>🥁 Quase todos os tipos de sons ou ruídos malucos em um só lugar:</PStyled>
        <PStyled>Noisy é um aplicativo de coleção de sons que fornece um suprimento infinito de sons engraçados. Os ruídos são divididos em várias categorias, sendo que cada aba corresponde a um tipo de som diferente. Há a seção Animals, que inclui os sons de animais como um cachorro latindo e uma vaca mugindo. A seção Musical exibe os sons de instrumentos como um piano ou trompete. Há também a aba Human Sounds, que possui ruídos como risadas e espirros. Existem mais guias que incluem mais sons, como sons do clima, sons do bebê e muito mais. 🎺🥁🦁🐮💥</PStyled>
        <PStyled>🎺 Dank Noises para pregar peças em seus amigos:</PStyled>
        <PStyled>Ruídos e sons engraçados para brincar com seus amigos e familiares. Este divertido aplicativo de soundboard tem uma coleção dos sons mais alucinantes, hilários e às vezes assustadores que podem ser usados ​​em várias ocasiões. Surpreenda seus amigos enganando-os com risadas reais de alienígenas ou coloque um sorriso em seus rostos com sons fantasmagóricos assustadores. Ria incontrolavelmente enquanto prega peças em seus amigos usando ruídos engraçados de animais e muito mais!</PStyled>
        <PStyled>📣 Personalize novas placas de som:</PStyled>
        <PStyled>É um aplicativo muito simples que permite criar suas próprias mesas de som junto com as pré-carregadas mencionadas anteriormente. Você pode fazer quantas caixas de som quiser, cada uma com um título e uma cor única e atribuir imagens aos botões de ruído!</PStyled>
        <PStyled>Faça o download e enlouqueça com ruídos e sons engraçados e divirta-se sem limites com tudo o que este criador de mesa de som e aplicativo de ruído divertido tem a oferecer.</PStyled>
        </ArticleStyled>
    </ContainerStyled>
  )
}

export default DownloadApp
