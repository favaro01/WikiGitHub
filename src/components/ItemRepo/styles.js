import styled from "styled-components";

const ItemContainer = styled.div`
    width: 80%;
    display: flex;    
    align-items: center;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;        
    }    
    div:first-child{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
        justify-content: center;
        align-items: center;    
        margin-right: 1rem;
    }
    div:last-child{
        display: flex;
        align-items: center;
        margin-left: auto;
        gap: 0.3rem;
    }
    img{
        width: 100%;
        height: 100%;
    }
`;

const LineIndicator = styled.hr`
    color: #FAFAFA60;
    margin: 20px 0;   
    width: 80%;
`;

export {ItemContainer, LineIndicator}