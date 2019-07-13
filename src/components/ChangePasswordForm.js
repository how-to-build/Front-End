import React from 'react';
import { Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ChangePasswordForm = props => {
    return (
        <Card className="col-md-5 col-sm-10 mx-auto mb-4">
            <CardBody>
                <CardTitle><h1>Change Password</h1></CardTitle>
                <Form>
                    <FormGroup>
                        <Label for="previous-password">Previous Password</Label>
                        <Input type="password" name="previous-password" placeholder="Previous password..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="new-password">New Password</Label>
                        <Input type="password" name="new-password" placeholder="New password..." />
                    </FormGroup>
                    <Button color="secondary">Submit</Button>{' '}
                    <Button color="danger" onClick={props.handleClick}>Cancel</Button>
                </Form>
            </CardBody>
        </Card>
    );
}

export default ChangePasswordForm;