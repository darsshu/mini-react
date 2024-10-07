import React, { useContext } from 'react'
import { Theme } from './ThemeContext'

const ThemeBtn = () => {
    const { themeMode, toggleTheme } = useContext(Theme)
    return (
        <>
            <label className='flex items-center cursor-pointer'>
                <div className="relative">
                    <input type="checkbox" className='sr-only' onChange={toggleTheme}
                        checked={themeMode == "dark"} />
                    <div className="block bg-green-400 w-10 h-6 rounded-full"></div>
                    <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full
                  transition ${themeMode == "dark" ? "transform translate-x-full duration-1000" : " duration-1000"}    
                  
                  `}>

                    </div>
                </div>
            </label>
        </>
    )

}

export default ThemeBtn
