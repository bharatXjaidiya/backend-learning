//building sever with express
const express =require('express');
const app =express(); // sever ka instance create kiya hai only 

// Route
app.get('/',(req, res) => {
    res.send('Hello User, Server is working!');
});

// Start server
app.listen(3000,() => {
console.log('Server running on port 3000');
});