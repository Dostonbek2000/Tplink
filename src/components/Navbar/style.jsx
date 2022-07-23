import styled from "styled-components";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: rgba(0,0,0,0);
    background-color: ${props=>props.nav ? 'rgba(57,6,110,0.3)' : 'rgba(0,0,0,0)'};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    backdrop-filter: blur(${props=>props.nav ? '10px' : '0px'});
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
//inner containers here
export const LogoMask = styled.div`
    width: auto;
`

export const NavMask = styled.div`
    width: auto;
    display: flex;
`

export const PhoneMask = styled.div`
    width: auto;
    display: flex;

`
//items

export const LogoImg = styled.img`
    
`
export const LinkButton = styled.div`
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    margin: 18px;
`

export const PhoneText = styled.div`
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);

`
export const PhoneIcon = styled(PhoneInTalkIcon)`
    color: white !important;
    margin-right: 20px;
`