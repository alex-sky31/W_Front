
import React, {useState} from 'react';
import Mail from '../../interface/mailinterface'
import './Card.css'
import mailLogo from '../../Picture/Shape.png'; 
import phoneLogo from '../../Picture/phone.png'

interface mailprops {
  Data: Mail,
  

}
function Card({Data}: mailprops) {

  return (
            <div  key={Data.id} className="Card">
          <div className="Type">
            <div>
                { Data.type == "email" &&
            <img  className="Logo" src={mailLogo}></img>
            }
             { Data.type == "sms" &&
            <img  className="Logo" src={mailLogo}></img>
            }

             { Data.type == "phone" &&
            <img  className="LogoP" src={phoneLogo}></img>
            }
                </div>
          </div>
          <div className="Info">
            <div className="Name"> {Data.contact.firstname} { Data.contact.firstname}</div>
            <div> <span className="From">Message envoyé depuis wethenew.com</span> <span className="Date"> { new Date(Data.date).toLocaleDateString([], {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}</span></div>
            <div className="From"> {Data.subject}</div>
          </div>
        </div>
  );
}

export default Card;
