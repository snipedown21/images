import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
    .then(res => this.setState({ images: res.data.data }));
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
