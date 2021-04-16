import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addBook } from '../Redux/Actions'

class DashBoard extends React.Component {

  initialStates = {
    name: '',
    price: 0,
    author: '',
    addBookLoading: false,
  }
  state = this.initialStates

  componentDidUpdate(prevProps) {
    console.log(this.props, prevProps);
    if (this.state.addBookLoading && this.props.book.addBookSuccess) {
      if (this.props.book !== prevProps.book) {
        alert('book added successfully')
        this.setState({ ...this.initialStates })
      }
    } else if (this.state.addBookLoading && !this.props.addBookSuccess) {
      if (this.props.book !== prevProps.book) {
        this.setState({ ...this.initialStates })
      }
    }
  }

  addBook() {
    if (this.state.name === '' || this.state.author === '' || this.state.price === 0) {
      alert('please provide data');
    } else if (isNaN(this.state.price)) {
      alert('please provide valid price');
    } else {
      this.setState({ addBookLoading: true });
      let requestParams = {
        id: this.props.book.counterid,
        name: this.state.name,
        price: this.state.price,
        author: this.state.author
      }
      this.props.addBook(requestParams)
    }
  }

  render() {
    return (
      <View style={style.container}>
        <Text>Book Name</Text>
        <View style={style.textBoxStyle}>
          <TextInput
            placeholder="book name"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
            style={style.input} />
        </View>
        <Text>Book price</Text>
        <View style={style.textBoxStyle}>
          <TextInput
            placeholder="book price"
            value={this.state.price}
            onChangeText={text => this.setState({ price: text })}
            style={style.input} />
        </View>
        <Text>Book author</Text>
        <View style={style.textBoxStyle}>
          <TextInput
            placeholder="book author"
            value={this.state.author}
            onChangeText={text => this.setState({ author: text })}
            style={style.input} />
        </View>
        <TouchableOpacity
          style={style.submit_button}
          onPress={this.addBook.bind(this)}
        >
          <Text style={style.text}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.submit_button}
          onPress={() => { this.props.navigation.navigate('Books') }}
        >
          <Text style={style.text}>Show books</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  textBoxStyle: {
    borderWidth: 2,
  },

  input: { padding: 15 },
  submit_button: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 14,
    padding: 5
  },
  text: { fontSize: 20, color: 'white' }
})

const mapStateToProps = (state) => {
  return {
    book: state.Book,
  };
};
export default connect(mapStateToProps, { addBook })(DashBoard);