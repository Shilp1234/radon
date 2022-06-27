const blogModel = require('../models/blogModel')

const getBlogs = async (req, res, next) => {
    try {
        const query = req.query;
        const allBlogs = await blogModel.find({ isDeleted: false, isPublished: true, ...query })

        if (!allBlogs) {
            return res.status(400).send({ status: false, msg: "No Data Found" })
        }
        return res.status(200).send({ status: true, data: allBlogs })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

const createBlog = async (req, res, next) => {
    try {
        const blogdata = req.body
        const finalData = await blogModel.create(blogdata);
        return res.status(201).send({ msg: finalData })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const updateBlog = async (req, res, next) => {
    try {
        const blogId = req.params.blogId
        const blogData = req.body

        if (!blogId) {
            return res.status(400).send({ status: false, msg: "No Data Found" })
        }

        const updateBlog = await blogModel.findOneAndUpdate(
            { _id: blogId },
            { $set: blogData },
            { new: true }
        );
        res.status(200).send({ status:true, msg: "Data Updated Successfully" }); 
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
}

const deleteBlog = async (req, res, next) => {
    try {
        const blogId = req.params.blogId;

        const deletedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, { $set: { isDeleted: true } }, { new: true })

        if (!deletedBlog) {
            res.status(400).send({ status: false, msg: "No such as blog found" })
        }
        res.status(200).send({ msg: "Blog Has Been Deleted" })
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
}

module.exports.getBlogs = getBlogs
module.exports.createBlog = createBlog
module.exports.updateBlog = updateBlog
module.exports.deleteBlog = deleteBlog