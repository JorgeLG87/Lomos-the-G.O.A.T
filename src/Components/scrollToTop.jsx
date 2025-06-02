import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo({top: 0, behavior: "auto"});
        
        console.log("Route changed to: ", pathname);
        console.log(window.screenY);
    }, [pathname]);

    return null;
};