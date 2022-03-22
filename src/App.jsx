import './App.css';
import {useState} from "react";
import paper from './image/paper.png'
import rock from './image/rock.png'
import scissors from './image/scissors.png'

function App() {
  const [choice, setChoice] = useState("")
  const [compChoosen, setCompChoosen] = useState("")
  function getRandomInt(max=11) {
    return Math.floor(Math.random() * max);
  }
  const compChoices = [paper, scissors, rock, paper, rock, scissors,paper, rock, scissors,paper, rock, scissors]
 function handleChoose(e) {
    setChoice(e.currentTarget.value)
    setCompChoosen(compChoices[getRandomInt()])
  }
  if(choice){
   switch (choice) {
     case "paper":
       return(
         <div className='esim'>
         <img src={paper} alt="" id='paper'/>
         <img src={compChoosen} alt="" id='paper'/>
         <h1>{compChoosen==paper && compChoosen!=scissors && compChoosen!=rock ? "it is draw" : ""}</h1>
         <h1>{compChoosen==scissors && compChoosen!=paper ? "you lose" : ""}</h1>
         <h1>{compChoosen!=paper && compChoosen!=scissors && compChoosen==rock ? "you are win" : ""}</h1>
         <button value="again" onClick={handleChoose} id="btnAgain">Play again</button>
         
         </div>
       )
       case "rock":
        return(
          <div className='esim'>
          <img src={rock} alt="" id='rock'/>
          <img src={compChoosen} alt="" id='paper'/>
          <h1>{compChoosen==rock && compChoosen!=scissors && compChoosen!=paper ? "it is draw" : ""}</h1>
          <h1>{compChoosen==paper && compChoosen!=scissors ? "you lose" : ""}</h1>
          <h1>{compChoosen!=rock && compChoosen!=paper && compChoosen==scissors ? "you are win" : ""}</h1>
          <button value="again" onClick={handleChoose} id="btnAgain">Play again</button>
          </div>
        )
        case "scissors":
          return(
            <div className='esim'>
            <img src={scissors} alt="" id='scissors'/>
            <img src={compChoosen} alt="" id='paper'/>
            <h1>{compChoosen==scissors && compChoosen!=paper && compChoosen!=rock ? "it is draw" : ""}</h1>
            <h1>{compChoosen==rock && compChoosen!=scissors ? "you lose" : ""}</h1>
            <h1>{compChoosen!=scissors && compChoosen!=rock && compChoosen==paper ? "you are win" : ""}</h1>
            <button value="again" onClick={handleChoose} id="btnAgain">Play again</button>
            
            </div>
          )
          case "again":
            return(
              <div className='esim'>
              <button  onClick={handleChoose} value="paper"><img src={paper} alt="" id='paper'/></button>
              <button value="rock" onClick={handleChoose}><img src={rock} alt="" id='rock'/></button>
              <button value="scissors" onClick={handleChoose}><img src={scissors} alt="" id='scissors'/></button>
              </div>
            )
     default:
       break;
   }
  }
  else return (
  <div className='esim'>
    <button  onClick={handleChoose} value="paper"><img src={paper} alt="" id='paper'/></button>
    <button value="rock" onClick={handleChoose}><img src={rock} alt="" id='rock'/></button>
    <button value="scissors" onClick={handleChoose}><img src={scissors} alt="" id='scissors'/></button>
  </div>
  )
}

export default App;
