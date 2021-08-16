import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Post = (props) => {
    return (
        <View style={styles.container}>
        {/* Image */}
        <Image 
        style={styles.image}
        source={{uri: 'https://cdn.pixabay.com/photo/2020/01/04/20/26/holiday-4741593_960_720.jpg'}}
        />

        {/* Bed & Bedroom */}
        <Text style={styles.bedrooms}>1bed 1 bedroom</Text>
    
        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>
            Ad laborum ipsum deserunt ut nulla consequat ut.
             Mollit incididunt aliquip eiusmod ea incididunt elit excepteur dolor anim nostrud tempor 
             cupidatat ea.
        </Text>

        {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.oldPrice}>$30</Text>
                / night
            </Text>
        {/* Total price  */}
        <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post;
