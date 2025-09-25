import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export async function sendContactFormEmail(formData: ContactFormData) {
  const {
    name,
    email,
    company,
    phone,
    service,
    budget,
    timeline,
    message
  } = formData;

  const businessMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.BUSINESS_EMAIL || 'itsahmednule@gmail.com',
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10B981, #3B82F6); padding: 2rem; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 2rem;">Genx</h1>
          <p style="color: white; margin: 0.5rem 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
        </div>
        
        <div style="padding: 2rem; background-color: #f9fafb;">
          <h2 style="color: #1f2937; margin-bottom: 1.5rem;">Contact Details</h2>
          
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Name:</strong> ${name}</p>
          </div>
          
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Email:</strong> ${email}</p>
          </div>
          
          ${company ? `
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Company:</strong> ${company}</p>
          </div>
          ` : ''}
          
          ${phone ? `
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Phone:</strong> ${phone}</p>
          </div>
          ` : ''}
          
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Service Needed:</strong> ${service}</p>
          </div>
          
          ${budget ? `
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Budget:</strong> ${budget}</p>
          </div>
          ` : ''}
          
          ${timeline ? `
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0; color: #374151;"><strong>Timeline:</strong> ${timeline}</p>
          </div>
          ` : ''}
          
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 0 0 0.5rem 0; color: #374151;"><strong>Project Details:</strong></p>
            <p style="margin: 0; color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 2rem; padding: 1rem; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 0.875rem;">
              <strong>Next Steps:</strong> Reply to this email or call the client directly to discuss their project requirements.
            </p>
          </div>
        </div>
        
        <div style="padding: 1rem 2rem; background: #374151; text-align: center;">
          <p style="margin: 0; color: #9ca3af; font-size: 0.875rem;">
            This email was sent from the Genx contact form
          </p>
        </div>
      </div>
    `,
  };

  const clientMailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Thank you for contacting Ahmed Nule - I\'ll be in touch soon!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10B981, #3B82F6); padding: 2rem; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 2rem;">Genx</h1>
          <p style="color: white; margin: 0.5rem 0 0 0; opacity: 0.9;">Building the future, one application at a time</p>
        </div>
        
        <div style="padding: 2rem; background-color: #f9fafb;">
          <h2 style="color: #1f2937; margin-bottom: 1rem;">Thank You, ${name}!</h2>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1.5rem;">
            We've received your message and are excited to learn about your project. Our team will review your requirements and get back to you within 24 hours.
          </p>
          
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin: 0 0 1rem 0; font-size: 1.125rem;">What happens next?</h3>
            <ul style="color: #4b5563; line-height: 1.6; margin: 0; padding-left: 1.5rem;">
              <li style="margin-bottom: 0.5rem;">Our team will review your project details</li>
              <li style="margin-bottom: 0.5rem;">We'll prepare a preliminary proposal</li>
              <li style="margin-bottom: 0.5rem;">Schedule a call to discuss your requirements in detail</li>
              <li>Provide you with a detailed quote and timeline</li>
            </ul>
          </div>
          
          <div style="background: #dbeafe; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e40af; margin: 0 0 0.5rem 0; font-size: 1rem;">Your Project Summary:</h3>
            <p style="color: #1e40af; margin: 0; font-size: 0.875rem;">
              <strong>Service:</strong> ${service}<br>
              ${budget ? `<strong>Budget:</strong> ${budget}<br>` : ''}
              ${timeline ? `<strong>Timeline:</strong> ${timeline}` : ''}
            </p>
          </div>
          
          <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin: 0 0 1rem 0; font-size: 1.125rem;">Contact Information</h3>
            <p style="color: #4b5563; margin: 0; line-height: 1.6;">
              📧 <strong>Email:</strong> itsahmednule@gmail.com<br>
              📞 <strong>Phone:</strong> +254 788 382 796<br>
              🕐 <strong>Business Hours:</strong> Mon-Fri 9AM-6PM EAT
            </p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1.5rem;">
            In the meantime, feel free to explore our portfolio or reach out if you have any immediate questions.
          </p>
          
          <div style="text-align: center;">
            <a href="mailto:itsahmednule@gmail.com" style="display: inline-block; background: linear-gradient(135deg, #10B981, #3B82F6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
              Reply to this Email
            </a>
          </div>
        </div>
        
        <div style="padding: 1rem 2rem; background: #374151; text-align: center;">
          <p style="margin: 0; color: #9ca3af; font-size: 0.875rem;">
            This email was sent from the Genx contact form<br>
            © 2025 Genx. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);
    
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send emails');
  }
}