// const getString = window.location.search;
// console.log(getString());

const myInfo = new URLSearchParams(window.location.search); // This line is the same as the 2 lines above just in 1
// console.log(myInfo);


// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));

// ${myInfo.get('')}

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your Email: ${myInfo.get('email')}</p>

`;