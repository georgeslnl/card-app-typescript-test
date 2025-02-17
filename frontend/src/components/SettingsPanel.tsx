import { useTheme } from '../utilities/themeProvider'
import { useState } from 'react';

export default function SettingsPanel(){
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
      <div className='col-start-3 items-end '>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='relative w-full p-4 text-xl rounded-md font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
        >
            Settings
        </button>
        {isOpen && (
          <div className='absolute rounded-md border border-gray-900 dark:border-white'>
            <button
              onClick={toggleTheme}
              className=' p-2  font-medium  text-sm'
            >
              Switch to { theme === 'light' ? 'Dark' : 'Light' } Mode
            </button>
          </div>
        )}
      </div>
    )
}