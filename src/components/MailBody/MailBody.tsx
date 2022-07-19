
import React, {useState, useEffect, PropsWithChildren} from 'react';
import Mail from '../../interface/mailinterface'
import './MailBody.css'
import mailLogo from '../../Picture/Shape.png'; 
import phoneLogo from '../../Picture/phone.png'


interface mailprops {
  Data?: Mail,
  children: React.ReactNode;
}


function MailBody({Data}: mailprops) {
   

  return ( <div className="MailBody">
                <div className="MailContact">
                    <div className="TypeH">
                    <div>
                        { Data?.type == "email" &&
                    <img  className="LogoH" src={mailLogo}></img>
                    }
                    { Data?.type == "sms" &&
                    <img  className="LogoH" src={mailLogo}></img>
                    }

                    { Data?.type == "phone" &&
                    <img  className="LogoPH" src={phoneLogo}></img>
                    }
                        </div>
                </div>
                    <div className="Mailheader">
                        <div className="MailTitleH">{Data?.contact.firstname} {Data?.contact.lastname}</div>
                        <div className="FromH">{Data?.contact.email}</div>
                    </div>
                </div>
                <div className="ContentMail">
                       {Data?.body}
                       </div>

            </div>

  );
}

export default MailBody;