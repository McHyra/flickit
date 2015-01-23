var url = window.location.href;
var regex = /.+\/photos\/\w+\/\d+\//g;

var picUrl = url.match(regex) + "sizes/o";

$.ajax({
    dataType: "html",
    url: picUrl,
    success: function(data) {
        process(data);
    }
});

function process(html) {
    var imgUrl = $(html).find("#allsizes-photo").find("img").attr("src");
    // dl
    var a = document.createElement('a');
    a.href = imgUrl;
    a.download = 'picture.png';
    a.click();
    // log link
    console.log(imgUrl);
}