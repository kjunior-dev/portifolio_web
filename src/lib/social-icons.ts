import type { IconType } from "react-icons";
import {
    FaCode,
    FaDatabase,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import {FaArrowCircleRight, FaMapMarkerAlt} from "react-icons/fa";
import {GoDownload} from "react-icons/go";
import {LuLayoutDashboard, LuLayoutGrid, LuMonitorSmartphone, LuTrendingUp, LuWrench} from "react-icons/lu";
import {FiServer} from "react-icons/fi";
import {BiCodeCurly} from "react-icons/bi";
import {GrSecure} from "react-icons/gr";
import {IoTerminal} from "react-icons/io5";
import {RiGraduationCapFill} from "react-icons/ri";
import {BsPatchCheck} from "react-icons/bs";

export const socialIcons = {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaXTwitter,
    FaYoutube,
    FaWhatsapp,
    MdEmail,
    FaArrowCircleRight,
    GoDownload,
    LuMonitorSmartphone,
    FiServer,
    LuWrench,
    FaCode,
    BiCodeCurly,
    FaDatabase,
    GrSecure,
    IoTerminal,
    FaMapMarkerAlt,
    LuLayoutGrid,
    LuLayoutDashboard,
    LuTrendingUp,
    RiGraduationCapFill,
    BsPatchCheck,
} satisfies Record<string, IconType>;

export type SocialIconName = keyof typeof socialIcons;

export function getSocialIcon(iconName?: string): IconType | null {
    if (!iconName) {
        return null;
    }

    return socialIcons[iconName as SocialIconName] ?? null;
}