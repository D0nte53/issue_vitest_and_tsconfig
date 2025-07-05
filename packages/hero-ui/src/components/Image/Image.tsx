import NextImage from 'next/image'
import {Image as _HeroUIImage , ImageProps as _HeroUIImageProps} from "@heroui/react";
import { Fragment, useState } from 'react';

export type t_ReactFC_RN<P = {}> = [keyof P] extends [never] ? (() => React.ReactNode) : ((props: P) => React.ReactNode)

type ImageWithoutDfSkeletonProps = 
  {
    disableSkeleton:true,
    renderLoading:t_ReactFC_RN
  } 


export type ImageProps<WithoutDfSkeleton extends boolean = true> = Omit<_HeroUIImageProps,"disableSkeleton"|"as"> & 
(
  boolean extends WithoutDfSkeleton ? Partial<ImageWithoutDfSkeletonProps>:
  WithoutDfSkeleton extends false ? {} : ImageWithoutDfSkeletonProps
)


const Image = <WithoutDfSkeleton extends boolean = true>(props:ImageProps<WithoutDfSkeleton>) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = (...args:Parameters<Exclude<_HeroUIImageProps["onLoad"],undefined>>) =>{
      if(props.onLoad) props.onLoad(...args);
      setIsLoading(false);
  }

  function onError(...args:Parameters<Exclude<_HeroUIImageProps["onError"],undefined>>) {
    if(props.onError) props.onError(...args);
      setIsLoading(false);
  }

  const {renderLoading,..._props} = props as ImageProps<boolean>

  
  let heroUIProps = {disableSkeleton:true,..._props,onLoad,onError}
  //@ts-ignore
  if(!(_props.width || _props.height)) heroUIProps= {fill:true, ...heroUIProps}

  const LoadingComponent = !heroUIProps.disableSkeleton ? Fragment : 
  (renderLoading ?? (()=><div className="absolute inset-0 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>))

  console.log("HeroUIImage",LoadingComponent,{heroUIProps})
  return (<div className="relative flex w-full h-full justify-center items-center overflow-hidden">
    {isLoading && <LoadingComponent/>}
    <_HeroUIImage
      as={NextImage}
      removeWrapper={true}
      {...heroUIProps}
    />
    </div>
  )
}


export default Image