//@ts-nocheck
import emailjs from '@emailjs/browser';
import { Inputs } from '../app/kontakt/components/contactForm';
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const data = {
  service_id: SERVICE_ID, //req
  template_id: TEMPLATE_ID, //req
  user_id: PUBLIC_KEY, //req
};

export default async function sendEmail(formData: Inputs) {
  try {
    const response = await emailjs.send(data.service_id, data.template_id, formData, data.user_id);
    /*  console.log('Email sent successfully:', response); */
  } catch (error) {
    /* console.error('Failed to send email:', error); */
  }
}
