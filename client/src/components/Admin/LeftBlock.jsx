import { useState } from 'react';
import ShowsBlock from './shows';
import AnalyticsBlock from './analytics';

const LeftBlock = () => {


    return (
        <main className='LeftBlock'>
           <ShowsBlock/>
           <div className="btw-show-analytics"></div>
           <AnalyticsBlock/>
        </main>
    );
};

export default LeftBlock;
