import { createContext, useState } from "react";

const SelectedNftContext = createContext();

export const SelectedNftProvider = ({ children }) => {
    const [selectedNft, setSelectedNft] = useState({});

    return (
        <SelectedNftContext.Provider value={[selectedNft, setSelectedNft]}>
            {children}
        </SelectedNftContext.Provider>
    );
};

export default SelectedNftContext;
