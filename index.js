function play_sound(sound_file){
    new Audio(sound_file).play();
}

function clicked(id){
    sound_file = "sounds/" + id + '.mp3'
    console.log(sound_file)
    play_sound(sound_file)
}