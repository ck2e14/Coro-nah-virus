replaceText(document.body)

function replaceText(element) {
   if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText)

   } else if (element.nodeType === Text.TEXT_NODE) {
      if(element.textContent.match(/coronavirus/gi) || element.textContent.match(/covid-19/gi)) {
         const newElement = document.createElement('span')
         newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span style="background-color: rgb(0,55,0); color: rgb(0,55,0);">$1</span>').replace(/(covid-19)/gi, '<span style="background-color: rgb(0,55,0); color: rgb(0,55,0);">$1</span>')
         element.replaceWith(newElement)
      } 
   } 
}

// make 2 input fiels on a popup.html
// assign the event.target.value of each to 'find' and 'replace' respectively
// interpolate each into the appropriate place in Regex 
// have a default value for both, i.e. coronavirus + $1 
// play with options for changing colors and other stuff







