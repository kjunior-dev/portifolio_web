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
import {FaArrowCircleRight} from "react-icons/fa";
import {GoDownload} from "react-icons/go";
import { LuMonitorSmartphone, LuWrench } from "react-icons/lu";
import {FiServer} from "react-icons/fi";
import {BiCodeCurly} from "react-icons/bi";
import {GrSecure} from "react-icons/gr";
import {IoTerminal} from "react-icons/io5";

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
} satisfies Record<string, IconType>;

export type SocialIconName = keyof typeof socialIcons;

export function getSocialIcon(iconName?: string): IconType | null {
    if (!iconName) {
        return null;
    }

    return socialIcons[iconName as SocialIconName] ?? null;
}