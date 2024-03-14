//importing jsom-server package
const JSONserver=require('json-server')

//create server using create() method from json-server
const MPserver=JSONserver.create()

//generating path/route to server resource
const router=JSONserver.router('db.json')

//initiating json-server midlewares
const midlewares=JSONserver.defaults()

//creating PORT number for server
const PORT=3000 | process.env.PORT

//implementing midleware to server
MPserver.use(midlewares)
//implementing route to resource to server
MPserver.use(router)

//run camand for server
MPserver.listen(PORT,()=>{
    console.log(`Server is runing at:${PORT}`)
})