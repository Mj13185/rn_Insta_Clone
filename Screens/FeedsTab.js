import React from 'react';
import {  StyleSheet} from 'react-native';
import { Container,  Content} from 'native-base';

import CardComponent from '../Screens/components/CardComponent'
export default class FeedsTab  extends React.Component{
    
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="201" />
                    <CardComponent imageSource="3" likes="301" />
                    <CardComponent imageSource="4" likes="301" />
                    <CardComponent imageSource="5" likes="301" />

                </Content>
            </Container>

                
        );
    }
}   
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
