import React from 'react'
import { BolderTitle, BoldTitle, Button, Button1, ButtonWrapper, Container, ImgLeft, LeftInner, LeftSide, RightSide, Textof, Wrapper } from './style'
import LeftImg from './../../assets/images/imgleft.svg';


const Home = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <LeftInner>
            <BoldTitle>Усилим мобильную связь</BoldTitle>
            <BolderTitle>
               всех операторов до 5 делений за 24 часа или вернем деньги
            </BolderTitle>
            <ButtonWrapper>
              <Button>Рассчитать стоимость</Button>
              <Button1>Заказать консультацию</Button1>
            </ButtonWrapper>
            <Textof>Любые объекты площадью 
              <span>от 50 до 100 000 м2</span>
            </Textof>
          </LeftInner>
        </LeftSide>
        <RightSide>
            <ImgLeft src={LeftImg} />
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default Home