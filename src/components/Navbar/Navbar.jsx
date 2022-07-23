import React, { useEffect, useState } from 'react'
import logo from './../../assets/icons/logo.svg';
import { Container, LinkButton, LogoImg, LogoMask, NavMask, PhoneIcon, PhoneMask, PhoneText, Wrapper } from './style';



const Navbar = () => {
  const [navstyle, setnavstyle] = useState(false);


  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setnavstyle(true)
    }else {
      setnavstyle(false)
    }
  };



  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Container nav={navstyle}>
      <Wrapper>
        <LogoMask>
            <LogoImg src={logo} />
        </LogoMask>
        <NavMask>
          <LinkButton>Цены</LinkButton>
          <LinkButton>Установка</LinkButton>
          <LinkButton>График</LinkButton>
          <LinkButton>Контакты</LinkButton>
        </NavMask>
        <PhoneMask>
          <PhoneIcon />
          <PhoneText>+7 (111) 111-11-11</PhoneText>
        </PhoneMask>
      </Wrapper>
    </Container>
  )
}

export default Navbar