const Spending = require('../models/spendings.model.js');

// Create and Save a new Spending
exports.create = (req, res) => {

    // Create a Spending
    const spending = new Spending({
        title: req.body.title, 
        detail: req.body.detail,
        amount: req.body.amount
    });

    // Save Spending in the database
    spending.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating the Spending."
        });
    });
};

// Retrieve and return all spendings from the database.
exports.findAll = (req, res) => {
    Spending.find()
    .then(spendings => {
        res.json(spendings);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving spendings."
        });
    });
};

// Find a single spending with a spendingId
exports.findOne = (req, res) => {
    Spending.findById(req.params.spendingId)
    .then(spending => {
        if(!spending) {
            return res.status(404).json({
                message: "Spending not found with id " + req.params.spendingId
            });            
        }
        res.send(spending);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "Spending not found with id " + req.params.spendingId
            });                
        }
        return res.status(500).json({
            message: "Error retrieving spending with id " + req.params.spendingId
        });
    });
};

// Update a spending identified by the spendingId in the request
exports.update = (req, res) => {
    // Find spending and update it with the request body
    Spending.findByIdAndUpdate(req.params.spendingId, {
        title: req.body.title, 
        detail: req.body.detail,
        amount: req.body.amount
    }, {new: true})
    .then(spending => {
        if(!spending) {
            return res.status(404).json({
                message: "Spending not found with id " + req.params.spendingId
            });
        }
        res.json(spending);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "Spending not found with id " + req.params.spendingId
            });                
        }
        return res.status(500).json({
            message: "Error updating spending with id " + req.params.spendingId
        });
    });
};

// Delete a spending with the specified spendingId in the request
exports.delete = (req, res) => {
    Spending.findByIdAndRemove(req.params.spendingId)
    .then(spending => {
        if(!spending) {
            return res.status(404).spending({
                message: "Spending not found with id " + req.params.spendingId
            });
        }
        res.json({message: "Spending deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                message: "Spending not found with id " + req.params.spendingId
            });                
        }
        return res.status(500).json({
            message: "Could not delete spending with id " + req.params.spendingId
        });
    });
};