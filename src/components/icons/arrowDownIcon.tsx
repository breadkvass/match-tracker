import { FC } from 'react';
import { View, StyleProp, ViewStyle  } from 'react-native';

type ArrowDownIconProps = {
    iconContainerStyle?: StyleProp<ViewStyle>;
    color?: string;
}

const ArrowDownIcon: FC<ArrowDownIconProps> = ({iconContainerStyle, color = "#B4B5B6"}) => {
    return (
        <View style={iconContainerStyle}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.932 6.81567H5.06536C4.26536 6.81567 3.86536 7.78234 4.43203 8.34901L8.74869 12.6657C9.44036 13.3573 10.5654 13.3573 11.257 12.6657L12.8987 11.024L15.5737 8.34901C16.132 7.78234 15.732 6.81567 14.932 6.81567Z" fill={color}/>
            </svg>
        </View>
    )
}

export default ArrowDownIcon;
