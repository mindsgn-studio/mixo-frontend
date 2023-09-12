import connectDB from '@/utils/mongo';

const handler = async (req: any, res: any) => {
  const client = await connectDB;
  const db = client.db(`mixo-local`);

  try {
    const { link, page = 1, limit = 10 } = req.query;
    const query = { link };

    const result = await db.collection('uploads').findOneAndDelete(query);

    const skipCount = (page - 1) * limit;

    const response = await db
      .collection('uploads')
      .find({}, { projection: { _id: 0, createdAt: 0, updatedAt: 0 } })
      .skip(skipCount)
      .limit(limit)
      .sort({ metacritic: -1 })
      .toArray();

    res.status(200).json({
      data: response,
      limit: 1,
      page: 1,
      error: false
    });
  } catch (e) {
    res.status(500).json({
      data: [],
      limit: 1,
      page: 1,
      error: true
    });
  }
};

export default handler;
