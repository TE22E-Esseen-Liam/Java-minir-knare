function  addition() {
	const tal1 = parseInt(document.getElementById("tal1").value)
	const tal2 = parseInt(document.getElementById("tal2").value)

	document.getElementById("svar").value = tal1 + tal2;
}

function subtraktion() {
	const tal1 = parseInt(document.getElementById("tal1").value)
	const tal2 = parseInt(document.getElementById("tal2").value)

	document.getElementById("svar").value = tal1 - tal2;
}

function multiplikation() {
	const tal1 = parseInt(document.getElementById("tal1").value)
	const tal2 = parseInt(document.getElementById("tal2").value)

	document.getElementById("svar").value = tal1 * tal2;
}

function division() {
	const tal1 = parseInt(document.getElementById("tal1").value)
	const tal2 = parseInt(document.getElementById("tal2").value)

	document.getElementById("svar").value = tal1 / tal2;
}
