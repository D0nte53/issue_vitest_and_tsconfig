import {cn} from "@heroui/react";
import * as HeroUICard from "@heroui/card";
import {ImageSpinnerLoading} from "@repo/hero-ui/components";
import { t_item } from "../types";
import { CardComponentProps } from "../card-types";


class CardBuilder{

  private constructor(){}

  build<TItem extends t_item>(
    {layout,footer,header,body,classNames,cardProps}: any){
      console.log("CstCard",cardProps)

        const Card =({item,index}: CardComponentProps<TItem>) => {

          console.log("CstCardCard",cardProps)

          const {handleClick} = cardProps

          const imageProps = {
            src: item?.image?.url,
            alt: item?.image?.filename
          }

          //@ts-ignore
          const [bodyProps,headerProps,footerProps,layoutProps] = [body?.["props"]||{},header?.["props"]||{},footer?.["props"]||{},layout?.["props"]||{}]
          
          const Component = (
                  <HeroUICard.Card
                    className={cn("relative",classNames?.card || "cursor-pointer overflow-hidden transition-shadow shadow-md hover:shadow-lg h-[450px]")}
                    isPressable={!!handleClick} 
                    onPress={handleClick ? () => handleClick(index) : undefined}
                  >
                  {header?.HeaderContent && <HeroUICard.CardHeader><header.HeaderContent {...headerProps} item={item}
                
                /></HeroUICard.CardHeader>}

                  <HeroUICard.CardBody className="flex-1  p-0 overflow-hidden w-full my-auto bg-gray-200">
                    <ImageSpinnerLoading
                      {...imageProps}
                      spinnerProps={{size:"lg" ,color:"default"}}
                      fill
                      height={undefined}
                      width={undefined}
                      className="object-cover rounded-3xl w-full h-full"
                      />
                  {body?.BodyContent && <body.BodyContent {...bodyProps} item={item}/>}
                  </HeroUICard.CardBody>
                  <HeroUICard.CardFooter className="text-small min-h-[100px]">
                    <div className="flex flex-col gap-2 my-auto items-start w-full">
                      <footer.FooterContent {...footerProps} item={item}/>
                    </div>
                  </HeroUICard.CardFooter>
                </HeroUICard.Card>)
          if(layout?.LayoutContent) return <layout.LayoutContent {...layoutProps} item={item}>{Component}</layout.LayoutContent>
          return Component
        }
        return Card
  }

  static singleton = new CardBuilder()



}
export default CardBuilder.singleton