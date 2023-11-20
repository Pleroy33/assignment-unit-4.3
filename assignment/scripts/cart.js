console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];   //create array basket and set it to empty
const maxItems = 5 //create maxItems and set it to 5 for max items in basket per stretch goal


function addItem(item) {                    //created addItem with parameter item,
    if (isFull() === false){                //updated addItem with isFull to run only if basket is less than maxItems
        console.log('Add item ', item)      //logged a sting and the parameter item to see what is added in the console
        basket.push(item);                  //pushed parameter item into array basket
        return true;                        //returned true that the item was added

    }else {{ console.log('the cart is full') ;return false;}}//stops if addItem is not less than isFull and logs string
}
console.log(`Basket is ${basket}`); //used example tests in code before adding my own above.  
console.log(`Basket is now ${basket}`);


addItem('apples'); //added parameter apples
addItem('pears');   //added parameter pears
addItem('oranges'); //added parameter oranges
console.log(`Basket is now ${basket}`);// concole logged the array basket to see that parameters were passed through to it properly

function listItems() {                //tried to use a for statement, got hung up, looked at Gavin's code from slack, using a for..of 
    console.log('running listItems');//console to test function is running
    list = '';              //establised list locally as an element
    for (i of basket) { list += i + '\n' };// for each index of basket, item is added to list, \n creates a line break, 
    console.log(list); //list is console logged, one element per line
    return list;// 
}

listItems();//call the function listItems()





function empty() {        //create function called empty to empty the array basket
    console.log('running empty basket');//console log to verify the function is running
    basket.length = 0
};// set basket length to zero to empty it per slack conversation.  I would have just  used basket = [] otherwise.
empty();// called the function empty to run.
console.log(basket);//logged basket to verify its empty

function isFull() {//created function to consider if the basket is full or empty
    if (basket.length < maxItems) { return false }//if the length of basket element indexes is less than the maxItems number, return false
    else { return true };//otherwise return true

}









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
