import React from 'react';
import './style.css';
import { TopMem } from "../Constant/Variable"
import axios from "axios"
import { useState } from 'react'

const getUser = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

function InterchangeSort(a, n, ans, avt, id) {
    var i, j
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (a[i].so_bai_viet < a[j].so_bai_viet) {
                var temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
        ans.push(a[i].ten_tai_khoan)
        avt.push(a[i].avatar)
        id.push(a[i]._id)
    }
}

function ShowThongKe() {
    const [User, setUser] = useState("")
    if (User === "") {
        getUser().then((res) => {
            setUser(res)
        })
    }
    let ans = []
    let avt = []
    let id = []
    InterchangeSort(User, User.length, ans, avt, id)

    console.log("ans" + ans)
    console.log("avt" + avt)
    console.log("id" + id)

    return (
        <React.Fragment>
            <div className="top-thang">
                <h3 className="topdanhhaithang">Top danh hài:</h3>

                <div className="top-mem">
                    <div className="mem">
                        <h3>{1}</h3>
                        <img src={avt[0]} alt="" className="top-avt" />
                        <h3>{ans[0]}</h3>

                    </div>
                    <div className="mem">
                        <h3>{2}</h3>
                        <img src={avt[1]} alt="" className="top-avt" />
                        <h3>{ans[1]}</h3>
                    </div>

                    <div className="mem">
                        <h3>{3}</h3>
                        <img src={avt[2]} alt="" className="top-avt" />
                        <h3>{ans[2]}</h3>
                    </div>

                    <div className="mem">
                        <h3>{4}</h3>
                        <img src={avt[3]} alt="" className="top-avt" />
                        <h3>{ans[3]}</h3>
                    </div>


                    <div className="mem">
                        <h3>{5}</h3>
                        <img src={avt[4]} alt="" className="top-avt" />
                        <h3>{ans[4]}</h3>
                    </div>
                </div>

            </div>
            <div className="ads">
                <p>Ads</p>
                <div className="ads-info" style={{ backgroundImage: "url(source/ads.png)" }}></div>
            </div>
        </React.Fragment>
    )
}
export default ShowThongKe