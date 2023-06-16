import { Routes, Route } from "react-router-dom"
import { publicRoutes } from "./route"

const Index = () => {
  return (
    <>
        <Routes>
            {
                publicRoutes.map(({path, component: Component}) => (
                    <Route path={path} element={
                        <Component />
                    } />
                ))
            }

            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    </>
  )
}

export default Index