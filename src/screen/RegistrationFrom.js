import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {CardSection, Button, Input, Spinner} from './common';
class RegistrationFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      password: '',
      mobile: '',
      reff_code: '',
      msg: '',
    };
  }
  userRegistrationFunction = () => {
    const data = new FormData();
    data.append('f_name', this.state.f_name);
    data.append('l_name', this.state.l_name);
    data.append('mobile', this.state.mobile);
    data.append('password', this.state.password);
    data.append('reff_code', this.state.reff_code);

    fetch('https://thethreeindians.com/Bewakoof/api.php?postUserRegister', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // const result = responseJson.GROCERY_APP[0];
        // if (result.success === 1) {
        //   this.state.msg = result.msg;
        // }
        //Alert.alert('Register Successfully');
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.userRegistrationFunction}>Login</Button>;
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Firstname"
            onChangeText={(f_name) => this.setState({f_name})}
            placeholder="jane"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Lastname"
            onChangeText={(l_name) => this.setState({l_name})}
            placeholder="Taylor"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={(password) => this.setState({password})}
            placeholder="12345"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Reffercode"
            onChangeText={(reff_code) => this.setState({reff_code})}
            placeholder="12345"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            onChangeText={(mobile) => this.setState({mobile})}
            placeholder="555-555-5555"
          />
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
      </View>
    );
  }
}

export {RegistrationFrom};
