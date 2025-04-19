const date = require('date-and-time');


function yap(...args) {
    console.log(...args);
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(num) {
    if (num % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

function PostReq(url, data) {
    if (!data) {
        return "No data provided";
    }
    else if (!url) {
        return "No url provided";
    }
    else {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        .then(function(res){
            const contentType = res.headers.get('Content-Type');
            if (contentType.includes('application/json')) {
                return res.json();
            } else if (contentType.includes('text/plain')) {
                return res.text();
            } else if (contentType.includes('application/octet-stream')) {
                return res.blob();
            } else if (contentType.includes('application/xml')) {
                return res.xml();
            } else {
                return res.text();
            }
        })
        .catch(function(res){ return res });
    }
}


function GetReq(url) {
    if (!data) {
        return "No data provided";
    }
    else if (!url) {
        return "No url provided";
    }
    else {
        fetch(url, {
            method: 'GET'
        })

        .then(function(res){
            const contentType = res.headers.get('Content-Type');
            if (contentType.includes('application/json')) {
                return res.json();
            } else if (contentType.includes('text/plain')) {
                return res.text();
            } else if (contentType.includes('application/octet-stream')) {
                return res.blob();
            } else if (contentType.includes('application/xml')) {
                return res.xml();
            } else {
                return res.text();
            }
        })
        .catch(function(res){ return res });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function readFromFile(file) {
    return fs.readFile(file, 'utf8')
}

function writeToFile(file, data) {

    isWriting = true;
    fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
            isWriting = false;
        if (err) {
            return err;
        } else {
            return 'Task state updated successfully';
        }
    });
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDateTime(input) {
    const now = new Date();
    if (input) {
        if (input.toLowerCase() == 'time') {
            return date.format(new Date(), 'HH:mm:ss');
        }
        else if (input.toLowerCase() == 'date') {
            return date.format(new Date(), 'YYYY/MM/DD');
        }
        else if (input.toLowerCase() == 'day') {
            return date.format(new Date(), 'ddd');
        }
    }
    else {
        return "No input provided";
    }
}

global.yap = yap;
global.isEven = isEven;
global.isOdd = isOdd;
global.PostReq = PostReq;
global.GetReq = GetReq;
global.sleep = sleep;
global.readFromFile = readFromFile;
global.writeToFile = writeToFile;
global.randomInt = randomInt;
global.getDateTime = getDateTime;