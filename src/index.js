const name = '基座'
console.log(name)

setTimeout(()=>{
  console.log(name)
},5000)
import SimpleMicroApp from './microApp/index'

SimpleMicroApp.start()