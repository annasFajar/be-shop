import express from 'express'
import { addUsers, deletedUser, editPatch, editPut, getAllUsers, insertNewUser } from './profile.service.js';


const router = express.Router()


router.get('/', async (req,res) => {
    const users = await getAllUsers()
    res.send(users)
});

router.post('/register', async (req,res) => {
    try {
        const tables = req.body;
        const addUser = await addUsers(tables, res)
        res.send(addUser)
        
    } catch (error) {
        if (error) return(res.status(500).send('post gagal'))
        }
})

router.put('/:id', async (req,res) => {
    const id = req.params.id
    const tables = await req.body
    try {
        const user = await editPut(tables,id)
        res.send(user)
    } catch (error) {
        res.status(401).json({error: error.message})
    }
})

router.patch('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const tables = req.body
        const user = await editPatch(tables,id)
        res.send(user)

    } catch (error) {
        res.status(401).json({error: error.message})
    }
})

router.delete('/:id', async (req,res) => {
    let user = null
    try {
        const id = req.params.id
        user = await deletedUser(id)
        res.send({
            user: user,
            message: "berhasil menghapus"
        })
        
    } catch (error) {
        res.status(401).send({error: error.message})
    }
})

router.post('/register/new', async (req,res) => {
    try {
        const newUser = req.body
        const result = await insertNewUser(newUser)
        res.send(result)
        
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})

export default router
