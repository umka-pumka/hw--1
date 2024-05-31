import { useDispatch } from "react-redux"
import { incrementNum, decrementNum, resetNum, setText, incrementNumByFive} from "./redux/reduser"
import { useState } from "react";

const Buttons = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('')
  return (
    <div>
       <button onClick={()=>{
        dispatch(incrementNum());
       }}>+</button>
       <button onClick={()=>{
        dispatch(decrementNum());
       }}>-</button>
       <button onClick={()=>{
        dispatch(resetNum())
       }}>reset</button>
       <br />
       <input type="text" value={inputText}
      onChange={ e => setInputText(e.target.value)} />
      <button onClick={()=>{
        dispatch(setText(inputText))
      }}>change</button>
      <button onClick={()=>{
        dispatch(incrementNumByFive())
      }}>+5</button>
    </div>
  )
}

export default Buttons