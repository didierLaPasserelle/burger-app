import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "../Admin/AdminPanel/AddForm/AddForm";
import EditForm from "../Admin/AdminPanel/EditForm/EditForm"
import EmptyEditFormMessage from "./AdminPanel/EditForm/EmptyEditFormMessage";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <EmptyEditFormMessage />,
  },
];
