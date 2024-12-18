// Get references to the form display area
let form = document.getElementById('resume-form') as HTMLFormElement
let resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form Submission
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault(); // prevent page reload
    
    // collect input values
    let name = (document.getElementById ('name') as HTMLInputElement).value
    let email = (document.getElementById ('email') as HTMLInputElement).value
    let phone = (document.getElementById ('phone') as HTMLInputElement).value
    let education = (document.getElementById ('education') as HTMLInputElement).value
    let experience = (document.getElementById ('experience') as HTMLInputElement).value
    let skills = (document.getElementById ('skills') as HTMLInputElement).value

    // Generate the Resume Contact dynamically
    let resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    
    <h3>Experince</h3>
    <p>${experience}</p>

    
    <h3>skills</h3>
    <p>${skills}</p>
    `;

    // Display the generate resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
});
