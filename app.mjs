import express, {Router}from 'express'
import expressLayouts from 'express-ejs-layouts'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import path from 'path'
import bodyParser from 'body-parser'

import {login,dataUser} from './util/db.mjs'

import {valid} from'./views/validator.mjs'
import multer from 'multer'
import { read } from 'fs'


mongoose.connect(
   'mongodb+srv://sahar:wadraree123@cluster0.mbmaj4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ,{
    useUnifiedTopology: true,

})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = Router()

const app = express()
const port = process.env.PORT || 5000  


app.set('view engine','ejs')

app.use(expressLayouts)

// middle Ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/upload', router)

//input css js and picture


app.use('/css',express.static(__dirname +'publik/css'))
app.use('/js',express.static(__dirname +'publik/js'))
app.use('/img',express.static(__dirname +'publik/img'))
app.use('/images',express.static(__dirname+'publik/images'))


//built-in-midleware
app.use(express.static('publik'))
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))




app.get('/',(req,res)=>{
    res.render('dashbord',{
        layout:'layout/dashbord'
    })
})

app.get('/TicTacToe',(req,res)=>{
    res.render('TicTacToe',{
        layout: 'layout/TicTacToe'
    })
    
})

///////////Tekonologi

// wedding1
app.get('/login',(req,res)=>{
    res.render('login',{
        layout: 'layout/login'
    })
})

app.get('/wedding/:nama',(req,res)=>{
    const data= req.params
    console.log(data)
    res.render('wedding',{
        data,
        layout:'layout/weddingLayout'
    })

})

app.get('/input1/:nama',(req,res)=>{
    const data= req.params
    res.render('input1',{
        data,
        layout:'layout/input1'
    })
})


app.get('/wedding1/:nama',async(req,res)=>{
    const weddingName = req.params.nama;

    const data1 = await dataUser.find({namaS: weddingName})
    if (data1.length ===1){
        const data = data1[0]
        res.render('wedding1',{
            data,
            layout: 'layout/wedding1'
        })
    }
})



const storage = multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null, 'publik/images')
    },
    filename:(req,file,cd)=>{
        cd(null, file.fieldname + '_'+ Date.now() +path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})


app.post('/input1/:nama',upload.array('multiFiles'),async(req,res)=>{

const img = req.files
let foto =[]

img.forEach((i,e)=>{
    foto.push(i.filename)
})
const namaS = req.params.nama
console.log(foto)
const data = req.body
console.log(data)

const [img1fix, img2fix ,img3fix]=foto

data['foto1']= img1fix
data['foto2']= img2fix
data['foto3']= img3fix
data['namaS']= namaS

await dataUser.insertMany(data)

res.render('wedding1',{
    data,
    layout:'layout/wedding1'
})

})

app.post('/login',async(req,res)=>{
    const data = req.body
    const propOwn = Object.getOwnPropertyNames(data)
    const data1 = valid(data.nama,data.email,data.password)
    const cariNama = await login.find({nama:data.nama, email:data.email, password:data.password })
    if(propOwn.length === 4 && data1){
        await login.insertMany(data)
        res.redirect('/login')
    }else if(propOwn.length === 3 && data1){
        if(cariNama.length === 1){
            res.redirect(`/wedding/${data.nama}`)
        }else{
            console.log(cariNama)
            res.redirect('/login')
        }
    }
})


app.listen(port,()=>{
    console.log('BERJALAN')
})