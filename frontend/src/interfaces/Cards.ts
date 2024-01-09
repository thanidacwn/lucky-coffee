export interface MenuCardProps {
    menu: string;
}

export interface menuDetailsInterface{
    menu_name:  String,
    menu_category: String,
    menu_image: String,
    menu_sizes:  Array<string>,
    menu_sweetness:  Array<string>,
    menu_toppings: Array<string>,
    start_price: Number
}