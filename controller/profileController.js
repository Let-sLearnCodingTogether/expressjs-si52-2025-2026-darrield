export const publicProfile = (req,res) => {
    const username = req.params.username;
    res.render('public-profile', {
        title : username,
        username : username,
        bio : "Saya adalah manusia"
    })
}

export const namaProfile = (req,res) => {
    const username = req.params.username;
    res.render('nama', {
        username : username
    })
}