import React, { useState } from 'react';
import config from '../config/config';
import { Image, Text, View } from 'react-native';

export interface IntroProps {
    image: string,
    title: string,
    description: string
}

function IntroSlide({ image, title, description }: IntroProps) {
    const message = "Hello";
    return <View>
        <Image
            source={require('../assets/images/intro1.png')}
        />
        <Text>{message}</Text>
    </View>
}

function Intro() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { image: currentImage, title: currentTitle, description: currentDescription } = config.introScreens[currentSlide];
    return (
        <>
            {currentSlide === 0 &&
                <IntroSlide
                    image={currentImage}
                    title={currentTitle}
                    description={currentDescription}
                />
            }
            {currentSlide === 1 &&
                <View>

                </View>
            }
            {currentSlide === 2 &&
                <View>

                </View>
            }
        </>
    )
}

export default Intro