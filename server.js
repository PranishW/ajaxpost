const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

var data = {
    name:"",
    email:"",
    phone:""
}
app.get('/',(req,res)=>{
    res.status(200).json(data)
})
app.post('/',(req,res)=>{
    data = req.body
    console.log(data)
    res.status(200).json(data)
})

app.listen(3000,()=>{
    console.log("Server listening on Port 3000")
})