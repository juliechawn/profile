import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.task.text,
      priority: this.props.task.priority,
      index: this.props.task.index,
      editEnabled: false
    };

    this.renderNormal = this.renderNormal.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.onClickDeleteTodo = this.onClickDeleteTodo.bind(this);
  }

  getPriority() {
    switch (this.state.priority) {
      case "3":
        return "list-group-item-success";
      case "2":
        return "list-group-item-warning";
      case "1":
        return "list-group-item-danger";
      default:
        return " disabled";
    }
  }

  handleChangeText(event) {
    // eslint-disable-next-line
    var index = parseInt(this.props.index);
    var text = event.target.value;
    this.props.updateText(index, text);
    this.setState({ text });
  }

  handleChangePriority(event) {
    // eslint-disable-next-line
    var index = parseInt(this.props.index);
    var priority = event.target.value;
    this.props.updatePriority(index, priority);
    this.setState({ priority });
  }

  onClickDeleteTodo() {
    // eslint-disable-next-line
    var index = parseInt(this.props.index);
    this.props.deleteTodo(index);
  }

  renderNormal() {
    return (
      <div
        id="task"
        className={`list-group-item ${this.getPriority()}`}
        value={this.props.priority}
      >
        <div className="card-body d-flex justify-content-between">
          <span>
            <input className="pr-1" type="checkbox" />
            <span className="pl-1">{this.props.text}</span>
          </span>
          <span className="">
            <i
              className="far fa-edit pr-1"
              onClick={() => this.setState({ editing: !this.state.editing })}
            />
            <i
              className="far fa-trash-alt pl-1"
              onClick={this.onClickDeleteTodo}
            />
          </span>
        </div>
      </div>
    );
  }

  renderEdit() {
    return (
      <div 
      className={`list-group-item ${this.getPriority()}`}>
        <div className="card-body">
          <label>Description</label>
          <textarea
            className="vstda-textarea"
            name="newText"
            value={this.props.newText}
            type="text"
            defaultValue={this.props.text}
            onChange={this.handleChangeText}
          />
          <div className="btn-group" role="group">
            <div className="btn-group" role="group">
              <select
                className="btn create-todo-alert"
                name="newPriority"
                selected="Priority"
                value={this.state.newPriority}
                defaultValue={this.props.priority}
                onChange={this.handleChangePriority}
              >
                <option className="alert alert-danger" value="1">
                  High
                </option>
                <option className="alert alert-warning" value="2">
                  Medium
                </option>
                <option className="alert alert-success" value="3">
                  Low
                </option>
              </select>
            </div>
            <button
              className="btn btn-success btn-secondary"
              type="submit"
              value="Save"
              onClick={() => this.setState({ editing: !this.state.editing })}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-danger btn-secondary"
              value="Cancel"
              onClick={() => this.setState({ editing: !this.state.editing })}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{this.state.editing ? this.renderEdit() : this.renderNormal()}</div>
    );
  }
}

export default Task;
