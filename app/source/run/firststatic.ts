import FirstMonkku from '../lib/runner/static/first';
import Configurator from '../lib/util/configurator';

async function init() {
  const config = await Configurator.collect();
  const first = new FirstMonkku(config);
  first.run();
}

init();
