/* eslint-disable no-process-env */
import {getAccessToken, withApiAuthRequired} from '@auth0/nextjs-auth0';
import {GraphQLClient} from 'graphql-request';
import {NextApiHandler} from 'next';

const client = new GraphQLClient(process.env.API_GRAPHQL_ENDPOINT!);

const handler: NextApiHandler = async (req, res) => {
  const {accessToken} = await getAccessToken(req, res, {});

  const {data, status, errors} = await client.rawRequest(
    req.body.query,
    req.body.variables,
    {Authorization: `Bearer ${accessToken}`},
  );

  if (status === 200) {
    res.json({data});
  } else {
    res.status(status).json({code: status, errors});
  }
};
export default withApiAuthRequired(handler);
