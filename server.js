const express = require('express');

const app = express();

// get request to index, callback with request and response
app.get('/', (req, res) => res.send('API Running'));

// It will look for enviroment veriable called PORT || locally on port 5000
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));