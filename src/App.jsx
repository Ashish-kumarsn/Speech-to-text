
import React, { useCallback } from 'react'
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';


function App() {
    const startListenig = SpeechRecognition.startListening

    const {transcript,listening,resetTranscript,browserSupportSpeechRecognition}=useSpeechRecognition();
    const copyTextToClipboard = useCallback(() => {
        window.navigator.clipboard.writeText(transcript)
      } ,
      [transcript])
    
        return (
            <div>
                <p>Microphone:{listening?'on':'off'}</p>
                <button  onClick={startListenig} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Start</button>
                <button onClick={SpeechRecognition.stopListening} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Stop</button>
                <button onClick={resetTranscript} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">reset</button>
                <button 
            onClick={copyTextToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
                <input
                type="text"
                className='outline-none w-full py-1 px-3 rounded-lg'
                value={transcript}
                readOnly
                />
                
        
            </div>
          );
    
}

export default App

// ui ux kr lenge bhai