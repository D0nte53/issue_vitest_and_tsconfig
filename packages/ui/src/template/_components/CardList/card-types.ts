import { t_clickableAction, t_item } from "./types"

export type ItemComponentProps<Item extends t_item = t_item> = { item: Item, index: number } & t_clickableAction
export type WithItem<Item extends t_item = t_item, Props = unknown> = Props & { item: Item }
export type CardComponentProps<Item extends t_item = t_item> = ItemComponentProps