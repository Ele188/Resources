import ResourceModel from "../models/resource.js"

const GET_ALL_RESOURCES = async (req, res) => {
    try{
    const resources = await ResourceModel.find();
    return res.status(200).json({resources: resources});
    } catch (err){
        console.log(err)
        return res.status(500).json({resource: "something went wrong"})
    }
};

const GET_RESOURCE_BY_ID = async (req, res) => {
    try{
    const resource = await ResourceModel.findById(req.params.id);
    return res.status(200).json( {resource: resource});
    }catch (err){
        console.log(err)
        return res.status(500).json({resource: "something went wrong"})
    }
};

const INSERT_RESOURCE = async (req, res) => {
    try{
    const resource = new ResourceModel({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        content_link: req.body.content_link,
    });

const response = await resource.save();

return res.status(201).json({message: "Resource was added", response: response});
    }catch (err){
        console.log(err)
        return res.status(500).json({resource: "something went wrong"})
    };
};

const UPDATE_RESOURCE = async (req, res) => {
    try{
    const resource = await ResourceModel.findOneAndUpdate(
        {_id: req.params.id},
        {...req.body}
        );
    return res.status(200).json( {resource: resource});
    } catch (err){
        console.log(err)
        return res.status(500).json({resource: "something went wrong"})
    };
};

const DELETE_RESOURCE_BY_ID = async (req, res) => {
    try{
    const resource = await ResourceModel.findByIdAndDelete(req.params.id);
    return res.status(200).json( {resource: resource});
    } catch (err){
        console.log(err)
        return res.status(500).json({resource: "something went wrong"})
    };
};


export {
    GET_ALL_RESOURCES, 
    INSERT_RESOURCE, 
    GET_RESOURCE_BY_ID, 
    DELETE_RESOURCE_BY_ID, 
    UPDATE_RESOURCE }; 
