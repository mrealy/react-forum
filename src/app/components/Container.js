import React from 'react';
import './Container.css';
import Modal from './Modal.js';
import {getEntriesByType, saveJsonEntryByType} from '../utils/api-utils.js'

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    console.log('CONTAINER CREATED', props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitEntry = this.submitEntry.bind(this);

    this.state = {
      displayModal: false,
      entries: [],
      isFetching: true,
      type: props.type,
    };
  }

  componentDidMount() {
    this.fetchEntriesByType();
  }

  async fetchEntriesByType() {
    try {
      const entries = await getEntriesByType(this.state.type);
      console.log('[fetchEntriesByType] Retrieved: ', entries);
      this.setState({isFetching: false});
    } catch(err) {
      console.error(`[fetchEntriesByType] Caught an error - ${err.message}`);
    }
  }

  async submitEntry(event) {
    console.log('entry submitted', event);
    // await saveJsonEntryByType();
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
          onSubmit={this.submitEntry()}
        />
        <span>{this.state.isFetching ? `Fetching ${this.state.type}s...` : ''}</span>
      </div>
    );
  }
}