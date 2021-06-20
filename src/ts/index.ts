import { notesToPlayInOrder } from "./music-to-play";
import { BEATS_PER_MINUTE } from "./musical-score";

function playMusic() {
    const notes = notesToPlayInOrder;
    
    // TODO Play these notes one after the other at the pitch and rhythm given in each note
    function playTest(){
        for(let i = 0; i < notesToPlayInOrder.length; i++){
            const audio = new Audio();
            let note = notes[i]
            if(note.hasOwnProperty("accidental")){
                
                audio.src = `${note.pitch}${note.octave.toString()} ${note.accidental}.mp3}`;
            }else{
                audio.src = `${note.pitch}${note.octave.toString()}.mp3}`;
            }

            audio.play();

            setTimeout(()=>{
                audio.pause()
            }, note.beats * BEATS_PER_MINUTE);

            audio.addEventListener("pause", ()=>{
                playTest();
            })


        }
    }
    playTest();
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
