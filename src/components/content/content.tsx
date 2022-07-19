
import React, {useState, useEffect} from 'react';
import Mail from '../../interface/mailinterface'
import './content.css'
import Card from '../Card/Card';
import MailBody from '../MailBody/MailBody';
import CustomerServcies from '../../service/Customers';


interface mailprops {
  Data: Mail[],
  id: number,
  Reload: (message: number) => void;
  

}

function Content({Data, id, Reload}: mailprops) {
   const [MailDisplay, setMailDisplay] = useState(false);
   const [Mail, setMail] = useState<Mail>();
   const [isMobil, setIsMobil] = useState(false)

   useEffect(() => {
     if (window.innerWidth <= 800)
        setIsMobil(true); 
      if (window.innerWidth > 800)
        setIsMobil(false); 
  }, []);

  const NoRead = {
    fontWeight: 'bold',
  };
  const read = {
    fontWeight: 'normal',
    color: '#808080'
  };

  const SelectMail = async (data: Mail) => {
    setMail(data)
    setMailDisplay(true)
    let user = new CustomerServcies(); 
    user.UpdateStatusOfRead(data.id, id)
    var screenSize = window.innerWidth;
    if (window.innerWidth <= 800){
      setIsMobil(true)
    }
    Reload(id);
        
  };

  const handleback = async () => {
    setMailDisplay(false)
    Reload(id);
  };




  return (
        <div>
            {  isMobil ? (
              <div >
                 { MailDisplay ? (
                   <div className="MailContent" >
                   <div className="MailData">
                     <div className="MailTitle">
                       {Mail?.contact.firstname} { Mail?.contact.lastname}
                     </div>
                     <div className="MailEmail">
                       {Mail?.contact.email} 
                       </div>
                       <div className="MailPhone">
                       {Mail?.contact.phone} 
                       </div>
           
                   </div>
                   <div>
                     <MailBody Data={Mail}> </MailBody>
                   </div>
                   <div className="Mailinfo"></div>
                   <button onClick={() => handleback()} >retour</button>
           
                 </div>
                    
                  ) : (<div className="content">
                  <div className="List">
                    {
                      Data.map(element => (
                        <div>
                          {element.read == false &&
                          <div key={element.id} style={NoRead}  onClick={() => SelectMail(element)}>
                          <Card   Data={element}></Card>
                          </div>
                          }
                          {element.read == true &&
                          <div style={read} key={element.id} onClick={() => SelectMail(element)}>
                          <Card  Data={element}></Card>
                          </div>
                          }
            
                        </div>
            
                      ))
                    }
                  </div>
              </div>)}
            </div>
            ) : (

              <div className="content">
              <div className="List">
                {
                  Data.map(element => (
                    <div>
                      {element.read == false &&
                      <div key={element.id} style={NoRead}  onClick={() => SelectMail(element)}>
                      <Card   Data={element}></Card>
                      </div>
                      }
                      {element.read == true &&
                      <div style={read} key={element.id} onClick={() => SelectMail(element)}>
                      <Card  Data={element}></Card>
                      </div>
                      }
        
                    </div>
        
                  ))
                }
              </div>
                   { MailDisplay ? (
                   <div className="MailContent" >
                   <div className="MailData">
                     <div className="MailTitle">
                       {Mail?.contact.firstname} { Mail?.contact.lastname}
                     </div>
                     <div className="MailEmail">
                       {Mail?.contact.email} 
                       </div>
                       <div className="MailPhone">
                       {Mail?.contact.phone} 
                       </div>
           
                   </div>
                   <div>
                     <MailBody Data={Mail}> </MailBody>
                   </div>
           
                 </div>
                    
                  ) : (<div></div>)}
            </div>
            )}
            </div>

    
  );
}

export default Content;


