import { useState } from 'react';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
// import RightBlock from './RightBlock';
const MainContent = () => {


    return (
        <main className='Admin-maincontent'>
            <div className="heading">
                <img src="./Vector.png" alt="" />
                <h1>Dashboard</h1>
            </div>
            <div className="Admin-content">
<LeftBlock/>
<div className='btw-left-right'></div>
<RightBlock/>
            </div>
        </main>
    );
};

export default MainContent;
