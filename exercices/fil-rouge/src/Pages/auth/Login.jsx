import { Link } from "react-router-dom";

function Login() {

    function submitHandler(e){
        e.preventDefault();
        console.log("submitHandler");
    }

	return (
		<main id="login">
			<form onSubmit={submitHandler}>
				<label htmlFor="username">Username :</label>
				<input type="text" name="username" id="username" />

				<label htmlFor="password">Password :</label>
				<input type="text" name="password" id="password" />

				<button type="submit">Sign in</button>
			</form>
			<p>
				No Account yet ? :{" "}
				<Link to={"/auth/register"}>Click here to register</Link>
			</p>
		</main>
	);
}

export default Login;
