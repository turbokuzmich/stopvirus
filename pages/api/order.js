import mailer from 'nodemailer';
import axios from 'axios';
import csrf from '../../middlewares/csrf';
import cookies from '../../middlewares/cookies';
import { v4 as uuid } from 'uuid';
import { runMiddleware } from '../../helpers/middleware';

const types = {
  home: 'Для дома',
  'beauty-salon': 'Для салона красоты',
  manicure: 'Для маникюра',
  barbershop: 'Для барбершопа',
  restaurant: 'Для ресторана',
};

export default async function order(req, res) {
  await runMiddleware(cookies, req, res);

  try {
    await runMiddleware(csrf, req, res);
  } catch (_) {
    return res.status(400).json({ status: 'error', message: 'Bad CSRF tokek' });
  }

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.captcha}`,
    {},
    {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
  );

  if (!response.data.success) {
    return res.status(400).json({ status: 'error', message: 'Captcha verification failed' });
  }

  const id = `${Date.now()}-${uuid()}`;
  const transport = mailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `<p>Новый заказ на сайте stopvirus.moscow</p>
<p>${types[req.body.type]}. ${req.body.fio}. ${req.body.email}. ${req.body.phone}</p>
<p>${req.body.comment}</p>`;

  const info = {
    from: 'ksamid@yandex.ru',
    to: 'kurteev.d@yandex.ru, deluxuryspa@gmail.com',
    subject: 'Тест',
    html,
  };

  await transport.sendMail(info);

  res.json({ status: 'success', data: { id } });
}
