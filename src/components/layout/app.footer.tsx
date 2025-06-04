const AppFooter = () => {
    return (
        <div className="text-center my-3">
            {/*    Copyright © {new Date().getFullYear()} Hỏi Dân IT vs Eric. Made with <span style={{*/}
            {/*    color: "#e25555"*/}
            {/*}}>♥</span> in VietNam*/}
            My Github: <a href={"https://github.com/FongFox"}
                          target={"_blank"}
                          style={{textDecoration: "none"}}>FongFox</a>
        </div>
    )
}

export default AppFooter;
