import React,{useState} from 'react'
import Led from './Componentes/Led'

export default function App(){

  const [ligado,setLigado]=useState(false)
  

  const cancelar=(obj)=>{
    return obj.preventDefaut()
     

  }

  return(
    <>
     <Led ligado={ligado} setLigado={setLigado}/>
     
    </>
    
  )
}
