import { HOME_ACTION } from "./action";
import { HomeContextType } from "../context";
import produce from "immer";

const HomeReducer = (
  preState: HomeContextType,
  action: {
    type: number;
    payload: any;
  }
): HomeContextType => {
  const { payload } = action
  switch (action.type) {
    case HOME_ACTION.ADD_GALLERY_ACTION:
      return produce(preState, (draft) => {
        draft.galleryWithFormList.push({
          type: payload.type,
          id: new Date().getTime().toString(),
        });
      });
    case HOME_ACTION.SET_CURRENT_GALLERY_ACTION:
      return produce(preState, (draft) => {
        draft.currentGallery = payload
      });
    case HOME_ACTION.UPDATE_GALLERY_FORM_ACTION:
      return produce(preState, (draft) => {
        const current = draft.galleryWithFormList.find(item => item.id === payload.id);
        current!.formConfig = payload.formConfig;
      }); 
    default:
      return preState;
  }
};

export { HomeReducer };
