import React, {Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username:'',
      email:'',
      password:''
    }
  } 

  render() {
    return(
      <>
        <View style={styles.MainContainer}>
          <Text style= {styles.title}>Register Account</Text>
          <TextInput
            placeholder='Username'
            onChangeText = { name => this.setState({
              username:name
            })}
            style={styles.TextInputStyle}
          />
          <TextInput
            placeholder='Email'
            onChangeText= { email => this.setState({
              email:email
            })} 
            style={styles.TextInputStyle}
          />
          <TextInput 
            placeholder='Password'
            onChangeText={ password => this.setState({
              password:password
            })}
            style={styles.TextInputStyle}
            secureTextEntry={true}
          />

          <View style={styles.fixToInputs}>
            <Button title="Register"  width={400} onPress={ this.Registration } color="#2196f3"/>
          </View>

          

        </View>
      </>
    );
  } 

  Registration = () => {
    fetch('http://192.168.100.6/regin/registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }
}


const styles = StyleSheet.create({
  MainContainer :{ 
    justifyContent: 'center',
    flex:1,
    margin: 10
  },
   
  TextInputStyle: {
   
    // textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: 400,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
   
  title:{
   
    fontSize: 22, 
    color: "#009688", 
    // textAlign: 'center', 
    marginBottom: 15
  },
  fixToInputs: {
    height: 40,
    width: 400,
  }
})

export default App;


