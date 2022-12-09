    function charCount(values) {
        limit = 500;
        total = values.length;
        if (total <= limit) {
            rest = limit - total;
            document.getElementById('contador500').innerHTML = rest;
        } else {
            document.getElementById('txtDescription').value = values.substr(0, limit);
        }
    }
