import React, { useState } from 'react';
import { Switch } from '@mui/material';

const ThemeSwitch = ({ onToggle }) => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    onToggle(!toggleDarkMode);
  };

  return (
    <div>
      <Switch
        name="swich"
        checked={toggleDarkMode}
        onChange={toggleDarkTheme}
      />
    </div>
  );
};

export default ThemeSwitch;
