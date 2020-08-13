import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from '../../components/Image';
import Style from './Style';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderActions = () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 5,
      }}>
      <Icon style={Style.icon} name="phone" />
      <Text style={{fontSize: 8}}>Call</Text>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 5,
      }}>
      <Icon style={Style.icon} name="map-marker-alt" />
      <Text style={{fontSize: 8}}>Map</Text>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 5,
      }}>
      <Icon style={Style.icon} name="shopping-cart" />
      <Text style={{fontSize: 8}}>Use</Text>
    </View>
  </View>
);

const ImageBody = ({deal}) => {
  console.log(deal);

  return (
    <View style={Style.body}>
      <View style={Style.imageContainer}>
        <Image
          source={{
            uri:
              `https://q5dfc5aq5b.execute-api.us-east-1.amazonaws.com/dev/deal/${deal.id}/image`,
          }}
          style={{height: 100, width: 100}}
        />
      </View>
    </View>
  );
};

class ImageScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const {id} = this.props.route.params;
    // this.props.dispatch(fetchDeals(id));
  }

  render() {
    const {deal} = this.props.route.params;
    return (
      <View style={Style.page}>
        <Header rightComponent={<HeaderActions />} />
        <ImageBody deal={deal} />
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deals: state.deals,
  };
};

export default connect(mapStateToProps, null)(ImageScreen);
