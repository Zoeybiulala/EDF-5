import { useEffect, useState } from 'react';
import { Container, Divider, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import LazyTable from '../components/LazyTable';
import SearchBar from '../components/SearchBar';
import NameCard from "../components/NameCard";
import ProgressBar from "../components/ProgressBar";

import '../styles/NameCard.scss';
import '../styles/HomePage.scss';
import LandingTabs from "../components/LandingTabs";
import UserPortal from "../components/UserPortal";
import ManagerPortal from "../components/ManagerPortal";


const config = require('../config.json');



export default function HomePage() {
  const [showInfo, setShowInfo] = useState(true);

  const availability = ['Monday','Tuesday','Wednesday','Friday'];
  const managerInfo = {photo:'img_1.png', name:'Alice',title:'Engagement Management', contactInfo: {email:'fakeemail@gmail.com', phone: '123123'}, availability};
  const value=25;
  const maxValue=100;

  const [isUserPortal, setIsUserPortal] = useState(true);

  const handlePortalSwitch = () => {
        setIsUserPortal(!isUserPortal);
    };

  return (<div>
          <div className="portal-switch">
              <button
                  className={`switch-button ${isUserPortal ? 'active' : ''}`}
                  onClick={handlePortalSwitch}
              >
                  User Portal
              </button>
              <button
                  className={`switch-button ${!isUserPortal ? 'active' : ''}`}
                  onClick={handlePortalSwitch}
              >
                  Manager Portal
              </button>
          </div>
          {isUserPortal ?  <ManagerPortal /> : <UserPortal />}
      </div>


  );
};