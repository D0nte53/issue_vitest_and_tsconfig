export type t_nullable<T> = T | null


export type t_clickableAction = {
    handleClick?: ((index: number) => void)
}

export type _t_item = { id?: number, name: string }
export type _t_data<T extends _t_item> = { name: string, items: T[] }

export type t_item = { image: t_nullable<{ url: string, filename: string }> } & _t_item
export type t_data<T extends t_item> = _t_data<T>


