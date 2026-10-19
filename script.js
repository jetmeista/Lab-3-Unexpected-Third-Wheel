
// STORY 1: Chronological Order

const story1 = [
    {
        image: "images/getting-ready.jpg",
        title: "Getting Ready",
        caption: "My friend originally bought two tickets to an EDM concert for himself and a girl he was seeing. Unfortunately, she ended things with him, so he gave me the extra ticket instead. Here's a photo of me getting ready for the night."
    },
    {
        image: "images/concert.jpg",
        title: "An Unexpected Encounter",
        caption: "During the concert, my friend unexpectedly runs into the same girl who ended things with him. Somehow, they start dancing together, and I'm suddenly third-wheeling."
    },
    {
        image: "images/uber.jpg",
        title: "Back Together?",
        caption: "At the end of the night, we're all waiting for our Uber, and somehow they're together again. I guess all it took was one EDM concert."
    }
];


// STORY 2: Reverse Order

const story2 = [
    {
        image: "images/uber.jpg",
        title: "The Plot Twist",
        caption: "It's the end of the night, and I'm waiting for an Uber with my friend and a girl who apparently broke up with him. Judging by how close they are, you wouldn't think anything ever happened between them. So how did we get here?"
    },
    {
        image: "images/concert.jpg",
        title: "Rewind to the Concert",
        caption: "A few hours earlier, we were at an EDM concert when my friend unexpectedly ran into his ex-situationship. One thing led to another, and they spent the rest of the concert dancing together. Meanwhile, I was just there enjoying the music."
    },
    {
        image: "images/getting-ready.jpg",
        title: "The Original Plan",
        caption: "Originally, my friend invited me because the girl he originally bought the ticket for ended things with him. I thought I was getting a free concert ticket, but apparently I was just holding her spot until they got back together."
    }
];


// VARIABLES

let currentStory = story1;
let currentStep = 0;


// GET HTML ELEMENTS

const storyImage = document.getElementById("story-image");
const photoTitle = document.getElementById("photo-title");
const caption = document.getElementById("caption");
const stepNumber = document.getElementById("step-number");
const storyTitle = document.getElementById("story-title");

const story1Button = document.getElementById("story1");
const story2Button = document.getElementById("story2");

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");


// FUNCTION: DISPLAY CURRENT PHOTO

function showStep() {

    storyImage.src = currentStory[currentStep].image;

    photoTitle.textContent = currentStory[currentStep].title;

    caption.textContent = currentStory[currentStep].caption;

    stepNumber.textContent = "Photo " + (currentStep + 1) + " of 3";

    // Disable buttons at the beginning or end

    previousButton.disabled = currentStep === 0;

    nextButton.disabled = currentStep === 2;

}


// FUNCTION: CHANGE BETWEEN STORIES

function changeStory(storyNumber) {

    currentStep = 0;

    if (storyNumber === 1) {

        currentStory = story1;

        storyTitle.textContent = "The Unexpected Reunion";

        story1Button.classList.add("active");
        story2Button.classList.remove("active");

    } else {

        currentStory = story2;

        storyTitle.textContent = "How Did I Become the Third Wheel?";

        story2Button.classList.add("active");
        story1Button.classList.remove("active");

    }

    showStep();

}


// EVENT LISTENERS: STORY SELECTION

story1Button.addEventListener("click", function() {
    changeStory(1);
});

story2Button.addEventListener("click", function() {
    changeStory(2);
});


// EVENT LISTENER: NEXT BUTTON

nextButton.addEventListener("click", function() {

    if (currentStep < 2) {
        currentStep++;
        showStep();
    }

});


// EVENT LISTENER: PREVIOUS BUTTON

previousButton.addEventListener("click", function() {

    if (currentStep > 0) {
        currentStep--;
        showStep();
    }

});


// DISPLAY FIRST STORY WHEN WEBSITE LOADS

changeStory(1);
