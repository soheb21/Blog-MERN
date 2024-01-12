exports.register = async (req, res) => {
    try {

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Fetch Data" });
        console.log("getBlog error", error)
    }
}
exports.login = async (req, res) => {
    try {

    } catch (error) {
        res.status(401).json({ success: false, message: "Failed to Fetch Data" });
        console.log("getBlog error", error)
    }
}
