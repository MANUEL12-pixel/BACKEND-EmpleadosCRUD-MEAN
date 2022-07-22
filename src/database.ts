import mysql from "promise-mysql";

import keys from "./keys";

// conexion a la base de datos

const pool = mysql.createPool(keys.database);

pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);

    console.log("DB is Connected");
});

export default pool;
