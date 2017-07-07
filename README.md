# express-favicon-short-circuit

**express-favicon-short-circuit** is an Express middleware that eliminates those annoying **favicon** requests.

## Usage

Npm install using the following command:

```
npm i -S express-favicon-short-circuit
```

And use it in your **Express** app:

```javascript
const express = require('express');

// omissis

const app = express();

// omissis

app.use(require('express-favicon-short-circuit'));
```

## Example

Clone or download this GitHub repository then run the example app using the following npm commands:

```
npm i
npm run example
```

## Based on

[https://gist.github.com/kentbrew/763822](https://gist.github.com/kentbrew/763822)
