const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let a = record.find( record => record.result === "W" )
	return a ? a.year : undefined
}