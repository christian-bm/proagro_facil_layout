import { LossesProvider } from "./losses";
import { ModalProvider } from "./modal";
import { PaginationProvider } from "./pagination";

const Providers = ({ children }) => (
    <LossesProvider>
        <ModalProvider>
            <PaginationProvider>{children}</PaginationProvider>
        </ModalProvider>
    </LossesProvider>
);

export default Providers;
