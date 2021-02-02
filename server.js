const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Databse
connectDB();

// Init Middleware that will allow getting data in 'req.body' in users.js file
app.use(express.json({ extended: false }));

// get request to index, callback with request and response
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
// first part links with "router.get('/'," in users.js
// and the second part defines the path to file.
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

// It will look for enviroment veriable called PORT || locally on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
