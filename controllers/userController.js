const User = require('../models/userModel');

exports.getAllUsers = (callback) => {
    User.getAllUsers((users) => {
        callback(null, users);
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

exports.getDeleteByUser = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('dell', { user });
    });
};

exports.addUser = (req, res) => {
    const newUser = {
        imagem: req.file ? req.file.filename : null,
        nome: req.body.nome,
        descricao: req.body.descricao,
        fornecedor: req.body.fornecedor,
        marca: req.body.marca,
        compra: req.body.compra,
        venda: req.body.venda,
        estoque: req.body.estoque,
    };

    User.addUser(newUser, () => {
        res.redirect('/');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        imagem: req.file ? req.file.filename : req.body.imagemExistente,
        nome: req.body.nome,
        descricao: req.body.descricao,
        fornecedor: req.body.fornecedor,
        marca: req.body.marca,
        compra: req.body.compra,
        venda: req.body.venda,
        estoque: req.body.estoque,
    };

    User.updateUser(userId, updatedUser, () => {
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};
