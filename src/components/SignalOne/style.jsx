import styled from "styled-components";


export const Container = styled.div`
    height: 600px;
    width: 100%;
    background: #200366;
    display: flex;
    justify-content: center;

`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width:1700px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 0px 20px;
`

export const LeftSide = styled.div`
    width: 55%;
    height: 80%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: flex-end;  
`
export const RightSide = styled.div`
    width: 45%;
    height: 80%; 
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: flex-end;
    flex-direction: column;
    padding-bottom: 20px;
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
    font-size: 36px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;

    color: white;

`
export const BolderTitle = styled.h1`
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: right;
    margin-top: 40px;
    color: white;
    width: 70%;


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
    width: 80%;

`

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`