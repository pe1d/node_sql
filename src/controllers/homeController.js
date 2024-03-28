import db from "../models";
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let postLogin = async (req, res) => {
    try {
        // console.log(req.body);
        if (req.body.email === 'admin@gmail.com' && req.body.password === '123456') {
            let allUsers = await db.Driver.findAll();
            // console.log(allUsers);
            return res.render("test/about.ejs", {
                dataTable: allUsers,
            });
        } else {
            return res.render('homepage.ejs', {
                message: 'Vui long Dang Nhap tai khoan admin'
            });
        }
    } catch (e) {
        console.log(e);
    }
}
// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    postLogin
}
