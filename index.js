const express = require ("express");
const app = express()
const mongoose = require ("mongoose")

const {router} = require ("./routers")

app.use(express.json())
app.use(router)

const DBadress = "mongodb+srv://MurkinM:68728murat@cluster0.3yuln.mongodb.net/education?retryWrites=true&w=majority"

async function startBackend() {

    await mongoose.connect(DBadress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })

      console.log("Подключение к базе данны прошло успешно!")

    app.listen(PORT, () =>{
        console.log("ПРИЛОЖЕНИЕ ЗАПУЩЕНО НА ПОРТУ: ", PORT)
    })
}

startBackend()


const PORT = 5050






