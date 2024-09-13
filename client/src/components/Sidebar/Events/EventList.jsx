import PropTypes from 'prop-types';
import React from 'react';

const myPropTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
};

const EventList = ({ title, events }) => {
  
  EventList.propTypes = myPropTypes;

  return(
    <>
  <div className='flex flex-col px-2 pt-2 pb-4 mx-auto w-full text-sm font-medium text-white rounded-3xl bg-zinc-800 max-md:mt-4 justify-center'>
    <div className='flex flex-col items-center px-4 pt-8 pb-8 rounded-3xl border border-solid bg-neutral-700 border-neutral-800 max-md:px-3 justify-center text-center'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div className='self-stretch mt-4 text-sm'>
            {event.date} - {event.time}
          </div>
          {index < events.length - 1 && (
            <div className='shrink-0 mt-2 h-px border border-white border-solid w-[60px]' />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
          
              </>
              
            )
          };

export default EventList;
