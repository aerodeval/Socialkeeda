import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../static/images/bug.png"
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState({
    content:"Dashboard"
  });

  const [expanded, setExpaned] = useState(true)

  console.log(window.innerWidth)
  
  return (
   <div>
     <li>Dashboard</li>
     <li>Comments</li>
     <li>All comments</li>
     <li>Creators</li>
   </div>
  );
};

export default Sidebar;