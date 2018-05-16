'use strict';

class List {
    constructor() {
      this.length = 0;
    }
  
    push(item) {
      this[this.length++] = item;
    }
  
    pop() {
      let item = this[this.length-1];
      delete this[this.length-1];
      this.length--;
      return item;
    } 
    forEach(callback) {
        if ( typeof callback !== 'function' ) { throw new Error('Callback Required'); }
        for (let i = 0; i <= this.length - 1; i++) {
          callback(this[i], i);
        }
    }
    
    map(callback) {
        if ( typeof callback !== 'function' ) { return undefined; }
        let result = new List();
        for (let i = 0; i <= this.length - 1; i++) {
          result.push(callback(this[i], i));
        }
        return result;
    } 
    shift() {
        let item = this[0];
        for (let i = 0; i <= this.length - 1; i++) {
          this[i] = this[i + 1]
        }
        delete this[this.length - 1];
        this.length--;
        return item;
    }
    
    unshift(...args) {
        for (let i = this.length - 1; i >= 0; i--) {
          this[i + args.length] = this[i];
        }
        for (let i = 0; i < args.length; i++) {
          this[i] = args[i];
        }
        this.length = this.length + args.length;
        return this.length;
    }
 
    filter(callback) {
        if (typeof callback !== 'function') {
          return undefined;
        }
        let result = new List();
        for (let i = 0; i <= this.length - 1; i++) {
          if (callback(this[i], i) === true) {
            result.push(this[i], i);
          }
        }
        return result;
    }







} 
module.exports = List;