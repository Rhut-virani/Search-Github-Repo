import client from '../../lib/apollo-client';
import { searchRepoQuery } from '../../lib/query';

const seachHandler = async (req, res) => {
  let search = req.body;
  try {
    const result = await client.query({
      query: searchRepoQuery(search),
    });
    if (result.data.search.edges.length) {
      res.status(200).json({
        data: result.data.search,
        error: null,
      });
    } else {
      res.status(404).json({
        data: null,
        error: 'No Users Found',
      });
    }
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      data: null,
      error: 'Internal Error',
    });
  }
};

export default seachHandler;
