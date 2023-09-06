// const porfolioController = require("./controller/porfolioController")
const nodemailer = require("nodemailer")

const sendEmail = async (option) => {

   const transporter = nodemailer.createTransport({
     service: "gmail",

      auth: {
         user: process.env.SMTP_MAIL,
         pass: process.env.SMTP_passward
      }
   })
   const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: option.email,
      subject: "msg",
      text: option.msg
   }
  transporter.sendMail(mailOptions, function (error, info){
   if (error){
      console.log(error);
   } else{
      console.log("Emial sent successfully")
   }
  })
   // let a = await portfolioController.sendMail(mailOptions);
   // console.log(a)
}

  exports.sendEmailController = async(req, res) =>{
   const option = { name: req.body.name,
   email: req.body.email,
   msg: req.body.msg
   }
   sendEmail(option)
}
// export sendEmailController