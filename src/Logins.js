import "./login.css";
import BackgroundCol from "./Component/BackgroundCol";
import LoginBg from "./Component/LoginBg";
import Login from "./Component/Login";
import MainHeading from "./Component/MainHeading";

export default function Logins() {
  return (
    <div className="App">
      <BackgroundCol />
      <LoginBg />
      <MainHeading />
      <Login />
    </div>
  );
}
