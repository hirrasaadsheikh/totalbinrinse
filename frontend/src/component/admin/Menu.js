import React from 'react'

const Menu = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-info elevation-4">

                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">

                        <div className="info">
                            <div style={{fontWeight: "bold", color: "white", fontSize: "30px"}}  className="d-block">Admin</div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                            <li className="nav-item has-treeview menu-open">
                                <div className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </div>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Tables
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/tables/simple.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Simple Tables</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/tables/data.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>DataTables</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                        Calendar
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="nav-link">
                                    <i className="nav-icon far fa-envelope" />
                                    <p>
                                        Mailbox
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inbox</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Emails</p>

                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Pages
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/examples/profile.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Profile</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="pages/examples/projects.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Services</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project_add.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Service Add</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project_edit.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Service Edit</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project_detail.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Service Detail</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/contacts.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Contacts</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-plus-square" />
                                    <p>
                                        Account
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/examples/login.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Login</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/register.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Register</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/forgot-password.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Forgot Password</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="pages/examples/404.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Error 404</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}
export default Menu;
