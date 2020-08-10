import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from '../../components/Image';
import {ImageProvider} from '../../services/ImageService';
import Style from './Style';
import {connect} from 'react-redux';
import {fetchDeals} from '../../actions/deals';

const ImageBody = () => (
  <View style={Style.body}>
    <View style={Style.imageContainer}>
      <Image source={ImageProvider.throwImages.home} style={Style.image} />
    </View>
  </View>
);

class ImageScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const {id} = this.props.route.params;
    // this.props.dispatch(fetchDeals(id));
  }

  render() {
    return (
      <View style={Style.page}>
        <Header />
        <ImageBody />
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
