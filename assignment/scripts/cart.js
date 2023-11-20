console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5


function addItem(item) {
    console.log('running addItem')
    console.log('Add item ', item)
    basket.push(item);
    return true;

}
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


addItem('apples');
addItem('pears');
addItem('oranges');
console.log(`Basket is now ${basket}`);

function listItems() {
    console.log('running listItems');
    list = '';
    for (i of basket) { list += i + '\n' };
    console.log(list);
    return list;
}

listItems();





function empty(){
    console.log('running empty basket');
    basket.length = 0};
empty();
console.log(basket);







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
