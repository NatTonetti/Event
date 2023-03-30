import React from 'react'
import Ledverde from './imgs/verde.png'
import Ledvermelho from './imgs/vermelho.png'


export default function Led(props){

  return(
    <>
    
      <img style={{width:'50px'}} src={props.ligado?Ledverde:Ledvermelho}/>
      <br/>
      <button onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado?'Desligar':'Ligar'}</button>

    </>
  )
}



//! expressão de negado, receber sempre o inverso
//setLigado recebe o ligado invertido, se tiver false recebe true e vice versa
//()=> (função anonima) é para fazer a chamada da função em um momento oportuno

//Fazendo dessa maneira o controle está no pai e não no componente filho, esse controle de variáveis está vindo do pai pelo props