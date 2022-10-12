import React, { useState, createContext, useContext, useMemo } from "react";
import CreateProjectModal from "./CreateProjectModal";

export const MODAL_TYPES = {
  CREATE_PROJECT_MODAL: "CREATE_PROJECT_MODAL",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.CREATE_PROJECT_MODAL]: CreateProjectModal,
};

const initalState = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export function GlobalModal({ children }) {
  const [store, setStore] = useState();
  const { modalType, modalProps } = store || {};

  const showModal = (_modalType, _modalProps = {}) => {
    setStore({
      ...store,
      modalType: _modalType,
      modalProps: _modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider
      value={useMemo(() => {
        return { store, showModal, hideModal };
      }, [store, showModal, hideModal])}
    >
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
}
