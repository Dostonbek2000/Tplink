import React from 'react'
import { Block, BolderTitle, BoldTitle, Container, ImgLeft, LeftSide, RightSide, Wrapper } from './style'
import Signal1 from '../../assets/images/signal1.png';

const SignalOne = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
            <ImgLeft src={Signal1} />
        </LeftSide>
        <RightSide>
            <Block>
                <BoldTitle>
                      Почему телефон не ловит?
                </BoldTitle>
                <BolderTitle>
                Это базовая станция. Она раздаёт
                и принимает сигнал. У неё есть разные диапазоны и лимит абонентов
                </BolderTitle>
            </Block>
            <Block>
                <BoldTitle>
                      Почему телефон не ловит?
                </BoldTitle>
                <BolderTitle>
                Это базовая станция. Она раздаёт
                и принимает сигнал. У неё есть разные диапазоны и лимит абонентов
                </BolderTitle>
            </Block>
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default SignalOne