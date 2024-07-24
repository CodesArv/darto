const  nodemailer = require("nodemailer");

const mailTransporter = nodemailer.createTransport({
    host: "mail.darto.in",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    requireTLC:true,
    auth: {
      user: "noreply@darto.in",
      pass: "!Noreplaytodarto936",
    },
    debug: true,
    tls: {
            rejectUnauthorized: false,
         },
});
// const mailTransporter = nodemailer.createTransport({
//     host: "mail.darto.in",
//     port: 465,
//     secure: true, // upgrade later with STARTTLS
//     requireTLC:true,
//     auth: {
//         type: 'custom',
//         method: 'MY-CUSTOM-METHOD', // forces Nodemailer to use your custom handler

//     //   type: 'OAuth2',
//       user: "noreply@darto.in",
//       pass: "!Noreplaytodarto936",
//     },
//     customAuth: {
//         'MY-CUSTOM-METHOD': myCustomMethod
//     },
//     debug: true,
//     tls: {
//             rejectUnauthorized: false,
//          },
//   });
// //const transporter = nodemailer.createTransport(mg(auth));

// async function myCustomMethod(ctx){
//     console.log('CTX - ', ctx);
//     let cmd = await ctx.sendCommand(
//         'AUTH PLAIN ' +
//             Buffer.from(
//                 '\u0000' + ctx.auth.credentials.user + '\u0000' + ctx.auth.credentials.pass,
//                 'utf-8'
//             ).toString('base64')
//     );

//     if(cmd.status < 200 || cmd.status >=300){
//         throw new Error('Failed to authenticate user: ' + cmd.text);
//     }
// }
const EmailService = async (result) => {
    try {
        console.log({ result});

        let mailDetails = {
            from: "noreply@darto.in",
            to: 'kamal.sharma.gh@gmail.com',
            subject: 'Test mail',
            cc: ["kamal.sharma@perfectKode.com"],
            // text: "Mail from Kamal"
            html: `Hello  <b> ${result.fname} ${result.lname}</b>
                <!DOCTYPE html>  
                <html>
                <h2>Welcome to Darto</h2>
                <p></p>
                <p>. </p>
                <p></p>
                <p>List Space </p>
                <p></p>
                <p>Thanks</p>
                <p>Team Darto</p>
                </html>`,
        };
          
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs - ', err);
            } else {
                console.log('Email sent successfully - ', data);
            }
        });

        // let info = await transporter.sendMail({
        //     from: "<avinashg490@gmail.com>", // sender address
        //     to: 'avi903917@gmail.com', // list of receivers
        //     subject: ` Welcome to Darto `, // Subject line
        //     cc: ["arun.kumar@perfectKode.com"],
        //     html: `Hello  <b> ${result.fname} ${result.lname}</b>

        //         <!DOCTYPE html>  
        //         <html>
        //         <h2>Welcome to Darto</h2>
        //         <p></p>
        //         <p>. </p>
        //         <p></p>
        //         <p>List Space </p>
        //         <p></p>
        //         // <p>Email ${email}</p>
        //         // <p>Password ${password}</p>

        //         <p>Thanks</p>
        //         <p>Team Darto</p>
        //         </html>
        //                `,
        // });
        // console.log("info",info);
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { EmailService };
