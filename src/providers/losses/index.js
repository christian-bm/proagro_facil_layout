import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const LossesContext = createContext();

export const LossesProvider = ({ children }) => {
    const [losses, setLosses] = useState([]);
    const [totalLosses, setTotalLosses] = useState(0);

    useEffect(() => {
        api.get("api/losses/").then(({ data }) => {
            setLosses([...data.results]);
            setTotalLosses(data.count);
        });
    }, []);

    const getLosses = () => {
        api.get("api/losses/").then(({ data }) => {
            setLosses([...data.results]);
            setTotalLosses(data.count);
        });
    };

    const getLossesByPage = (page) => {
        api.get(`api/losses/?page=${page}`).then(({ data }) => {
            setLosses([...data.results]);
            setTotalLosses(data.count);
        });
    };

    const getLossesByCpf = (cpf) => {
        api.get(`api/losses/cpf/${cpf}/`).then(({ data }) => {
            setLosses([...data.results]);
            setTotalLosses(data.count);
        });
    };

    const getLossesByCpfByPage = (cpf, page) => {
        api.get(`api/losses/cpf/${cpf}/?page=${page}`).then(({ data }) => {
            setLosses([...data.results]);
            setTotalLosses(data.count);
        });
    };
    return (
        <LossesContext.Provider
            value={{
                losses,
                getLosses,
                getLossesByPage,
                getLossesByCpf,
                getLossesByCpfByPage,
                totalLosses,
            }}>
            {children}
        </LossesContext.Provider>
    );
};

export const useLosses = () => useContext(LossesContext);
