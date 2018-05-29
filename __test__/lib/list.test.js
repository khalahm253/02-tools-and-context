const List = require('../../lib/list.js');

describe('List', () => {

  let testArray = ['V1', 'V2', 'V3'];
  let loadList = () => {
    let thisList = new List();
    for( let i = 0; i<=testArray.length-1; i++ ) {
      thisList.push(testArray[i]);
    }
    return thisList;
  };

  it('push() increments the .length property', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
  });

  it('pop() returns the last item', () => {
    let myList = loadList();
    expect( myList.pop() ).toEqual(testArray[testArray.length-1]);
  });

  it('pop() decrements .length property by 1', () => {
    let myList = loadList();
    myList.pop();
    expect( myList.length ).toEqual(2);
  });

  it('shift() moves all elements down one index. Length property is shortened by 1.', () => {
    let myList = loadList();
    myList.shift();
    expect( myList.length ).toEqual(2);
  });

  it('shift() moves all elements down one index. First index element is deleted and returned.', () => {
    let myList = loadList();
    expect( myList.shift() ).toEqual(testArray[0]);
  });

  it('unshift() adds arguments as elements at beginning of array and returns the new array.', () => {
    let myList = loadList();
    myList.unshift(testArray[0]);
    expect( myList.length ).toEqual(testArray.length+1);
  });

  it('unshift() adds arguments as elements at beginning of array and returns the new array.', () => {
    let myList = loadList();
    myList.unshift(testArray[1]);
    expect( myList[0] ).toEqual(testArray[1]);
  });

  it('forEach() does not run without callback', () => {
    function badForEach() {
      let myList = loadList();
      myList.forEach();
    }
    expect(badForEach).toThrow();
  });

  it('forEach() runs the specified callback', () => {
    let myList = loadList();
    myList.forEach( (val,i) => {
      expect(val).toEqual(testArray[i]);
    });
  });

  it('map() requires a callback function', () => {
    let myList = loadList();
    expect( myList.map() ).toBeUndefined();
  });

  it('map() returns a new list', () => {

    let myList = loadList();
    let newList = myList.map( (val,i) => {
      return `${i} -- ${val}`;
    });

    expect( newList.length ).toEqual(myList.length);
    expect( newList[0] ).toEqual( `0 -- ${testArray[0]}` );

  });

  it('filter() requires a callback function', () => {
    let myList = loadList();
    expect( myList.filter() ).toBeUndefined();
  });

  it('filter() returns a new list filtered by the callback', () => {

    let myList = loadList();
    let newList = myList.filter( (val,i) => {
      return val === testArray[0];
    });

    expect( newList.length ).toEqual( 1 )
    expect( newList[0] ).toEqual( testArray[0] );

  });

  it('reduce() requires a callback function', () => {
    let myList = loadList();
    expect( myList.filter() ).toBeUndefined();
  });

  

});