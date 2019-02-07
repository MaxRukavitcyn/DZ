"use strict";
(function () {
    function _tableManager(element, headers, data) {
        let _data = data;
        let searchPhrase = '';
        let keysOfHeaders = Object.keys(headers);
        let table = _s('table').to(element);
        let tr = _s('tr').to(_s('thead').to(table));
        keysOfHeaders.forEach(h => tr.do(_s('th').setText(headers[h])));
        let tbody = _s('tbody').to(table);
        let columnSort, columnABC = true;
        function toString(val) {
            if (!val) return '';
            return val.toString();
        }

        function compare(a, b) {
            return toString(a).localeCompare(toString(b)) * (!columnABC ? -1 : 1)
        }

        this.update = function () {
            tbody.removeChild();
            let data = _data.slice();
            if (columnSort) data.sort((a, b) => compare(a[columnSort], b[columnSort]));
            data.filter(d => {
                if(searchPhrase !== '') {
                    let isContains = false;
                    keysOfHeaders.forEach(h => {
                        if(toString(d[h]).indexOf(searchPhrase) !== -1){
                            isContains = true;
                        }
                    });
                    return isContains;
                } else {
                    return true;
                }
            }).forEach(d => {
                    let tr = _s('tr').to(tbody);
                    keysOfHeaders.forEach(h => _s('td').to(tr).setText(d[h]))
                }
            );
        };

        this.sort = function (columnKey) {
            if (keysOfHeaders.includes(columnKey)) {
                if (columnSort !== columnKey) {
                    columnSort = columnKey;
                    columnABC = true
                } else {
                    if (!columnABC) {
                        columnSort = null;
                    } else {
                        columnABC = !columnABC;
                    }
                }
                this.update();
            }
        };

        this.filter = function (phrase) {
            searchPhrase = toString(phrase);
            this.update();
        };

        this.update();
    }

    window.tableManager = function (element, headers, data) {
        return new _tableManager(element, headers, data)

    };

})();
