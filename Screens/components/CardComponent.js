import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
export default class CardComponent extends React.Component {
  render() {
    const images = {
      '1': require('../../assets/images/1.jpg'),
      '2': require('../../assets/images/2.jpg'),
      '3': require('../../assets/images/3.jpg'),
      '4': require('../../assets/images/4.jpg'),
      '5': require('../../assets/images/5.jpg'),
    };

    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../assets/images/me.jpg')} />
            <Body>
              <Text>Mj Choudhry</Text>
              <Text note>Gurgaon</Text>
            </Body>
          </Left>

          <Right>
            <Icon
              name="dots-three-vertical"
              type="Entypo"
              style={{color: 'black'}}
            />
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{height: 300, width: undefined, flex: 1}}
          />
        </CardItem>

        <CardItem style={{height: 45}}>
          <Left style={{alignSelf: 'center'}}>
            <Button transparent>
              <Icon
                name="heart"
                type="Feather"
                style={{color: 'black', fontSize: 25}}
              />
            </Button>
            <Button transparent>
              <Icon
                name="message-circle"
                type="Feather"
                style={{color: 'black', fontSize: 25}}
              />
            </Button>
            <Button transparent>
              <Icon
                name="send"
                type="Feather"
                style={{color: 'black', fontSize: 25}}
              />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon
                name="bookmark"
                type="Feather"
                style={{color: 'black', fontSize: 25}}
              />
            </Button>
          </Right>
        </CardItem>

        <CardItem style={{height: 20}}>
          <Text>{this.props.likes} </Text>
        </CardItem>
        <CardItem>
          <Body />
          <Text>
            <Text style={{fontWeight: '900'}}>varun</Text>
            Ea do Lorem occaecat laborum do. Minim ullamco .
          </Text>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
