const express = require('express');

const app = new express();

app.use((req, res, next) => {
  console.log('服务器1被访问');
  next();
})

app.get('/students', (req, res) => {
  const students = [
    {id: 1, name: 'yxp', age: 20},
    {id: 2, name: 'yxp2', age: 20},
    {id: 3, name: 'yxp3', age: 20},
  ]
  res.send(students);
})

app.listen(5000, (err) => {
  if(!err) {console.log('http://127.0.0.1:5000 已启动...' )};
})