import React from 'react';

// COMPONENT IMPORTS
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Dashboard() {
  return(
    <div className="main-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default Dashboard;