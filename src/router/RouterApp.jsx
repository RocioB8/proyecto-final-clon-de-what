import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { Messages } from "../views/Messages";
import { NotFound } from "../views/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import { useTheme } from "../context/ThemeContext";
import HelpPage from "../components/HelpPage";

const RouterApp = () => {
  const { theme } = useTheme()
  
  
  return (
    <div className={`app app-${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<ProtectedRoute>
            <Messages />
          </ProtectedRoute>} />
          < Route path="/help"
          element={
            <ProtectedRoute>
              <HelpPage />
            </ProtectedRoute>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export { RouterApp }