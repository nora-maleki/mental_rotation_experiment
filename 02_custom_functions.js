// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {

    $('body').on('keydown', function(e) {

        if((e.key.localeCompare(data.key1)!=0) && (e.key.localeCompare(data.key2)!=0)) return;
        console.log('expected: ' + data.expected)
        console.log('value as key?: ' + data[e.key])
        // var eq = Object.toJSON(user1) == Object.toJSON(user2);
        console.log('data[e.key] === data.expected: ' + data[e.key].localeCompare(data.expected)==0)
        console.log('data[e.key] === data.expected: ' + data[e.key].normalize()===data.expected.normalize())
        // console.log('key: ' + e.key + '   target value: ' + e.target)

        // let key_value =
        // console.log('key 1: ' + data.key1 + '   key 2: ' + data.key2)
        // console.log('key 1 type: ' + typeof(data.key1) + '   e.key type: ' + typeof(e.key))
        // console.log('   key==key1: ' + e.key.localeCompare(data.key1)==0)
        // console.log('   key==key2: ' + e.key.localeCompare(data.key2)==0)
        if (data[e.key] === data.expected)
        {
            $('#correct').text('Correct!').show().delay(20).fadeOut(0);
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
