import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {Container, Content, Icon, Thumbnail} from 'native-base';
export default class StoriesCardComponent extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingStart: 5,
          paddingEnd: 5,
        }}>
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/1.jpg')}
        />
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/2.jpg')}
        />
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/3.jpg')}
        />
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/4.jpg')}
        />

        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/5.jpg')}
        />
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/6.jpg')}
        />
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
          }}
          source={require('../../assets/images/StoriesHeaderThumbnails/7.jpg')}
        />
      </ScrollView>
    );
  }
}
