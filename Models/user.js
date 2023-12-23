// Mongoose 패키지 가져옴.
const mongoose = require("mongoose");

// mongoDB에 저장될 데이터의 구조, 스키마를 정의
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "User must type name"], 
        unique: true, 
    }, 
    token: { // 소켓 연결 ID 필드
        type: String, 
    }, 
    online: {
        type: Boolean,
        default: false, 
    },
});

// 유저 스키마를 기반으로 'User' 모델을 생성하여 export
module.exports = mongoose.model("User", userSchema);