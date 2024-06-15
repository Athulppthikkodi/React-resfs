import { useState } from "react";
import { useRef } from "react";

// import { useState } from "react";
export default function Player() {
  const inputValue = useRef()
  const [name, setName] = useState(null)
  function handleClick(){
   setName(inputValue.current.value) 
    inputValue.current.value = ''
  }
  return (
    <section id="player">
      <h2>{name ??'welcome name'}</h2>
      <p>
        <input ref={inputValue} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
