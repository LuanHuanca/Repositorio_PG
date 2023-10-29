const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectos_de_grado',
});

// coneccion a la base de datos
connection.connect((error) => {
    if(error){
        console.log('Error de conexion a la base de datos: ' + error.stack );
        return;
    }
    console.log('Conexion a la base de datos establecida como el ID ' + connection.threadId);
});

module.exports = connection;