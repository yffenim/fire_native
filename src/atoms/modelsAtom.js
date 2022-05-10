import { atom } from "recoil";

// which model to be passed into the fetchModelSelector
export const modelsAtom = atom({
	key: "modelsAtom",
	default: "moments"
});


