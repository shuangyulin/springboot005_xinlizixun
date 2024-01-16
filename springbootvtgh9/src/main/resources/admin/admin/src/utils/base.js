const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootvtgh9/",
            name: "springbootvtgh9",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootvtgh9/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生心理咨询评估系统"
        } 
    }
}
export default base
