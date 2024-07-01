import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Chatbox from "./chatbox/Chatbox";
import Chat from "./pages/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Chatbox />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
]);
