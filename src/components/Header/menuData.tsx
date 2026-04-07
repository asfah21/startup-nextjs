import { Menu } from "@/types/menu";

const getMenuData = (t: (key: string) => string): Menu[] => [
  {
    id: 1,
    title: t("header.home"),
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: t("header.about"),
    newTab: false,
    submenu: [
      {
        id: 21,
        title: t("header.snapshot"),
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: t("header.contact"),
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: t("header.business"),
    path: "/business",
    newTab: false,
  },
  {
    id: 7,
    title: t("header.corporate_governance"),
    path: "/corporate-governance",
    newTab: false,
  },
  {
    id: 8,
    title: t("header.career"),
    path: "/career",
    newTab: false,
  },
  {
    id: 4,
    title: t("header.pages"),
    newTab: false,
    submenu: [
      {
        id: 41,
        title: t("header.about_page"),
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: t("header.contact_page"),
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: t("header.blog_grid_page"),
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: t("header.blog_sidebar_page"),
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: t("header.blog_details_page"),
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: t("header.signin_page"),
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: t("header.signup_page"),
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: t("header.error_page"),
        path: "/error",
        newTab: false,
      },
    ],
  },
];

export default getMenuData;
