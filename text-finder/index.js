;(function() {
    "use strict"

    var $ = function(id) {
        return document.getElementById(id);
    };
    var _A = function(selector) {
        return document.querySelectorAll(selector);
    };
    var go = function() {
        chrome.tabs.getAllInWindow(function(tabs) { // 获取所有打开的tab页
            var ul = _A("#text-finder-result ul")[0];
            tabs.forEach(function(tab, i) {
                chrome.tabs.sendRequest(tab.id, {action: "GetText"}, function (response) {
                    console.log(response);
                    if (response && response.result) {
                        var order = response.result;
                        if ($("chk-four").checked) {
                            order = order.substring(0, 4);
                        }
                        var li = document.createElement("li");
                        li.innerText = order;
                        ul.appendChild(li);
                    }
                });
            });
        });
    };

    $("text-finder-get").onclick = go;
})();
