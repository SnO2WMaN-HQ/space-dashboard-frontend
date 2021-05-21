/* eslint-disable no-process-env */
import {getAccessToken, withApiAuthRequired} from '@auth0/nextjs-auth0';
import {GraphQLClient} from 'graphql-request';
import {NextApiHandler} from 'next';

const client = new GraphQLClient(process.env.API_GRAPHQL_ENDPOINT!);

const handler: NextApiHandler = async (req, res) => {
  try {
    const header = await getAccessToken(req, res, {})
      .then(({accessToken}) => ({
        Authorization: `Bearer ${accessToken}`,
      }))
      .catch(() => ({}));
    const data = await client.request(
      req.body.query,
      req.body.variables,
      header,
    );
    res.send({data});
  } catch (error) {
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
};
export default withApiAuthRequired(handler);
