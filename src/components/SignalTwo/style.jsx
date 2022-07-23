import styled from "styled-components";


export const Container = styled.div`
    height: 519px;
    width: 100%;
    background: rgba(10, 1, 59, 1);
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
    height:100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    align-items: center;  
`
export const RightSide = styled.div`
    width: 45%;
    height: 100%; 
    display: flex;
    justify-content:flex-end;
    box-sizing: border-box;
    align-items: center;
`

export const ImgLeft = styled.img`

`
export const BoldTitle = styled.h1`
    font-family: 'Inter';
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;

    color: white;

`
export const BolderTitle = styled.h1`
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 40px;
    color: white;
    width: 70%;


`
export const Block = styled.div`
    width: 80%;
`