import connectDB from '@/utils/mongo';

const handler = async (req: any, res: any) => {
  const client = await connectDB;
  const db = client.db(`mixo-local`);

  try {
    const { link } = req.query;
    const query = { link };

    const result = await db.collection('uploads').findOneAndDelete(query);

    if (result.value) {
      res.status(200).json({ message: 'Document deleted successfully' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
