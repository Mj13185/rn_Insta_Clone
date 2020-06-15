import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {Container, Content, Icon, Thumbnail} from 'native-base';

import CardComponent from '../Screens/components/CardComponent';
export default class FeedsTab extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{height: 100}}>
            <View style={{flex: 3}}>
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
                  source={require('../assets/images/StoriesHeaderThumbnails/1.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../assets/images/StoriesHeaderThumbnails/2.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../assets/images/StoriesHeaderThumbnails/3.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../assets/images/StoriesHeaderThumbnails/4.jpg')}
                />

                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../assets/images/StoriesHeaderThumbnails/5.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../assets/images/StoriesHeaderThumbnails/6.jpg')}
                />
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={require('../assets/images/StoriesHeaderThumbnails/7.jpg')}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
