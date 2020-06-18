import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {Container, Content, Icon, Thumbnail} from 'native-base';

import CardComponent from '../Screens/components/CardComponent';
import StoriesCardComponent from '../Screens/components/StoriesCardComponent';
export default class FeedsTab extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{height: 90, marginTop: 0}}>
            <View style={{flex: 3}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5,
                }}>
                <StoriesCardComponent imageUri="1" storiesName="Alia" />
                <StoriesCardComponent imageUri="2" storiesName="Mike" />
                <StoriesCardComponent imageUri="3" storiesName="Bella" />
                <StoriesCardComponent imageUri="4" storiesName="Alice" />
                <StoriesCardComponent imageUri="5" storiesName="John" />
                <StoriesCardComponent imageUri="6" storiesName="Charollete" />
                <StoriesCardComponent imageUri="7" storiesName="Viki" />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101 Likes" />
          <CardComponent imageSource="2" likes="201 Likes" />
          <CardComponent imageSource="3" likes="301 Likes" />
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
