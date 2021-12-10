const name = '基座';
console.log(name);

setTimeout(() => {
  console.log(name);
}, 5000);
import SimpleMicroApp, { BaseAppData } from './microApp/index';

SimpleMicroApp.start();

setTimeout(() => {
  BaseAppData.setData('subApp', { name: 'BaseAppData' });
}, 1500);
