const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function checkCode(codeIn) {
  if (codeIn == '38384040373937396566') {
		alert('Congratulations! That is the Konami code!') 
    }
	else {
		alert('Nope, thats not the Konami code!') }
	return ''
}

function setDOM() {
  document.body.addEventListener('keydown',function(e) {
    entCode+=e.which
  })
}

function init() {
  // your code here
  var entCode = ''
  setDOM()
  
  while (true) {
    if (entCode.length==20) {
      checkCode(entCode)
    }
  }
  
}
