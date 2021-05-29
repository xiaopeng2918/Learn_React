const express = require('express');

const app = new express();

app.use((req, res, next) => {
  console.log('服务器2被访问');
  next();
})

app.get('/cars', (req, res) => {
  const students = [
    {id: 1, name: '宝马', price: 123},
    {id: 2, name: '奔驰', price: 150},
    {id: 3, name: '奥迪', price: 200},
  ]
  res.send(students);
})

app.listen(5001, (err) => {
  if(!err) {console.log('http://127.0.0.1:5001 已启动...' )};
})