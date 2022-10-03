import "reflect-metadata"
import app from './app'
import { DataSource } from "typeorm"
import { registro_users } from './entities/appRegistro'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, PORT_LISTEN } from "./config"

import './config'
const ConnectDB = new DataSource({
        
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [registro_users],
    synchronize: false,
    logging: false,
    ssl: false

})    
        
        
ConnectDB.initialize()
.then(() => {
    console.log("Conexión Exitosa a la base de datos! ")
})
.catch((error) => console.log("ERROR DE CONEXIÓN A LA BASE DATOS | ERROR: ", error))


app.listen(PORT_LISTEN)
console.log("Listen on port:", PORT_LISTEN)



