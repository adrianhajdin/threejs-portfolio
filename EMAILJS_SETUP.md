# EmailJS Setup Guide for Contact Form & Newsletter

This guide explains how to configure EmailJS for both the contact form and newsletter subscription functionality on your Vercel-deployed website.

## Required Environment Variables

Add these environment variables to your Vercel project settings:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## EmailJS Account Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Go to the "Email Services" section
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note the **Service ID** for your environment variables

### 3. Create Email Templates

#### Contact Form Template
1. Go to "Email Templates" section
2. Click "Create New Template"
3. Set up the template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{to_name}}` - Your name (Jan Magnus Heimann)
   - `{{to_email}}` - Your email (jan@heimann.ai)
   - `{{message}}` - Contact message content
4. Example template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
To: {{to_name}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Save and note the **Template ID**

#### Newsletter Subscription Template
1. Create another new template for newsletter subscriptions
2. Set up with these variables:
   - `{{subscriber_email}}` - Newsletter subscriber's email
   - `{{to_name}}` - Your name
   - `{{to_email}}` - Your email
   - `{{message}}` - Subscription notification message
3. Example template:

```
Subject: New Newsletter Subscription

Hello {{to_name}},

You have a new newsletter subscription!

Subscriber Email: {{subscriber_email}}

{{message}}

---
This notification was sent from your portfolio newsletter signup.
```

4. Save and note the **Newsletter Template ID**

### 4. Get Public Key
1. Go to "Account" section
2. Find your **Public Key**
3. Note this for your environment variables

## Vercel Deployment Setup

### 1. Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each of the four environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Set them for Production, Preview, and Development environments

### 2. Redeploy Your Application
After adding environment variables, trigger a new deployment so Vercel picks up the new configuration.

## Testing

### Local Testing
1. Create a `.env.local` file in your project root
2. Add your environment variables:
```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
3. Run `npm run dev` and test both forms

### Production Testing
1. Deploy to Vercel with environment variables configured
2. Test the contact form at `yourdomain.com/#contact`
3. Test the newsletter signup at `yourdomain.com/#blog`

## Troubleshooting

### Common Issues
1. **Environment variables not found**: Make sure variables start with `VITE_` prefix for Vite
2. **EmailJS service errors**: Verify your service ID and public key are correct
3. **Template not found**: Double-check template IDs match exactly
4. **CORS errors**: EmailJS should handle CORS automatically, but verify your domain is allowlisted in EmailJS settings

### Email Delivery Issues
1. Check your EmailJS dashboard for sent email logs
2. Verify your email service connection is active
3. Check spam folders for test emails
4. Ensure your email service has proper authentication

## Features

### Contact Form (`/src/sections/Contact.jsx`)
- Full name, email, and message fields
- Form validation
- Loading states during submission
- Success/error notifications
- Automatic form reset after successful submission

### Newsletter Subscription (`/src/sections/Blog.jsx`)
- Email address field with validation
- Loading states during subscription
- Success/error notifications
- Automatic field reset after successful subscription

Both forms use the shared Alert component for consistent user feedback.