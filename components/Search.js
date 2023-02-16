// Componenents/Search.js

import React from "react";
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native';
import films from '../helpers/filmsData';
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";


class Search extends React.Component{

  constructor(props){
    super(props)
    this.state = { films :[] }
    this.searchedText = ""
  }
  
  _searchTextInputChanged(text){
    this.searchedText = text
  }

  _loadFilms(){
    console.log(this.searchedText)
    if (this.searchedText.length > 0 ){
    const data = getFilmsFromApiWithSearchedText(this.searchedText);
    console.log(data)
    this.setState({films: [data]})
    }

  }


    render(){
      console.log("RENDER");
        return (
            <View style={styles.main_container}>
              <TextInput style={styles.textinput} 
              placeholder='Titre du film'
              onChangeText={text => this._searchTextInputChanged(text)}/>
              <Button title='Rechercher' onPress={() => this._loadFilms()}/>

            <FlatList
              data={this.state.films}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <FilmItem film={item}/>}
            />   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        marginTop: 50
    },
    
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
})

export default Search;
