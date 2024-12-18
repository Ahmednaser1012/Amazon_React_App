import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Logo from "../../images/login-logo.png";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // const { user } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerBtn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          alert("Account Created Successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message + " Please try again");
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          // alert("Sign In Successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        alert(" Please try again !! " + error.message);
      });
  };

  // console.log(user);
  return (
    <Container className="login" style={{ width: "auto" }}>
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <Form className="login-container">
        <h1>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="Email">E-mail </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ borderColor: "#a88734 #9c7e31 #846a29 " }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ borderColor: "#a88734 #9c7e31 #846a29 " }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="login-signInBtn" type="submit" onClick={signIn}>
          Sign In
        </Button>
        <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.
        </p>
        <Button className="login-registerBtn" onClick={registerBtn}>
          Create your Amazon Account
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
