
module.exports = function player(db) {

    async function playersHint(id) {
        return await db.oneOrNone(`select * from players where question_order =$1`, [id])
    }

    async function flagHint(id) {
        return await db.oneOrNone(`select * from flag where question_order =$1`, [id])
    }

    async function id() {
        return await db.many(`select id from players`)
    }

    async function flagid() {
        return await db.many(`select id from flag`)
    }


    return {
        playersHint,
        id,
        flagHint,
        flagid
    }
}