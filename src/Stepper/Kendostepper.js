import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { TextArea } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
const textAreaValidator = value => !value ? "Please enter a text." : "";
const FormTextArea = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    type,
    optional,
    max,
    value,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hindId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
        <div className={'k-form-field-wrap'}>
          <TextArea valid={valid} type={type} id={id} disabled={disabled} maxlength={max} rows={4} ariaDescribedBy={`${hindId} ${errorId}`} {...others} />
          <Hint direction={'end'} style={{
        position: 'absolute',
        right: 0
      }}>{value.length} / {max}</Hint>
          {showHint && <Hint id={hindId}>{hint}</Hint>}
          {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </div>
      </FieldWrapper>;
};
export const Steppers = () => {
  const max = 200;
  const handleSubmit = dataItem => alert(JSON.stringify(dataItem, null, 2));
  return <Form initialValues={{
    sendInvitation: ''
  }} onSubmit={handleSubmit} render={formRenderProps => <FormElement style={{
    width: 250,
    position: 'absolute'
  }}>
            <fieldset className={'k-form-fieldset'}>
              <Field id={'sendInvitation'} name={'sendInvitation'} label={'Send Invitation:'} max={max} value={formRenderProps.valueGetter('sendInvitation')} hint={'Hint: Enter your text here'} component={FormTextArea} validator={textAreaValidator} />
              <div className="k-form-buttons k-justify-content-end">
                <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                  Send
                </Button>
              </div>
            </fieldset>
          </FormElement>} />;
};
// ReactDOM.render(<App />, document.querySelector('my-app'));