import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// Initializes firebase with administrative priviledges
admin.initializeApp();
// Firestore instance
const firestore = admin.firestore();
// Enable timestamps in firestore snapshots
firestore.settings({ timestampsInSnapshots: true });

const SMTP_SERVICE = "gmail";
const CQG_NR_EMAIL = "cqg.noreply@gmail.com";
const CQG_EMAIL = "columbia.quant.group@gmail.com";
const CQG_PASSWORD = "twffvaebulzoiyfr";

const transporter = nodemailer.createTransport({
    service: SMTP_SERVICE,
    auth: {
        user: CQG_NR_EMAIL,
        pass: CQG_PASSWORD
    }
});

/**
 * Sends an email from cqg.noreply@gmail.com to columbia.quant.group@gmail.com
 * with a subject containing the given name and email address
 * and a body containing the given message
 */
exports.sendContactEmail = functions.https.onCall((data, context) => {
    const mailOptions = {
        from: CQG_NR_EMAIL,
        to: CQG_EMAIL,
        subject: "Website Contact Form - " + data.name + ", " + data.emailAddress,
        text: data.message
    }
    return transporter.sendMail(mailOptions);
});