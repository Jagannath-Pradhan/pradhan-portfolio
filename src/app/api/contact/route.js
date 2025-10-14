import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required.'
            }, { status: 400 });
        }

        // Setup transporter (you can use Gmail, Outlook, etc.)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // email page design
        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `✨ New Portfolio Contact from ${name}`,
            text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>New Contact Message</title>
                </head>

                <body
                    style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); min-height: 100vh;">

                    <!-- Main Container -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                        style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 20px;">
                        <tr>
                            <td align="center">

                                <!-- Email Card -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
                                    style="max-width: 600px; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); overflow: hidden;">

                                    <!-- Header with Gradient -->
                                    <tr>
                                        <td
                                            style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td align="center">
                                                        <!-- Icon -->
                                                        <div
                                                            style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 20px; width: 80px; height: 80px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);">
                                                             <img
                                                                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                                                alt="Mail Icon"
                                                                width="48"
                                                                height="48"
                                                                style="display: block; margin: auto; filter: brightness(100%) contrast(110%);" />
                                                            </div>

                                                        <h1
                                                            style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                                                            New Message Received! 🎉
                                                        </h1>
                                                        <p
                                                            style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 400;">
                                                            Someone reached out through your portfolio
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Content Area -->
                                    <tr>
                                        <td style="padding: 40px 30px;">

                                            <!-- Sender Info Card -->
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 16px; margin-bottom: 30px; overflow: hidden;">
                                                <tr>
                                                    <td style="padding: 25px;">
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                                            width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 15px;">
                                                                    <h2
                                                                        style="margin: 0 0 15px 0; color: #06b6d4; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                                                                        👤 Sender Information
                                                                    </h2>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table role="presentation" cellspacing="0" cellpadding="0"
                                                                        border="0" width="100%">
                                                                        <tr>
                                                                            <td
                                                                                style="padding: 12px 0; border-bottom: 1px solid rgba(148, 163, 184, 0.2);">
                                                                                <table role="presentation" cellspacing="0"
                                                                                    cellpadding="0" border="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100"
                                                                                            style="color: #94a3b8; font-size: 14px; font-weight: 500;">
                                                                                            Name:</td>
                                                                                        <td
                                                                                            style="color: #ffffff; font-size: 16px; font-weight: 600;">
                                                                                            ${name}</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="padding: 12px 0;">
                                                                                <table role="presentation" cellspacing="0"
                                                                                    cellpadding="0" border="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100"
                                                                                            style="color: #94a3b8; font-size: 14px; font-weight: 500;">
                                                                                            Email:</td>
                                                                                        <td>
                                                                                            <a href="mailto:${email}"
                                                                                                style="color: #06b6d4; font-size: 16px; font-weight: 600; text-decoration: none;">
                                                                                                ${email}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Message Card -->
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                              style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 16px; margin-bottom: 30px;">
                                              <tr>
                                                <td style="padding: 25px;">
                                                  <h2
                                                    style="margin: 0 0 15px 0; color: #3b82f6; font-size: 18px; font-weight: 600;">
                                                    💬 Message Content
                                                  </h2>
                                                  <div
                                                    style="background: rgba(15, 23, 42, 0.5);
                                                           border-radius: 12px;
                                                           border-left: 4px solid #3b82f6;
                                                           padding: 0; /* Removed all padding */
                                                           text-align: left;">
                                                    <p
                                                      style="margin: 0;
                                                             padding: 12px 16px; /* small controlled padding */
                                                             color: #e2e8f0;
                                                             font-size: 15px;
                                                             line-height: 1.7;
                                                             white-space: pre-wrap;
                                                             text-align: left;">
                                                      ${message}
                                                    </p>
                                                  </div>
                                                </td>
                                              </tr>
                                            </table>

                                            <!-- Action Button -->
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td align="center" style="padding: 20px 0;">
                                                        <a href="mailto:${email}?subject=Re: Your message from Portfolio"
                                                            style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-size: 16px; font-weight: 600; box-shadow: 0 10px 25px rgba(6, 182, 212, 0.3); transition: all 0.3s ease;">
                                                            📧 Reply to ${name}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Info Box -->
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; margin-top: 20px;">
                                                <tr>
                                                    <td style="padding: 20px; text-align: center;">
                                                        <p style="margin: 0; color: #a78bfa; font-size: 14px; line-height: 1.6;">
                                                            💡 <strong>Quick Tip:</strong> Respond within 24 hours for the best
                                                            impression!
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td
                                            style="background: #0f172a; padding: 30px; text-align: center; border-top: 1px solid rgba(148, 163, 184, 0.2);">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 14px;">
                                                            This message was sent from your portfolio contact form
                                                        </p>
                                                        <p style="margin: 0; color: #64748b; font-size: 13px;">
                                                            © ${new Date().getFullYear()} Portfolio. Made with ❤️ and lots of creative energy.
                                                        </p>

                                                        <!-- Social Links (Optional) -->
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                                            align="center" style="margin-top: 20px;">
                                                            <tr>
                                                                <td style="padding: 0 8px;">
                                                                    <a href="https://github.com/jagannath-pradhan"
                                                                        style="color: #06b6d4; text-decoration: none; font-size: 12px;">GitHub</a>
                                                                </td>
                                                                <td style="padding: 0 8px; color: #64748b;">•</td>
                                                                <td style="padding: 0 8px;">
                                                                    <a href="https://www.linkedin.com/in/jagannath-pradhan"
                                                                        style="color: #06b6d4; text-decoration: none; font-size: 12px;">LinkedIn</a>
                                                                </td>
                                                                <td style="padding: 0 8px; color: #64748b;">•</td>
                                                                <td style="padding: 0 8px;">
                                                                    <a href="https://x.com/MrPradhan_8"
                                                                        style="color: #06b6d4; text-decoration: none; font-size: 12px;">X</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>
                    </table>

                </body>

                </html>
            `
        });

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully.'
        }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to send message.',
            error: error.message
        }, { status: 500 });
    }
}