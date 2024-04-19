//! try catch

function submitBtn() {
    let input = document.getElementById('input').value
    let text = document.getElementById('text')
    
    try {
  
      if (isNaN(input)) throw "Require only number"
      if (input.trim() == "") throw "Please fill input"
      input = Number(input)
      if (input < 4) throw "to low"
      if (input > 8) throw "to high"
      if (input > 4 || input < 8) throw "Done"
  
    } catch (msg) {
      text.innerHTML = msg
    } finally {
      if (input > 4 || input < 8) {
        document.getElementById('input').value = ""
      }
    }
  }