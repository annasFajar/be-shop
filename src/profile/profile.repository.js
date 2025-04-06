import prisma from '../db/index.js'

export const findUsers = async () => {
    const users = await prisma.profile.findMany()
    return users
}

export const insertUser = async (tables) => {
    try {
        const user = await prisma.profile.create({
            data: {
                // id: null,
                name: tables.name,
                class: tables.class,
                createdAt: tables.createdAt
            }
        })
        return user
    } catch (error) {2
        if (error) return('repo gagal')
    }
}


export const userPut = async (tables,id) => {
        const user = await prisma.profile.update({
            where: {
                id: id
            },
            data: {
                name: tables.name ?? null,
                class: tables.class ?? null
            }
        })
        return user
}

export const userPatch = async (tables,id) => {
    const newUser = await prisma.profile.update({
        where: {
            id
        },
        data: {
            name: tables.name,
            class: tables.class
        }
    })
    return newUser
}

export const deleted = async (id) => {
    let user = null
    user = await prisma.profile.delete({
        where: {
            id
        }
    }) 
    return user
}

export const userPrisma = async (user, hash_password) => {
    const newUser = await prisma.register.create({
        data: {
            username: user.username,
            email: user.email,
            password: hash_password
        }
    })
    return newUser
}