//your JS code here. If required.

let btn = document.querySelector("#btn")


btn.addEventListener("click", (e)=>{
	e.preventDefault()
	let age = document.querySelector("#age").value;
	let name = document.querySelector("#name").value;

	if(age.length == 0 || name.length == 0){
		alert("Please enter valid details.")
		return;
	}

	const promise = new Promise((res, rej) => {
		if(age > 18){
			setTimeout(() => {
				res("Welcome, . You can vote.")
			}, 4000)
		}else{
			setTimeout(() => {
				rej("Oh sorry . You aren't old enough.")
			})
		}
	})

	promise.then((data) => alert(data))
		.catch((err) => alert(err))
})
