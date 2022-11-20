import MainContainer from "./components/navigation/MainContainer";
import StartPage from "./components/navigation/StartPage";
import { useEffect, useState } from "react";

export default function App() {
    // Show MainContainer only after StartPage was shown for 3 seconds
    const [showMainContainer, setShowMainContainer] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowMainContainer(true);
        }, 3000);
    }
    , []);

    return (
        <>
            {showMainContainer ? <MainContainer /> : <StartPage />}
        </>
    );
}