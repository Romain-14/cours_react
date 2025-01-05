function Register() {
	return (
		<main id="register">
			<form>
				<label htmlFor="username">Username :</label>
				<input type="text" name="username" id="username" />

				<label htmlFor="password">Password :</label>
				<input type="text" name="password" id="password" />

				<button type="submit">Create account</button>
			</form>
		</main>
	);
}

export default Register;
