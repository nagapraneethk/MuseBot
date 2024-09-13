import EventCard from "./TicketDetails";

const Tickets = () => {
  const eventCards = [
    {
      title: "The Period of the Kalingas",
      location: "Historical Museum of Kolkata",
      description: "Description of the event",
      date: "11 September",
      times: ["11:00 A.M", "12:00 P.M", "2:00 P.M", "3:330 P.M"],
    },
    {
      title: "The Period of the Kalingas",
      location: "Historical Museum of Kolkata",
      description: "Description of the event",
      date: "11 September",
      times: ["11:00 A.M", "12:00 P.M", "2:00 P.M", "3:330 P.M"],
    },

  ];

  return (
    <div className="flex flex-wrap gap-8 justify-between text-white max-md:max-w-full">
      <div className="self-center mt-7 max-w-full w-[806px]">
        <div className="flex flex-wrap gap-7 max-md:flex-col">
          {eventCards.map((event, index) => (
            <div key={index} className="max-md:w-full"> 
              <EventCard title={event.title} location={event.location} description={event.description} date={event.date} times={event.times}/>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Tickets
