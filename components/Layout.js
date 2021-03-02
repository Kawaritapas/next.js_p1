import styles from "/home/tapas/Desktop/next/next-tu/styles/Layout.module.css"
import Nav from "../components/Nav";

export default function Layout({children}) {
    return (
        <>
        <Nav></Nav>
        <div className = {styles.container}>
            <link rel="stylesheet" href ="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
                  
            <main className = {styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}
