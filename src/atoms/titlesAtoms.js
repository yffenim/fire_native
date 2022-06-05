import { atom } from "recoil";

// atom for tracking the title of model II and III
export const secondsTitleAtom = atom({
	key: "secondsTitlesAtom",
	default: "default II"
});

export const thirdsTitleAtom = atom({
	key: "thirdsTitlesAtom",
	default: "default III"
});


