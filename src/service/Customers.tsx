import axios from 'axios';
//import Loca from '../interface/Location';
import customer from '../../src/interface/customersinterface';
import Mail from '../../src/interface/mailinterface';

export default class Customers {
  public GetAllCustomer() {
    const data = axios.get<customer[]>('http://localhost:8080/customers');
    return data;
  }

  public GetMailByCustomerId(id : number) {
      const base_url = 'http://localhost:8080/customers/' + id +'/messages'
    const data = axios.get<Mail[]>(base_url);
    return data;
  }
  public UpdateStatusOfRead(MessageId : number, CustomerId: number) {
    const base_url = 'http://localhost:8080/customers/' + CustomerId +'/messages/' + MessageId;
    const data = {
      read: true,
    };
  const body = axios.patch<Mail>(base_url, data);
  return body;
}
 
}
