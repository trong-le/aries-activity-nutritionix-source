import test from 'blue-tape';
import NutritionixSource from '../lib/index.js';
import { config } from './test.config';


// example - make sure configuration is the same
test('proper configuration', t => {
	const activity = new NutritionixSource();
	t.equal(NutritionixSource.props.name, require('../package.json').name);
	t.equal(NutritionixSource.props.version, require('../package.json').version);
	t.end();
});

test('oauth onTaskCopy', async (t) => {
	const source = new NutritionixSource();
	const data = await source.onTaskCopy(config);
	t.comment(JSON.stringify(data));
});