/* eslint-disable */
import { Link, useLocation } from "react-router-dom";
import "../styles/breadcrumb.css";

const getBreadcrumbPath = (location) => {
  const crumbs = [{ title: "Home", url: "/" }];
  let title = "";
  if (location.pathname === "/") {
    title = "Home";
  } else if (location.pathname.startsWith("/dubious-doctrines")) {
    title = "Dubius Doctrines";
    crumbs.push({ title, url: "/dubious-doctrines" });
    if (location.pathname.startsWith("/dubious-doctrines/lds")) {
      title = "LDS";
      crumbs.push({ title, url: "/dubious-doctrines/lds" });
      if (location.pathname.startsWith("/dubious-doctrines/lds/coming-soon")) {
        crumbs.push({
          title: "Coming Soon",
          url: location.pathname
        });
      }
    } else if (location.pathname.startsWith("/dubious-doctrines/sda")) {
      title = "SDA";
      crumbs.push({ title, url: "/dubious-doctrines/sda" });
      if (
        location.pathname.startsWith("/dubious-doctrines/sda/authority-of-egw")
      ) {
        crumbs.push({
          title: "The Authority of Ellen G. White as a prophet",
          url: location.pathname
        });
      } else if (
        location.pathname.startsWith("/dubious-doctrines/sda/coming-soon")
      ) {
        crumbs.push({
          title: "Coming Soon",
          url: location.pathname
        });
      }
    } else if (location.pathname.startsWith("/dubious-doctrines/jw")) {
      title = "JW";
      crumbs.push({ title, url: "/dubious-doctrines/jw" });
      if (location.pathname.startsWith("/dubious-doctrines/jw/coming-soon")) {
        crumbs.push({
          title: "Coming Soon",
          url: location.pathname
        });
      }
    } else if (location.pathname.startsWith("/dubious-doctrines/inc")) {
      title = "INC";
      crumbs.push({ title, url: "/dubious-doctrines/inc" });
      if (location.pathname.startsWith("/dubious-doctrines/inc/coming-soon")) {
        crumbs.push({
          title: "Coming Soon",
          url: location.pathname
        });
      }
    }
  } else if (location.pathname === "/about") {
    title = "About";
    crumbs.push({ title, url: location.pathname });
  } else if (location.pathname.startsWith("/articles")) {
    title = "Articles";
    crumbs.push({ title, url: "/articles" });
    if (
      location.pathname.startsWith("/articles/1844-made-complicated-part-1")
    ) {
      crumbs.push({
        title: "1844 Made Complicated (pt. 1)",
        url: location.pathname
      });
    } else if (
      location.pathname.startsWith("/articles/1844-made-complicated-part-2")
    ) {
      crumbs.push({
        title: "1844 Made Complicated (pt. 2)",
        url: location.pathname
      });
    } else if (location.pathname.startsWith("/articles/egw-true-prophet")) {
      crumbs.push({
        title: "Is Ellen G. White a True Prophet?",
        url: location.pathname
      });
    } else if (location.pathname.startsWith("/articles/coming-soon")) {
      crumbs.push({
        title: "Coming Soon",
        url: location.pathname
      });
    }
  }

  return crumbs;
};

function BreadCrumb() {
  const location = useLocation();
  const crumbs = getBreadcrumbPath(location);

  if (crumbs.length > 1) {
    return (
      <div id="breadcrumb">
        <ul>
          {crumbs.map((crumb) => {
            return (
              <li key={crumb.title}>
                <Link to={crumb.url}>{crumb.title} /</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BreadCrumb;
