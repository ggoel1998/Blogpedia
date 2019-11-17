const { Router } = require('express')
const { getCommentById, createComment,getCommentByAuthorId} =require('../../controllers/comments')

const route = Router()

route.get('/:id', async(req,res) => {
    try {
        const comment = await getCommentById(req.params.id)
        if(!comment){
            return res.status(404).send({ error: 'No such Comment' })
        }
        else
        {
            return res.status(200).send(comment)
        }
    } catch (error) {
        return res.status(500).send({
            error: error,
          })
    }
})

route.get('/',async (req,res)=>{
    try {
        const comments = await getCommentByAuthorId(req.body.commentor_id)
        if(comments==[]){
          
            return res.send(404).send({error:'NO COMMENTS TO  ARTICLE FOUND'})
        }
        else
        {
            return res.status(200).send(comments)
        }
    } catch (error) {
        return res.status(500).send({
            error: 'NO COMMENTS TO THIS ARTICLE FOUND',
          })
    }
})

route.post('/',async(req,res)=>{
    try {
        const comment= await createComment(req.body.commentor_id,req.body.article_id,req.body.title,req.body.message)
        return res.status(201).send(comment)
    } catch (e) {
        return res.status(500).send({
            error:e,
        })
    }
})
module.exports = route