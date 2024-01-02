import ResourceModel from "../models/resource.js"

const GET_ALL_RESOURCES = async (req, res) => {
    const resources = await ResourceModel.find();
    return res
.status(200)
.json({resources: resources});
}

const INSERT_RESOURCE = async (req, res) => {
    console.log(req.body);
    
    const resource = new ResourceModel({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        content_link: req.body.content_link,
    });

const response = await resource.save();

return res
.status(201)
.json({message: "Resource was added", response: response});
}

export {GET_ALL_RESOURCES, INSERT_RESOURCE}; 
