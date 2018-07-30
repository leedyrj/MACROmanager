import React, { Component } from "react"
import { Form, Field, Label, Control, Input, Icon, Help, Select, TextArea, Checkbox, Radio, Button } from 'bloomer'

export default class HomeForm extends Component {
    render() {
        return (
            <React.Fragment>
                <Field>
                    <Label>Name</Label>
                    <Control>
                        <Input type="text" placeholder='Text Input' />
                    </Control>
                </Field>

                <Field>
                    <Label>Username</Label>
                    <Control hasIcons>
                        <Input isColor='success' placeholder='Text Input' value='bloomer' />
                        <Icon isSize='small' isAlign='left'>
                            <span className="fa fa-user" aria-hidden="true" />
                        </Icon>
                        <Icon isSize='small' isAlign='right'>
                            <span className="fa fa-check" aria-hidden="true" />
                        </Icon>
                    </Control>
                    <Help isColor='success'>This username is available</Help>
                </Field>

                <Field>
                    <Label>Select:</Label>
                    <Control>
                        <Select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </Select>
                    </Control>
                </Field>

                <Field>
                    <Label>Message</Label>
                    <Control>
                        <TextArea placeholder={'<TextArea />'} />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Checkbox> I agree </Checkbox>
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Radio name="question"> Yes </Radio>
                        <Radio name="question"> No </Radio>
                    </Control>
                </Field>

                <Field isGrouped>
                    <Control>
                        <Button isColor='primary'>Submit</Button>
                    </Control>
                    <Control>
                        <Button isLink>Cancel</Button>
                    </Control>
                </Field>
            </React.Fragment>
        )
    }
}

