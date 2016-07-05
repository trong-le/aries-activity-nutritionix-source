export const config = {
	method: 'getSearchEndpointData',
    dataEndpoint: 'search',
    phrase: 'USDA',
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