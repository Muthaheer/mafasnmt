
import React from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses, menuItemStyles } from 'react-pro-sidebar'
import { Link } from 'react-router-dom';
import { Img } from '../../../constant';

const LeftSidebar = () => {
    return (<div className='h-lvh bg-[#1E293B]  '>
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]: {
                backgroundColor: '#1E293B',
            },
        }}>
            <Menu
                menuItemStyles={{
                    button: {
                        color: '#b6c8d9',
                        '&:hover': {
                            backgroundColor: '#b6c8d9',
                            color: '#1E293B',
                        },
                    },
                }}>
                <div className='p-3'>
                    <img src={Img.MAFLogo}/>
                </div>
                <div className='pt-3 px-3 font-semibold text-[#64748B]'>
                    PAGES
                </div>
                <MenuItem component={<Link to="/" /> }><div className='flex'><img src={Img.DashboardLogo}/><span className='ml-2'>Dashboard</span> </div> </MenuItem>
                <MenuItem component={<Link to="/dct" /> }><div className='flex'><img src={Img.DCTLogo}/><span className='ml-2'>DCT</span> </div> </MenuItem>
            </Menu>
        </Sidebar>
        </div>
    );
};

export default LeftSidebar;