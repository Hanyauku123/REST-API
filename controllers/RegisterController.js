const Register = require("./../models/Register");

const insert =(req, res)=>{
    const student = new Register(req.body);
    student.save((error, document)=>{
        if(error)
            return res.status(500).json({
                msg: "Hubo un error!"
        });
        return res.status(201).json({
            msg: "Creado",
            register: document
        })
    })
}

const update = (req, res) => {
    let student = req.body
    if(!student._id){
        return res.status(400).json({
            message: 'El campo id es obligatorio'
        })
    }
    Register.update({_id: student._id}, student)
    .then(value =>{
        res.status(200).json({
            msg: 'Operacion de modificar exitosa'
        })
    })
    .catch((err) => {
        res.status(500).json({
            msg: 'Algo salio mal en la operacion modificar'
        })
    })
}

const deleteById = (req, res) => {
    let student = req.body
    if (!student._id) {
        return res.status(400).json({
            msg: 'El campo id es obligatorio'
        })
    }
    Register.deleteOne({_id: student._id})
    .then(value =>{
        res.status(200).json({
            msg: 'Operacion de modificar exitosa'
        })
    })
    .catch((err) => {
        res.status(500).json({
            msg: 'Algo salio mal en la operacion modificar'
        })
    })
    
}

const getRegister = (req, res)=>{
    Register.find({}, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg: "Hubo un error!"
        });
        return res.status(200).json({
            msg: "Ok",
            registers: documents 
        })
    });
};

const getOneRegister = (req, res)=>{
    Register.findById(req.params.id, (error, document)=>{
        if(error)
            return res.status(500).json({
                msg: "Hubo un error!"
        });
        return res.status(200).json({
            msg: "Ok",
            registers: document 
        })
    });
};

module.exports = { getRegister, insert, update, deleteById, getOneRegister  };
