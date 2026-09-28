const info = new URLSearchParams(window.location.search);

// ${info.get('')} <p></p><strong></strong>

document.querySelector("#results").innerHTML = `
<h2>Thanks for Applying! You Will Be Contacted Soon!</h2>
<p><strong>Name:</strong> ${info.get('first')} ${info.get('last')}</p>
<p><strong>Email:</strong> ${info.get('email')}</p>
<p><strong>Phone:</strong> ${info.get('phone')}</p>
<p><strong>Organization Title:</strong> ${info.get('title')}</p>
<p><strong>Organization Name:</strong> ${info.get('name')}</p>
<p><strong>Description:</strong> ${info.get('description')}</p>
<p><strong>Membership Level:</strong> ${info.get('membership')}</p>
`;