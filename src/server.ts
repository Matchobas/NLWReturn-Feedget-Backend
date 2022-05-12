import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9d6888ac4db433",
    pass: "163db151af016b"
  }
});

app.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      comment,
      type,
      screenshot,
    }
  });

  await transport.sendMail({
    from: 'Equipe Feedget <nodetraining@mat.com>',
    to: 'Matheus Alexandria <maalexandria@hotmail.com>',
    subject: 'Novo feedback',
    html: [
      '<div styles="font-family: sans-serif; font-size: 16px; color: #111;">',
      `<p>Tipo de feedback ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      '</div>',

    ].join(''),
  });
  
  return response.status(201).json(feedback);
});

app.listen(3333, () => {
  console.log('Running server on port 3333!');
});