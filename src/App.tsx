import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/Navbar/nav';
import Content from './components/content/content';
import Customer from './interface/customersinterface';
import Mail from './interface/mailinterface';
import CustomerServcies from './service/Customers';

function App() {

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [customerId, setCustomerId] = useState(0);
  const [Mails, setMails] = useState<Mail[]>([]);

  // Function to Get all data from the API
  useEffect(() => {
    setLoading(true);
    getCustomer();
    
  }, []);

  // Function to Get All the customers API call

  const getCustomer = () => {
    let user = new CustomerServcies();
    user.GetAllCustomer()
        .then((data: any) => {
        setCustomers(data.data);
        setCustomerId(data.data[0].id)
        getMail(data.data[0].id);
        setLoading(false);
    })
    .catch((e: Error) => {
        console.log(e);
      });
  };

    // Function to Get All the Mails for a specific customer API call

  const getMail = (id: number) => {
    setLoading(true);
    let user = new CustomerServcies();
    user.GetMailByCustomerId(id)
        .then((data: any) => {
          const datasort = data.data.sort((a: any, b: any) => (a.date < b.date) ? 1 : -1)
        setMails(datasort);
        setLoading(false);
    })
    .catch((e: Error) => {
        console.log(e);
      });
  };



  const ReturnCustomerId = (message: number) => {
    setCustomerId(message);
    getMail(message);
  };
  const Reload = (message: number) => {
    getMail(message);
  };

  
  return (
    <div> 
      { customers?.length ? (
      <div> 
        <NavBar Data={customers}  ReturnCustomerId={ReturnCustomerId} />
        <Content Data={Mails} id={customerId} Reload={Reload}/>
      </div>
    ) : (<div>lodaing</div>)}
      
    </div>
  );
}

export default App;
