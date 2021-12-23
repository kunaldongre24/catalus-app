import React, { useState } from "react";
import { Text } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import UserDetails from "./UserDetails";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

export default function RegisterScreen() {
  const { register } = React.useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const next = () => {
    setStep(step + 1);
  };
  const previous = () => {
    setStep(step - 1);
  };
  const values = { email, username, password };
  switch (step) {
    case 1:
      return (
        <UserDetails next={next} setUsername={setUsername} values={values} />
      );
    case 2:
      return <UserEmail next={next} setEmail={setEmail} values={values} />;
    case 3:
      return (
        <UserPassword next={next} setPassword={setPassword} values={values} />
      );
    case 4:
      return <Success />;
    default:
      return <Text>hi there</Text>;
  }
}
