const City = require('../models/City');

exports.createCity = async (req, res) => {
    try {
        const city = new City(req.body); // Aqui você instancia City usando req.body
        await city.save(); // Salva a cidade no banco de dados
        res.status(201).send(city); // Retorna a cidade criada
    } catch (err) {
        console.log(err); // Loga qualquer erro ocorrido durante o processo
        res.status(500).send(err); // Retorna um status de erro 500 e o erro
    }
};


exports.getCityByName = async(req, res)=>{      // filtra cidades pelo nome
    try{
        const city = await City.findOne({name: req.params.name});
        if(!city) return res.sendStatus(404).send('City not found');     // se cidade nao estiver no bd
        res.status(200).send(city);
    }catch(err){
        fail(err);  // res.status(500).send(err);
    }   
};


exports.getCityByState = async(req, res) =>{    // filtra as cidades pelo estado
    try{
        const cities = await City.find({state: req.params.state});
        res.status(200).send(cities);
    }catch(err){
        fail(err);  // res.status(500).send(err);
    }
};

