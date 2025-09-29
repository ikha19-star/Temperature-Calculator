function checkTemperature() {
	const name = document.getElementById("name").value.trim();
	const temp = parseFloat(document.getElementById("temperature").value);

	if (!name || isNaN(temp)) {
		alert("Please enter both name and temperature!");
    return;
	}
	
	let condition = "";

	if (temp <= 37) {
		condition = "Normal <img src='cold.png' alt='Cold Icon' class='logo'>";}
		else if (temp > 37 && temp <= 40) {
		condition = "Hot <img src='hot.png' alt='Hot Icon' class='logo'>";}
		else if (temp > 40) {
		condition = "High Fever <img src='high.png' alt='High Fever Icon' class='logo'>";
		}

	const resultMessage =
	  	<p><strong>Name:</strong> ${name}</p>
		<p><strong>Temperature:</strong> ${temp} °C</p>
		<p><strong>Status:</strong> ${condition}</p>;

  document.getElementById("resultMessage").innerHTML = resultMessage;

	// Show modal
	const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));
	resultModal.show();
}
