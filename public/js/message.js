var addMessage = function(){
    //get the text from the textarea
    var new_text = $("#new_message");

    //"add" it as a sent message
    $("#new_display_msg_text").text(new_text.val());
    $("#new_display_msg").show();

    //clear the textarea
    new_text.val("");
};
