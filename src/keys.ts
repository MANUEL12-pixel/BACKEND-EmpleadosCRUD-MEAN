export default {
    database: {
        // Datos de la base de datos
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "13578924680",
        database: process.env.DB_NAME || "empleados",
    },

};
