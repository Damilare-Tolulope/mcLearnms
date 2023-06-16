import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div>
      <Header />
        <main className="pt-10 md:pt-28">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout