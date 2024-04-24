import { useState } from "react";
import "./styleLogin.css";
import { Form, Button } from "react-bootstrap";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Utilisation correcte de useNavigate

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Vérification du login et du mot de passe
    // Si c'est valide, on navigue vers la page d'accueil
    if (email === "votre_email" && password === "votre_mot_de_passe") {
      navigate("/Home");
    } else {
      alert("Login ou mot de passe incorrect !");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="LoginInput">
          <img src={meal} alt="meal login" />
          <h3>Clarusway Recipe</h3>
          <Form onSubmit={handleSubmit} id="form">
            <Form.Group className="mb-1 emailpw" controlId="Email">
              <Form.Control
                className="mb-1 emailpw"
                placeholder="USERNAME"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-2 emailpw" controlId="password">
              <Form.Control
                className="mb-2 emailpw"
                controlId="password"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="emailpw log"
              disabled={!validateForm()}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
