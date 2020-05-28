import { AtomizeCore } from "./types";
import { createContext } from "./modules/context";

const atomize: AtomizeCore = {
    createContext,
};

export { createContext };

export default atomize;
