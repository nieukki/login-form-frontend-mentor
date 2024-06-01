import Header from "./components/Header.jsx";
import FirstName from "./components/FirstName.jsx";
import LastName from "./components/LastName.jsx";
import Email from "./components/Email.jsx";
import Submit from "./components/Submit.jsx";
import Queries from "./components/Queries.jsx";
import Message from "./components/Message.jsx";
import ConsentCheckbox from "./components/ConsentCheckbox.jsx";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    firstName.length === 0 ? setError(true) : setError(false);
    lastName.length == 0 ? setError(true) : setError(false);
    email.length == 0 ? setError(true) : setError(false);
    message.length == 0 ? setError(true) : setError(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-family1 bg-greenLighter">
      <div className="bg-neutralWhite p-6 rounded-xl mx-4 my-6 flex flex-col gap-y-6 lg:w-2/5">
        <Header></Header>
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:justify-evenly lg:gap-x-4">
            <FirstName setFirstName={setFirstName} error={error}></FirstName>
            <LastName setLastName={setLastName} error={error}></LastName>
          </div>
          <Email setEmail={setEmail} error={error}></Email>
          <Queries setQuery={setQuery} error={error}></Queries>
          <Message setMessage={setMessage} error={error}></Message>
          <ConsentCheckbox
            setConsent={setConsent}
            error={error}
          ></ConsentCheckbox>
          <Submit></Submit>
        </form>
      </div>
    </div>
  );
}

export default App;
