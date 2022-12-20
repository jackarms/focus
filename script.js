//1) Using Javascript classes, can you write a class that will contain one method and one getter. The method can be called getField and simply return the value of your getter. The getter can return a string of foo. Then, use the newly created class to call the getField method and log the return value.

class TaskOne {
  get getFoo() {
    return "foo";
  }
  getField() {
    return this.getFoo;
  }
}

let task = new TaskOne();
console.log(task.getField());

// TASK TWO WILL BE LOCATED INSIDE FILE taskTwo.e2e.js LOCATED INSIDE TEST DIRECTORY AND SPECS DIRECTORY THEREIN.
