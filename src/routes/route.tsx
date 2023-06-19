import { Routes, Route } from "react-router-dom"
import { publicRoutes } from "./index"
import Layout from "../layouts/Layout"

const RouteComponent = () => {
  return (
    <>
        <Routes>
            {
                publicRoutes.map(({path, component: Component}) => (
                    <Route key={path} path={path} element={
                        <Layout>
                            <Component />
                        </Layout>
                    } />
                ))
            }

            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    </>
  )
}

export default RouteComponent