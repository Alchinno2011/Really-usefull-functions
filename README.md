# really-usefull-functions

A JavaScript utility library that provides a collection of really useful functions to simplify everyday coding tasks. This package includes a wide array of utilities such as number checks, HTTP requests, file operations, date and time formatting, and more.

## Installation

Install the package using npm:

```bash
npm install really-usefull-functions
```

## Usage

Import the library in your JavaScript project:

```javascript
require('really-usefull-functions');
```

Now you can use the provided global functions.

## Available Functions

### 1. `isEven(num)`
Checks if a number is even.

```javascript
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

### 2. `isOdd(num)`
Checks if a number is odd.

```javascript
console.log(isOdd(5)); // true
console.log(isOdd(4)); // false
```

### 3. `PostReq(url, data)`
Performs an HTTP POST request.

```javascript
let res = PostReq('https://example.com/api', data)
```

### 4. `GetReq(url)`
Performs an HTTP GET request.

```javascript
let res GetReq('https://example.com/api')
```

### 5. `sleep(ms)`
Pauses execution for a specified duration.

```javascript
sleep(1000).then(() => console.log('Executed after 1 second'));
```

### 6. `readFromFile(file)`
Reads the content of a file.

```javascript
file = readFromFile('./example.txt')
```

### 7. `writeToFile(file, data)`
Writes data to a file.

```javascript
writeToFile('./example.json', data);
```

### 8. `randomInt(min, max)`
Generates a random integer between `min` and `max`.

```javascript
console.log(randomInt(1, 10)); // Random number between 1 and 10
```

### 9. `getDateTime(input)`
Gets the current date, time, or day.

```javascript
console.log(getDateTime('date')); // e.g., '2025/04/18'
console.log(getDateTime('time')); // e.g., '19:28:20'
console.log(getDateTime('day'));  // e.g., 'Fri'
```

### 10. `yap(...args)`
Logs the arguments to the console.

```javascript
yap('Hello', 'World!'); // Logs: Hello World!
```

## Example

```javascript
require('really-usefull-functions'); // Import the package

yap(isOdd(5)); // Logs: true
yap(randomInt(1, 100)); // Logs a random number between 1 and 100
yap(getDateTime('date')); // Logs the current date
```

## Contribution

Feel free to fork the repository and submit pull requests for new features or bug fixes. Contributions are always welcome!

## License

This project is licensed under the MIT License.
