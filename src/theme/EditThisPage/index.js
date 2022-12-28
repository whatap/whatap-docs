import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import EditThisPage from '@theme-original/EditThisPage';
import emailjs from 'emailjs-com';
import Translate, { translate } from "@docusaurus/Translate";

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
        alert(
          translate({
            id: "theme.EditThisPage.feedbacksuccess",
            message: "피드백을 전송했습니다.",
            description: "Your feedback has been sent.",
          })
        );
        setIsShown(false);
        console.log(result.text);
      }, (error) => {
          alert(
            translate({
              id: "theme.EditThisPage.feedbackfail",
              message: "피드백 전송을 실패했습니다.",
              description: "Failed to send feedback.",
            })
          );
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
        {
          translate({
            id: "theme.EditThisPage.feedbackbtnTitle",
            message: "피드백 보내기",
            description: "Send feedback title.",
          })
        }
      </button>
      {isShown && (
        <div class='feedback'>
          <form ref={form} onSubmit={sendEmail}>
            <h3>
            {
              translate({
                id: "theme.EditThisPage.feedbackTitle",
                message: "피드백 보내기",
                description: "Send feedback title.",
              })
            }
            </h3>
            <label>
            {
              translate({
                id: "theme.EditThisPage.feedbackName",
                message: "이름",
                description: "Input your name.",
              })
            }
            </label>
            <input type="text" name="user_name" />
            <label>
            {
              translate({
                id: "theme.EditThisPage.feedbackEmail",
                message: "이메일",
                description: "Input your email.",
              })
            }
            </label>
            <input type="email" name="user_email" />
            <label id='message'>
            {
              translate({
                id: "theme.EditThisPage.feedbackMessage",
                message: "메시지",
                description: "Input your message.",
              })
            }
            </label>
            <textarea name="message" class='message'>
              {location + 
                translate({
                  id: "theme.EditThisPage.feedbackInputmessage",
                  message: "\n\n메시지를 입력하세요.",
                  description: "Input your message contents.",
                })
              }
            </textarea>
            <input type="submit" value={
              translate({
                id: "theme.EditThisPage.feedbackbtnSend",
                message: "보내기",
                description: "Send button",
              })
            } />
          </form>
        </div>
      )}
    </>
  );
}
