import { useState } from "react"
export default function Player({name, symbol, isActive, onChangeName}) {
    const [inPlayerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

         function handleEditClik(){
    setIsEditing((editing) =>!editing);
    if(isEditing){
      onChangeName(symbol,playerName);

    }
  }

  function handleChange(event){
    console.log(event);
    setPlayerName(event.target.value);
  }

  let playerName=<span className="player-name">{inPlayerName}</span>

  if(isEditing){

    playerName = <input type="text" required value={inPlayerName} onChange={handleChange} />
  }
  
    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {playerName}
        
        <span className="player-symbol">{symbol}</span>

        </span>
        <button onClick={handleEditClik}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )
}