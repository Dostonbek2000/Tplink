import React from 'react'
import logo from './../../assets/icons/logo.svg';
import { Container, LinkButton, LogoImg, LogoMask, NavMask, PhoneIcon, PhoneMask, PhoneText, Wrapper } from './style';



const Navbar = () => {
  return (
    <Container>
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