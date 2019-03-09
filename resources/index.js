

const allRequest = (dep) =>{
    return {
        all : () =>{
            const {errorHandler , db } = dep
            return new Promise((resolve , reject)=>{
                db.query('SELECT * FROM info' , (error , result)=>{
                    if(error){
                        errorHandler(error, 'Erro ao lista Info', reject)
                    }
                     resolve({data: result})
                })
            })
        },
        insert : (name , departament ,  positive , negative) =>{
            const {errorHandler , db} = dep
            return new Promise((resolve, reject)=>{
                db.query('INSERT INTO info (name , departament ,  positive , negative) VALUES ( ? , ? , ? , ?) ' , [name , departament ,  positive , negative] , (error, result)=>{
                   if(error){
                       errorHandler(error, 'Erro ao inserir em info', reject)
                   }

                   resolve({data : result})
                })
            })
        }
    }
}

module.exports = allRequest