import React, {useState} from 'react';
import './navbar.css';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Customer from '../../interface/customersinterface';


interface Customerprops {
  Data: Customer[],
  ReturnCustomerId: (message: number) => void;

}

function Navbar({Data, ReturnCustomerId}: Customerprops) {
  const [CusName, setCus] = useState(Data[0].name);
  const [CusAvatar, setCusA] = useState(Data[0].avatar);
  const [CusNotif, setCusNotif] = useState(Data[0].unread_messages);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleCloseS = (data: string, info: string, notif: number, id: number) => {
    setCus(data)
    setCusA(info)
    setCusNotif(notif)
    ReturnCustomerId(id);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //console.log(Data);

  return (
    <div className="Nav">
       { Data?.length ? (
        <div> <div className="HContainer">
        <div className="HTitle">
          <div className="titre">
            <div className="T1">ADMIN Customers</div>
            <div className="DLogo">
            </div>
          </div>
          <div className="notifcation">
            <div className="Groupe">
            <div className="NoLogo"></div>
            <div className="counter">{CusNotif}</div>
            </div>
          </div>
          </div>
        <div className="Hmenu">
          <img className="HAvatar" src={CusAvatar}>
            </img>
          <div className="Hname">{CusName}</div>
          <div>
          <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: '27ch',
                },
              }}
            >
              {Data.map((option, index: number) => (
                <MenuItem key={option.id} selected={option.name === CusName} onClick={() => handleCloseS(option.name, option.avatar, option.unread_messages, option.id)}>
                  {option.name}
                </MenuItem>
              ))}
          </Menu>
          </div>
        </div>
      </div>
      <div className="SubH">
        <p>Gestion des messages clients</p>
      </div></div>
      ) : (<div>lodaing</div>)}
      
    </div>
  );
}

export default React.memo(Navbar);
