import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyleButtom from '../styledButton';


const CarItems = (props) => {

    const {name, tagline, taglineCTA, image} = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                    {' '} 
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>
                
            </View>

            <View style={styles.buttonConatiner}>
                <StyleButtom
                    type='secondary'
                    content={'Custom Oder'}
                    onPress={() => {
                        console.warn('Custom order was pressed')
                    }} />
                <StyleButtom
                    type='primary'
                    content={'Existing Inventory'}
                    onPress={() => {
                        console.warn('Existing Inventory was Pressed')
                    }}
                />
            </View>

        </View>
    )
}


export default CarItems