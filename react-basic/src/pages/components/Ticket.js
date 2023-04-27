import {ticketList as tktList}  from "../../../constants/ticketList";
import Image from 'next/image'
function TicketList(){
  function handleTicketClick(param, clickType){
    switch(clickType){
      case 'name':
      redirectTo(id, clickType);
      break;

      case 'lastLoc':
      redirectTo(id, clickType);
      break;

      case 'firstSeen': 
      redirectTo(id, clickType);
      break;
    }
    console.log("Param---", param);
  }

  function redirectTo(){

  }
  
  const ticketHtml = tktList.map((item, index)=>(
    <div key={item.id} className="ticket">
      <div className="tkt-img">
                <Image src={item.imgUrl} alt="Pic" width={200} height={200}/>
      </div>
      <div className="tkt-info">
         <div className="tkt-heading">
            <h3 className="hover-color" onClick={() => handleTicketClick(item, 'name')}>{item.name}</h3>
            <p>{item.intro}</p>
          </div>
        <div className="last-loc">
            <p className="font-grey">Last Knowm Location</p>
            <p className="hover-color" onClick={() => handleTicketClick(item, 'lastLoc')} >{item.lastLoc}</p>
        </div>
        <div className="first-seen"> 
            <p className="font-grey">First Seen</p>
            <p className="hover-color" onClick={(()=>handleTicketClick(item, 'firstSeen'))}>{item.firstSeen}</p>
        </div>
      </div>
    </div>
  ))
    return (
        <main>
        <div className="ticket-container">
           <div className="ticket-inner">
            {ticketHtml}
           </div>
        </div>
      </main>
    )
}

export default TicketList;