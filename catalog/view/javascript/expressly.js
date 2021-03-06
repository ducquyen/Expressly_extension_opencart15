(function () {
    popupContinue = function (event) {
        event.style.display = 'none';
        var loader = event.nextElementSibling;
        loader.style.display = 'block';
        loader.nextElementSibling.style.display = 'none';

        var host = window.location.origin,
            parameters = window.location.search,
            uuid;

        parameters = parameters.split('&');

        for (var parameter in parameters) {
            if (parameters[parameter].indexOf('uuid') != -1) {
                uuid = parameters[parameter].split('=')[1];
            }
        }

        window.location.replace(host + '?route=expressly/migrate/complete&uuid=' + uuid);
    };

    popupClose = function (event) {
        window.location.replace(window.location.origin);
    };

    openTerms = function (event) {
        window.open(event.href, '_blank');
    };

    openPrivacy = function (event) {
        window.open(event.href, '_blank');
    };

    (function () {
        // make sure our popup is on top or hierarchy
        content = document.getElementById('xly');
        document.body.insertBefore(content, document.body.children[0]);
    })();
})();