mp.events.add('playerReady', (player)=>{
    player.notify = function(message){
        player.call("ragempnotify", [`${message}`]);
    }
});

