const { UserModel } = require ("./model")

exports.saveUsers = async function (req, res) {
    try {
        const user = req.body

        const savedUser = await UserModel.create(user)

        res.status(200).json({
            messege: "Пользователь успешно создан",
            user: savedUser
        })
    } catch (e) {
        console.log("Произошла ошика при сохраниении пользователя ", e)
    }
}

exports.getUser = async function (req, res) {
    try {
        res.status(200).json("OK")

    } catch (e) {
        console.log("Произошла ошибка, при запросе пользователей")
    }
}

exports.editUsers = async function (req, res) {
    try {
        const userId = req.params.id;
        const user = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(userId, user);

        
        
        res.status(200).json({
            messege: "Пользователь спешно изменен",
            user: updatedUser
        })

    } catch (e) {
        console.log("Произошла ошибка, при изменении пользователей", e)
    }
}

exports.findUserById = async function (req, res) {
    try {
        const Find_User_Id = await UserModel.findById(req.params.id)
        res.status(200).json({
            USER: Find_User_Id
        })
    } catch (e) {
        console.log("Произошло ошибка")
    }

}

exports.AllUsers = async function (req, res) {
    try {
        const All_people_user_find = await UserModel.find({})
        res.status(200).json({ ALL_USERS: All_people_user_find })
    } catch (e) {
        console.log("Произошло ошибка")
    }
}

exports.DeleteUser = async function (req, res) {
    try {
        const DeleteUser = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Пользователь удалён.",
            user: DeleteUser
        })

    } catch (e) {
        console.log('Произошло ошибка!');

    }
}

