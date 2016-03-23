chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        var cssRule = "#left > article > div > div:nth-child(20) > span.iau";
        if (request.action == "GetText") {
            var all = document.querySelectorAll(cssRule)[0];
            sendResponse({result: all.innerText});
        }
    }
);
