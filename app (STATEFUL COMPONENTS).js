/* ------------------- STATEFUL COMPONENTS ------------------- */

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: 'Jane',
			tasks: [
				{id: 0, description: 'Teach React', completed: true},
				{id: 1, description: 'Teach Redux', completed: false},
				{id: 2, description: 'Teach Node', completed false}
			]
		};
	}

	addTask(taskDescription) {
		let tasksCopy = this.state.tasks.slice();

		tasksCopy.push({
			id: this.state.tasks.length,
			description: taskDescription,
			compeleted: false
		});

		this.setState({
			tasks: tasksCopy
		});
	}

	render() {
		return (
			<main>
				<Header greetingName={this.state.username}/> //Header is component so we can use a self-closing tag
				<Form onFormSubmit={this.addTask.bind(this)}/>
				<List todos={this.state.tasks}/>
				<InfoBar items={this.state.tasks}/>
			</main>
		)
	}
}

/* -------------- FORM ----------------- */
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entry: '',
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onFormSubmit(this.state.entry);
	}

	handleChange(event) {
		this.setState({ entry: event.target.value}) // takes in an object
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type='text'
							 placeholder='Do something...'
							 value={this.state.entry} // controlled component: give the input a value from state
							 onChange={this.handleChange.bind(this)} // controlled component: change the state
								// ^ need to re-bind 'this' because you're passing a method as an argument so you lose the initial binding
				/>
				<button type='submit'> Add Task </button>
				<p></p>
			</form>
		)
	}
}

/* ------------------- STATELESS COMPONENTS ------------------- */


/* -------------- HEADER ----------------- */

function Header(props) {
  return (
	  <div>
			<h1> Task App </h1>
			<h2> Welcome, {props.greetingName}! </h2>
		</div>
	)
}

// another way but using ES6 destructuring
function Header({ greetingName }) {
  return (
	  <div>
			<h1> Task App </h1>
			<h2> Welcome, {greetingName}! </h2>
		</div>
	)
}

/* -------------- InfoBar ----------------- */

// using ES6 arrow function
const InfoBar = (props) => (
	  <p>
			There are {props.items.length} tasks
		</p>
);

// using ES6 one line return
const InfoBar = (props) => <p> There are {props.items.length} tasks </p>;



/* -------------- List ----------------- */

function List(props) {
	return (
		<ul>
			<ListItem todo={props.todos[0]}/> // DRY
			<ListItem todo={props.todos[1]}/> // DRY
			<ListItem todo={props.todos[2]}/> // DRY
		</ul>
	)
}

// can fix the above by using a map method so we're not breaking DRY principle
function List(props) {
	return (
		<ul>
			{props.todos.map((task) => (
				<ListItem key={task.id} todo={task} />
			))}
		</ul>
	)
}

/* -------------- ListItem ----------------- */

function ListItem({todo}) {
	return <li> {todo.description}</li>;
}



/* -------------- RENDER ON PAGE ----------------- */
// takes in 2 arguments
		// first argument is an instance of your main component.
		// second argument is where on the DOM we want to render it to.
ReactDOM.render(<App/>, document.getElementById('root'));