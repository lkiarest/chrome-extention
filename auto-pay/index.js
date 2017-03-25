;(function() {
    "use strict"

    var $ = function(selector) {
        return document.querySelector(selector);
    };

    var _A = function(selector) {
        return document.querySelectorAll(selector);
    };

    $("#start").onclick = function() {
        sendCmd('start');
        $('#status').innerText = '正在运行';
    };

    $("#stop").onclick = function() {
        sendCmd('stop');
        $('#status').innerText = '已停止';
    };

    $("#setMulti").onclick = function() {
        var val = $('#bl').value;
        sendCmd('multi', val);
        $('#multi').innerText = val;
    };

    var sendCmd = function(cmd, params) {
        chrome.tabs.getAllInWindow(function(tabs) { // 获取所有打开的tab页
            tabs.forEach(function(tab, i) {
                chrome.tabs.sendRequest(tab.id, {action: cmd, params: params}, function (response) {
                });
            });
        });
    };
})();
