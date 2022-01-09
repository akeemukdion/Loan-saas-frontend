import { useState } from "react";
import FormInput from "../../components/FormInput/index";
import LoginButton from "../../components/Button/index";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./login.style";

type Loginstate = {
  email: string;
  password: string;
};

// type Fieldarray={
//   id: number;
//   name: string;
//   type: string;
//   placeholder:string;
//   label: string;
//   errorMessage: string;
//   required: boolean;
//   //   pattern:"^[A-Za-z0-9]{}"
// }

const LoginForm: () => JSX.Element = () => {
  const [userData, setUserData] = useState<Loginstate>({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ message: "" });
  let navigate = useNavigate();
  const inputsArray = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      errorMessage: "it should be valid email address",
      required: true,
      //   pattern:"^[A-Za-z0-9]{}"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      errorMessage: "Input your password  ",
      required: true,
      //   pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$£!%*#?&^_-]{8,20}$",
    },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(values);
  };
  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // console.log(userData);
    if (userData.email && userData.password) {
      navigate("/dashboard/overview");
    } else {
      setError({ message: "Invalid Details" });
    }
  };

  return (
    <Container>
      <Form autoComplete="off">
        <div className="logoContainer">
          <img
            src="../img_asset/loginlogo.png"
            alt="ukdion logo"
            width="100%"
            height=""
          />
        </div>
        {inputsArray.map((input) => (
          <div className="inputfield" key={input.id}>
            <FormInput
              {...input}
              placeholder={input.placeholder}
              bordercolor
              // value={userData["email"]}
              onChange={handleFormChange}
            />
          </div>
        ))}
        {error.message && (
          <div className="error_message">
            <p>{error.message}</p>
          </div>
        )}
        <div className="Forgotpassword">
          <Link to="/#">Forgot Password</Link>
        </div>
        <LoginButton colored onClick={onSubmitHandler} type="submit">
          login
        </LoginButton>
        {/* {JSON.stringify(userData)} */}
      </Form>
    </Container>
  );
};
export default LoginForm;
