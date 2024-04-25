// script.js

document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    generateResume();
});

function generateResume() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var position = document.getElementById("position").value;
    var company = document.getElementById("company").value;

    var resume = `
        <h3>${fullName}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Years of Experience: ${experience}</p>
        <p>Highest Education: ${education}</p>
        <p>Skills: ${skills}</p>
        <p>Position Applying For: ${position}</p>
        <p>Company Applying To: ${company}</p>
    `;

    document.getElementById("previewContent").innerHTML = resume;
    document.getElementById("questions").style.display = "none";
    document.getElementById("resumePreview").style.display = "block";
}

function editResume() {
    document.getElementById("questions").style.display = "block";
    document.getElementById("resumePreview").style.display = "none";
}
