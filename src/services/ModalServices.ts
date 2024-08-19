import { useAppDispatch } from "hooks/redux";
import { openModal, closeModal } from "store/reducers/modalSlice";
import { ModalView } from "models/IModals";

export const useModalServices = () => {
  const dispatch = useAppDispatch();

  const openSignUpModal = (type: ModalView) => {
    dispatch(openModal({ view: type }));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return { openSignUpModal, closeModalHandler };
};