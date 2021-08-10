import { users } from './auth.controller.js'

export const userListController = (req, res) => {
    return res.json({users})
}

export const userDeleteController = (req, res) =>{
    const { phone } = req.user
    const user = users.find((el) => el.phone === phone)
    user.isDeleted = true
    user.deleteTime = Math.round((Date.now() + 6 * 2629800000) / 1000)
    return res.json({ message: 'Аккаунт был успешно удален.'})

}

export const userRecoveryController = (req,res) => {
    const { phone } = req.user

    const user = users.find((el) => el.phone === phone)

    if(user.isDeleted) {
        if(Date.now() < user.deleteTime) {
            user.isDeleted = false
            user.deleteTime = null
            return res.json({message: "Пользователь восстановлен"})
        } else {
            users.splice(users.indexOf(user))
            return res.json({message: 'Аккаунт деактивирован'})
        }
    } else {
        return
    }

}