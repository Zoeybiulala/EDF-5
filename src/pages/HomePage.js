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


const config = require('../config.json');

export default function HomePage() {
  const [showInfo, setShowInfo] = useState(true);

  const availability = ['Monday','Tuesday','Wednesday','Friday'];
  const managerInfo = {photo:'img_1.png', name:'Alice',title:'Engagement Management', contactInfo: {email:'fakeemail@gmail.com', phone: '123123'}, availability};
  const value=25;
  const maxValue=100;
  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
      <div className="landing-page">
        <div className="left-section">
          <ProgressBar value={value} maxValue={maxValue} />
          {/*<img className="roadmap" src="img.png" alt="roadmap"/>*/}
          <LandingTabs/>
            <div className="info-toggle">
                <label htmlFor="info-switch">Show International Student Related Information:</label>
                <input
                    type="checkbox"
                    id="info-switch"
                    checked={showInfo}
                    onChange={handleToggleInfo}
                />
            </div>
          {showInfo && (
              <div className="information-board">
                {/* Content of the information board */}
                <h2>Important Information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Ut efficitur risus a mi consectetur ullamcorper.</p>
              </div>
          )}
        </div>
        <div className="right-section">
          <NameCard manager={managerInfo}/>
        </div>
      </div>
    
    // <Container >
    //   <ProgressBar value={value} maxValue={maxValue} />
    //   <div class="homepage-container">
    //
    //     <img className="roadmap" src="img.png" alt="roadmap"/>
    //     <NameCard class="name-card" manager={managerInfo}/>
    //   </div>
    //
    //   {/*  <h2>Find Drugs and Conditions</h2>*/}
    //   {/*  <SearchBar  />*/}
    //
    //   {/*<h2>Top Conditions:</h2>*/}
    //   {/*<LazyTable route={`http://${config.server_host}:${config.server_port}/topConditions`} columns={topConditionsColumns}  defaultPageSize="5" rowsPerPageOptions={[5, 10]} />*/}
    //   {/*<Divider />*/}
    //
    //   {/*<h2>Top Rated Drugs For: </h2>*/}
    //   {/*<FormControl variant="outlined" fullWidth>*/}
    //   {/*  <InputLabel id="condition-label">Select a Condition</InputLabel>*/}
    //   {/*  <Select*/}
    //   {/*    labelId="condition-label"*/}
    //   {/*    label="Select a Condition"*/}
    //   {/*    value={selectedCondition}*/}
    //   {/*    onChange={(event) => setSelectedCondition(event.target.value)}*/}
    //   {/*  >*/}
    //   {/*    {conditions.map((condition, idx) =>*/}
    //   {/*      <MenuItem key={idx} value={condition.Conditions}>{condition.Conditions}</MenuItem>*/}
    //   {/*    )}*/}
    //   {/*  </Select>*/}
    //   {/*</FormControl>*/}
    //   {/*<LazyTable  route={`http://${config.server_host}:${config.server_port}/topRated/${selectedCondition}`} columns={topRatedColumns} defaultPageSize="5" rowsPerPageOptions={[5, 10]}/>*/}
    //
    //
    // {/*<p>App Author: {appAuthor}</p>*/}
    // </Container>

  );
};