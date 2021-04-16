import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addBook } from '../Redux/Actions'

class ShowBooks extends React.Component {
  state = {
    searchTerm: '',
    searchList: '',
  }

  componentDidUpdate(prevProps) {
    console.log(this.props, prevProps, this.state);
  }

  renderItem({ item }) {
    return (
      <View style={{ borderWidth: 1, margin: 5, padding: 10, borderRadius: 5 }}>
        <Text><Text style={style.textBoxStyle}>Name:</Text> {item.name}</Text>
        <Text><Text style={style.textBoxStyle}>Price:</Text> {item.price}</Text>
        <Text><Text style={style.textBoxStyle}>Author:</Text> {item.author}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.textBook}>Your collection :)</Text>
        <FlatList
          data={this.props.book.bookList}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item) => item.id}
        />
      </View>);
  }
}

const style = StyleSheet.create({
  textBoxStyle: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    margin: 10
  },
  textBook: { fontSize: 18, color: 'gray', fontWeight: 'bold', marginBottom: 20 }
})

const mapStateToProps = (state) => {
  return {
    book: state.Book,
  };
};
export default connect(mapStateToProps, { addBook })(ShowBooks);