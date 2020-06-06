// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// ultilizar o objeto de banco de dados, para nossas operações
 db.serialize(() => {
// 
    // criar uma tabela
    // db.run(`
        // CREATE TABLE IF NOT EXISTS places (
            // id INTEGER PRIMARY KEY AUTOINCREMENT,
            // name TEXT,
            // image TEXT,
            // address TEXT,
            // address2 TEXT,
            // state TEXT,
            // city TEXT,
            // items TEXT
        // );
    // `)

   // inserir dados na tabela
    // const query = `
        // INSERT INTO places (
            // image,
            // name,
            // address,
            // address2,
            // state,
            // city,
            // items
        // ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFAFe6JArgUohgLuVQ21Z4XWhOfNk0ttNMz9EBLynePI0LpydJ&usqp=CAU",
        // "Papersider",
        // "Guilherme gembala, Jardim América",
        // "Número 26",
        // "Snata Catarina",
        // "Rio do Sul",
        // "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
        // if(err) {
            // return console.log(err)
        // }

        // console.log("Cadastrado com sucesso")
        // console.log(this)
    // }

    // db.run(query, values, afterInsertData) 
        

    // consultar os dados da tabela
    //  db.all(`SELECT * FROM places`, function(err, rows){
        //  if(err) {
            //  return console.log(err)
        //  }
        //  console.log("Aqui estão seus registros")
        //  console.log(rows)
    //  })

    // deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [26], function(err){
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })

})