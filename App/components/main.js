var React = require('react');
var {
  MapView,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = require('react-native');

var NavigationBar = require('react-native-navbar');
var titleBar = {
  title: 'UBER',
  tintColor: 'black'
};
var leftButton = {
  title: 'Menu',
  tintColor: 'black'
};

var coordinates = {
  latitude: -33.4287922,
  longitude: -70.6225445,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navigationBar}
          leftButton={leftButton}
          title={titleBar}
        />
        <MapView
          style={styles.map}
          region={coordinates}
          zoomEnabled={true}
          mapType={'standard'}
        />
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.buttonUberX}
          >
            <Text style={styles.textX}>uberX</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonUberXL}
          >
            <Text style={styles.textXL}>uberXL</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.slider}>
          <View style={styles.sliderText}>
            <Text>uberX</Text>
            <Text>UberBLACK</Text>
            <Text>UberBICI</Text>
          </View>
          <View style={styles.sliderSelect}>
            <Slider
              value={0}
              maximumValue={2}
              step={1}
            />
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBar: {
    borderBottomColor: '#ccc',
    borderWidth: 1
  },
  map: {
    flex: 7
  },
  buttons: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  buttonUberX: {
    flex: 1,
    backgroundColor: '#1eacc7',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 5
  },
  textX: {
    textAlign: 'center',
    color: 'white'
  },
  buttonUberXL: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  textXL: {
    textAlign: 'center',
    color: '#2d2d2d'
  },
  slider: {
    flex: 2
  },
  sliderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  }
});
