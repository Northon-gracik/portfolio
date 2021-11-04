import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log("CERTO--DATABASE--"))
.catch(err => console.error(err));

mongoose.Promise = global.Promise;

export default { mongoose }
