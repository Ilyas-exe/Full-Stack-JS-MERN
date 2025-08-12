
const express = require('express')
const app = express()

const port = 3000

// app.get('/',(req,res)=>{
//         res.send('Welcome to my Express.js server!')
// })
app.get('/users/:id', (req, res) => {
  res.send(req.params.id);
});
app.listen(port,()=>{
        console.log(`listening in port ${port}`)
})
