import { NextApiRequest, NextApiResponse } from 'next';
import multer, { Multer } from 'multer';
import { Request, Response } from 'express';

const storage = multer.diskStorage({
  destination: 'upload/audio/',
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = file.originalname.split('.').pop();
    cb(null, `${uniqueSuffix}.${extension}`);
  },
});

const upload: Multer = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const expressReq = req as unknown as Request;
  const expressRes = res as unknown as Response;

  upload.single('mp3')(expressReq, expressRes, (error: any) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred during file upload');
    } else {
      // File upload was successful
      res.status(200).send('File uploaded successfully!');
    }
  });
}



