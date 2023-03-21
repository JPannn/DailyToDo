let userInput = document.querySelector("[data-user-input]");
let addButton = document.querySelector("[data-add-button]");
let outputUl = document.querySelector("[data-user-output]");

let userDate = document.getElementById('userDate');
let userTime = document.getElementById('userTime');
let dateAndTime = new Date();

setup();

function setup(){
    addDate(userDate, dateAndTime);

    toDoListFunctionality(userInput, addButton, outputUl);
    
    setInterval(() => {
        const timerDate = new Date();
        document.getElementById('userTime').innerText = timerDate.toLocaleTimeString();
    }, 1000);

    function addDate(_userDate, _dateAndTime){
        let userMonth = _dateAndTime.toLocaleString('default', { month: 'short'});
        let userTodayDay = _dateAndTime.toLocaleString(window.navigator.language, {weekday: 'long'});
        let userTodayDate = _dateAndTime.getDate();

        _userDate.append(`${userTodayDay}, ${userMonth} ${userTodayDate}`);
    }

    function toDoListFunctionality(_userInput, _addButton, _outputUl) {
        // Create To Dos
        _addButton.addEventListener('click', () => {
            if(_userInput.value === ""){
                _userInput.placeholder = 'Insert a Todo! (Character Limit: 75)';
                _userInput.style.textDecorationLine = 'underline';
                _userInput.style.textDecorationColor = 'red';
            } else {
                let appendLi = document.createElement('li');
                appendLi.innerText = _userInput.value;
                appendLi.classList.add('outputContainer');
                _outputUl.append(appendLi);
                _userInput.value = "";
                _userInput.placeholder="Tasks to Complete? (Character Limit: 75)";
                _userInput.style.textDecorationLine = null;
                _userInput.style.textDecorationColor = null;
                //deleteToDos
                appendLi.addEventListener('click', () => {
                    appendLi.style.textDecorationLine = 'line-through';
                    appendLi.style.textDecorationColor = 'white'; 
                    appendLi.style.textDecorationStyle = 'wavy';                   
                });
                appendLi.addEventListener('dblclick', () => appendLi.remove());
            }
        });
    }
}