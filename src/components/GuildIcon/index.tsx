import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';


export function GuildIcon() {
    const uri = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-pxega&psig=AOvVaw3XoRd1kApC2tbqGGZJM1Ka&ust=1640602724215000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjWzM6ngfUCFQAAAAAdAAAAABAR'

    return (
        <Image
            source={{ uri }}
            style={{ styles.image }}
            resizeMode="cover"
        />

    );
}