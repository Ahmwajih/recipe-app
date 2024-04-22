import { useState } from 'react'
import './styleLogin.css'
import { Form } from 'react-bootstrap';
import meal from '../../assets/meal.svg'
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }
    function handleSubmit(event) {

        event.preventDefault();
        history.push('/Home')

    }
    return (
        <div>
            <div className='login'>
                <div className='LoginInput'>
                    <img src={meal} alt="meal login" />
                    <h3>Clarusway Recipe</h3>
                    <Form onSubmit={handleSubmit} id='form'>
                        <Form.Group className="mb-1 emailpw" controlId="Email" >

                            <Form.Control className="mb-1 emailpw" placeholder='USERNAME' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb-2 emailpw" controlId="password">

                            <Form.Control className="mb-2 emailpw" controlId="password" type="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <a href='#' type="submit" className='emailpw log' disabled={!validateForm()} >Login</a>
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Login