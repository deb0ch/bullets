
import React, { Component } from 'react';
// import classnames           from 'classnames';

const ApiUri = "http://localhost:3000";


class Task extends Component {
    render() {
        const taskClassName = this.props.task.checked ? 'checked' : '';
        // const taskClassName = classnames({
        //     checked: this.props.task.checked,
        // });
        return (
            <li className={taskClassName}>
                <button className="delete"
                        onClick={this.remove.bind(this)}>
                &times;
                </button>
                <input type="checkbox"
                       readOnly
                       checked={Boolean(this.props.task.checked)}
                       onChange={this.toggleChecked.bind(this)} />
                <span className="text"> {this.props.task.text} </span>
            </li>
        );
    }

    toggleChecked() {
        // Meteor.call('tasks.setChecked',
        //             this.props.task._id,
        //             !this.props.task.checked);
        // USE API PUT HERE
    }

    remove() {
        // Meteor.call('tasks.remove', this.props.task._id);
        // USE API DELETE HERE
    }
}


const TaskList = (props) => (
    <ul> {
        (() => {
            let filteredList = props.tasks.filter((item) => (
                !props.hideChecked || !item.checked
            ));
            return filteredList.map((task) => (
                <Task key={task._id} task={task} />
            ));
        })()
    } </ul>
);


class TaskInput extends Component {
    render = () => (
        <div> {
            <form className="new-task"
                  onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text"
                       value={this.state.inputText}
                       placeholder="Type to add new tasks"
                       onChange={this.onFormChange.bind(this)} />
            </form>
        } </div>
    )

    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
        }
    }

    onFormChange(event) {
        this.setState({inputText: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // Meteor.call('tasks.insert', this.state.inputText.trim());
        // USE API POST HERE
        this.setState({inputText: ""});
    }
}


const VisibilitySelector = (props) => (
    <label className="hide-completed">
        <input type="checkbox"
               readOnly
               checked={props.hideChecked}
               onChange={props.handleToggleVisibility} />
        Hide checked
    </label>
);


const CheckedItemsCounter = (props) => (
    <div className="counter">
        Completed: {props.tasks.filter((task) => task.checked).length}
    </div>
);


class App extends Component {
    render = () => (
        <div className='container'>
            <header>
                <h1>Todo List</h1>
            <VisibilitySelector
                checked={this.state.hideChecked}
                handleToggleVisibility={this.handleToggleVisibility.bind(this)}
            />
                <TaskInput value={this.state.inputText}
                           currentUser={this.props.currentUser} />
            </header>
            <TaskList tasks={this.state.tasks}
                      hideChecked={this.state.hideChecked}
                      currentUser={this.props.currentUser} />
            <CheckedItemsCounter {...this.props} />
        </div>
    );

    constructor(props) {
        super(props);
        this.state = {
            hideChecked: false,
            tasks: [],
        };
    }

    async componentDidMount() {
        const tasksResponse = await fetch(ApiUri + "/tasks");
        const tasks = await tasksResponse.json();
        this.setState({tasks: tasks});
    }

    handleToggleVisibility() {
        this.setState((prevState, props) => (
            {hideChecked: !prevState.hideChecked}
        ))
    }
}

export default App;
