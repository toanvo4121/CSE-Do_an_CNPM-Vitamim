import React from 'react';
import './style.css';
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from 'react'

const userId = JSON.parse(localStorage.getItem('userpage'))

const getUser = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)

function ViewUserPage() {
    const [User,setUser] = useState("")

    const [Posts,setPosts] = useState("")
    if (Posts === "") {
        getMims().then((res) => {
            setPosts(res.filter(q=>q.user == userId))  
        })
    };
    if (User === "") {
        getUser().then((res) => {
            setUser(res.filter(p=>p._id == userId))
            
        })
    };
    let ttk =User[0]
    console.log(ttk.gioi_tinh)
        return (
            <div className="ViewOwnPage-overlay">
                <div className="ownpage-header">
                    <div className="ownpage-user">
                        <img src={User.avatar} className="ownpage-avt" alt="" />
                        <div className="ownpage-name"><p className="name-user">{User.ten_tai_khoan}</p></div>
                    </div>
                    <div className="ownpage-info">
                        <div className="ownpage-header-subcrible">
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#efb14d' }}>{Posts.length}</p><br />Số bài viết </div>
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#a1a1ef' }}>{User.ngay_sinh+"/"+User.thang_sinh+"/"+User.nam_sinh}</p><br />Sinh nhật</div>
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#e16de1' }}>{User.gioi_tinh}</p><br />Giới tính</div>
                        </div>
                        <div className="ownpage-info-border"><p className="ownpage-info-chamngon">{User.slogan}</p></div>
                    </div>
                </div>
            </div>
        )
}
export default ViewUserPage