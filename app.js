// // TODO

// var  App = function() {
//   return (

//     <ul>
//     <li>Coffee</li>
//     <Tea />
//     <Milk />
//     </ul>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>

//     );
//   }
//   var  Tea = function() {
//     return (
//       <li>Tea</li>
//       );
//     }
//     var  Milk = function() {
//       return (
//         <li>Milk</li>
//         );
//       }

// var TodoList = function (props) {
//         <li>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>

// }

// var GroceryList = (props) => (
//   for (var i = 0; i < props.length; i++) {
//     <ul>

//     console.log(`<li>{${props.todos[i]}}</li>`)
//     </ul>


//     // <li>{props.todos[0]}</li>
//     // <li>{props.todos[1]}</li>
//     // <li>{props.todos[2]}</li>
//   }
//   );

// var GroceryList = (props) => {
//   // var onListItemClick = (event) => {
//   //   console.log('I got clicked', event);
//   // };
//   // return (
//     <ul>
//     {
//     /* <li onClick={onListItemClick}>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li> */

// {props.todos.map(item =>
//   <item)}

//     }
//     </ul>
//     // );
//   }

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      done: false
    };

  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : ''
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}onMouseOut={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      );

    }

  }

  // Update our `TodoList` to use the new `TodoListItem` component
  // This can still be a stateless function component!
  var GroceryList = (props) => (
    <ul>
    {props.todos.map(todo =>
      <GroceryListItem todo={todo} />
      )}
      </ul>
      );

      var data = ['Food', 'Detergent', 'Toilet Paper'];


      var App = () => (
        <div>
        <h2>Grocery List</h2>
        <GroceryList todos={data}/> // Here we are creating an instance of the `TodoList` component
        </div>
        );

        ReactDOM.render(<App />, document.getElementById("app"));
