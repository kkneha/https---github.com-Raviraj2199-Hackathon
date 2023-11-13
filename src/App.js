import logo from './logo.svg';
import './App.css';
import InformationBox from './Components/InformationBox';
import CorrectnessGraph from './Components/CorrectnessGraph';
import VerticalDivider from './Components/VerticalDivider';
import Tab from './Components/Tab';
import TabBar from './Components/TabBar';
import React, { useState, useEffect } from 'react';

function App() {
  const tabs = [
    { label: 'Tab 1', content: Tab },
    { label: 'Tab 2', content: Tab },
    // Add more tabs as needed
  ];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const username = 'itdashboard';
    const password = 'Stratacent@1';
  
    try {
      const response = await fetch('https://dev81897.service-now.com/api/now/table/u_compliance?sysparm_display_value=true&sysparm_exclude_reference_link=true&sysparm_fields=u_ci_name%2Cu_ci_name.install_status%2Cu_ci_name.sys_class_name%2Cu_compliance_filter%2Cu_aging%2Cu_active&u_active=true', {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`, // Base64 encode the credentials
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log(result);

    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  // return (
  //   <div>
  //     <h1>Data from API</h1>
  //     {loading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <ul>
  //         {data.map((item) => (
  //           <li key={item.id}>{item.name}</li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );

  console.log(data);
  return (
    <div className='main'>
      <div className='upContent'>
    <InformationBox />
    <VerticalDivider />
    <CorrectnessGraph />
    </div>
    <div className='tabContent'>
    <TabBar tabs={tabs}/>
    </div>
    </div>
      );
}

export default App;
