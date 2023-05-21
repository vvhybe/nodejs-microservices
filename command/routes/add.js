const Command = require("../model/Command");
const { httpRequest } = require("../utils")

const addRoute = async (req, res) => {
    // creating a new command
    const { ids, email } = req.body;
    httpRequest(req.body.ids).then(total => {
        const newCommand = new Command({ ids, email, total_price: total });
        newCommand.save()
        .then(command => res.status(201).json(command))
        .catch(error => res.status(400).json({ error }));
    });
}

module.exports = addRoute;