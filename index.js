const express=require('express')
const app=express();
const cors=require('cors')
const port=process.env.PORT ||5000;

app.use(cors())
const categoris=require('./Data/category.json')

app.get('/', (req, res)=>{
  res.send('News API Running')
})

app.get('/news-categoris', (req, res)=>{
    res.send(categoris)
})

app.listen(port, ()=>{
    console.log('dragon news server');
})