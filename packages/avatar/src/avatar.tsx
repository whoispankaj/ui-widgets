import * as React from 'react';
interface AvatarProps {
    name: string;
}
const Avatar = (props: AvatarProps) => {
    return(
    <img>{props.name}</img>
    );
};
export default Avatar;