import React from "react";
import { isAuthenticated } from "../../api/apiAuth";
import Link from "next/link";

const AdminDashboard = () => {
  const user = isAuthenticated().user;
  const { _id, name, role, email } = user;
  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link href="/admin/category/create">Create Category</Link>
          </li>

          <li className="list-group-item">
            <Link href="/admin/product/create">Create Product</Link>
          </li>
          <li className="list-group-item">
            <Link href="/admin/orders">View Orders</Link>
          </li>
          <li className="list-group-item">
            <Link href="/admin/product/manage">Manage Products</Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </>
  );
};

export default AdminDashboard;