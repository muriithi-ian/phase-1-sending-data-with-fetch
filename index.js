// Add your code here
function submitData(name, email) {
	return fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			name,
			email,
		}),
	})
		.then(function (res) {
			return res.json();
		})
		.then(function (user) {
			document.body.innerHTML = user["id"];
		})
		.catch(function (err) {
			document.body.innerHTML = err.message;
		});
}
