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

&:hover{
    opacity: 0.5;
}

&:active{
    opacity: 0.6;
}


img{
    height:50px;
}
`;

export const Image = styled.img`
width:100%;
height: 40%;
margin-top:20px;
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 80px;
line-height: 40px;
text-align: center;
color: #000000;
margin-top: 100px;
margin-bottom: 30px;
`;

export const ContainerItens = styled.div`
height: 130vh;
 min-height: calc(100vh - 180px);
 background-color: rgba(255,182,193,0.3);
 display: grid;
 grid-template-columns: 2fr 2fr 2fr;
`;

export const InputImg = styled.input`
border-radius:50px;
border:none;
background: #ffff;
width:40px;
height:30px;
padding-left: 10px;
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
`;

export const H3 = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
text-align: center;
color:#000000;
`;

export const ButtonItens = styled.button`
width: 102px;
height: 34px;
background: rgba(0,0,0,0.8);
border-radius: 14px;
border:1px solid #ffffff;
color: #ffffff;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height:28px;
cursor: pointer;
margin-left: 60px;

&:hover{
    opacity: 0.3;
}

&:active{
    opacity: 0.9;
}
`;

export const Div = styled.div`
margin:10px 205px 50px 55px;
`;

export const  ButtonDel = styled.button`
 border: none;
 border-radius: 20px;
background-color: rgba(255,182,193,0.3);
width:20px;

img{
    width: 20px;

}

p{
 font-style: normal;
font-weight: bold;
font-size: 84px;
line-height: 40px;
text-align: center;
color:#000000;}
    `;


 export const  ImgeLi = styled.img`
  width:60px;
  margin-left:80px;`;