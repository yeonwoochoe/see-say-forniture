import { FaHome, FaCommentDots, FaRegNewspaper, FaWhatsappSquare, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import classes from "../../pages/SideBar.module.scss";

const Nav = () => {
  const iconSylte = {
    fontSize: "1.1rem",
    paddingRight: "0.5rem",
  };

  const gnbTitle = [
    {
      icon: <FaHome style={iconSylte} />,
      content: "Home",
      href: "/",
    },
    {
      icon: <FaCommentDots style={iconSylte} />,
      content: "About",
      href: "/",
    },
    {
      icon: <FaRegNewspaper style={iconSylte} />,
      content: "News",
      href: "/",
    },
    {
      icon: <FaWhatsappSquare style={iconSylte} />,
      content: "Contact",
      href: "/",
    },
    {
      icon: <FaRegHeart style={iconSylte} />,
      content: "Favorite",
      href: "/",
    },
  ];

  return (
    <nav className={classes.main_nav} role="navigation">
      <ul className="unstyled list-hover-slide">
        {gnbTitle.map((nav, idx) => {
          return (
            <li key={idx}>
              <NavLink to={nav.href}>
                {nav.icon}
                {nav.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
