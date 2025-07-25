// emails/ContactEmail.tsx
interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <div>
      <h2>📩 New Contact Form Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
}
