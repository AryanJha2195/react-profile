import {FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube, FaBook} from 'react-icons/fa';

export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}

export const getSocialIcon = (icon) => {
    switch(icon.toLowerCase()){
        case 'facebook': return <FaFacebook></FaFacebook>;
        case 'twitter': return <FaTwitter></FaTwitter>;
        case 'github': return <FaGithub></FaGithub>;
        case 'youtube': return <FaYoutube></FaYoutube>;
        case 'instagram': return <FaInstagram></FaInstagram>;
        case 'linkedin': return <FaLinkedin></FaLinkedin>;
        default: return <FaBook></FaBook>
    }
}