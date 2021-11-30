var express = require('express');
var app = express();

var mysql = require('mysql');

var cors = require('cors');
app.use(cors());

app.use(express.json());



app.get('/pokemons/:pokemon_id', function (req,res){
    //step 0
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    
    });
    // step 1
    connection.connect();

    // step 2
    var myQuery = " SELECT pokemon_id, name_pokemon, categoria, habilidad, tipo, altura, peso, url FROM pokemon WHERE pokemon_id = ? ";
    var myValues = [req.params.pokemon_id];


    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;

        res.send(results[0]);
        connection.end();
    });
});



// Mostrar todos los platos de la carta con sus precios 

app.get('/pokemons', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });

    connection.connect();

    var myQuery = " SELECT pokemon_id, name_pokemon, categoria, habilidad, tipo, altura, peso, url, created_date, modified_date FROM pokemon WHERE 1 = 1 ";
    var myValues = [];

    connection.query(myQuery, myValues, function(error, results, fields){
        // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
        if (error) throw error;
        
        // Step 3: Procesar el resultado de la BD
        res.send(results);
    
        // Step 4: Cerrar la conexion
        connection.end();
      });
    });


    app.post('/pokemons', function(req, res){
        // Step 0: Definir la conexion a la BD
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'utec',
          password: '1234567890',
          database: 'pokedex'
        });
      
        // Step 1: Establecer la conexion
        connection.connect();
      
        // Step 2: Mandar el query
        var myQuery = " INSERT INTO pokemon (name_pokemon, categoria, habilidad, tipo, altura, peso, url,   created_date, modified_date) " +
                      " VALUES (?, ?, ?, ?, ?, ?, ?,  NOW(), NOW());";
        
        var myValues = [req.body.name_pokemon, req.body.categoria, req.body.habilidad, req.body.tipo, req.body.altura, req.body.peso, req.body.url ];
        
        connection.query(myQuery, myValues, function(error, results, fields){
          // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
          if (error) throw error;
          
          // Step 3: Procesar el resultado de la BD
          res.send(results);
      
          // Step 4: Cerrar la conexion
          connection.end();
        });
      });


      app.put('/pokemons/:pokemon_id', function(req, res){
        //Step 0: Definir la conexion a la BD
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'utec',
          password: '1234567890',
          database: 'pokedex'
        });
        
        // Step 1: Establecer la conexion
        connection.connect();
       // Step 2: Mandar el query
        var myQuery = " UPDATE pokemon SET modified_date = NOW() ";
        var myValues = [];
        
        if (req.body.name_pokemon){
          myQuery += " , name_pokemon = ? ";
          myValues.push(req.body.name_pokemon);
        }


        if (req.body.categoria){
            myQuery += " , categoria = ? ";
            myValues.push(req.body.categoria);
        }

        if (req.body.habilidad){
            myQuery += " , habilidad = ? ";
            myValues.push(req.body.habilidad);
        }        

        if (req.body.tipo){
          myQuery += " , tipo = ? ";
          myValues.push(req.body.tipo);
      }  

        if (req.body.altura){
          myQuery += " , altura = ? ";
          myValues.push(req.body.altura);
      }  
      
        if (req.body.peso){
          myQuery += " , peso = ? ";
          myValues.push(req.body.peso);
      }   

        if (req.body.url){
          myQuery += " , url = ? ";
          myValues.push(req.body.url);
    }   

        myQuery += " WHERE pokemon_id = ? "
        myValues.push(req.params.pokemon_id);
      
        connection.query(myQuery, myValues, function(error, results, fields){
          // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
          if (error) throw error;
          
          // Step 3: Procesar el resultado de la BD
          res.send(results);
      
          // Step 4: Cerrar la conexion
          connection.end();
        });
      });


      app.delete('/pokemons/:pokemon_id', function(req,res){
        // Step 0: Definir la conexion a la BD
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'utec',
          password: '1234567890',
          database: 'pokedex'
        });
      
        // Step 1: Establecer la conexion
        connection.connect();
      
        // Step 2: Mandar el query
        var myQuery = "DELETE FROM pokemon "+
                      " WHERE pokemon_id = ?";
              
        var myValues = [req.params.pokemon_id];
        
        connection.query(myQuery, myValues, function(error, results, fields){
          // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
          if (error) throw error;
          
          // Step 3: Procesar el resultado de la BD
          res.send(results);
      
          // Step 4: Cerrar la conexion
          connection.end();
        });
      
      })



app.listen(3000, function(){
    console.log("El server se inicio en el port 3000")
})

