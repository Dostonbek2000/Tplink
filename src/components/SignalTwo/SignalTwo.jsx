import React from 'react'
import { Block, BolderTitle, BoldTitle, Container, ImgLeft, LeftSide, RightSide, Wrapper } from './style'
import Signal2 from '../../assets/images/signal2.png';



const SignalTwo = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
             <Block>
                <BoldTitle>
                Главное — точная настройка
                </BoldTitle>
                <BolderTitle>
                Мы подбираем подходящее устройство, исходя из расстояния до базовой станции, площади покрытия и диапазона частот, которые вам нужны.
                </BolderTitle>
            </Block>
        </LeftSide>
        <RightSide>
            <ImgLeft src={Signal2} />
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default SignalTwo