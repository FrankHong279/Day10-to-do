import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {TodoContext} from "./contexts/TodoContext";
import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoDetailPage} from "./pages/TodoDetailPage";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {DoneListPage} from "./pages/DoneListPage";
import '@ant-design/v5-patch-for-react-19';
import {useTodoService} from "./useTodoService";
import {unstableSetRender} from "antd";
import {createRoot} from "react-dom/client";



function AboutUs() {
    return <div>Frank Hong</div>;
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage />
            },
            {
                path: "/doneList",
                element: <DoneListPage />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            }
        ]
    }
]);

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});


function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {loadTodos} = useTodoService();
    useEffect(() => {
        loadTodos()
            .then(todos => dispatch({ type: "LOAD_TODOS", payload: todos }))
    }, [dispatch]);
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;