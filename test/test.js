import test from 'blue-tape';
import NutritionixSource from '../lib/index.js';
import config from './test.config';


test('proper configuration', t => {
	const activity = new NutritionixSource();
	t.equal(NutritionixSource.props.name, require('../package.json').name);
	t.equal(NutritionixSource.props.version, require('../package.json').version);
	t.end();
});

test('testing getSearchEndpointData method', async (t) => {
	const source = new NutritionixSource();
	const data = await source.getSearchEndpointData(config);
});

test('testing getItemEndpointData method', async (t) => {
	const source = new NutritionixSource();
	const data = await source.getItemEndpointData(config);
});

test('testing getBrandOnlyData method', async (t) => {
	const source = new NutritionixSource();
	const data = await source.getBrandOnlyData(config);
});

test('testing getBrandSearchData method', async (t) => {
	const source = new NutritionixSource();
	const data = await source.getBrandSearchData(config);
});