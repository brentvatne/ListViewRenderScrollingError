/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
} = React;

var rows = [1, 2, 3, 4];

var ListViewRenderScrollingError = React.createClass({
  getInitialState() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => true});

    return {
      dataSource,
    }
  },

  componentDidMount() {
    var dataSource = this.state.dataSource.cloneWithRows(rows);
    this.setState({dataSource});
    setInterval(() => { this._fakeReceiveNewData() }, 1000);
  },

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow} />
    );
  },

  _renderRow(data) {
    // Just do some work
    var str = '';
    for (var i = 0; i++; i <= 100000) {
      str += i.toString();
    }

    return (
      <View style={{flex: 1, height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>{data}</Text>
      </View>
    )
  },

  _fakeReceiveNewData() {
    var n = rows[rows.length - 1];
    rows = [...rows, n+1, n+2, n+3, n+4];
    var dataSource = this.state.dataSource.cloneWithRows(rows);
    this.setState({dataSource});
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ListViewRenderScrollingError', () => ListViewRenderScrollingError);
