const connection = require('../database/connection');

module.exports = {

async find(request, response){    
        const ong_id = request.headers.authorization; 
        
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

       if (incidents.length == 0){
           return response.status(404).json('não foram encontrados incidents');
       }else{
            return response.json(incidents);
        }

    },

    }