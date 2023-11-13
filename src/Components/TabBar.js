// TabBar.js
import React, { useState } from 'react';

const TabBar = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleRefresh = () => {
    // Add logic to refresh the content of the selected tab
    console.log(`Refreshing content for Tab ${selectedTab + 1}`);
  };

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => handleTabClick(index)}>
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div key={index} style={{ display: index === selectedTab ? 'block' : 'none' }}>
          {tab.content({ onRefresh: handleRefresh })}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
