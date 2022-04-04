import React from 'react';
import './Container.css';
import Modal from './Modal.js';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    console.log('CONTAINER CREATED', props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      displayModal: false,
      entries: [],
      type: props.type,
    };
  }

  submitEntry() {
    console.log('entry submitted');
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  toggleModal() {
    this.setState({displayModal: !this.state.displayModal});
    console.log(`Toggled displayModal state to ${this.state.displayModal}`);
  }

  render() {
    return (
      <div>
        <span className="add-container" onClick={this.toggleModal}>&#43; Add {this.state.type}</span>
        <Modal
          type={this.state.type}
          displayModal={this.state.displayModal}
          closeModal={this.toggleModal}
        />
      </div>
    );
  }
}