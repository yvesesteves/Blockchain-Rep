const Customer = require('../models/Customer');

exports.createCustomer = async(req, res)=>{
    try{
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send(customer);
    }catch(err){
        fail(err);  // res.status(500).send(err);
    }
};


exports.getCustomerByName = async(req, res) =>{     // busca cliente pelo nome
    try{
        const customer = await Customer.findOne({fullName: req.params.name}).populate('city');
        if(!customer) return res.status(404).send("Customer not found");        // se cliente não existir no BD
        res.status(200).send(customer);
    }catch(err){
        fail(err);  //res.status(500).send(err);
    }
};


exports.getCustomerById = async(req, res) =>{     // busca cliente pelo ID
    try{
        const customer = await Customer.findById(req.params.id).populate('city');
        if(!customer) return res.status(404).send("Customer not found");        // se cliente não existir no BD
        res.status(200).send(customer);
    }catch(err){
        fail(err);  //res.status(500).send(err);
    }
};


exports.updateCustomerName = async(req, res)   =>{         // alterar nome do cliente
    try{
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            {fullName: req.body.fullName},
            {new: true}
        )
    if(!customer) return res.status(404).send("Customer not found");
    res.status(200).send(Customer);
    }catch(err){
        fail(err);  // res.status(500).send(err);
    }
};


exports.deleteCustomer = async(req, res) =>{        // remover o cliente
    try{
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if(!customer) return res.status(404).send("Customer not found");
        res.status(204).send();     // not content
    }catch(err){
        fail(err);  // res.status(500).send(err);
    }
};

