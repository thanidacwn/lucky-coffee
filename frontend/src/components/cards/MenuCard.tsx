import './MenuCard.css'
import { useEffect, useState } from 'react';
import RoundButton from '../buttons/RoundButton'
import pen from "../../assets/images/pen.png";
import delete_img from "../../assets/images/delete_2.png";
import photo_gallery from "../../assets/images/photo-gallery.png";
import add from "../../assets/images/add.png";
import { MenuCardProps, menuDetailsInterface } from "../../interfaces/Cards";
import { getMenuDetails } from "../../services/menuService"
import isUrl from 'is-url';


const MenuCard: React.FC<MenuCardProps>  = ({menu}) => {
    const [error, setError] = useState<Error | null>(null);
    const [menuDetails, setMenuDetails] = useState<menuDetailsInterface>({
        menu_name:  "",
        menu_category: "",
        menu_image: "",
        menu_sizes:  [" "],
        menu_sweetness:  [" "],
        menu_toppings: [" "],
        start_price: 0
    });

    useEffect(() => {
        const fetchMenuDetails = async () => {
          try {
            const details = await getMenuDetails(menu);
            setMenuDetails(details);
          } catch (error) {
            setError(error as Error);
          }
        };
    
        fetchMenuDetails();
      }, []);

    return(
        <>
            {error && <div>Error: {error.message}</div>}

            <div className="card-container">
                <div className="buttons-container">
                    <RoundButton 
                        image={delete_img}
                        className="menu-remove-button"
                    />
                    <RoundButton 
                        image={pen}
                        className="menu-edit-button"
                    />
                </div>
                <div className="img-container">
                    {isUrl(`${menuDetails.menu_image}`) ? (
                        <img src={`${menuDetails.menu_image}`} className="menu-card-image"/>
                    ) : (
                        <img src={photo_gallery} className="menu-card-image"/>
                    )}
                </div>
                <div className="menu-name-container">
                    {menu}
                </div>
                <div className="menu-price-container">
                    {`${menuDetails.start_price}`}฿
                    <RoundButton 
                        image={add}
                        className="menu-add-button"
                    />
                </div>
            </div>
        </> 
    )
}

export default MenuCard;