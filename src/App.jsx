import Header from "./components/Header.jsx";
import FirstName from "./components/FirstName.jsx";
import LastName from "./components/LastName.jsx";
import Email from "./components/Email.jsx";
import Submit from "./components/Submit.jsx";
import Queries from "./components/Queries.jsx";
import Message from "./components/Message.jsx";
import ConsentCheckbox from "./components/ConsentCheckbox.jsx";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-family1 bg-greenLighter">
      <div className="bg-neutralWhite p-6 rounded-xl mx-4 my-6 flex flex-col gap-y-6 lg:w-2/5">
        <Header></Header>
        <form className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:justify-evenly lg:gap-x-4">
            <FirstName></FirstName>
            <LastName></LastName>
          </div>
          <Email></Email>
          <Queries></Queries>
          <Message></Message>
          <ConsentCheckbox></ConsentCheckbox>
          <Submit></Submit>
        </form>
      </div>
    </div>
  );
}

export default App;
