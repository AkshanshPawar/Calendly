import {app} from "./app.js"
import { connectDatabase } from "./config/database.js"
import { PORT } from "./config/env.js"


async function createServer(){
    await connectDatabase();
    app.listen(PORT,() => {
        console.log(`Server is running at port ${PORT}`)
    })
}

createServer();