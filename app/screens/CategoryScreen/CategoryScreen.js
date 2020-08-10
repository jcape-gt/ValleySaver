import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import DealList from '../../components/DealList';
import Image from '../../components/Image';
import {ImageProvider} from '../../services/ImageService';
import Overlay from '../../components/Overlay';
import Style from './Style';
import {connect} from 'react-redux';
import {fetchDeals} from '../../actions/deals';

const OverlayContent = ({name}) => (
  <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
    <Text style={{color: 'white', fontSize: 25}}>Great deals on</Text>
    <Text style={{color: 'white', fontSize: 25}}>{name}</Text>
  </View>
);

const CategoryBody = ({name = 'Category', deals}) => (
  <View style={Style.body}>
    <View style={Style.imageContainer}>
      <Image source={ImageProvider.throwImages.home} style={Style.image} />
      <Overlay style={Style.overlay}>
        <OverlayContent name={name} />
      </Overlay>
    </View>
    <View style={Style.listWrapper}>
      <DealList deals={deals} />
    </View>
  </View>
);

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    this.props.dispatch(fetchDeals(id));
  }

  render() {
    const {name, id} = this.props.route.params;
    const {deals} = this.props;

    return (
      <View style={Style.page}>
        <Header />
        <CategoryBody name={name} id={id} deals={deals.items} />
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

export default connect(mapStateToProps, null)(CategoryScreen);
