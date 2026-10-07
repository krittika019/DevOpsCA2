import chat_pic from "@/assets/chatting.png" ;

const Logo = () => {
  return (
    <div className="flex p-5  justify-start items-center gap-2">
      <img src={chat_pic} alt="chatting photo" style={{ width: '65px', height: '65px' }}/>
      <span className="text-2xl font-semibold text-purple-200">SYMBICONNECT</span>
    </div>
  );
};

export default Logo;
