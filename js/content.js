chrome.extension.onMessage.addListener(
    function(request, sender, sendResponce) {

        var title = $("title").val();
        alert(title);

    }
);