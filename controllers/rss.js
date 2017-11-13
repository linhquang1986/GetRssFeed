var rss = require('../middleware').rss;
/**
 * @swagger
 * resourcePath: /rss
 * descirption: get Rss
 */

/**
 * @swagger
 * models:
 *    rss:
 *      properties:
 *        url: 
 *          type: String
 */

/**
 * @swagger
 * path: /rss/parRss
 * operations:
 *    -   httpMethod: POST
 *        summary: get Rss
 *        node: return list item
 *        nickname: getRss
 *        responseClass : rss
 *        consumes:
 *          - text/html
 *        parameters:
 *          - name: body
 *            descirption: url
 *            paramType: body
 *            required: true
 *            dataType: order
 */
exports.parRss = (req, res) => {
    let url = req.body.url;
    let parserRss = new rss(url);
    parserRss.parStart().then(items => {
        res.json(items)
    })
}