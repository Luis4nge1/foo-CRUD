import Button from "./Button";
import { useContext, useEffect } from "react";
import { TodoContext } from "../context/todos-context";
import { HiClipboardDocumentList } from "react-icons/hi2";

export default function Header() {
  const styles =
    "border-2 py-2 px-10 rounded-md bg-[#29303d] hover:bg-[#29305d] ";
  const center = "flex justify-center";
  const between = "flex justify-between";

  const {
    todos,
    removeAllTodos,
    openModal,
    completedTodos,
    getDataFromFirebase,
  } = useContext(TodoContext);

  return (
    <>
      <div className="m-auto container max-w-2xl w-11/12 font-medium text-cyan-950">
        <div className="m-auto text-slate-100 ">
          <div className="text-center font-extrabold text-3xl text-cyan-950 mb-6 flex justify-center mt-6">
            <span className="mr-4 mt-1">
              <HiClipboardDocumentList />
            </span>
            <h1>FOOD LIST</h1>
          </div>
          <div
            className={
              todos.length > 0 || completedTodos.length > 0 ? between : center
            }
          >
            <Button onClick={openModal} className={styles}>
              Add FODD
            </Button>
            {todos.length === 0 && completedTodos.length === 0 ? (
              <Button onClick={getDataFromFirebase} className={styles}>
                Added FOOD
              </Button>
            ) : null}
            {todos.length > 0 || completedTodos.length > 0 ? (
              <Button onClick={removeAllTodos} className={styles}>
                Delete All
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
