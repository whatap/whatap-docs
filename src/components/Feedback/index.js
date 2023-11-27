import React, { useState, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
import Translate, { translate } from "@docusaurus/Translate";
import { GoogleFormProvider, useGoogleForm, useShortAnswerInput } from 'react-google-forms-hooks'
import form from './form.json'

import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import ShortAnswerInput from './components/ShortAnswerInput'
import LongAnswerInput from './components/LongAnswerInput'
import RadioGridInput from './components/RadioGridInput'
import CheckboxGridInput from './components/CheckboxGridInput'
import DropdownInput from './components/DropdownInput'
import LinearGrid from './components/LinearGrid'

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
`

const QuestionHelp = styled.p`
  font-size: 0.8rem;
  color: #5c5c5c;
  margin-top: 0px;
`

const Questions = () => {
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field

        let questionInput = null
        switch (field.type) {
          case 'CHECKBOX':
            questionInput = <CheckboxInput id={id} />
            break
          case 'RADIO':
            questionInput = <RadioInput id={id} />
            break
          case 'SHORT_ANSWER':
            questionInput = <ShortAnswerInput id={id} />
            break
          case 'LONG_ANSWER':
            questionInput = <LongAnswerInput id={id} />
            break
          case 'RADIO_GRID':
            questionInput = <RadioGridInput id={id} />
            break
          case 'CHECKBOX_GRID':
            questionInput = <CheckboxGridInput id={id} />
            break
          case 'DROPDOWN':
            questionInput = <DropdownInput id={id} />
            break
          case 'LINEAR':
            questionInput = <LinearGrid id={id} />
            break
        }

        if (!questionInput) {
          return null
        }

        return (
          <QuestionContainer key={id}>
            <QuestionLabel>{field.label}</QuestionLabel>
            {questionInput}
            <QuestionHelp>{field.description}</QuestionHelp>
          </QuestionContainer>
        )
      })}
    </div>
  )
}

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const methods = useGoogleForm({ form })
  const onSubmit = async (data) => {
    console.log('>>> Here is the data', data)
    await methods.submitToGoogleForms(data)
    alert('Form submitted with success!')
  }

  console.log('>>> Here are the errors!!!', methods.formState.errors)

  return (
    <>
      <div className={styles.btnwrapper}>
        <button className={styles.modalopenbtn} onClick={() => setModalOpen(true)}>
          모달 열기
        </button>
      </div>
      {
        modalOpen &&
        <div className={styles.modalcontainer} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={styles.modalcontent}>
            <p>리액트로 모달 구현하기</p>
            <GoogleFormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(onSubmit)}>
                {form.title && (
                  <>
                    <h1>{form.title}</h1>
                    {form.description && (
                      <p style={{ fontSize: '.8rem' }}>{form.description}</p>
                    )}
                  </>
                )}
                <Questions />
                <button type='submit'>Submeter</button>
              </Form>
            </GoogleFormProvider>
            <button className={styles.modalclosebtn} onClick={() => setModalOpen(false)}>
              모달 닫기
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default App;