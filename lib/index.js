import { singleS3StreamOutput, Activity } from 'aries-data';
import rp from 'request-promise';

const baseURI = 'https://api.nutritionix.com/v1_1/';

export default class NutritionixSource extends Activity {
    static props = {
        name: require('../package.json').name, 
        version: require('../package.json').version
    };

    @singleS3StreamOutput('json')
    async onTask(activityTask, config) {
        let data = null;
        if (typeof this[config.method] === 'function') {
            data = await this[config.method](config);
        }

        return data;
    }

    async getSearchEndpointData({ appId, appKey, dataEndpoint, phrase, brand_id, results, cal_min, cal_max, fields }) {
        const encodedFields = fields.join(',');
        const options = {
            uri: `${baseURI}/search/${phrase}`,
            qs: {
                brand_id, 
                results,
                cal_min, 
                cal_max,
                fields: encodedFields,
                appId,
                appKey
            },
            json: true
        }

        const response = await rp(options);
        return response;
    }

    async getItemEndpointData({ dataEndpoint, id, upc, appId, appKey }) {
        const options = {
            uri: `${baseURI}/item`,
            qs: {
                id,
                upc,
                appId,
                appKey
            },
            json: true
        }

        const response = await rp(options);
        return response;
    }

    async getBrandOnlyData({ dataEndpoint, brandId, appId, appKey }) {
        const options = {
            uri: `${baseURI}/brand/${brandId}`,
            qs: {
                appId,
                appKey
            },
            json: true
        }

        const response = await rp(options);
        return response;
    }

    async getBrandSearchData({ dataEndpoint, query, auto, type, min_score, offset, limit, appId, appKey }) {
        const options = {
            uri: `${baseURI}/brand/search`,
            qs: {
                query,
                auto,
                type,
                min_score,
                offset,
                limit,
                appId,
                appKey
            },
            json: true
        }

        const response = await rp(options);
        return response;
    }
};

