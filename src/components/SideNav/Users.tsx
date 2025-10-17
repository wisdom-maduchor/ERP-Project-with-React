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
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.pending}>Pending</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.blacklisted}>Blacklisted</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.active}>Active</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.inactive}>Inactive</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.pending}>Pending</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.blacklisted}>Blacklisted</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td><span className={styles.active}>Active</span></td>
                        <td><a href=''><img src="src/assets/Users/threeDot.svg" alt="" /></a></td>
                    </tr>
                </table>
            </div>

            <div className={styles.paginator}>
                <div className={styles.pageLeft}>
                    <form action="">
                        <span>Showing</span>
                        <span className={styles.select}>
                            <select name="paginator" id="paginator">
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                            </select>
                        </span>
                        <span>out of 100</span>
                    </form>
                </div>

                <div className={styles.pageRight}>
                    <img src="src/assets/Users/prev_btn.svg" alt="" />
                    <span> 1 </span> 
                    <span> 2 </span> 
                    {/* <span><img src="src/assets/Users/horizontal_Dots.svg" alt="" /></span>  */}
                    <span> ... </span>
                    <span> 15 </span>
                    <span> 16 </span>
                    <img src="src/assets/Users/next_btn.svg" alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default Users;