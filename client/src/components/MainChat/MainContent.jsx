import Header from "./Navbar";
import { useState, useEffect, useRef } from "react";
import Tickets from "../BookTickets/TicketHistory";

const MainContent = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);


  const handleSend = (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: messageText || inputText }
    ]);

    setTimeout(() => {
      if (messageText === "1" || inputText === "1") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "1 (From other end)" }
        ]);
      } else if (messageText === "2" || inputText === "2") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "2 (From other end)" }
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Zuhahahahah", id: 1 }
        ]);
      }
    }, 1000);

    setInputText("");
  };

  const handleButtonClick = (text) => {
    handleSend(text);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(inputText);
  };

  return (
    <div className="flex flex-col w-[80%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-4 py-5 mx-auto w-full rounded-3xl bg-zinc-800 max-md:pr-5 max-md:mt-10 max-md:max-w-full h-[95vh] relative">
        <Header />
        <div className="h-[70vh] overflow-y-auto">
          <div className="flex flex-wrap gap-5 justify-between mt-3 text-white max-md:max-w-full">
            <div className="flex flex-col">
              <div className="flex flex-col items-start px-5 pt-5 pb-4 w-full text-xs font-semibold rounded-md bg-neutral-700 max-md:ml-2.5">
                <div className="self-stretch text-base font-medium">
                  Hello, in what ways can I help you? Kindly select one of the
                  options below.
                </div>
                <div className="flex gap-10 mt-8">
                  <button
                    className="px-5 py-6 rounded-md shadow-sm bg-zinc-800 max-md:pr-5"
                    onClick={() => handleButtonClick("Book Tickets")}
                  >
                    Book Tickets
                  </button>
                  <button
                    className="px-2.5 pt-5 pb-8 rounded-md shadow-sm bg-zinc-800"
                    onClick={() => handleButtonClick("Available Shows")}
                  >
                    Available Shows
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 self-end w-full">
              {messages.map((message, index) => {
                if (message.sender !== "user") {
                  switch (message.id) {

                    case 1:
                      return (
                        <>
                          <div
                            key={index}
                            className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
                          >
                            Below are the shows available
                          </div>
                          <Tickets />
                        </>

                      );
                    case 2:
                      return (
                        <div
                          key={index}
                          className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
                        >
                          Component 2 Content
                        </div>
                      );
                    case 3:
                      return (
                        <div
                          key={index}
                          className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
                        >
                          Component 3 Content
                        </div>
                      );
                    case 4:
                      return (
                        <div
                          key={index}
                          className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
                        >
                          Component 4 Content
                        </div>
                      );
                    case 5:
                      return (
                        <div
                          key={index}
                          className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
                        >
                          Component 5 Content
                        </div>
                      );
                    default:
                      return (
                        <div
                          key={index}
                          className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
                        >
                          {message.text}
                        </div>
                      );
                  }
                } else {
                  return (
                    <div
                      key={index}
                      className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-700 self-end mr-2 rounded-tr-[5px]`}
                    >
                      {message.text}
                    </div>
                  );
                }
              })}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mr-6 py-3 text-base font-medium text-center text-zinc-300 text-opacity-80 max-md:mr-2.5 absolute bottom-3 bg-neutral-800 w-fit">
          <input
            type="text"
            className="px-7 py-4 bg-neutral-600 bg-opacity-50 rounded-[30px] max-md:px-5 w-[15rem] sm:w-[54rem] 2xl:w-[66rem]"
            placeholder="Message Hi to start"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5052bfd2170575807d11e31a541fbdd82dff05338276b17faf9f0f534793aab?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110"
              alt="Send message"
              className="object-contain shrink-0 my-auto w-12 aspect-square"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainContent;
