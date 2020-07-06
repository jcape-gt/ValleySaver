import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import CategoryListItem from '../../components/CategoryListItem';
import {DATA} from './Default';
import Style from './Style';
import {fetchCategories} from '../../actions/actions';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const {categories = DATA} = this.props;

    console.log("categories:");
    console.log(categories);

    return (
      <View style={Style.listWrapper}>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryListItem
              header={item.name}
              text={item.description}
              icon="test"
            />
          )}
        />
      </View>
    );

    // return (
    //   <View style={Style.listWrapper}>
    //     <FlatList
    //       data={categories}
    //       renderItem={({item}) => (
    //         <CategoryListItem
    //           header={item.header}
    //           text={item.description}
    //           icon={item.iconName}
    //         />
    //       )}
    //     />
    //   </View>
    // );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {categories} = state;

  return {
    categories,
  };
}

export default connect(mapStateToProps)(CategoryList);
