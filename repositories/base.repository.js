class BaseRepository{

    constructor(_collction){
        this.collection = _collction
    }

    async findAll(){
        return await this.collection.find().lean().exec();
    }

    async findById(id){
        return await this.collection.findById(id);
    }

    async create(model){
        return await this.collection.create(model)
    }
    async update(model){
        return await this.collection.findByIdAndUpdate(model._id,model)
    }
    async deleteById(id){
        return await this.collection.findByIdAndDelete(id);
    }
}

module.exports = BaseRepository