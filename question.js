'use strict';

class question{
  constructor(content){
    this.content = content
    this.save()
  }

  save(){
    this.constructor._All.push(this)         // use  constructor for def instance functions
  }

  static All(){
    return this._All;
  }
}

Question._All = []




new Question("Where in the world is carmen sandiego?")
