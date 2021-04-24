async function test(){
  var name  = 'sunny'
  return name
}

async function awaitTest(){
  console.error(1111,await test())
}
awaitTest()