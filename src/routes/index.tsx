import Layout from "layouts/Layout"
import { Routes, Route } from "react-router-dom"
import { publicRoutes } from "./route"

const Index = () => {
  return (
    <>
        <Routes>
            {
                publicRoutes.map(({path, component: Component}) => (
                    <Route path={path} element={
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

export default Index