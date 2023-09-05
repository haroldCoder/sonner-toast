import React from 'react'
import {Toaster, toast} from 'sonner'
import {BiCheck} from 'react-icons/bi';

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cumque esse blanditiis sint nemo veniam fugit aspernatur unde? Sequi magni eos modi quia minima. Rem officiis repellendus velit earum dignissimos!</p>
      <button onClick={()=>{
        toast("Terminos aceptados", {
          description: "gracias por aceptar los terminos y condiciones",
          icon: <BiCheck style={{color: "#3F6", fontSize: "1.5rem"}}/> 
        })
      }}>
        Aceptar Terminos y Condiciones
      </button>

      <button>Aceptar todo</button>


      <Toaster />
    </div>
  )
}
