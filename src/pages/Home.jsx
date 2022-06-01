import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = e => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Room created successfully");
  };
  const joinRoom = e => {
    if (!roomId || !username) {
      toast.error("Room id and user name are required");
      return;
    }
    //Redirect to room
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };
  const handleInputEnter = e => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <h4>Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={e => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="User Name"
            onChange={e => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
        </div>
        <div className="joinBtnF">
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;{" "}
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💖 &nbsp; By{" "}
          <a href="https://github.com/ashishkk22">Ashish Kachhadiya</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
