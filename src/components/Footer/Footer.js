import React from "react";
import styled from "styled-components";


function Footer() {
    return ( 
        <FooterEnd>
            <h3 className="footerTitle">Bạn có câu hỏi? Liên hệ với chúng tôi</h3>
            <div className="footerAbout">
                <div className="footerItem">
                    <a href="">Câu hỏi thường gặp</a>
                    <a href="">Trung tâm đa phương tiện</a>
                    <a href="">Các cách xem</a>
                    <a href="">Tùy chọn cookie</a>
                    <a href="">Kiểm tra tốc độ</a>
                </div>
                <div className="footerItem">
                    <a href="">Trung tâm trợ giúp</a>
                    <a href="">Quan hệ với nhà đầu tư</a>
                    <a href="">Điều khoản sử dụng</a>
                    <a href="">Thông tin doanh nghiệp</a>
                    <a href="">Thông báo pháp lý</a>
                </div>
                <div className="footerItem">
                    <a href="">Tài khoản</a>
                    <a href="">Việc làm</a>
                    <a href="">Quyền riêng tư</a>
                    <a href="">Liên hệ với chúng tôi</a>
                    <a href="">Chỉ có trên Netflix</a>
                </div>
            </div>
        </FooterEnd>
     );
}

export default Footer;

const FooterEnd = styled.div`
    display:flex;
    justify-content:left;
    flex-direction:column;
    background-color: var(--color-backgruond);
    border-top: 10px solid rgb(35,35,35);
    padding: 60px 10px;
    .footerTitle {
        color: var(--color-white);
        margin: 20px 0;
        text-align: center;
        @media only screen and (max-width: 600px) {
            font-size: 14px;
            line-height: 14px;
        }
    }
    .footerAbout {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .footerItem{
            display: flex;
            justify-content: left;
            align-items: left;
            flex-direction: column;
            a{
                color: var(--color-white);
                word-spacing:4px;
                margin: 8px 0px;
                font-size:14px;
                line-height:14px;
                @media only screen and (max-width: 600px) {
                    font-size: 10px;
                    line-height: 12px;
                }
                
            }
           
            
        }

    }


`