(function () {
    var URL = '';
    var StatusCode = {
        OK: 200
    };
    var TIMEOUT_IN_MS = 10000;

    window.load = function (onSuccess, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                onSuccess(xhr.response);
            } else {
                onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
            }
        });
        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });
        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = TIMEOUT_IN_MS;
        xhr.open('GET', URL);

        xhr.addEventListener('load', function () {
            onSuccess(xhr.response);
        });

        document.querySelectorAll('.catalog__item--button').addEventListener('click', loadInfo);
        function loadInfo() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', requestOBJ, true);
        }
        xhr.onload = function () {
            if (this.status == 200) {
                document.getElementById('inform').innerHTML = this.responseInform;
            }
            else {
                document.getElementById('inform').innerHTML = 'Не найдено';
            }
        };

        xhr.send();
    };
})();