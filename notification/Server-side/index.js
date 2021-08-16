mp.events.add('playerReady', (player)=>{
    player.notify = function(message){
        player.call("ragempnotify", [`${message}`]);
    }
});

mp.events.addCommand("notify", player =>{
    player.notify("It's Worked have fun with it")
});
