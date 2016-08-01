export default {
	method: 'getSearchEndpointData',
    dataEndpoint: 'search',
    phrase: 'taco',
    upc: 52200004265,
    brandId: '513fbc1283aa2dc80c000053',
    query: 'just salad',
    results: '0:5',
    cal_min: 0,
    cal_max: 50,
    fields: [
        'item_name',
        'brand_name',
        'item_id',
        'brand_id'
    ],
	appId: process.env.APP_ID,
	appKey: process.env.APP_KEY
};