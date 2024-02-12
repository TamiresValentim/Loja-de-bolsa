import styled from "styled-components";

export const Container = styled.div`
background-color: #FFE4E1;
background-size:cover;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Button = styled.div`
margin-left: 90%;
border:none;
cursor: pointer;
background: #ffff;
border-radius: 20px;
width: 200px;
height: 40px;
color:#000000;
font-size: 18px;
text-align: center;
margin-top:20px;
margin-right:50px;
padding-top:10px;

&:hover{
    opacity: 0.3;
}

&:active{
    opacity: 0.7;
}

img{
width: 20px;
transform:rotateY(180deg)
 }
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 40px;
text-align: center;
color: #000000;
margin-top: 20px;
margin-bottom: 30px;
`;

export const ContainerItens = styled.div`
height: 130vh;
 min-height: calc(100vh - 180px);
 background-color: rgba(255,182,193,0.3);
 display: flex;
 flex-direction: row;
 justify-items: center;
`;

export const ImageItens = styled.img`
border-radius: 20px;
width:250px ;
`;

export const Paragrafo = styled.p`
font-style: normal;
font-weight: bold;
font-size: 21px;
line-height: 22px;
color:#000000;
text-align: center;

`

export const H3 = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
margin-left:200px ;
color:#000000;
;
`
export const Div = styled.div`
margin:10px 205px 50px 55px;

.button{
   
   background: none;
   border:none;
   cursor: pointer;

&:hover{
 opacity: 0.3;
   }}

img{
    width:20px;
}

p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color:#000000;

}
`;





