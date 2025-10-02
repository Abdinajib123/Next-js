import path from "path";
import {promises as fs } from "fs";

const dataFilePath = path.join(process.cwd(),"app","helper","data.json");

const readData = async()=>{
    const jsonData = await fs.readFile(dataFilePath,"utf-8");
    return JSON.parse(jsonData);
}
export {readData};

