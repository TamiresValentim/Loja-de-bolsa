import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Button,
  Image,
  H1,
  ContainerItens,
  ImageItens,
  Paragrafo,
  H3,
  ButtonItens,
  InputImg,
  Div,
  ButtonDel,
  ImgeLi 

} from "./styled";

import BolsaPrincipal from "../../assets/capaprincipal.jpg"

import BolsaPreta from "../../assets/bolsapretacorre.jpg"
import BolsaBege from "../../assets/bolsabege.jpg"
import BolsaAzul from "../../assets/bolsaazul.jpg"
import BolsaColorida from "../../assets/bolsacolorida.webp"
import BolsaCroche from "../../assets/bolsacroche.jpg"
import BolsaVermelha from "../../assets/bolsavermelha.png"
import Lixo from "../../assets/lixeira-de-reciclagem.png";
import Carrinho from '../../assets/carrinho-de-compras.png'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const history = useHistory()

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity }]);
    setQuantity(1);
  };

   const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  function goBackPage() {
    history.push("/carrinho")
  }
  return (
    <Container>

      <Button onClick={goBackPage} >
        <img alt="carrinho de compras" src={Carrinho} onClick={() => addToCart({ name: '', price: ''})}></img>
        {totalItemsInCart > 0 && <span className="cart-items">{totalItemsInCart}</span>}
      </Button>
      <Image alt="capa" src={BolsaPrincipal} />

      <H1>BOUTIQUE CHICK </H1>

      <ContainerItens>

        <Div>
          <ImageItens alt="bolsa preta" src={BolsaPreta} />
          <Paragrafo>Bolsa preta</Paragrafo>
          <H3>R$159,99</H3>
          <InputImg
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
            placeholder="Quantidade" />
          <ButtonItens onClick={() => addToCart({ name: 'bolsa preta', price: 159.99 })}>COMPRA</ButtonItens>
        </Div>

        <Div>
          <ImageItens alt="bolsa bege" src={BolsaBege} />
          <Paragrafo>Bolsa simples</Paragrafo>
          <H3>R$129,99</H3>
          <InputImg
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
            placeholder="Quantidade" />
          <ButtonItens onClick={() => addToCart({ name: 'bolsa bege', price: 129.99 })}>COMPRA</ButtonItens>
        </Div>

        <Div>
          <ImageItens alt="bolsa azul" src={BolsaAzul} />
          <Paragrafo>Bolsa Azul</Paragrafo>
          <H3>R$229,99</H3>
          <InputImg
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
            placeholder="Quantidade" />
          <ButtonItens onClick={() => addToCart({ name: 'bolsa azul', price: 229.99 })}>COMPRA</ButtonItens>
        </Div>

        <Div>
          <ImageItens alt="Bolsa Colorida" src={BolsaColorida} />
          <Paragrafo>Bolsa Casual </Paragrafo>
          <H3>R$209,99</H3>
          <InputImg
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
            placeholder="Quantidade" />
          <ButtonItens onClick={() => addToCart({ name:'bolsa colorida', price: 209.99 })}>COMPRA</ButtonItens>
        </Div>
        <Div>
          <ImageItens alt="bolsa croche" src={BolsaCroche} />
          <Paragrafo>Bolsa de Croche</Paragrafo>
          <H3>R$189,99</H3>
          <InputImg
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
            placeholder="Quantidade" />
          <ButtonItens onClick={() => addToCart({ name: 'bolsa croche', price: 189.99 })}>COMPRA</ButtonItens>
        </Div>

        <Div>
          <ImageItens alt="Bolsa Vermelha" src={BolsaVermelha} />
          <Paragrafo>Bolsa Elêgante</Paragrafo>
          <H3>R$289,99</H3>
          <InputImg
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
            placeholder="Quantidade"
          />
          <ButtonItens onClick={() => addToCart({ name: 'bolsa vermelha', price: 289.99 })}>COMPRA</ButtonItens>
        </Div>
      </ContainerItens>
      
      <Div>
      <H3>CARRINHO</H3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price} x {item.quantity} = R${item.price * item.quantity}
              <ButtonDel onClick={() => removeFromCart(index)} ><ImgeLi alt='lixo' src={Lixo}/></ButtonDel>
            </li>
          ))}
        </ul>

    </Div>
    </Container>)

}

export default App;
