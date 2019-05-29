import React from 'react';

// COMPONENT IMPORTS
import LeftPanel from './LeftPanel';
import TopPanel from './TopPanel';
import ContentContainer from './ContentContainer';

function Dashboard() {
  return(
    <div className="main-container">
      <LeftPanel />
      <TopPanel />
      <ContentContainer />
    </div>
  );
}

export default Dashboard;