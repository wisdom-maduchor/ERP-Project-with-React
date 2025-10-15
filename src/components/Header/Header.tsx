
import styles from './Header.module.scss'
import Body from '../Dashboard/Body'

const Header = () => {
    return (
        <div>
            <div className={styles.headerStyle}>
                <div className={styles.logo}>
                    <img src='src/assets/Header/logo.svg'/>
                </div>
                <div className={styles.searchBar}>
                    <form action="">
                        <input type="search" placeholder='Search for anything' />
                        <button>
                            <img src="src/assets/Header/search.svg" alt="" />
                        </button>
                    </form>
                </div>
                <div className={styles.rightHeader}>
                    <a href="">Docs</a>
                    <img src="src/assets/Header/notification_bell.svg" alt="" />
                    <form action="">
                        <input type="image" src="src/assets/Header/avatar.svg" alt="" />
                        <select name="name" id="name">
                            <option value="Adedeji">Adedeji</option>
                            <option value="Wisdom">Wisdom</option>
                        </select>
                    </form>
                </div>
            </div>

            {/* <div className={styles.bodyStyle}></div> */}
            <Body />
        </div>
    )
}

export default Header