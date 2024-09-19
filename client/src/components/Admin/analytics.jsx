import { useState } from 'react';
import Dashboard from './AnalyticsData';

const AnalyticsBlock = () => {
    const mostActiveRegions = ["Mumbai", "Chennai", "Hyderabad"];
    const topShows = [
      "The Period of Kalingas",
      "The Art of Science",
      "All India Rocket Expo"
    ];
    const leastPopularShows = [
      "The Period of Kalingas",
      "The Art of Science",
      "All India Rocket Expo"
    ];
  

    return (
        <main className='AnalyticsBlock'>
          <h1 className='analytics-hed'>Analytics</h1>

<Dashboard
        ticketsCount={0}
        regions={mostActiveRegions}
        topShows={topShows}
        leastPopularShows={leastPopularShows}
      />
        </main>
    );
};

export default AnalyticsBlock;
