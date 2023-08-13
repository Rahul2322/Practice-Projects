const {Worker} = require('bullmq');

const sendEmail = ()=> {return new Promise((res,rej)=> setTimeout(() => {
    res()
}, 5*1000))
}

const worker = new Worker('email-queue',async (job)=>{
    console.log('Message rec id:',job.id);
    console.log('processing message');
    console.log('sending email to',job.data.email);
    await sendEmail();
    console.log('Email sent')
})