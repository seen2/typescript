//namespace is used for using same name of variable multiple times
//By modularising whole code in certain ammount of code
namespace Todo {
  export interface Model {
    name: string;
    completed: boolean;
  }
  export const greet = (name: string): string => `Hello ${name}`;
}

namespace Todo.service {
  import greet = Todo.greet;
  import Model = Todo.Model;
  greet("Shintu");

  const todo: Model = { name: "Go home", completed: true };
  console.log(todo);
}
