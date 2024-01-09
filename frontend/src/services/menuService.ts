import axios from 'axios';

export async function getMenuCatagories() {
    try {
        const res = await axios.get('http://localhost:5173/api/category/all');

        return res.data
    } catch (error) {
        throw error;
    }
   
}

export async function getMenuItems(category_name: string) {
    try {
        const res = await axios.get(`http://localhost:5173/api/category/${category_name}/menu`);
        
        return res.data
    } catch (error) {
        throw error;
    }
    
}

export async function getMenuDetails(menu_name: string) {
    try {
        const res = await axios.get(`http://localhost:5173/api/menu/${menu_name}`);

        return res.data
    } catch (error) {
        throw error;
    }
}