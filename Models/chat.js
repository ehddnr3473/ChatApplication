const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        chat: String, 
        user: {
            id: {
                type: mongoose.Schema.ObjectId, 
                ref: "User", // 해당 필드가 'User' 모델을 참조한다고 명시
            }, 
            name: String, 
        },
    },
    { timestamp: true } // option, 채팅이 생성도딘 시간을 기록
);

module.exports = mongoose.model("Chat", chatSchema);