document.addEventListener("DOMContentLoaded", function () {

const header = `
<header>

<div class="container">

<div class="logo">

<img src="YCSS-logo.jpg" alt="YCSS Logo">

<div>
<h1>YCSS NGO</h1>
<p>Yuva Chaithanya Seva Samithi</p>
</div>

</div>

<nav>

<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="programs.html">Programs</a>
<a href="projects.html">Projects</a>
<a href="gallery.html">Gallery</a>
<a href="volunteer.html">Volunteer</a>
<a href="donate.html">Donate</a>
<a href="certificate.html">Certificates</a>
<a href="reports.html">Reports</a>
<a href="contact.html">Contact</a>

</nav>

</div>

</header>
`;

const target = document.getElementById("header");

if(target){
target.innerHTML = header;
}

});
