import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

const viewPath = path.dirname(__dirname + "/src")
//resolve(__dirname + "/view");

console.log(viewPath);