import React from "react"
import ReactDOM from "react-dom/client"
import Imge1 from "./assets/images/dp1.jpg"
import Imge2 from "./assets/images/dp2.jpg"
import Star from "./assets/images/star.png"
import "./style.css"
const root=ReactDOM.createRoot(document.getElementById("root"))


// Component
function Search(){
  return(<div className="search" style={{padding:"10px",margin:"10px",width:"100%"}}>
    <input className="searchinp"type="text" placeholder="Search...."/>
  </div>)
}
function Chats(probs){
  return(<div className="chat">
      <img className="chatimg" src={probs.Chatimg} alt=""></img>
      <div className="chatlist">
    <div >
    <h5>{probs.Chatname}</h5>
    <p>{probs.Chatpara}</p>

    </div>
  
    <div className="chatstar">
    <p>{probs.time}</p>
      <img src={probs.star} alt="" />
    </div>
    </div>
  </div>)
}

var Chat=[
  {
    Chatname:"Jessica Koel",
    Chatpara:"Hey Joe,i here to help you out please...",
    Img:Imge1,
    time:"11.26",
    star:Star
    

  },
  {
    Chatname:"Komeial Bolger",
    Chatpara:"I will send You All documents as soon a...",
    Img:Imge2,
    time:"12.26",
    star:Star,
    

  },
  {
    Chatname:"Tamaara Suiale",
    Chatpara:"Are You going to business trip next week",
    Img:Imge2,
    time:"12.26",
    star:Star

  },
  {
    Chatname:"Sam Nielson",
    Chatpara:"I Suggest to start new business soon",
    Img:Imge2,
    time:"12.26",
    star:Star

  },
  {
    Chatname:"Caroline Nexon",
    Chatpara:"We need to start new research center.",
    Img:Imge2,
    time:"12.26",
    star:Star

  },
  {
    Chatname:"Patrick Koeler",
    Chatpara:"May be yes",
    Img:Imge2,
    time:"12.26",
    star:Star

  },
]



root.render(<><Search></Search>
{
  Chat.map(function(item){
    return(<Chats Chatname={item.Chatname} Chatpara={item.Chatpara} Chatimg={item.Img} star={item.star} time={item.time}></Chats>)
  })
}

</>)