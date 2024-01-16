import "./App.css";
import data from "./data";

function App() {
  const rawData = Object.keys(data);
  // console.log(rawData);
  // console.log(data['text']);

  const renderReplies = (arr) => {
    return (
      <div>
        {arr.map((reply, index) => {
          console.log(reply);
          return (
            <>
              <div
                style={{
                  marginLeft: `${index * 50}px`,
                }}
                className="author"
              >
                <div className="avatar">
                  <img src={reply.author.avatar} alt="" />
                </div>
                <div className="name">{reply.author.name}</div>
                {reply?.text?.length > 0 && !Array.isArray(reply.text) && (
                  <div className="post">
                    <div className="text">
                      <p>{reply.text}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {Object.keys(data).map((key, index) => {
        console.log(data[key]);
        return (
          <>
            <div className="author">
              <div className="avatar">
                <img src={data[key].avatar} alt="" />
              </div>
              <div className="name">{data[key].name}</div>
            </div>
            {data[key].length > 0 && !Array.isArray(data[key]) && (
              <div className="post">
                <div className="text">
                  <p>{data[key]}</p>
                </div>
              </div>
            )}
            {Array.isArray(data[key]) && renderReplies(data[key])}
          </>
        );
      })}
    </>
  );
}

export default App;
