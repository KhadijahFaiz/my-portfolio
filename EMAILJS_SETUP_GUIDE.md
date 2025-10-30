# EmailJS Setup Guide - Step by Step

✅ **EmailJS package installed successfully!**

Now follow these steps to get your contact form working:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended) or your preferred email provider
4. Follow the connection steps:
   - For Gmail: You'll need to authorize EmailJS to access your Gmail
   - Use your email: `khadijahfaiz16@gmail.com`
5. **Copy the Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Use this template:

```
Subject: 📧 New Portfolio Contact: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy the Template ID** (looks like: `template_xyz789`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in EmailJS dashboard
2. Find **"Public Key"** section
3. **Copy the Public Key** (looks like: `user_abcdefghijk`)

## Step 5: Update Your Code

Open `my-portfolio/src/components/Contact.tsx` and replace these lines:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID'        // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'      // Replace with your Template ID  
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'        // Replace with your Public Key
```

**Example:**
```javascript
const SERVICE_ID = 'service_abc123'
const TEMPLATE_ID = 'template_xyz789'
const PUBLIC_KEY = 'user_abcdefghijk'
```

## Step 6: Test Your Form

1. Save the file
2. Refresh your portfolio website
3. Fill out the contact form
4. Submit it
5. Check your email (`khadijahfaiz16@gmail.com`) for the message!

## Troubleshooting

### If emails aren't arriving:
1. **Check spam folder** - EmailJS emails sometimes go to spam initially
2. **Verify Service ID, Template ID, and Public Key** are correct
3. **Check EmailJS dashboard** for delivery status
4. **Make sure Gmail service is properly connected**

### If you get errors:
1. **Check browser console** for error messages
2. **Verify all IDs are copied correctly** (no extra spaces)
3. **Make sure you're using the Public Key, not Private Key**

## Free Limits
- ✅ **200 emails/month** on free plan
- ✅ **No credit card required**
- ✅ **Upgrade available** if you need more

## Security Note
- ✅ **Public Key is safe** to use in frontend code
- ✅ **No sensitive credentials** exposed
- ✅ **EmailJS handles** all the security

---

## Quick Checklist:
- [ ] EmailJS account created
- [ ] Gmail service connected  
- [ ] Email template created
- [ ] Service ID, Template ID, Public Key copied
- [ ] Code updated in Contact.tsx
- [ ] Form tested successfully

**Need help?** Let me know if you get stuck on any step!