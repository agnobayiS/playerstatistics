module.exports = function player(db){

    async function playersHint(id){
      return  await db.many(`select * from players where id =$1`,[id])
    }
    
    async function id (){
        return await db.many(`select id from players`)
    }
    return{
        playersHint,
        id
    }
}