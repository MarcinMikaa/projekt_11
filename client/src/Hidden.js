import "./App.css";
import { useHistory } from "react-router-dom";

function Hidden() {
  const history = useHistory();
  const status = localStorage.getItem("status");

  if (status === "Successfully Authenticated") {
    console.log("zalogowany");
  } else {
    console.log("nie zalogowany");
    history.push("/registerlogin");
  }

  return (
    <div className="App">
      <h1>Welcome </h1>
    </div>
  );
}

export default Hidden;
