import React, { useState } from 'react';



    const ResentBlock = ({ transactions }) => {
        // Initialize state for the transaction amounts
        const [amounts, setAmounts] = useState(transactions.map(tx => tx.amount));
    return (
        <main className='ResentBlock'>
      <h3>Recent Transactions</h3>
           <div className="transaction-list">
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            <span className='title'>{tx.title}</span>
            <span className='qty'>{amounts[index] > 0 ? `+${amounts[index]}` : amounts[index]}</span>
          </li>
        ))}
      </ul>
    </div>
        </main>
    );
};

export default ResentBlock;
