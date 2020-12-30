import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container mt-5">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-3 col-md-3 col-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                        <div className="list1">
                            <ul>
                                <li><a href="">iSchool for recruiting</a></li>
                                <li><a href="">Teach on iSchool</a></li>
                                <li><a href="">Get the app</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                        <div className="list2">
                            <ul>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Help and Support</a></li>
                                <li><a href="">Affiliate</a></li>                            
                            </ul>
                        </div>                        
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                        <div className="list3">
                            <ul>
                                <li><a href="">Terms</a></li>
                                <li> <a href="">Privacy Policy and Cookie policy</a></li>
                                <li><a href="">Sitemap</a></li>
                                <li><a href="">Featured courses </a></li>                            
                            </ul>
                        </div>                        
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 col-sm-12 d-flex justify-content-center">
                        <div className="list4">
                            <h4>One's Employment,</h4>
                            <h4 className="fame">Our Fame</h4>    
                            <div className="footer-logo mt-3 ml-5">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3Ljc1cHgiIGhlaWdodD0iOTcuNzVweCIgdmlld0JveD0iMCAwIDk3Ljc1IDk3Ljc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny43NSA5Ny43NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTQ4Ljg3NSwwQzIxLjg4MiwwLDAsMjEuODgyLDAsNDguODc1UzIxLjg4Miw5Ny43NSw0OC44NzUsOTcuNzVTOTcuNzUsNzUuODY4LDk3Ljc1LDQ4Ljg3NVM3NS44NjgsMCw0OC44NzUsMHoNCgkJIE02Ny41MjEsMjQuODlsLTYuNzYsMC4wMDNjLTUuMzAxLDAtNi4zMjYsMi41MTktNi4zMjYsNi4yMTV2OC4xNWgxMi42NDFMNjcuMDcsNTIuMDIzSDU0LjQzNnYzMi43NThINDEuMjUxVjUyLjAyM0gzMC4yMjlWMzkuMjU4DQoJCWgxMS4wMjJ2LTkuNDE0YzAtMTAuOTI1LDYuNjc1LTE2Ljg3NSwxNi40Mi0xNi44NzVsOS44NTEsMC4wMTVWMjQuODlMNjcuNTIxLDI0Ljg5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />

                                <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTExNi44ODY3MTkgMTk5LjYwMTU2MmMuMTEzMjgxIDIuNTE5NTMyLjE2Nzk2OSA1LjA1MDc4Mi4xNjc5NjkgNy41OTM3NSAwIDc3LjY0NDUzMi01OS4xMDE1NjMgMTY3LjE3OTY4OC0xNjcuMTgzNTk0IDE2Ny4xODM1OTRoLjAwMzkwNi0uMDAzOTA2Yy0zMy4xODM1OTQgMC02NC4wNjI1LTkuNzI2NTYyLTkwLjA2NjQwNi0yNi4zOTQ1MzEgNC41OTc2NTYuNTQyOTY5IDkuMjc3MzQzLjgxMjUgMTQuMDE1NjI0LjgxMjUgMjcuNTMxMjUgMCA1Mi44NjcxODgtOS4zOTA2MjUgNzIuOTgwNDY5LTI1LjE1MjM0NC0yNS43MjI2NTYtLjQ3NjU2Mi00Ny40MTAxNTYtMTcuNDY0ODQzLTU0Ljg5NDUzMS00MC44MTI1IDMuNTgyMDMxLjY4NzUgNy4yNjU2MjUgMS4wNjI1IDExLjA0Mjk2OSAxLjA2MjUgNS4zNjMyODEgMCAxMC41NTg1OTMtLjcyMjY1NiAxNS40OTYwOTMtMi4wNzAzMTItMjYuODg2NzE4LTUuMzgyODEzLTQ3LjE0MDYyNC0yOS4xNDQ1MzEtNDcuMTQwNjI0LTU3LjU5NzY1NyAwLS4yNjU2MjQgMC0uNTAzOTA2LjAwNzgxMi0uNzUgNy45MTc5NjkgNC40MDIzNDQgMTYuOTcyNjU2IDcuMDUwNzgyIDI2LjYxMzI4MSA3LjM0NzY1Ny0xNS43NzczNDMtMTAuNTI3MzQ0LTI2LjE0ODQzNy0yOC41MjM0MzgtMjYuMTQ4NDM3LTQ4LjkxMDE1NyAwLTEwLjc2NTYyNCAyLjkxMDE1Ni0yMC44NTE1NjIgNy45NTcwMzEtMjkuNTM1MTU2IDI4Ljk3NjU2MyAzNS41NTQ2ODggNzIuMjgxMjUgNTguOTM3NSAxMjEuMTE3MTg3IDYxLjM5NDUzMi0xLjAwNzgxMi00LjMwNDY4OC0xLjUyNzM0My04Ljc4OTA2My0xLjUyNzM0My0xMy4zOTg0MzggMC0zMi40Mzc1IDI2LjMxNjQwNi01OC43NTM5MDYgNTguNzY1NjI1LTU4Ljc1MzkwNiAxNi45MDIzNDQgMCAzMi4xNjc5NjggNy4xNDQ1MzEgNDIuODkwNjI1IDE4LjU2NjQwNiAxMy4zODY3MTktMi42NDA2MjUgMjUuOTU3MDMxLTcuNTMxMjUgMzcuMzEyNS0xNC4yNjE3MTktNC4zOTQ1MzEgMTMuNzE0ODQ0LTEzLjcwNzAzMSAyNS4yMjI2NTctMjUuODM5ODQ0IDMyLjUgMTEuODg2NzE5LTEuNDIxODc1IDIzLjIxNDg0NC00LjU3NDIxOSAzMy43NDIxODctOS4yNTM5MDYtNy44NjMyODEgMTEuNzg1MTU2LTE3LjgzNTkzNyAyMi4xMzY3MTktMjkuMzA4NTkzIDMwLjQyOTY4N3ptMCAwIi8+PC9zdmc+" />

                                <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTUuNDI1NzgxIDQwNS4wNTA3ODFjLS4wMDM5MDYgMCAuMDAzOTA3IDAgMCAwaC0uMDYyNWMtMjUuNjQ0NTMxLS4wMTE3MTktNTAuODQzNzUtNi40NDE0MDYtNzMuMjIyNjU2LTE4LjY0NDUzMWwtODEuMjIyNjU2IDIxLjMwMDc4MSAyMS43MzgyODEtNzkuMzc1Yy0xMy40MTAxNTYtMjMuMjI2NTYyLTIwLjQ2NDg0NC00OS41NzgxMjUtMjAuNDUzMTI1LTc2LjU3NDIxOS4wMzUxNTYtODQuNDUzMTI0IDY4Ljc2OTUzMS0xNTMuMTYwMTU2IDE1My4yMjI2NTYtMTUzLjE2MDE1NiA0MC45ODQzNzUuMDE1NjI1IDc5LjQ1NzAzMSAxNS45Njg3NSAxMDguMzgyODEzIDQ0LjkxNzk2OSAyOC45Mjk2ODcgMjguOTUzMTI1IDQ0Ljg1MTU2MiA2Ny40Mzc1IDQ0LjgzNTkzNyAxMDguMzYzMjgxLS4wMzUxNTYgODQuNDU3MDMyLTY4Ljc3NzM0MyAxNTMuMTcxODc1LTE1My4yMTg3NSAxNTMuMTcxODc1em0wIDAiLz48cGF0aCBkPSJtMjYxLjQ3NjU2MiAxMjQuNDY4NzVjLTcwLjI0NjA5MyAwLTEyNy4zNzUgNTcuMTA1NDY5LTEyNy40MDYyNSAxMjcuMzAwNzgxLS4wMDc4MTIgMjQuMDU0Njg4IDYuNzI2NTYzIDQ3LjQ4MDQ2OSAxOS40NzI2NTcgNjcuNzVsMy4wMjczNDMgNC44MTY0MDctMTIuODY3MTg3IDQ2Ljk4MDQ2OCA0OC4xOTkyMTktMTIuNjQwNjI1IDQuNjUyMzQ0IDIuNzU3ODEzYzE5LjU1MDc4MSAxMS42MDE1NjIgNDEuOTY0ODQzIDE3LjczODI4MSA2NC44MTY0MDYgMTcuNzQ2MDk0aC4wNTA3ODFjNzAuMTkxNDA2IDAgMTI3LjMyMDMxMy01Ny4xMDkzNzYgMTI3LjM1MTU2My0xMjcuMzA4NTk0LjAxMTcxOC0zNC4wMTk1MzItMTMuMjIyNjU3LTY2LjAwMzkwNi0zNy4yNjU2MjYtOTAuMDY2NDA2LTI0LjA0Mjk2OC0yNC4wNjI1LTU2LjAxOTUzMS0zNy4zMjQyMTktOTAuMDMxMjUtMzcuMzM1OTM4em03NC45MDYyNSAxODIuMDM1MTU2Yy0zLjE5MTQwNiA4LjkzNzUtMTguNDg0Mzc0IDE3LjA5NzY1Ni0yNS44Mzk4NDMgMTguMTk5MjE5LTYuNTk3NjU3Ljk4NDM3NS0xNC45NDE0MDcgMS4zOTQ1MzEtMjQuMTEzMjgxLTEuNTE1NjI1LTUuNTYyNS0xLjc2NTYyNS0xMi42OTE0MDctNC4xMjEwOTQtMjEuODI4MTI2LTguMDYyNS0zOC40MDIzNDMtMTYuNTc4MTI1LTYzLjQ4NDM3NC01NS4yMzQzNzUtNjUuMzk4NDM3LTU3Ljc4OTA2Mi0xLjkxNDA2My0yLjU1NDY4OC0xNS42MzI4MTMtMjAuNzUzOTA3LTE1LjYzMjgxMy0zOS41OTM3NSAwLTE4LjgzNTkzOCA5Ljg5MDYyNi0yOC4wOTc2NTcgMTMuMzk4NDM4LTMxLjkyNTc4MiAzLjUxMTcxOS0zLjgzMjAzMSA3LjY2MDE1Ni00Ljc4OTA2MiAxMC4yMTA5MzgtNC43ODkwNjIgMi41NTA3ODEgMCA1LjEwNTQ2OC4wMjM0MzcgNy4zMzU5MzcuMTMyODEyIDIuMzUxNTYzLjExNzE4OCA1LjUwNzgxMy0uODk0NTMxIDguNjEzMjgxIDYuNTcwMzEzIDMuMTkxNDA2IDcuNjY0MDYyIDEwLjg0NzY1NiAyNi41IDExLjgwNDY4OCAyOC40MTQwNjIuOTU3MDMxIDEuOTE3OTY5IDEuNTkzNzUgNC4xNTIzNDQuMzIwMzEyIDYuNzA3MDMxLTEuMjc3MzQ0IDIuNTU0Njg4LTUuNTE5NTMxIDguMDY2NDA3LTkuNTcwMzEyIDEzLjA4OTg0NC0xLjY5OTIxOSAyLjEwNTQ2OS0zLjkxNDA2MyAzLjk4MDQ2OS0xLjY3OTY4OCA3LjgxMjUgMi4yMzA0NjkgMy44MjgxMjUgOS45MTc5NjkgMTYuMzYzMjgyIDIxLjI5Njg3NSAyNi41MTE3MTkgMTQuNjI1IDEzLjAzOTA2MyAyNi45NjA5MzggMTcuMDc4MTI1IDMwLjc4OTA2MyAxOC45OTYwOTQgMy44MjQyMTggMS45MTQwNjIgNi4wNTg1OTQgMS41OTM3NSA4LjI5Mjk2OC0uOTU3MDMxIDIuMjMwNDY5LTIuNTU0Njg4IDkuNTcwMzEzLTExLjE3NTc4MiAxMi4xMjEwOTQtMTUuMDA3ODEzIDIuNTUwNzgyLTMuODMyMDMxIDUuMTA1NDY5LTMuMTkxNDA2IDguNjEzMjgyLTEuOTE0MDYzIDMuNTExNzE4IDEuMjczNDM4IDIyLjMzMjAzMSAxMC41MzUxNTcgMjYuMTYwMTU2IDEyLjQ0OTIxOSAzLjgyODEyNSAxLjkxNzk2OSA2LjM3ODkwNiAyLjg3NSA3LjMzNTkzNyA0LjQ3MjY1Ny45NjA5MzggMS41OTc2NTYuOTYwOTM4IDkuMjU3ODEyLTIuMjMwNDY5IDE4LjE5OTIxOHptMCAwIi8+PC9zdmc+" />
                            </div>
                        </div>    
                    </div>   
                </div>
            </div>
            <div style={{background:'#0C0C0C', height:'100px'}}>
                <p className="text-white text-center">www.amariSchool.com</p>
            </div>
        </div>
    );
};

export default Footer;