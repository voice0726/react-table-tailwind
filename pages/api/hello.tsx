// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const helloHandler: NextApiHandler = (
  _: NextApiRequest,
  res: NextApiResponse,
) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default helloHandler;
