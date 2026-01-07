# Certificates Folder

Place your certificate images in this folder.

## Image File Names

Based on your current setup, name your certificate images as follows:

1. `css-cert.jpg` - For AWS Certified Solutions Architect (or update the path in Skills.jsx)
2. `gcp-cert.jpg` - For Google Cloud Professional Developer
3. `meta-cert.jpg` - For Meta Front-End Developer
4. `azure-cert.jpg` - For Microsoft Azure Fundamentals
5. `react-cert.jpg` - For React Developer Certification
6. `nodejs-cert.jpg` - For Node.js Application Development

## Supported Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## How to Add Images

1. Save your certificate images to this folder (`public/certificates/`)
2. Name them according to the list above (or update the image paths in `components/Skills.jsx`)
3. The images will automatically appear in the certificates modal when you click the info icon

## Updating Image Paths

If you want to use different file names, edit the `image` property in the `certificates` array in `components/Skills.jsx`.

Example:
```javascript
{
  name: "Your Certificate Name",
  issuer: "Issuer Name",
  date: "2024",
  credentialId: "CERT-123456",
  image: "/certificates/your-image-name.jpg", // Update this path
}
```

