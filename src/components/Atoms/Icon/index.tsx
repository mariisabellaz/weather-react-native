import React, { memo } from 'react';
import { SvgProps } from 'react-native-svg';

type IconProps = SvgProps & {
    icon: React.FC<SvgProps>;
};

function Icon({ icon: Icon, ...rest }: IconProps) {
    return <Icon {...rest} />;
}

export default memo(Icon);
