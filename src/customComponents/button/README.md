# Custom Button

## Usage

Button takes in up to 4 arguments:

[_] btnClass
[_] text
[_] type
[_] handleClick

- btnClass
  -> 'big', 'primary', 'secondary', 'destructive'

- text
  -> Text to display between BUTTON tags

- type
  -> 'submit' to handle form
  -> other types need a handleClick CB fxn.

- handleClick
  -> Make sure callback function is passed to BUTTON if NOT a submit.

## Examples

### btnClass

    <Button btnClass='big' text='+ add new item' />
    <Button btnClass='big' text='button primary (l)' />
    <Button btnClass='primary' text='button primary (s)' />
    <Button btnClass='secondary' text='button secondary' />
    <Button btnClass='destructive' text='button destructive' />
