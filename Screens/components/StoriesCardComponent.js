import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {Container, Content, Icon, Thumbnail} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class StoriesCardComponent extends React.Component {
  render() {
    const StoriesHearderIamges = {
      '1': require('../../assets/images/StoriesHeaderThumbnails/1.jpg'),
      '2': require('../../assets/images/StoriesHeaderThumbnails/2.jpg'),
      '3': require('../../assets/images/StoriesHeaderThumbnails/3.jpg'),
      '4': require('../../assets/images/StoriesHeaderThumbnails/4.jpg'),
      '5': require('../../assets/images/StoriesHeaderThumbnails/5.jpg'),
      '6': require('../../assets/images/StoriesHeaderThumbnails/6.jpg'),
      '7': require('../../assets/images/StoriesHeaderThumbnails/7.jpg'),
    };
    return (
      <View
        style={{
          height: 60,
          width: 60,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <LinearGradient
            colors={['#8a3ab9', '#e95950', '#bc2a8d']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            style={{
              height: 60,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: 'white',
                borderWidth: 2,
              }}
              source={StoriesHearderIamges[this.props.imageUri]}
            />
          </LinearGradient>
        </View>
        <View>
          <Text>{this.props.storiesName}</Text>
        </View>
      </View>
    );
  }
}
