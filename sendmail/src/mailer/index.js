import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pathMailer = path.dirname(__dirname );

const viewPath = pathMailer + "/view";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USERGMAIL, 
    pass: process.env.PASSGMAIL, 
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.use('compile', hbs({
  extName: ".hbs", 
  viewEngine: {
    defaultLayout: false
  },
  viewPath,  
}));

export { transporter };