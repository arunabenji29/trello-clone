import React from 'react';
import './App.css';
import Backlog from './components/form/BacklogForm';
import InProgress from './components/form/InProgressForm';
import Completed from './components/form/CompletedForm';
import Todo from './components/form/TodoForm';
import BacklogList from './components/lists/BacklogList';
import TodoList from './components/lists/TodoList';
import InProgressList from './components/lists/InProgressList';
import CompletedList from './components/lists/CompletedList';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,
      backlogState: [],
      todoState: [],
      inProgressState: [],
      completedState: [],
      backlog: {
        task: '',
        id: ''
      },
      todo: {
        task: '',
        id: ''
      },
      inProgress: {
        task: '',
        id: ''
      },
      completed: {
        task: '',
        id: ''
      }
    }
  }

  handleBacklogChange = event => {
    this.setState({
      backlog: {
        ...this.state.backlog,
        [event.target.name]: event.target.value
      }
    });
  }

  handleTodoChange = event => {
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  }

  handleInprogressChange = event => {
    this.setState({
      inProgress: {
        ...this.state.inProgress,
        [event.target.name]: event.target.value
      }
    });
  }

  handleCompletedChange = event => {
    this.setState({
      completed: {
        ...this.state.completed,
        [event.target.name]: event.target.value
      }
    });
  }

  addBackLog = event => {
    event.preventDefault()

    const backlogData = {
      task: this.state.backlog.task,
      id: Date.now()
    }

    this.setState({
      backlogState: [
        ...this.state.backlogState,
        backlogData],
      backlog: {
        task: '',
      }
    })
  }

  addTodo = event => {
    event.preventDefault()

    const todoData = {
      task: this.state.todo.task,
      id: Date.now()
    }

    this.setState({
      todoState: [
        ...this.state.todoState,
        todoData],
      todo: {
        task: '',
      }
    })
  }

  addInProgress = event => {
    event.preventDefault()

    const inData = {
      task: this.state.inProgress.task,
      id: Date.now()
    }

    this.setState({
      inProgressState: [
        ...this.state.inProgressState,
        inData],
      inProgress: {
        task: '',
      }
    })
  }

  addCompleted = event => {
    event.preventDefault()

    const completedData = {
      task: this.state.completed.task,
      id: Date.now()
    }

    this.setState({
      completedState: [
        ...this.state.completedState,
        completedData],
      completed: {
        task: '',
      }
    })
  }

  backlogNextClick = async (event, id) => {
    event.preventDefault()

    let clickedData = this.state.backlogState.filter(item => item.id === id)

    await this.setState({
      backlogState: this.state.backlogState.filter(item => item.id !== id)

    })

    this.setState({
      todoState: [
        ...this.state.todoState,
        clickedData[0]
      ],
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,

    })
  }

  todoPrevClick = async (event, id) => {
    event.preventDefault()

    let clickedData = this.state.todoState.filter(item => item.id === id)

    await this.setState ({
      todoState: this.state.todoState.filter(item => item.id !== id)

    })

    this.setState({
      backlogState: [
        ...this.state.backlogState,
        clickedData[0]
      ],
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,
    })
  }

  todoNextClick = async (event, id) => {
    event.preventDefault()

    let clickedData = this.state.todoState.filter(item => item.id === id)

    await this.setState({
      todoState: this.state.todoState.filter(item => item.id !== id)

    })

    this.setState({
      inProgressState: [
        ...this.state.inProgressState,
        clickedData[0]
      ],
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,
    })
  }

  inProgressPrevClick = async (event, id) => {
    event.preventDefault()

    let clickedData = this.state.inProgressState.filter(item => item.id === id)

    await this.setState({
      inProgressState: this.state.inProgressState.filter(item => item.id !== id)

    })

    this.setState({
      todoState: [
        ...this.state.todoState,
        clickedData[0]
      ],
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,
    })
  }

  inProgressNextClick = async (event, id) => {
    event.preventDefault()

    let clickedData = this.state.inProgressState.filter(item => item.id === id)

    await this.setState({
      inProgressState: this.state.inProgressState.filter(item => item.id !== id)

    })

    this.setState({
      completedState: [
        ...this.state.completedState,
        clickedData[0]
      ],
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,
    })
  }

  completedPrevClick = async (event, id) => {
    event.preventDefault()

    let clickedData = this.state.completedState.filter(item => item.id === id)

    await this.setState({
      completedState: this.state.completedState.filter(item => item.id !== id)

    })

    this.setState({
      inProgressState: [
        ...this.state.inProgressState,
        clickedData[0]
      ],
      backlogButtonState: false,
      todoButtonState: false,
      inProgressButtonState: false,
      completedButtonState: false,
    })
  }

  backlogClick = (event) => {
    event.preventDefault()

    this.setState({
      backlogButtonState: true
    })
  }

  todoClick = (event) => {
    event.preventDefault()

    this.setState({
      todoButtonState: true
    })
  }

  inProgressClick = (event) => {
    event.preventDefault()

    this.setState({
      inProgressButtonState: true
    })
  }

  completedClick = (event) => {
    event.preventDefault()

    this.setState({
      completedButtonState: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Trello</h1>
        <div className='all-todo'>
          <div className='backlog'>
            <h1>Backlog</h1>
            {!this.state.backlogButtonState &&
              <button onClick={this.backlogClick}>Add an item</button>}

            {this.state.backlogButtonState &&
              <Backlog
                backlogProp={this.state.backlog}
                handleBacklogChange={this.handleBacklogChange}
                addBackLog={this.addBackLog}
              />
            }

            <BacklogList
              blist={this.state.backlogState}
              nextClick={this.backlogNextClick}
            />
          </div>

          <div className='todo'>
            <h1>Todo</h1>
            {!this.state.todoButtonState &&
              <button onClick={this.todoClick}>Add an item</button>}

            {this.state.todoButtonState &&
              <Todo
                todoProp={this.state.todo}
                handleTodoChange={this.handleTodoChange}
                addTodo={this.addTodo}
              />
            }

            <TodoList
              tlist={this.state.todoState}
              nextClick={this.todoNextClick}
              prevClick={this.todoPrevClick}
            />
          </div>

          <div className='inprogress'>
            <h1>InProgress</h1>

            {!this.state.inProgressButtonState &&
              <button onClick={this.inProgressClick}>Add an item</button>
            }

            {this.state.inProgressButtonState &&
              <InProgress
                inProp={this.state.inProgress}
                handleInprogressChange={this.handleInprogressChange}
                addInProgress={this.addInProgress}
              />
            }

            <InProgressList
              ilist={this.state.inProgressState}
              nextClick={this.inProgressNextClick}
              prevClick={this.inProgressPrevClick}
            />
          </div>


          <div className='completed'>
            <h1>Completed</h1>
            {!this.state.completedButtonState &&
              <button onClick={this.completedClick}>Add an item</button>
            }

            {this.state.completedButtonState &&
              <Completed
                completedProp={this.state.completed}
                handleCompletedChange={this.handleCompletedChange}
                addCompleted={this.addCompleted}
              />
            }

            <CompletedList
              clist={this.state.completedState}
              prevClick={this.completedPrevClick}
            />
          </div>

        </div>

      </div>
    );
  }

}

export default App;
