import { useState } from 'react';
import AddShow from './AddShow';
import ResentBlock from './Recent';

const RightBlock = () => {


    const transactionData = [
{ title: 'The Period of Kalingas', amount: 3 },
{ title: 'The Art of Science', amount: 1 },
{ title: 'All India Rocket Expo', amount: 3 },
{ title: 'The Period of Kalingas', amount: 2 },
{ title: 'The Art of Science', amount: 4 },
{ title: 'All India Rocket Expo', amount: 2 },
{ title: 'The Period of Kalingas', amount: 5 },
{ title: 'The Art of Science', amount: 2 },
{ title: 'All India Rocket Expo', amount: 3 },
{ title: 'The Period of Kalingas', amount: 1 },
{ title: 'The Art of Science', amount: 3 },
{ title: 'All India Rocket Expo', amount: 1 },
];
    return (
        <main className='RightBlock'>
            <AddShow/>

  <ResentBlock transactions={transactionData} />;
           
        </main>
    );
};

export default RightBlock;
