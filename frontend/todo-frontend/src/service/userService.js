const userService = {
    getUser: () => {
        const db = localStorage.getItem("database"); // 서버 요청
        const { author } = JSON.parse(db);
        return author;
    }
};

export default userService;
