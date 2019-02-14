const http = require('http');

// Create server object 
http.createServer((req, res) => {
  // write response
  res.write('Hello world');
  res.end();
})
.listen(3000, () => console.log('Server running in port 3000....'));