const { Comment, User } = require('../db/models')

async function getCommentById(id){
    return await Comment.findOne({
        include :[{model:User,as:'commentor' }],
        where :{id}
    })
}
async function getCommentByAuthorId(commentorId){
    return await Comment.findAll({
        where:{commentorId:commentorId}
    })
}
// async function getAllComments(){
//     const comments= await Comment.findAll()
//     return comments
// }

async function  createComment(commentorId,articleId,title,message){
    const comment = await Comment.create({
        commentorId,
        articleId,
        title,
        message,
        
    })
    return comment
}

module.exports ={
    createComment,
    getCommentById,
    getCommentByAuthorId,
    // getAllComments
}