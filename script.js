let btn= document.querySelector("#btn");
let content= document.querySelector("#content");
let voice= document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = "en-IN";
    text_speak.pitch = 0.9;
    text_speak.rate = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak); 
}

function wishMe(){
    let day = new Date();
    let hour = day.getHours();
    if(hour >= 0 && hour < 12){
        speak("Good Morning");
    } else if(hour >= 12 && hour < 16){
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}

window.addEventListener("load", () => {
    wishMe();
})

let speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript);
}

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    message = message.toLowerCase();
    if(message.includes("hello") || message.includes("hi") || message.includes("hey")) {
        speak("Hello, how can I help you?");
    }
    else if(message.includes("who are you")|| message.includes("what is your name") || message.includes("tell me about yourself")) {
        speak("My name is Kabir Singh, your virtual assistant, created by Subhadip Sir.");
    }
    else if(message.includes("what is your purpose") || message.includes("what can you do")) {
        speak("I am here to assist you with various tasks, answer your questions, and provide information.");
    }
     else if(message.includes("how are you")) {
        speak("i am fine. how are you?");
    }
    else if(message.includes("kaise ho") || message.includes("kya haal hai") || message.includes("kya haal chaal hai")) {
        speak("mein badiya. aaap baataayea aap kaayseea ho?");
    }
    else if(message.includes("thank you") || message.includes("thanks")|| message.includes("thank")) {
        speak("You're welcome! If you need anything else, just ask.");
    }
    else if(message.includes("sukriya") || message.includes("dhanyvad") || message.includes("shukriya")) {
        speak("You're welcome! apko aur kuch zarurat ho, to bata sakte hai.");
    }
    else if(message.includes("arisha") || message.includes("arisa")) {
        speak("you are saying about arisha jamal right?? she is your friend");
    }
    else if(message.includes("priya") || message.includes("piya")) {
        speak("priya is your wife cum girlfriend.");
    }
    else if(message.includes("mona") || message.includes("mana")) {
        speak("mona tomar girlfriend mona.");
    }
     else if(message.includes("birthday") || message.includes("wish")) {
        speak("happy birthday priya boudi. many many happy returns of the day.");
    }
    else if(message.includes("goodbye") || message.includes("bye")) {
        speak("Goodbye! Have a great day!");
    }
    else if(message.includes("youtube")){
        speak("Opening YouTube for you.");
        window.open("https://www.youtube.com", "_blank");
    }
    else if(message.includes("google")) {
        speak("Opening Google for you.");
        window.open("https://www.google.com", "_blank");
    }
    else if(message.includes("facebook")) {
        speak("Opening Facebook for you.");
        window.open("https://www.facebook.com", "_blank");
    }
    else if(message.includes("instagram")) {
        speak("Opening Instagram for you.");
        window.open("https://www.instagram.com", "_blank");
    }
    else if(message.includes("twitter")) {
        speak("Opening Twitter for you.");
        window.open("https://www.twitter.com", "_blank");
    }
    else if(message.includes("open whatsapp")) {
        speak("Opening WhatsApp for you.");
        window.open("WhatsApp://");
    }
    else if(message.includes("open gmail")) {
        speak("Opening Gmail for you.");
        window.open("https://mail.google.com", "_blank");
    }
    else if(message.includes("open google drive")) {
        speak("Opening Google Drive for you.");
        window.open("https://drive.google.com", "_blank");
    }
    else if(message.includes("open google maps")) {
        speak("Opening Google Maps for you.");
        window.open("https://www.google.com/maps", "_blank");
    }
    else if(message.includes("open calculator")) {
        speak("Opening Calculator for you.");
        window.open("Calculator://");
    }
    else if (message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
    }
    else {
        let finalText="this is what I found on internet regarding " + message.replace("kabir", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("kabir", "")}`);
    }
    
}




