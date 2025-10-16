
import styles from './Body.module.scss'
import Users from '../SideNav/Users';

const Body = () => {
    return (
        <div className={styles.bodyStyle}>
            <div className={styles.sideBar}>
                <div>
                    <form action="" className={styles.form}>
                        <img className={styles.img} src="src/assets/Header/switch_organization.svg" alt="" />
                        <select name="" id="">
                            <option value="switch">Switch Organization</option>
                        </select>
                    </form>
                </div>
                <div>
                    <img src="src/assets/Header/Dashboard.svg" alt="" />
                    <a href="">Dashboard</a>
                </div>

                <p>CUSTOMERS</p>
                <div>
                    <img src="src/assets/Header/users.svg" alt="" />
                    <a href="">Users</a>
                </div>
                <div>
                    <img src="src/assets/Header/garantor.svg" alt="" />
                    <a href="">Guarantors</a>
                </div>
                <div>
                    <img src="src/assets/Header/loans.svg" alt="" />
                    <a href="">Loans</a>
                </div>
                <div>
                    <img src="src/assets/Header/decision_model.svg" alt="" />
                    <a href="">Decision Models</a>
                </div>
                <div>
                    <img src="src/assets/Header/savings.svg" alt="" />
                    <a href="">Savings</a>
                </div>
                <div>
                    <img src="src/assets/Header/loan_request.svg" alt="" />
                    <a href="">Loan Requests</a>
                </div>
                <div>
                    <img src="src/assets/Header/whiteList.svg" alt="" />
                    <a href="">Whitelists</a>
                </div>
                <div>
                    <img src="src/assets/Header/karma.svg" alt="" />
                    <a href="">Karma</a>
                </div>

                <p>BUSINESSES</p>
                <div>
                    <img src="src/assets/Header/organization.svg" alt="" />
                    <a href="">Organization</a>
                </div>
                <div>
                    <img src="src/assets/Header/loan_products.svg" alt="" />
                    <a href="">Loan Products</a>
                </div>
                <div>
                    <img src="src/assets/Header/saving_product.svg" alt="" />
                    <a href="">Savings Products</a>
                </div>
                <div>
                    <img src="src/assets/Header/fee_and_charges.svg" alt="" />
                    <a href="">Fee and Charges</a>
                </div>
                <div>
                    <img src="src/assets/Header/transactions.svg" alt="" />
                    <a href="">Transactions</a>
                </div>
                <div>
                    <img src="src/assets/Header/services.svg" alt="" />
                    <a href="">Services</a>
                </div>
                <div>
                    <img src="src/assets/Header/service_account.svg" alt="" />
                    <a href="">Service Account</a>
                </div>
                <div>
                    <img src="src/assets/Header/settlement.svg" alt="" />
                    <a href="">Settlements</a>
                </div>
                <div>
                    <img src="src/assets/Header/report.svg" alt="" />
                    <a href="">Reports</a>
                </div>

                <p>SETTINGS</p>
                <div>
                    <img src="src/assets/Header/preferences.svg" alt="" />
                    <a href="">Preferences</a>
                </div>
                <div>
                    <img src="src/assets/Header/fees_and_pricing.svg" alt="" />
                    <a href="">Fees and Pricing</a>
                </div>
                <div>
                    <img src="src/assets/Header/audit_logs.svg" alt="" />
                    <a href="">Audit Logs</a>
                </div>
            </div>

            <div className={styles.content}>
                <Users />
            </div>
        </div>
    )
};

export default Body