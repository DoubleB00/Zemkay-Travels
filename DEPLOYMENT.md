# Deployment Instructions

## Vercel Deployment

This application uses Vercel serverless functions for the contact form.

### Required Environment Variables

Set the following environment variable in your Vercel project settings:

```
RESEND_API_KEY=your_resend_api_key_here
```

### API Configuration

The contact form sends emails using:
- **From:** ZEmKay Travels <contact@zemkaytravels.com>
- **To:** MKajee@ZEmKayTravels.com
- **API Endpoint:** `/api/contact`

### Deployment Steps

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add `RESEND_API_KEY` to your Vercel environment variables
4. Deploy

The contact form will automatically work once deployed.
