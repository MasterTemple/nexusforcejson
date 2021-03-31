module.exports = {
    execute(fs) {
        const updatePfps = require(`./../ref/update/updateEnemyPfps.json`)
        let k=0;
        for(let i=0;i<updatePfps.data.length;i++) {
            let id = updatePfps.data[i].id
            let img = updatePfps.data[i].img
            try {
                let updateFile = require(`./../../NexusForce/json/groupEnemies/EnemyInfo/${id}.json`)
                updateFile.iconURL = img
                //console.log(updateFile)
                fs.writeFile(`C:\\Users\\Blake The Great\\IdeaProjects\\NexusForce\\json\\groupEnemies\\EnemyInfo\\${id}.json`, JSON.stringify(updateFile, null, 2), function (err) {
                        if (err) throw err;
                        //console.log(`completed ${num}`);
                    }
                );
            }catch(e){
                //console.log(e)
                console.log(`${k+++1}. Failed: ${id}`)
            }

        }
    }
}
