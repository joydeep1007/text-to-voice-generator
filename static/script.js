class TextToSpeech {
    constructor() {
        this.textEl = document.getElementById('text');
        this.speakEl = document.getElementById('speak');
        this.synth = window.speechSynthesis;
        this.speaking = false;
        
        this.init();
    }

    init() {
        this.speakEl.addEventListener('click', () => this.toggleSpeech());
        
        // Update button text based on speech status
        this.synth.onstart = () => {
            this.speaking = true;
            this.speakEl.textContent = 'Stop';
        };
        
        this.synth.onend = () => {
            this.speaking = false;
            this.speakEl.textContent = 'Speak Text';
        };
    }

    toggleSpeech() {
        if (this.speaking) {
            this.stop();
        } else {
            this.speak();
        }
    }

    speak() {
        const text = this.textEl.value.trim();
        
        if (!text) {
            alert('Please enter some text to speak');
            return;
        }

        try {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;  // Speed of speech
            utterance.pitch = 1.0; // Pitch of voice
            utterance.volume = 1.0; // Volume level
            
            this.synth.speak(utterance);
        } catch (error) {
            console.error('Speech synthesis error:', error);
            alert('Sorry, text-to-speech is not supported in your browser');
        }
    }

    stop() {
        this.synth.cancel();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TextToSpeech();
});