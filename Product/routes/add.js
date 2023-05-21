const Produit = require("../model/Produit");

const ajouterRoute =  (req, res) => {
    const { nom, description, prix } = req.body;
    const newProduit = new Produit({nom, description, prix});

    newProduit.save() 
    .then(produit => res.status(201).json(produit))
    .catch(error => res.status(400).json({ error }));
}

module.exports = ajouterRoute;