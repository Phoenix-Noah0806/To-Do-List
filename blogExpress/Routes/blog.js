const express= require('express')
const path=require('path')
const blogs=require('../Data/blogs')
const router=express.Router()

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../Templets/index.html'))
    res.render('../home')
})
router.get('/blog',(req,res)=>{
    blogs.forEach(e => {
        console.log(e.title)       
    });
    res.sendFile(path.join(__dirname,'../Templets/bloghome.html'))
})

router.get('/blogpost',(req,res)=>{
    myblog=blogs.filter((e)=>{
        return e.slug==req.params.slug
    })
    console.log(myblog)
    res.sendFile(path.join(__dirname,'../Templets/blogpage.html'))
})
module.exports=router