import Image , { ImageProps } from "./Image";
import { CircularProgress , CircularProgressProps } from "@heroui/react";

export type ImageSpinnerLoadingProps = Omit<ImageProps<true>,"disableSkeleton"|"renderLoading">  & {spinnerProps:CircularProgressProps}
const ImageSpinnerLoading = (props:ImageSpinnerLoadingProps) => {
    const {spinnerProps,..._props} = props
    const renderLoading  = ()=><CircularProgress  {...spinnerProps} /> as any;
    return <Image<true> {..._props} disableSkeleton={true} renderLoading={renderLoading}/>
}

export default ImageSpinnerLoading