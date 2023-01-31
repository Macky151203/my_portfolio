import List from "@/lib/schema";

import main from "@/lib/db";

export default function getinfo(req,res){
    if(req.method==='POST'){
        main().catch(err=>console.log(err))
        const nam= req.body.name
        const mail=req.body.email
        const comm=req.body.comment
        const lst= new List({
            name:nam,
            email:mail,
            comment:comm
        });
        lst.save().then(()=>{
            res.status(200).json(lst)
        })
    }

}