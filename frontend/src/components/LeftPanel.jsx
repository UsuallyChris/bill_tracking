import React from 'react';

// COMPONENT IMPORTS
import Logout from './left_panel_components/Logout';

function LeftPanel() {
  return(
    <div className="left-container">
      <h2>Left Panel</h2>
      <Logout />
    </div>
  );
};

export default LeftPanel;