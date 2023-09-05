import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const ExploreScreen = () => {
  return (

    <MapView

      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        image={require("../assets/img/map_marker.png")}
        title="Test title"
        descrption="This Is test descrition"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble} >
              <Text style={styles.name}>Fav Resturent</Text>
         {/*      <Text>A short Description</Text> */}
              <Image
                style={styles.image}
                source={require("../assets/img/Food_baner.jpg")}
              />
            </View>
            <View style={styles.arrowBorder}></View>
            <View style={styles.arrow}></View>
          </View>
        </Callout>
      </Marker>
    </MapView>


  )
}
export default ExploreScreen;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  image : {
    width: 120,
    height: 80
  }
});




