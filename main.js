import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import profileController from './src/profile/profile.controller.js'

const app = express();

dotenv.config()
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=> {
    res.send('okkk')
});

app.use('/users', profileController)

app.use((req,res) => {
    res.status(404).send('url not found')
})

const port = process.env.PORT
app.listen(port,() => {
    console.log('API running...' + port)
})










// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'mahasiswa'
// })

// db.connect((err) => {
//     if (err) return(console.log('database notconnected'))
//     console.log('database connected..')
// })

// //midleware
// app.use(express.json())
// app.use(cors());

// app.get('/search', (req,res) => {
//     const sql = `SELECT * FROM identitas WHERE id = ${req.query.id}`
//     console.log(`cari: ${req.query.id}`)
//     db.query(sql, (err, result)=> {
//         if (err) return(res.status(500).json({message:'terjadi kesalahan server pencarian data'}))
//         res.send(result)
//     })
// })

// app.get('/', (req,res) => {
//     console.log('api di req..')
//     db.query('SELECT * FROM identitas', (err, rows) => {
//         if (err) return(res.status(500).json({message:'terjadi kesalahan server root'}))
//         res.send(response(res.statusCode, rows,'ambil smua datas', res.statusMessage))
//     })
// })

// app.post('/add', (req,res) => {
//     const {id, nama, kelas} = req.body
//     const sql = `INSERT INTO IDENTITAS (id, nama,kelas) VALUES (?,?,?)`
//     db.query(sql, [id,nama,kelas], (err,result) => {
//         if (err) return(res.status(500).json({message:'terjadi kesalahan server pada penambahan data'}))
//         if (result.affectedRows===0) return(res.status(400).json({message:'data tidak berhasil ditambahkan'}))
//             console.log(result)
//         res.json({message:'data telah ditambahkan'})
//     })
// })

// app.put('/edit', (req,res) => {
//     const {id, nama, kelas} = req.body
//     const sql = 'UPDATE identitas SET nama=?, kelas=? WHERE identitas.id=?'
//     db.query(sql,[nama,kelas,id], (err,result) => {
//         if (err) return(res.status(500).json({message: 'terjadi kesalahan server pada pengeditan data'}))
//         if (result.affectedRows===0) return(res.status(400).json({message:'id tidak ditemukan'}))
//             res.json({message:'data telah diperbarui'})
//     })
// })

// app.delete('/delete', (req,res) => {
//     const {id} = req.body
//     const sql = "DELETE FROM identitas WHERE identitas.id=?"
//     db.query(sql, [id], (err,result)=> {
//         if (err) return(res.status(500).json({message: 'terjadi kesalahan server pada penghapusan data'}))
//         if (result.affectedRows===0) return(res.status(404).json({message: 'id tidak ditemukan'}))
//         res.send('data berhasil dihapus')
//         console.log(result)
//     })
// })

// app.use((req,res,next) => {
//     return(res.status(404).send('url not found'))
// })

// app.listen(3000, (err) => {
//     console.log('sudah nyala..')
// })