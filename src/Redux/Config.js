import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

Reactotron.configure({ name: 'ProductManage' })
  .useReactNative()
  .use(apisaucePlugin())
  .use(sagaPlugin());

Reactotron.connect(); // Connect with reactotron
Reactotron.clear(); // Clear the logs.

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor();
export { sagaMonitor };