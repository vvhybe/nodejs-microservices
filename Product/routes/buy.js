const Produit = require("../model/Produit");

const acheterRoute =  (req, res) => {
    const { ids } = req.body;
    Produit.find({ _id: { $in: ids } })
    .then(produits => res.status(201).json(produits))
    .catch(error => res.status(400).json({ error }));
}

module.exports = acheterRoute;