import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { LuMail as Mail } from "react-icons/lu";

export function Endereco(){
    return (
        <div className="flex items-center justify-center gap-6">
            <a
                href="https://github.com/kjunior-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
            >
                <Github size={24}/>
            </a>
            <a
                href="https://www.linkedin.com/in/kevin-sousa-778293210/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
            >
                <Linkedin size={24}/>
            </a>
            <a
                href="mailto:kevinjunior.dev@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
            >
                <Mail size={24}/>
            </a>
        </div>
    )
}