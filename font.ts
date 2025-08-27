import { Cinzel, Cormorant, Open_Sans, Roboto } from "next/font/google";

export const cinzel = Cinzel({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-cinzel"
 });

export const cormorant = Cormorant({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-cormorant"
 });

export const openSans = Open_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-opensans" 
});

export const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-roboto"
 });