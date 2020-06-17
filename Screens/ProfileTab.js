import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Segment,
  Button,
} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var {height, width} = Dimensions.get('window');

import CardComponent from '../Screens/components/CardComponent';

var images = [
  require('../assets/feed_images/1.jpg'),
  require('../assets/feed_images/2.jpg'),
  require('../assets/feed_images/3.png'),
  require('../assets/feed_images/4.jpg'),
  require('../assets/feed_images/5.jpg'),
  require('../assets/feed_images/6.jpg'),
  require('../assets/feed_images/7.jpg'),
  require('../assets/feed_images/8.png'),
  require('../assets/feed_images/9.jpg'),
  require('../assets/feed_images/10.jpg'),
  require('../assets/feed_images/11.jpg'),
  require('../assets/feed_images/12.jpg'),
];

class ProfileTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  segmentClicked(index) {
    this.setState({
      activeIndex: index,
    });
  }
  checkActive = index => {
    if (this.state.activeIndex !== index) {
      return {color: 'grey'};
    } else {
      return {};
    }
  };

  renderSectionOne() {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            {width: width / 3},
            {height: width / 3},
            {marginBottom: 2},
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          ]}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
            }}
            source={image}
          />
        </View>
      );
    });
  }

  renderSection() {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="101" />
          <CardComponent imageSource="3" likes="101" />
        </View>
      );
    }
  }

  componentDidMount() {
    console.log(width);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{paddingTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={require('../assets/images/me.jpg')}
                  style={{width: 75, height: 75, borderRadius: 37.5}}
                />
              </View>

              <View style={{flex: 3}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingTop: 15,
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>20</Text>
                    <Text style={{fontSize: 15, color: 'grey'}}>Posts</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>205</Text>
                    <Text style={{fontSize: 15, color: 'grey'}}>Followers</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>167</Text>
                    <Text style={{fontSize: 15, color: 'grey'}}>Following</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{paddingBottom: 10}}>
              <View style={{paddingHorizontal: 10}}>
                <Text style={{fontWeight: 'bold'}}>Mj Choudhry</Text>
                <Text>Lark | Computer Jock </Text>
                <Text>www.Lzynerd.com</Text>
              </View>
            </View>
          </View>

          <View style={{padding: 10}}>
            <Button
              transparent
              style={{
                height: 30,
                borderColor: '#808080',
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: '700'}}> Edit Profile</Text>
            </Button>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderTopColor: '#eae5e5',
              }}>
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}>
                <Icon
                  name="apps"
                  style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked(1)}
                transparent
                active={this.state.activeIndex == 1}>
                <Icon
                  name="person-pin"
                  type="MaterialIcons"
                  style={[
                    {fontSize: 32},
                    this.state.activeIndex == 1 ? {} : {color: 'grey'},
                  ]}
                />
              </Button>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
