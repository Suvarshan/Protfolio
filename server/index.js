import express from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import cors from 'cors';
import fs from 'fs';
import { portfolioData } from './portfolioData.js';

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.json());

// Resume upload endpoint
app.post('/api/upload', upload.single('resume'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(dataBuffer);
    // Simple extraction (for demo):
    const text = data.text;
    // TODO: Add better parsing logic for About, Skills, etc.
    res.json({
      text,
      message: 'Resume uploaded and parsed successfully.'
    });
    fs.unlinkSync(req.file.path); // Clean up
  } catch (err) {
    res.status(500).json({ error: 'Failed to parse resume' });
  }
});

// Portfolio data endpoint
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
