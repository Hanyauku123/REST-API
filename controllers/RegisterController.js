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

module.exports = { getRegister, insert, getOneRegister };