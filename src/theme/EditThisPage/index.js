import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import EditThisPage from '@theme-original/EditThisPage';
import emailjs from 'emailjs-com';

export default function EditThisPageWrapper(props) {
  const [isShown, setIsShown] = useState(false);
  const form = useRef();
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mtelzo7', 'template_063e8sg', form.current, 'user_DU4Yp7qvwGGHhLkYsHXSQ')
      .then((result) => {
        alert("피드백을 전송했습니다.");
        setIsShown(false);
        console.log(result.text);
      }, (error) => {
          alert("피드백을 전송을 실패했습니다.");
          console.log(error.text);
      });
  };
  const isBrowser = useIsBrowser();
  const location = isBrowser ? window.location.href : 'fetching location...';
  return (
    <>
      {/* <EditThisPage {...props} /> */}
      <button class='fd-btn' onClick={handleClick}>
        <img src="/img/feedback-ico.svg" alt="feedback" class='feedback-ico'/>
        피드백 보내기
      </button>
      {isShown && (
        <div class='feedback'>
          <form ref={form} onSubmit={sendEmail}>
            <h3>피드백 보내기</h3>
            <label>이름</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label id='message'>메세지</label>
            <textarea name="message" class='message'>
              {location + "\n\n메시지를 남겨주세요."}
            </textarea>
            <input type="submit" value="보내기" />
          </form>
        </div>
      )}
    </>
  );
}
