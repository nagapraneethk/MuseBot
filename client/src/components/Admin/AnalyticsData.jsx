import React from "react";


const Dashboard = ({ ticketsCount, regions, topShows, leastPopularShows }) => {
  return (
    
    <div className="dashboard-container">
      
      <div className="tickets-section">
        <div className="tickets-count">
          <h1 className="booking-count">{ticketsCount}+</h1>
          <p>TICKETS BOOKED</p>
        </div>
         
        <div className="most-active-regions">
          <h2>Most Active Regions</h2>
          <ol>
            {regions.map((region, index) => (
              <li key={index} className={`region-${index + 1}`}>
                {region}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="shows-section">
        <div className="top-shows">
          <h3>Top Shows</h3>
          <ul>
            {topShows.map((show, index) => (
              <li key={index}>{show}</li>
            ))}
          </ul>
        </div>
        <div className="least-popular-shows">
          <h3>Least Popular Shows</h3>
          <ul>
            {leastPopularShows.map((show, index) => (
              <li key={index}>{show}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
