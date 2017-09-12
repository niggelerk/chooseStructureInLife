/* @flow */

/**
 * This middleware stands for prevent blocking
 * in latest Firefox and Chrome because of
 * prefetch checks
 * @param req express.request
 * @param res express.response
 * @param next next experss middleware
 */
export default function corsPrefetch(req: Object, res: Object, next: Function) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, *');
	res.setHeader('Access-Control-Allow-Credentials', 'true');

	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
		return;
	}

	next();
}
