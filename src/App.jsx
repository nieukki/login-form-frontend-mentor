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
    <div className="w-screen h-screen flex flex-col justify-center font-family1 bg-greenLighter">
      <div className="bg-neutralWhite p-6 rounded-xl mx-4 my-6 flex flex-col gap-y-6 ">
        <Header></Header>
        <form className="flex flex-col gap-y-2">
          <FirstName></FirstName>
          <LastName></LastName>
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
