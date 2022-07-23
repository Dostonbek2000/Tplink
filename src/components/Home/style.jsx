import styled from "styled-components";


export const Container = styled.div`
    height: 721px;
    width: 100%;
    background: linear-gradient(98.48deg, #190251 1.77%, #400172 98.75%);
    display: flex;
    justify-content: center;

`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width:1700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
`

export const LeftSide = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RightSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeftInner = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`

export const BoldTitle = styled.h1`
    font-family: 'Inter';
    font-size: 56px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: 0em;
    text-align: left;
    color: white;

`
export const BolderTitle = styled.h1`
    font-family: 'Inter';
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: white;

`

export const ButtonWrapper = styled.div`
    display: flex;
`

export const Button = styled.button`
    height: 48px;
    width: 224px;
    border-radius: 6px;
    background: rgba(140, 48, 245, 1);
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    border: none;
`
export const Button1 = styled.button`
    border: 1px solid rgba(255, 255, 255, 1);
    height: 48px;
    width: 224px;
    border-radius: 6px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    margin-left: 15px;
    background: rgba(0,0,0,0);
    transition: .3s linear;
    &:hover{
       background: rgba(140, 48, 245, 1);
       border: none;
       cursor: pointer;
    }
`
export const Textof = styled.p`
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    span{
        color: #8007e3 ;
        margin-left: 10px;
    }
`

export const ImgLeft = styled.img`
    
`