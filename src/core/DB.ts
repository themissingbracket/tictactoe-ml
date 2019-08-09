import nedb from 'nedb';
import { DATABASE } from '../types/Database'
import { GameState } from '../types/GameState';


class Database{
    private db:nedb<any>
    constructor(){
        this.db = new nedb({
            filename: `${process.cwd()}/gameStore.db`
        })
        this.db.loadDatabase()
    }
    FindOne(query: DATABASE.query): Promise<DATABASE.DocStruct>{
        return new Promise((resolve,reject)=>{
            console.log(query)
            this.db.findOne(query, (err, docs: DATABASE.DocStruct) => {
                console.log(docs)
                if (err || !docs)return reject(err)
                resolve(docs)
            })
        })
    }
    Insert(docs: DATABASE.DocStruct): Promise<DATABASE.DocStruct>{
        return new Promise((resolve,reject)=>{
            this.db.insert(docs, (err, docs: DATABASE.DocStruct) => {
                if(err)return reject(err)
                return resolve(docs)
            })
        })
    }
    Update(id: string, doc: DATABASE.DocStruct): Promise<DATABASE.DocStruct>{
        return new Promise((resolve,reject)=>{
            this.db.update({_id:id},doc,{},(err)=>{
                if(err)return reject(doc)
                resolve(doc)

            })
        })
    }
}

export default new Database()