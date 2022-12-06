import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1MbaIlUfDdIvEs0ZUDSZEFooN9NMpuX6F/view?usp=sharing"
        // onClick={() => {
        //   Notification.requestPermission().then((perm) => {
        //     if (perm === "granted") {
        //       new Notification("Sachin's Portfolio", {
        //         body: "Seems like you are looking for my CV but unfortunately I don't have one yet. I will update this section as soon as I have one. Thank you hope you enjoy my portfolio.",
        //         vibrate: true,
        //         timestamp: true,
        //         tag: "Sachin's Portfolio",
        //       });
        //     } else {
        //       alert(
        //         "Seems like we don't have access to send notifications. So i we just wanted to let you know that I don't have a CV yet. I will update this section as soon as I have one. Thank you hope you enjoy my portfolio."
        //       );
        //     }
        //   });
        // }}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <a href={"#contact"} className="btn">
        Say, Hello...
      </a>
    </div>
  );
};

export default CTA;
