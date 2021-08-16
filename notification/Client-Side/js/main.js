function ragempnotify(message){
    var $ragempnotify = $(
        `
        <div class="border">
         <div class="title">Information</div>
         <div class="text">` + message + `</div>
        </div>
        `
    )
    $('.notify').prepend($ragempnotify).fadeIn();
    $ragempnotify.slideDown(500);
    setTimeout(()=>{
        $ragempnotify.slideUp(500);
    },3000)
}