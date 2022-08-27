import { NewOrderModal } from "@components/HomeComponent/elements/NewOrderModal";
import { User } from "@data/auth/types";

export type HeadStoreTypes = {
  currentModals: ModalListType[];
  openModal: (name: ModalListType) => void;
  closeModal: (name: ModalListType) => void;
  user: User | null;
  setUser: (user: User) => void;
};

type ModalListType = keyof typeof modals;

export const modals = {
  newOrder: <NewOrderModal />,
};

export type SetStateFunc<T> = (
  partial: T | Partial<T> | ((state: T) => T),
  replace?: boolean | undefined
) => void;

export type GetStateFunc<T> = () => T;
