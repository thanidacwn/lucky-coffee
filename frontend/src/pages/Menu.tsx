import './Menu.css';
import Header from '../components/Header';
import Button from '../components/buttons/Button';
import MenuCard from '../components/cards/MenuCard';
import { getMenuCatagories, getMenuItems } from '../services/menuService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState<Error | null>(null);
    const [menuContent, setMenuContent] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const categoriesData = await getMenuCatagories();
            setCategories(categoriesData);

            if (categoriesData.length > 0) {
                setSelectedCategory(categoriesData[0].category_name);
                fetchMenus(categoriesData[0].category_name);
            }

          } catch (error) {
            setError(error as Error);
          }
        };
    
        fetchCategories();
      }, []);

    function CapitalizeFirstLetter (word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    async function fetchMenus(catagory_name: string) {
        try{
            const menuItems = await getMenuItems(catagory_name);
            setMenuContent(menuItems);

            console.log(menuItems);
        } catch (error) {
            setError(error as Error);
        }
        
    }

    return (
        <>
            <div className="menu-container">
                <Header />
                <div className="menus-container">
                    {categories.map((category: { category_name: string; }) => (
                        <Button
                            text={CapitalizeFirstLetter(category.category_name)}
                            onClick={() => {
                                setSelectedCategory(category.category_name);
                                fetchMenus(category.category_name);
                            }}
                            className="menu-button"
                        />
                    ))}
                    <Button
                        text={"+ Create Menu"}
                        onClick={() => navigate('/menu/create')}
                        className="create-menu-button"
                    />

                    {error && <div>Error: {error.message}</div>}

                </div>
                <div className="menus-cards-container">
                    {menuContent.map(menu => (                        
                        <MenuCard 
                            menu={menu}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu;