import {app} from "./app.js"
import { PORT } from "./config/env.js"

function createServer(){
    app.listen(PORT,() => {
        console.log(`Server is running at port ${PORT}`)
    })
}

createServer();