let currentStep = 1; // rocognize current step 
let userProfile = {}; // Object to store user information
const totalSteps = 11; // total steps 

function getUserInfo(message, outputElementId) {
    const userInput = prompt(message);
    if (userInput === null) { // controlskipped prompts
        return;
    }
    document.getElementById(outputElementId).textContent = userInput;
    updateProgressBar(); // Move this line before incrementing currentStep
    currentStep++;
    return userInput;
}

//start
function startForm() {
    showButtons();
    alert("WELCOME! Click next button , go next step. ");
}



//get name

function getName() {
    const name = getUserInfo("STEP 1| What is your name? | Question 1/4", "NameOutput");
    if (name) {
        userProfile.name = name;
        showButtons();

    }
}


//get age


function getAge() {
    const age = getUserInfo("STEP 1| How old are you? | Question 2/4", "AgeOutput");
    if (age) {
        userProfile.age = age;
        showButtons();

    }
}


//get gender


function getGender() {
    const gender = getUserInfo("STEP 1| Your gender? | Question 3/4", "GenderOutput");
    if (genderender) {
        userProfile.genderender = gender;
        showButtons();

    }
}

//get email


function getEmail() {
    const email = getUserInfo("STEP 1| Enter your e-mail address?  | Question 4/4", "EmailOutput");
    if (email) {
        userProfile.email = email;
        showButtons();

        if (currentStep === 5) {
            alert("Thank you for information, Click next button and go forward!");
        }
    }
}


//get rational

function getRational() {
    const rational = getUserInfo("STEP 2| What brings you this cause? | Question 1/4", "RationalOutput");
    if (rational) {
        userProfile.rational = phoneNumber;
        showButtons();

    }
}

//get task

function getTask() {
    const task = getUserInfo("STEP 2| What is your task? | Question 2/4", "TaskOutput");
    if (task) {
        userProfile.task = task;
        showButtons();

    }
}

//get modern energy

function getModerenergy() {
    const modernenergy = getUserInfo("STEP 2| What are the modern energies,to develop in the world?| Question 3/4", "ModernenergyOutput");
    if (modernenergy) {
        userProfile.modernenergy = modernenergy;
        showButtons();

    }
}

//get reach

function getReach() {
    const reach = getUserInfo("STEP 2| What sustainable energy is within your reach? | Question 4/4", "ReachOutput");
    if (reach) {
        userProfile.reach = reach;
        showButtons();

        if (currentStep === 9) {
            alert("Thank you for information, Click next button and  go forward!");
        }
    }
}




//get expected

function getExpected() {
    const expected = getUserInfo("STEP 3| What is the sustainable energy that is expected to develop? | Question 1/4", "ExpectedOutput");
    if (expected) {
        userProfile.expected = expected;
        showButtons();

    }
}

//get idea

function getIdea() {
    const idea = getUserInfo("STEP 3| What idea do you have to improve it? | Question 2/4", "IdeaOutput");
    if (idea) {
        userProfile.idea = idea;
        showButtons();

    }
}


//get popular

function getPopular() {
    const popular = getUserInfo("STEP 3| What ideas do you have to popular reliable  energies? | Question 3/4", "PopularOutput");
    if (popular) {
        userProfile.popular = popular;
        showButtons();

    }
}

//get benefit

function getBenefit() {
    const benefit = getUserInfo("STEP 3|What are the expected benefits of using sustainable energy? | Question 4/4?", "BenefitOutput");
    if (benefit) {
        userProfile.benefit = benefit;
        showButtons();
        updateProfilePreview();
        if (currentStep !== 12) {
            alert("Thank you for information, complete your profile!");
        }
    }
}

//buttons


function showButtons() {
    getButton1();
    getButton2();
    getButton3();
}

//update profile


