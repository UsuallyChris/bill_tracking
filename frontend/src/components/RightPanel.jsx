import React from 'react';

// COMPONENT IMPORTS
import TopPanel from './TopPanel';
import ContentContainer from './ContentContainer';

function RightPanel() {
  return(
    <div className="right-panel">
      <TopPanel />
      <ContentContainer />
    </div>
  )
};

export default RightPanel;