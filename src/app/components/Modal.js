import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      author: '',
      body: '',
      title: '',
    };
  }

  closeModal(event) {
    console.log('Clicked close Modal ', this.props);
    this.setState({author: '', body: '', title: ''});
    this.props.closeModal && this.props.closeModal(event);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  onSubmit(event) {
    console.log("Clicked OnSubmit", this.props);
  }

  render() {
    // console.log("Render Modal called", this.props);
    if (!this.props.displayModal) return null;
    return (
      <div className="modal">
        <div className="modal-content">
          <h3 className="modal-header">Add {this.props.type}</h3>
          <div className="modal-body">
            <div className="row">
              <label>Title: </label>
              <input id="title" type="text" value={this.state.title} onChange={this.handleChange} />
              <label>Author: </label>
              <input id="author" type="text" value={this.state.author} onChange={this.handleChange} />
            </div>
            <div className="row">
              <label>Body: </label>
              <textarea id="body" value={this.state.body} onChange={this.handleChange}></textarea>
            </div>
          </div>
          <div className="modal-actions">
            <button className="close" onClick={this.closeModal}>&times; Close</button>
            <button className="" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}