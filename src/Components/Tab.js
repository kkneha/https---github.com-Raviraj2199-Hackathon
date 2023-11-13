// Tab1.js
import React from 'react';

const Tab = ({ onRefresh }) => {
  return (
    <div>
      <h2>Tab 1 Content</h2>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
};

export default Tab;
