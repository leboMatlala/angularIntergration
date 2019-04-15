const express= require ('express');
const router= express.Router();
const axios = require('axios');

const PostAPI = 'https://jsonplaceholder.typicode.com';


router.get('/',(req,res)=>{
  res.send('it works');
});


//GET POST
router.get('/posts',(req,res)=>{
  //res.send('POST WORKS');

  axios.get(`${PostAPI}/posts`).then((result) => {

    console.log(result.data);
    res.status(200).json(result.data);
  }).catch((err) => {
    console.log(err)
    res.status(500).send(err);
  });

});


module.exports =router;
