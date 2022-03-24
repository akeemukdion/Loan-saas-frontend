import { useState } from "react";
import { FormInput } from "../../components/FormInput/index";
import LoginButton from "../../components/Button/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Form } from "./login.style";
import { RootState } from "../../Store/store";
import Loader from "../../components/Preloader/index";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Store/actions/authAction";
// import { loginEmployeeService } from "../../services/userServices";
// import {State} from '../../Store/Reducers/index';
type Loginstate = {
  email: string;
  password: string;
};

const inputsArray = [
  {
    // id: 2,
    name: "email",
    type: "email",
    placeholder: "Enter email",
    label: "Email",
    errorMessage: "it should be valid email address",
    required: true,
    //   pattern:"^[A-Za-z0-9]{}"
  },
  {
    // id: 3,
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    label: "Password",
    errorMessage: "Input your password  ",
    required: true,
    //   pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$£!%*#?&^_-]{8,20}$",
  },
];

const LoginForm = () => {
  const storeState = useSelector(
    (state: RootState) => state.authUser["loading"]
  );
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<Loginstate>({
    email: "",
    password: "",
  });
  // console.log(user, "sdftr");
  const navigate = useNavigate();
  const location = useLocation();

  function redirectOnSuccess() {
    const redirectPath = location.state?.path || "/dashboard/overview";
    navigate(redirectPath, { replace: true });
  }

  const [error, setError] = useState({ message: "" });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(values);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      // dispatch(loginEmployeeService(userData, setUserData, userData, navigate));
      dispatch(getUser(userData, redirectOnSuccess));
    } else {
      setError({ message: "Invalid Details" });
    }
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={(event) => onSubmitHandler(event)}>
        <div className="logoContainer">
          <img
            src="../img_asset/loginlogo.png"
            alt="ukdion logo"
            width="100%"
            height=""
          />
        </div>
        {inputsArray.map((input, index) => (
          <div className="inputfield" key={index}>
            <FormInput
              {...input}
              borderColor
              placeholder={input.placeholder}
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
        <LoginButton colored type="submit" disabled={storeState["loading"]}>
          {storeState["loading"] ? <Loader /> : "Login"}
        </LoginButton>
        {/* {JSON.stringify(userData)} */}
      </Form>
    </Container>
  );
};

// const mapStateToProps = (state: RootState) => ({
//   loading: state.authUser["loading"],
// });
export default LoginForm;
