import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import styles from './Users.module.scss';

const Users = () => {

    return(
        <Fragment>
            <div><h2>Users</h2></div>

            <div className={styles.box}>
                <div className={styles.box1}>
                    <img src="src/assets/Users/users.svg" alt="" />
                    <p>Users</p>
                    <span>2,453</span>
                </div>
                <div className={styles.box2}>
                    <img src="src/assets/Users/active_users.svg" alt="" />
                    <p>Active Users</p>
                    <span>2,453</span>
                </div>
                <div className={styles.box3}>
                    <img src="src/assets/Users/users_with_loan.svg" alt="" />
                    <p>Users with loan</p>
                    <span>2,453</span>
                </div>
                <div className={styles.box4}>
                    <img src="src/assets/Users/users_with_savings.svg" alt="" />
                    <p>Users with savings</p>
                    <span>2,453</span>
                </div>
                
            </div>

            <div className={styles.table}>
                <table>
                    <tr>
                        <th><span>ORGANIZATION</span> <img src="src/assets/Users/order_of_arr.svg" alt="" /></th>
                        <th><span>USERNAME</span> <img src="src/assets/Users/order_of_arr.svg" alt="" /></th>
                        <th><span>EMAIL</span> <img src="src/assets/Users/order_of_arr.svg" alt="" /></th>
                        <th><span>PHONE NUMBER</span> <img src="src/assets/Users/order_of_arr.svg" alt="" /></th>
                        <th><span>DATE JOINED</span> <img src="src/assets/Users/order_of_arr.svg" alt="" /></th>
                        <th><span>STATUS</span> <img src="src/assets/Users/order_of_arr.svg" alt="" /></th>
                        <th><span></span></th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.inactive}>Inactive</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.pending}>Pending</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.blacklisted}>Blacklisted</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.active}>Active</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.inactive}>Inactive</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.pending}>Pending</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.blacklisted}>Blacklisted</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.active}>Active</span></td>
                        <td><span><img src="src/assets/Users/threeDot.svg" alt="" /></span></td>
                    </tr>
                </table>
            </div>

            <div></div>
        </Fragment>
    )
}

export default Users;