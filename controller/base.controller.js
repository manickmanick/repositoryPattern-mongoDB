class BaseController{
    constructor(repoClass){
        this.repo = new repoClass()
    }
    getAll = (req,res)=>{
        try {
            this.repo.findAll().then((docs)=>{
                return res.status(200).json(docs) 
            }).catch((error)=>{
                console.log(error);
                return res.status(500).json({message:"something went wrong"})
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"something went wrong"})
        }
    }

    add = (req,res)=>{
        try {
            const body = req.body;
            this.repo.create(body).then((docs)=>{
                return res.status(200).json(docs) 
            }).catch((err)=>{
                console.log(error);
            return res.status(500).json({message:"something went wrong"})
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"something went wrong"})
        }
    }

    update = (req,res)=>{
        try {
            this.repo.update(req.body).then((response)=>{
                return res.status(200).json(response) 
            }).catch((error)=>{
                console.log(error);
            return res.status(500).json({message:"something went wrong"})
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"something went wrong"})
        }
    }

    deleteById = (req,res)=>{
        try {
            this.repo.deleteById(req.body.id).then((response)=>{
                return res.status(200).json(response) 
            }).catch((error)=>{
                console.log(error);
            return res.status(500).json({message:"something went wrong"})
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"something went wrong"})
        }
    }

    getById = (req,res)=>{
        try {
            this.repo.findById(req.body.id).then((response)=>{
                return res.status(200).json(response) 
            }).catch((error)=>{
                console.log(error);
            return res.status(500).json({message:"something went wrong"})
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"something went wrong"})
        }
    }
}

module.exports = BaseController