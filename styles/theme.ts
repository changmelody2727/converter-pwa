"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#40514e",
      light: "#e4f9f5",
      dark: "#293533",
      contrastText: "#40514e",
    },
  },
});

export default theme;
