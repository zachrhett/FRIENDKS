/*==========================================================
  voice-assistant.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDVoice = (() => {

const STATE = {

    enabled: true,

    listening: false,

    speaking: false,

    wakeWord: "FRIEND",

    lastCommand: "",

    commands: [

        {
            phrase: "open scorecard",
            action: "scorecard"
        },

        {
            phrase: "open analytics",
            action: "analytics"
        },

        {
            phrase: "open executive dashboard",
            action: "executive"
        },

        {
            phrase: "open leader focus",
            action: "leader"
        },

        {
            phrase: "open guided actions",
            action: "guided"
        },

        {
            phrase: "open maximo",
            action: "maximo"
        },

        {
            phrase: "open executive ai",
            action: "ai"
        }

    ]

};

function speak(message){

    if(!("speechSynthesis" in window)) return;

    speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(message);

    utterance.rate = 1;

    utterance.pitch = 1;

    utterance.volume = 1;

    STATE.speaking = true;

    utterance.onend = () => {

        STATE.speaking = false;

    };

    speechSynthesis.speak(utterance);

}

function execute(command){

    STATE.lastCommand = command;

    const match =
        STATE.commands.find(item =>
            command.toLowerCase().includes(item.phrase)
        );

    if(match){

        FRIENDRouter.navigate(match.action);

        speak(
            `${match.action} opened.`
        );

    }

}

return{

    STATE,
    speak,
    execute

};

})();
/*==========================================================
  voice-assistant.js
  PART 2 OF N
==========================================================*/

FRIENDVoice.startListening = function () {

    const Recognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!Recognition) {

        console.warn("Speech Recognition not supported.");

        return;

    }

    const recognition =
        new Recognition();

    recognition.lang = "en-US";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    this.STATE.listening = true;

    recognition.onresult = event => {

        const transcript =
            event.results[0][0].transcript;

        this.execute(transcript);

    };

    recognition.onend = () => {

        this.STATE.listening = false;

    };

    recognition.onerror = () => {

        this.STATE.listening = false;

    };

    recognition.start();

};

/*==========================================================
  Stop Listening
==========================================================*/

FRIENDVoice.stopListening = function () {

    this.STATE.listening = false;

};

/*==========================================================
  Initialize Voice Button
==========================================================*/

FRIENDVoice.initialize = function () {

    const button =
        document.querySelector("#friendVoiceButton");

    if (!button) return;

    button.addEventListener("click", () => {

        if (this.STATE.listening) {

            this.stopListening();

        } else {

            this.startListening();

        }

    });

};

/*==========================================================
  Auto Initialize
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    FRIENDVoice.initialize();

});

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDVoice = FRIENDVoice;

/*==========================================================
  End voice-assistant.js
==========================================================*/
