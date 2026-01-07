# Troubleshooting Certificate Images

If you can't see your certificate images, check the following:

## 1. Check File Names Match Exactly

The image file names in your `public/certificates/` folder must **exactly match** the paths in `components/Skills.jsx`:

Current expected files:
- `css-cert.jpg` (or update the path in Skills.jsx)
- `gcp-cert.jpg`
- `meta-cert.jpg`
- `azure-cert.jpg`
- `react-cert.jpg`
- `nodejs-cert.jpg`

**Important**: File names are case-sensitive! `css-cert.jpg` ≠ `CSS-Cert.JPG`

## 2. Check File Extensions

Make sure the file extension matches:
- If your file is `css-cert.png`, update the path to `/certificates/css-cert.png`
- If your file is `css-cert.jpeg`, update the path to `/certificates/css-cert.jpeg`

## 3. Restart Next.js Dev Server

After adding images to the `public` folder, you may need to restart your dev server:

1. Stop the server (Ctrl+C)
2. Run `npm run dev` again

## 4. Check Browser Console

Open your browser's developer console (F12) and check for:
- 404 errors (file not found)
- CORS errors
- Any error messages

The code now logs to console when images load or fail.

## 5. Verify File Location

Your images should be in:
```
public/
  certificates/
    css-cert.jpg
    gcp-cert.jpg
    meta-cert.jpg
    azure-cert.jpg
    react-cert.jpg
    nodejs-cert.jpg
```

## 6. Update Image Paths

If your files have different names, update the `image` property in `components/Skills.jsx`:

```javascript
{
  name: "AWS Certified Solutions Architect",
  issuer: "Amazon Web Services",
  date: "2024",
  credentialId: "AWS-123456",
  image: "/certificates/your-actual-filename.jpg", // Update this
}
```

## 7. Test Image Path Directly

Try accessing the image directly in your browser:
- `http://localhost:3000/certificates/css-cert.jpg`

If this doesn't work, the file path or name is incorrect.

