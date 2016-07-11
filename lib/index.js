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
        const baseURIWithPath = `${baseURI}${config.dataEndpoint}`;

        if (typeof this[config.method] === 'function') {
            data = await this[config.method](baseURIWithPath, config);
        }

        return data;
    }

    async getSearchEndpointData(url, { appId, appKey, dataEndpoint, phrase, brand_id, results, cal_min, cal_max, fields }) {
        const encodedFields = fields.join(',');
        const options = {
            uri: `${url}/${phrase}`,
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

        return new rp(options)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        })
    }

    async getItemEndpointData(url, { dataEndpoint, id, upc, appId, appKey }) {
        const options = {
            uri: url,
            qs: {
                id,
                upc,
                appId,
                appKey
            },
            json: true
        }

        return new rp(options)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        })
    }

    async getBrandOnlyData(url, { dataEndpoint, id, appId, appKey }) {
        const options = {
            uri: `${url}/${id}`,
            qs: {
                appId,
                appKey
            },
            json: true
        }

        return new rp(options)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        })
    }

    async getBrandSearchData(url, { dataEndpoint, query, auto, type, min_score, offset, limit, appId, appKey }) {
        const options = {
            uri: url,
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

        return new rp(options)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        })
    }

};
