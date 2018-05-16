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

});