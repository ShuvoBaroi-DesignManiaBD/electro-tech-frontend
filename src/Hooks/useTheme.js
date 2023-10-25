import { useState } from "react";

export const useThemeMode = () => {
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        const html = document.documentElement;
        if (theme === 'light') {
            html.classList.remove('light');
            html.classList.add('dark', 'dark:bg-gray-900');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            setTheme('light');
        }
    
        return [theme, ]
    }

    return {changeTheme, theme};
}
