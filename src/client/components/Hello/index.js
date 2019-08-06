import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import { isRegExp } from 'util';

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