import React from 'react';
import { View, Text,StyleSheet} from 'react-native';

export default class FeedsTab  extends React.Component{
    
    render(){
        return(
            <View>
                 <Text>
                Feeds
                </Text>
            </View>           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});