function updateProfilePreview() {
    const profileList = document.getElementById('profile-details');
    profileList.innerHTML = ''; // Clear previous content

    // Dynamically create list items based on available user profile data
    for (const key in userProfile) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${userProfile[key]}`;
        profileList.appendChild(listItem);
    }
}

//update progress bar


function updateProgressBar() {
    let progressPercentage = (Object.keys(userProfile).length / totalSteps) * 100;

    if (currentStep > Object.keys(userProfile).length) {
        progressPercentage = ((currentStep - 1) / totalSteps) * 100;
    }
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercentage}%`;

    const progressText = document.getElementById('progress-text');
    progressText.textContent = `${progressPercentage.toFixed(0)}% Complete`;

    progressBar.classList.remove('not-completed');
    progressBar.classList.remove('completed');

    if (progressPercentage === 100) {
        progressBar.classList.add('completed');
    } else {
        progressBar.classList.add('not-completed');
    }
}


//next button


function getButton1() {
    var button1 = document.createElement("button");
    button1.innerHTML = "Next";
    button1.setAttribute("id", "nextButton");
    button1.setAttribute("onclick", "nextCurrentStep()");

    // Clear existing buttons before adding a new one
    document.getElementById("buttonContainer1").innerHTML = "";
    document.getElementById("buttonContainer1").appendChild(button1);
}

function nextCurrentStep() {
    switch (currentStep) {
        case 1:
            getName();
            break;
        case 2:
            getAge();
            break;
        case 3:
            getGender();
            break;
        case 4:
            getEmail();
            break;
        case 5:
            getRational();
            break;
        case 6:
            getTask();
            break;
        case 7:
            getModerenergy();
            break;
        case 8:
            getReach();
            break;
        case 9:
            getExpected();
            break;
        case 10:
            getIdea();
            break;
        case 11:
            getPopular();
            break;
        case 12:
            getBenefit();
            break;
        default:
            break;
    }
}

//skip button


function getButton2() {
    var button2 = document.createElement("button");

    // Set button text and attributes
    button2.innerHTML = "Skip";
    button2.setAttribute("id", "skipButton");
    button2.setAttribute("onclick", "skipCurrentStep()");

    // Append the button to the buttonContainer div
    document.getElementById("buttonContainer2").innerHTML = ""; // Clear existing buttons
    document.getElementById("buttonContainer2").appendChild(button2);
}

function skipCurrentStep() {
    switch (currentStep) {
        case 1:
            getName();
            break;
        case 2:
            getAge();
            break;
        case 3:
            getGender();
            break;
        case 4:
            getEmail();
            break;
        case 5:
            getRational();
            break;
        case 6:
            getTask();
            break;
        case 7:
            getModerenergy();
            break;
        case 8:
            getReach();
            break;
        case 9:
            getExpected();
            break;
        case 10:
            getIdea();
            break;
        case 11:
            getPopular();
            break;
        case 12:
            getBenefit();
            break;
        default:
            break;
    }
}


//previous button


function getButton3() {
    var button3 = document.createElement("button");

    button3.innerHTML = "Previous";
    button3.setAttribute("id", "prevButton");
    button3.setAttribute("onclick", "goToPreviousStep()");

    document.getElementById("buttonContainer3").innerHTML = "";
    document.getElementById("buttonContainer3").appendChild(button3);
}



function goToPreviousStep() {
    currentStep--;

    switch (currentStep) {
        case 1:
            showButtons();
        case 2:
            getName();
            break;
        case 3:
            getAge();
            break;
        case 4:
            getGender();
            break;
        case 5:
            getEmail();
            break;
        case 6:
            getRational();
            break;
        case 7:
            getTask();
            break;
        case 8:
            getModerenergy();
            break;
        case 9:
            getReach();
            break;
        case 10:
            getExpected();
            break;
        case 11:
            getIdea();
            break;
        case 12:
            getPopular();
            break;
        case 13:
            getBenefit();
            break;
        default:
            break;
    }
}

updateProgressBar();