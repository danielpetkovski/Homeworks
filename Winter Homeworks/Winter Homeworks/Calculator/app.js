let calculatorKeys = document.querySelector('.calculator-keys');
let calcScreen = document.querySelector('.calculator-screen');
let bottomCalcScreen = document.querySelector('.calculator-screen-2');
let memTooltip = document.getElementById('m-h1');

let memorised = 0;
let currentState = 0;
let result;
let currentOperation = '';

let updateScreen = screenResult => {
  calcScreen.value += screenResult;
};

let loadScreen = state => {
  if (isNaN(state)) {
    state = '';
  }
  calcScreen.value = state;
};

let updateBottomScreen = inputScreen => {
  bottomCalcScreen.value = inputScreen;
};


let equalSign = (operator, equalFlag) => {
  switch (operator) {
    case '+':
      currentState =
        parseFloat(currentState) + parseFloat(calcScreen.value);
      updateBottomScreen(currentState.toFixed(4));
      break;
    case '-':
      currentState =
        parseFloat(currentState) - parseFloat(calcScreen.value);
      updateBottomScreen(currentState.toFixed(4));
      break;
    case '*':
      currentState =
        parseFloat(currentState) * parseFloat(calcScreen.value);
      updateBottomScreen(currentState.toFixed(4));
      break;
    case '/':
      currentState =
        parseFloat(currentState) / parseFloat(calcScreen.value);
      updateBottomScreen(currentState.toFixed(4));
      break;
    default:
      break;
  }
  console.log(equalFlag);
  if (equalFlag === 1){
    loadScreen(0);
  }
}

calculatorKeys.addEventListener('click', function(e) {
  let enteredValue = e.target.value;
  if (!isNaN(parseInt(enteredValue)) || enteredValue === '.') {
    updateScreen(enteredValue);
  } else {
    if (e.target.className === 'memory') { // Memory operators strat here
      switch (enteredValue) {
        case 'MC':
          memorised = 0;
          memTooltip.className = 'free';
          break;
        case 'MR':
          if (memorised !== 0) {
            loadScreen(memorised);
          }
          break;
        case 'MS':
          if (!isNaN(calcScreen.value)) {
            memorised = parseFloat(calcScreen.value);
            memTooltip.className = 'memorised';
          }
          break;
        case 'M+':
          memorised += parseFloat(calcScreen.value);
          break;
        case 'M-':
          memorised -= parseFloat(calcScreen.value);
          break;
        default:
          alert('Oops! Something went wrong!');
          break;
      }
    } else if (e.target.className === 'operator') { // Operators start here
      let percPreset;
      if (enteredValue === '%'){
        percPreset = calcScreen.value; // here needs to catch the value on the screen before it gets erased
      }

      switch (enteredValue) {
        case 'plusmn':
          equalSign(currentOperation, 0);
          currentState = parseFloat(currentState *-1);
          break;
        case 'sqrt':
          currentState = Math.sqrt(parseFloat(calcScreen.value)).toFixed(6);
          loadScreen(currentState);
          break;
        case 'reciproc':
          currentState = (1 / parseFloat(calcScreen.value)).toFixed(6);
          loadScreen(currentState);
          break;
        case '+':
          equalSign(currentOperation, 0);
          currentOperation = '+'; 
          break;
        case '-':
          equalSign(currentOperation, 0);
          currentOperation = '-';
          break;
        case '*':
          equalSign(currentOperation, 0);
          currentOperation = '*';
          break;
        case '/':
          equalSign(currentOperation, 0);
          currentOperation = '/';
          break;
        case '%':
          if (currentOperation !== '') {
            let percValue = currentState / 100 * percPreset;
            calcScreen.value = percValue;
          }
        break;
      }

      
      if (currentState === 0) {
        updateBottomScreen(calcScreen.value);
        currentState = bottomCalcScreen.value;
        loadScreen('');
      } else {
        updateBottomScreen(currentState);
        loadScreen('');
      }

    } else if (e.target.className === 'clear') { // Clear starts here
      switch (enteredValue) {
        case 'DEL':
          let text = calcScreen.value.toString();
          text = text.substring(0, text.length - 1);
          loadScreen(parseFloat(text));
          break;
        case 'C':
          memorised = 0;
          currentState = 0;
          memTooltip.className = 'free';
          loadScreen('');
          updateBottomScreen('');
          break;
        case 'CE':
          loadScreen('');
          break;
        default:
          alert('Oops! Something went wrong!');
          break;
      }
      
    } else if (e.target.className === 'equal-sign') { // EQUAL SIGN
      equalSign(currentOperation, 1);
    }
  }
});
