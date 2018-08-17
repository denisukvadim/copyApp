import React from 'react';
import { Button, Container, Form, FormGroup, Label, Col, Input } from 'reactstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import './index.css';


export default class About extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
            value: ''
            }
    }

    handleChange (e) {
        this.setState({value: e.target.value});
        
    }
    copyToClipboard() {
        var copyText = document.getElementById("exampleText");
        copyText.select();
        document.execCommand("copy");
        if (false == document.execCommand('copy')) {
            // Logic for handling the copy functionality in some other way
            NotificationManager.error('Помилка', 'Щось не вийшло скопіювати, скачай нормальний браузер!', 5000, () => {
                alert('callback');
            });
        }else
        {
            NotificationManager.success('Good job', 'Text copied to clipboard');
        }
    }
    render() {
        return (
            <Container className='main-block'>
            <NotificationContainer/>
                <Form>
                    <FormGroup row>
                        <Label for="exampleText" md={12} sm={12}>Вводь текст</Label>
                        <Col  md={12}>
                            <Input bsSize='lg' rows='12' value={this.state.value} onChange={this.handleChange.bind(this)}  type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                </Form>
                <Button size="lg" color="primary" onClick={this.copyToClipboard}>Copy to clipboard</Button>
            </Container>
        )
    }
}