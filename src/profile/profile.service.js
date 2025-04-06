import {deleted, findUsers, insertUser, userPatch, userPrisma, userPut} from './profile.repository.js'
import bcrypt from 'bcrypt'

export const getAllUsers = async () => {
    const users = await findUsers()
    return users
}

export const addUsers = async (tables) => {
    try {
        const user = await insertUser(tables)
        return user
    } catch (error) {
        if (error) throw Error('gagal menmbah data')
    }
}

export const editPut = async (tables,id) => {
    try {
        const idParse = parseInt(id)
        const put = await userPut(tables,idParse)
        return put
        
    } catch (error) {
        throw new Error('gagal memperbarui data' + error.message)
    }
}

export const editPatch = async (tables,id) => {
    try {
        const idParse = parseInt(id)
        const user = await userPatch(tables,idParse)
        return user
    } catch (error) {
        throw Error('gagal mengedit salah satu data'+ error.message)
    }
}

export const deletedUser = async (id) => {
    try {
        let user = null
        const idParse = parseInt(id)
        user = await deleted(idParse)
        return user
    } catch (error) {
        throw Error('gagal menghapus data' + error.message)
    }
}

export const insertNewUser = async (user) => {
    try {
        const hash_password = await bcrypt.hash(user.password, 4);
        

        const result = await userPrisma(user, hash_password)
        return result
    } catch (error) {
        throw Error('gagal nih'+error)
    }

}