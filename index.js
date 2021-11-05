function play_sound(sound_file){
    new Audio(sound_file).play();
}

function clicked(id){
    sound_file = "sounds/" + id + '.mp3'
    console.log(sound_file)
    play_sound(sound_file)
}

var key_sound_mapper = {
    'a':'sounds/kick.mp3',
    's':'sounds/snare.mp3',
    'd':'sounds/hihat.mp3',
    'f':'sounds/floor-tom.mp3',
    'g':'sounds/low-tom.mp3',
    'h':'sounds/hi-tom.mp3',
    'j':'sounds/c1.mp3',
    'k':'sounds/c2.mp3',
    'l':'sounds/ride.mp3'
}

document.addEventListener('keypress',function(event){
    play_sound(key_sound_mapper[event.key])
})