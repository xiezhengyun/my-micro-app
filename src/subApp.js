window.name = 'subapp'
window.sub = 'sub'
var sub2 = 'sub2'
console.log(window, name, sub, sub2)

window.addEventListener('click',()=>{
  console.log('subapp click' + name)
})