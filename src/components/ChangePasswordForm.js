import React from 'react';
import { Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ChangePasswordForm = props => {
    return (
        <Card className="col-md-5 col-sm-10 mx-auto mb-4">
            <CardBody>
                <CardTitle><h1>Change Password</h1></CardTitle>
                <Form>
                    <FormGroup>
                        <Label for="current-password">Username</Label>
                        <Input type="password" name="current-password" placeholder="Current password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="new-password">New Password</Label>
                        <Input type="password" name="new-password" placeholder="New password" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="submit" />
                    </FormGroup>
                    <Button color="danger" onClick={props.handleClick}>Cancel</Button>
                </Form>
            </CardBody>
        </Card>
    );
}

export default ChangePasswordForm;