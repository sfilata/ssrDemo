import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import { Helmet } from 'react-helmet';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'sfilata'
    };
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }

  render () {
    const { name } = this.state;
    const { list } = this.props;
    const itemList = list.map((item, index) => (
      <div key={item.id}>{item.title}</div>
    ));
    return (
      <Fragment>
        <Helmet>
          <title>Welcome to SSR Demo</title>
          <meta name="description" content="This is the welcome page!"></meta>
        </Helmet>
        <h2 style={{ color: 'blue' }}>Hello {name} , SSR Demo</h2>
        <button onClick={() => { this.setState({name: 'naver'})}}>click</button>
        <div>
          { itemList }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.list,
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

Hello.loadData = store => {
  return store.dispatch(getHomeList());
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);