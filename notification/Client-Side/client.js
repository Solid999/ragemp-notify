let ragempnotify = mp.browsers.new("package://notification/index.html");

mp.events.add("ragempnotify", (message) => {
    if(ragempnotify){
        ragempnotify.execute(`ragempnotify("${message}");`)
        mp.game.audio.playSoundFrontend(-1, "On_Call_Player_Join", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS", true);
    }
});