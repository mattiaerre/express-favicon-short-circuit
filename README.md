# express-favicon-short-circuit

**express-favicon-short-circuit** is an Express middleware that eliminates those annoying **favicon** requests

## How to use it

```javascript
const express = require('express')

// omissis

const app = express()

// omissis

app.use(require('express-favicon-short-circuit'))
```

## Based on

[https://gist.github.com/kentbrew/763822](https://gist.github.com/kentbrew/763822)