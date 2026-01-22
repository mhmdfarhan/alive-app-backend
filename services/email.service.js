const transporter = require('../config/mailer');

async function sendEmergencyEmail(userName, targetEmail) {
  const mailOptions = {
    from: 'Sileme App <no-reply@sileme.app>',
    to: targetEmail,
    subject: `⚠️ PERINGATAN DARURAT: ${userName} Tidak Merespons`,
    text: `Halo, ${userName} belum melakukan check-in melewati batas waktu. Mohon segera diperiksa.`
  };

  await transporter.sendMail(mailOptions);
  console.log(`📧 Email darurat terkirim ke ${targetEmail}`);
}

module.exports = { sendEmergencyEmail };
