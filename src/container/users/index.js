import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {
  Container,
  Button,
  H1,
  ContainerItens,
  H3,
  Div,
} from "./styled";

import Seta from "../../assets/seta-direita.png";
import Lixo from "../../assets/lixeira-de-reciclagem.png";




const ShoppingCart = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory()

const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  
function goBackPage(){
 
  history.goBack()
}


  return (
    <Container>

      <Button onClick={goBackPage}> VOLTAR <img alt="seta" src={Seta}></img></Button>

      <H1>CESTA DE COMPRAS</H1>

      <ContainerItens>
     <Div>
      <H3>CARRINHO</H3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price} x {item.quantity} = R${item.price * item.quantity}
              <button onClick={() => removeFromCart(index)} ><img alt='lixo' src={Lixo}/></button>
            </li>
          ))}
        </ul>
    </Div>

     
  </ContainerItens>

    </Container>

  )
}



export default ShoppingCart;