import { ADD } from "../Const/Const"

export const AddTask=(desc,isdone)=>{
 return { type:ADD,payload:{description:desc,isDone:isdone}}
}
