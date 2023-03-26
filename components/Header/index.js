import styles from './Header.module.css'

export default function Header(){

    return(
        <>
        <div className={styles.navBar}>
         <h2 className = {styles.title}>Dashboard</h2>
         <div className = {styles.searchBar}></div>
        </div>

            <div className={styles.container}> 
             <h3>Welcome Back!</h3>
                <p>Statistics Canada ensures Canadians have the key information on Canada's economy, society and environment 
                <br/> that they require to function effectively as citizens and decision makers. 
                </p>
            </div>
        </>
    )
}