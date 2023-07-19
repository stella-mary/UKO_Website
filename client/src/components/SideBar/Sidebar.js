import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import './Sidebar.css'
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TableChartIcon from '@mui/icons-material/TableChart';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    <span className="color">U</span> UKO
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            DASHBOARD
                        </Typography>


                        <Item
                            title="LMS"
                            to="/team"
                            icon={<CheckBoxOutlineBlankOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Sales 1"
                            to="/contacts"
                            icon={<MonetizationOnOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Sales 2"
                            to="/invoices"
                            icon={<AttachMoneyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Hiring"
                            to="/invoices"
                            icon={<AccessibilityNewOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Project 1"
                            to="/invoices"
                            icon={<InventoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Project 2"
                            to="/invoices"
                            icon={<InventoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="CRM"
                            to="/invoices"
                            icon={<QuestionMarkOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Saas"
                            to="/invoices"
                            icon={<LayersOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            MANAGEMENT
                        </Typography>

                        <SubMenu
                            title="Profiles"
                            to="/form"
                            icon={<Person2OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Profile 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Profile 2</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title="Accounts"
                            to="/form"
                            icon={<PersonAddAltOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Account 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Account 2</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title="User & Contact"
                            to="/form"
                            icon={<PeopleOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Add User</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >User List 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >User List 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >User Grid 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >User Grid 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Contact List</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Contact Grid</MenuItem>
                        </SubMenu>


                        <SubMenu
                            title="Invoice"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Invoice List 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Invoice List 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Invoice Details 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Invoice Details 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Create Invoice 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Create Invoice 2</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title="Ecommerce"
                            to="/form"
                            icon={<ShoppingBasketOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Cart</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Payment</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                to="/product"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Billing Details</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Product Details</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Shop 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Shop 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Checkout 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Checkout 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Payment Complete 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Payment Complete 2</MenuItem>
                        </SubMenu>


                        <SubMenu
                            title="Admin Ecommerce"
                            to="/form"
                            icon={<LocalGroceryStoreOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Product List</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Product Grid</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Create Product</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Order Management</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Product Management</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Customer Management</MenuItem>
                        </SubMenu>

                        <SubMenu
                            title="Projects"
                            to="/form"
                            icon={<DataUsageIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Project List 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Project List 2</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Project List 3</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Team Member</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Project Details</MenuItem>
                        </SubMenu>

                        <Item
                            title="Data Table"
                            to="/invoices"
                            icon={<TableChartIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            APPS
                        </Typography>
                        <Item
                            title="Todo List"
                            to="/bar"
                            icon={<ListAltIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/pie"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <SubMenu
                            title="Chats"
                            to="/form"
                            icon={<ChatIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Chat 1</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Chat 2</MenuItem>
                        </SubMenu>
                        <SubMenu
                            title="Sessions"
                            to="/form"
                            icon={<LogoutIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <SubMenu
                                title="Sign In"
                                to="/form"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                selected={selected}
                                setSelected={setSelected}
                            >
                                <MenuItem
                                    style={{
                                        margin: "10px 0 10px 12px",
                                        color: colors.grey[100],
                                    }}
                                    // to="/faq"
                                    icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                >Sign In</MenuItem>
                                <MenuItem
                                    style={{
                                        margin: "10px 0 10px 12px",
                                        color: colors.grey[100],
                                    }}
                                    // to="/faq"
                                    icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                >Sign In</MenuItem>
                            </SubMenu>

                            <SubMenu
                                title="Register"
                                to="/form"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                selected={selected}
                                setSelected={setSelected}
                            >
                                <MenuItem
                                    style={{
                                        margin: "10px 0 10px 12px",
                                        color: colors.grey[100],
                                    }}
                                    // to="/faq"
                                    icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                >Register 1</MenuItem>
                                <MenuItem
                                    style={{
                                        margin: "10px 0 10px 12px",
                                        color: colors.grey[100],
                                    }}
                                    // to="/faq"
                                    icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                >Register 2</MenuItem>
                            </SubMenu>


                            <SubMenu
                                title="Forget Password"
                                to="/form"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                selected={selected}
                                setSelected={setSelected}
                            >
                                <MenuItem
                                    style={{
                                        margin: "10px 0 10px 12px",
                                        color: colors.grey[100],
                                    }}
                                    // to="/faq"
                                    icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                >Forget Password 1</MenuItem>

                                <MenuItem
                                    style={{
                                        margin: "10px 0 10px 12px",
                                        color: colors.grey[100],
                                    }}
                                    // to="/faq"
                                    icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                                >Forget Password 2</MenuItem>
                            </SubMenu>

                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Two Step Verification</MenuItem>

                        </SubMenu>

                        <SubMenu
                            title="Pages"
                            to="/form"
                            icon={<MenuBookIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Pricing</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >About</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Contact</MenuItem>
                            <MenuItem
                                style={{
                                    margin: "10px 0 10px 12px",
                                    color: colors.grey[100],
                                }}
                                // to="/faq"
                                icon={<FiberManualRecordIcon style={{ fontSize: '8px' }} />}
                            >Privacy</MenuItem>
                        </SubMenu>

                        <Item
                            title="Documentation"
                            to="/invoices"
                            icon={<FileCopyOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;