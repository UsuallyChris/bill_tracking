import React from 'react';

// COMPONENT IMPORTS
import TopPanel from './right_panel_components/TopPanel';
import ContentContainer from './right_panel_components/ContentContainer';

function RightPanel() {
  return(
    <div className="right-container">
      <TopPanel />
      <ContentContainer />
    </div>
  )
};

export default RightPanel;