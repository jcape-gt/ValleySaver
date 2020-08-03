import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Image from '../../components/Image';
import {ImageProvider} from '../../services/ImageService';
import Overlay from '../../components/Overlay';
import Style from './Style';
import {fetchCategories} from '../../actions/categories';
import {connect} from 'react-redux';
import {DATA} from '../../components/CategoryList/Default';

const OverlayContent = () => (
  <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
    <Text style={{color: 'white', fontSize: 25}}>Great deals on </Text>
    <Text style={{color: 'white', fontSize: 25}}>the products you love</Text>
  </View>
);

const HomeBody = ({categories = DATA}) => (
  <View style={Style.body}>
    <View style={Style.imageContainer}>
      <Image source={ImageProvider.throwImages.home} style={Style.image} />
      <Overlay style={Style.overlay}>
        <OverlayContent />
      </Overlay>
    </View>
    <View style={Style.listWrapper}>
      <CategoryList categories={categories} />
    </View>
  </View>
);

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    const {categories} = this.props;
    return (
      <View style={Style.page}>
        <Header />
        <HomeBody categories={categories.items} />
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
