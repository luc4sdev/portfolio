import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { animateScroll as scroll } from 'react-scroll';


export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleScrollHome() {
    scroll.scrollToTop();
  }

  function handleScrollAbout() {
    const documentHeight = document.body.scrollHeight;
    const scrollToPosition = documentHeight * 0.055;
    scroll.scrollTo(scrollToPosition);
  }

  function handleScrollSkills() {
    const documentHeight = document.body.scrollHeight;
    const scrollToPosition = documentHeight * 0.157;
    scroll.scrollTo(scrollToPosition);
  }

  function handleScrollProjects() {
    const documentHeight = document.body.scrollHeight;
    const scrollToPosition = documentHeight * 0.350;
    scroll.scrollTo(scrollToPosition);
  }

  function handleScrollContact() {
    scroll.scrollToBottom();
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "#ffff" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleScrollHome}>HOME</MenuItem>
        <MenuItem onClick={handleScrollAbout}>ABOUT</MenuItem>
        <MenuItem onClick={handleScrollSkills}>SKILLS</MenuItem>
        <MenuItem onClick={handleScrollProjects}>PROJECTS</MenuItem>
        <MenuItem onClick={handleScrollContact}>CONTACT</MenuItem>
        <MenuItem>
          <a href="https://drive.google.com/file/d/1qNeFVUfWfr1PZsNgHmHgkn7t23Q0fsuM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            MY RESUME
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
