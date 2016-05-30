var React = require('react');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = require('react-native');

var Main = require('./App/components/main');

var UberClone = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('UberClone', () => UberClone);
